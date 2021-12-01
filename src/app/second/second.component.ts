import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SquareComponent} from '../square/square.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor() { }

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
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
    square2.draw(59, 0, 10);

    const square3 = new SquareComponent(this.ctx);
    square2.draw(0, 29, 10);

    const square4 = new SquareComponent(this.ctx);
    square2.draw(59, 29, 10);
  }

  drawChessboard(): void {

  }

}
