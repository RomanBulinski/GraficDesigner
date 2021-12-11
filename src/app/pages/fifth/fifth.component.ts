import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})

export class FifthComponent implements OnInit {
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

  text = 'a';
  fontSize = 1200;
  fontFamily = 'serif';

  ngOnInit(): void {
    this.context = this.canvasBig.nativeElement.getContext('2d');
    this.canvasBig.nativeElement.width = this.WIDTH;
    this.canvasBig.nativeElement.height = this.HEIGHT;
    // this.context.fillStyle = 'white';

    this.draw();
  }

  draw(): void {

    const cell = 20;
    const cols = Math.floor( this.WIDTH / cell);
    const rows = Math.floor( this.HEIGHT / cell);
    const numCell = cols * rows;

    this.typeContext = this.canvasSmall.nativeElement.getContext('2d');
    this.canvasSmall.nativeElement.width = cols;
    this.canvasSmall.nativeElement.height = rows;

    this.fontSize = cols;
    console.log('111111111111111');
    console.log(this.fontSize);

    this.typeContext.fillStyle = 'black';
    this.typeContext.font = this.fontSize + 'px ' + this.fontFamily;
    this.typeContext.textBaseline = 'top';

    const metrics = this.typeContext.measureText(this.text);
    console.log(metrics);
    const mx = metrics.actualBoundingBoxLeft * -1;
    const my = metrics.actualBoundingBoxAscent * -1;
    const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
    const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    const tx =  (cols - mw) * 0.5 - mx;
    const ty =  (rows - mh) * 0.5 - my;

    this.typeContext.save();
    this.typeContext.translate(tx,  ty);
    // this.typeContext.beginPath();
    // this.typeContext.rect(mx, my, mw, mh);
    // this.typeContext.stroke();
    this.typeContext.fillText(this.text, 0, 0);
    this.typeContext.restore();

    const typeData = this.typeContext.getImageData(0, 0, cols, rows).data;
    console.log('22222222222222222222');
    console.log(typeData);
    console.log(typeData[3603]);
    console.log(typeData[3606]);

    for (let i = 0; i < numCell; i++) {
      const col = i % cols;
      const row = Math.floor( i / cols);
      const x = col * cell;
      const y = row * cell;
      console.log('-');
      console.log(x, y);

      const r = typeData[(i * 4) + 3];
      const g = typeData[(i * 4) + 3];
      const b = typeData[(i * 4) + 3];
      const a = typeData[(i * 4) + 4];
      console.log(i * 4 + 1, i * 4 + 2, i * 4 + 3);
      console.log( r, g, b);

      this.context.fillStyle = 'rgb( ' + r + ',' + g + ', ' + b + ' )';

      this.context.save();
      this.context.translate(x,  y);
      this.context.translate(cell * 0.5,  cell * 0.5);
      // this.context.fillRect(0, 0, cell, cell);
      this.context.beginPath();
      this.context.arc(0, 0, cell * 0.5, 0, Math.PI * 2);
      this.context.fill();
      this.context.restore();
    }
  }
}
