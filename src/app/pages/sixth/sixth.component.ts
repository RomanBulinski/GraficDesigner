import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})

export class SixthComponent implements OnInit {
  constructor() {
  }

  WIDTH = 1080;
  HEIGHT = 1080;
  private context: CanvasRenderingContext2D;
  private typeContext: CanvasRenderingContext2D;

  @ViewChild('canvasSmall', {static: true})
  canvasSmall: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvasBig', {static: true})
  canvasBig: ElementRef<HTMLCanvasElement>;

  text = 'W';
  fontSize = 1200;
  fontFamily = 'serif';

  ngOnInit(): void {
    this.context = this.canvasBig.nativeElement.getContext('2d');
    this.canvasBig.nativeElement.width = this.WIDTH;
    this.canvasBig.nativeElement.height = this.HEIGHT;
    this.context.fillStyle = 'black';
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);

    this.draw();
  }

  draw(): void {

    const cell = 20;
    const cols = Math.floor(this.WIDTH / cell);
    const rows = Math.floor(this.HEIGHT / cell);
    const numCell = cols * rows;

    this.typeContext = this.canvasSmall.nativeElement.getContext('2d');
    this.canvasSmall.nativeElement.width = cols;
    this.canvasSmall.nativeElement.height = rows;

    this.fontSize = cols;

    this.typeContext.fillStyle = 'black';
    this.typeContext.font = this.fontSize + 'px ' + this.fontFamily;
    this.typeContext.textBaseline = 'top';

    const metrics = this.typeContext.measureText(this.text);
    console.log(metrics);
    const mx = metrics.actualBoundingBoxLeft * -1;
    const my = metrics.actualBoundingBoxAscent * -1;
    const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
    const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    const tx = (cols - mw) * 0.5 - mx;
    const ty = (rows - mh) * 0.5 - my;

    this.typeContext.save();
    this.typeContext.translate(tx, ty);
    this.typeContext.fillText(this.text, 0, 0);
    this.typeContext.restore();

    const typeData = this.typeContext.getImageData(0, 0, cols, rows).data;

    for (let i = 0; i < numCell; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = col * cell;
      const y = row * cell;

      const r = typeData[(i * 4) + 3];
      const g = typeData[(i * 4) + 3];
      const b = typeData[(i * 4) + 3];
      const a = typeData[(i * 4) + 4];

      const glyph = this.getGlyph(r);

      this.context.font = cell * 2 + 'px ' + this.fontFamily;
      if(Math.random() < 0.1) {
        this.context.font = cell * 6 + 'px ' + this.fontFamily;
      }

      this.context.fillStyle = 'white';

      this.context.save();
      this.context.translate(x, y);
      this.context.translate(cell * 0.5, cell * 0.5);
      this.context.fillText(glyph, 0, 0);
      this.context.restore();
    }
  }

  private getGlyph(r): string {
    if (r < 50) {
      return '';
    }
    if (r < 100) {
      return '.';
    }
    if (r < 150) {
      return '-';
    }
    if (r < 200) {
      return '+';
    }
    const glyphs = '_=/'.split('');
    const item = glyphs[Math.floor(Math.random() * glyphs.length)];
    return item;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    this.text = event.key;
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    this.draw();
  }

}
