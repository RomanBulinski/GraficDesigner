import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SquareComponent} from '../square/square.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  width = 500;
  height = 500;

  constructor() {
  }

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.width = 500;
    this.canvas.nativeElement.height = 500;
  }

  animate(): void {
    this.ctx.fillStyle = 'red';
    const square = new SquareComponent(this.ctx);
    // square.draw(10, 1, 10);
    square.move(5, 10);
  }

  drawCorners(): void {
    this.ctx.fillStyle = 'blue';
    const square = new SquareComponent(this.ctx);
    square.draw(0, 0, 10);

    const square2 = new SquareComponent(this.ctx);
    square2.draw(49, 0, 10);

    const square3 = new SquareComponent(this.ctx);
    square2.draw(0, 29, 10);

    const square4 = new SquareComponent(this.ctx);
    square2.draw(49, 29, 10);
  }

  drawChessboard(): void {
    this.ctx.fillStyle = 'blue';
    let yPosition = 0;
    for (let j = 0; j < 5; j++) {
      let xPosition = 0;
      for (let i = 0; i < 5; i++) {
        new SquareComponent(this.ctx).draw(xPosition, yPosition, 10);
        xPosition = xPosition + 5;
      }
      yPosition = yPosition + 5;
    }
  }

  drawEmptySquares(): void {
    this.ctx.fillStyle = 'blue';
    const gap = 20;
    const startX = 10;
    const startY = 10;
    const width = 40;
    const height = 40;
    let positionY = startY;
    for (let j = 0; j < 5; j++) {
      let positionX = startX;
      for (let i = 0; i < 5; i++) {

        this.drawEmptySquare(positionX, positionY, i + 2, width, height);
        if (Math.random() > 0.5) {
          this.drawEmptySquare(positionX + 5, positionY + 5, i + 2, width - 10, height - 10);
        }
        positionX = startX + ((width + gap) * (i + 1));
      }
      positionY = startY + ((height + gap) * (j + 1));
    }
  }

  drawEmptySquare(posistionX: number, posisotionY: number, lineWidth: number, width: number, height: number): void {
    this.ctx.fillStyle = 'blue';
    this.ctx.lineWidth = lineWidth;
    this.ctx.beginPath();
    this.ctx.rect(posistionX, posisotionY, width, height);
    this.ctx.stroke();
  }


  drawCircles(): void {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = 'black';
    const x = this.width * 0.5;
    const y = this.height * 0.5;
    const w = this.width * 0.3;
    const h = this.height * 0.3;

    this.ctx.save();

    this.ctx.translate(x, y);
    this.ctx.rotate(0.3);

    this.ctx.beginPath();
    this.ctx.rect(-w * 0.5,  -h * 0.5, w, h);
    this.ctx.fill();

    this.ctx.restore();

  }

}
