import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import SimplexNoise from 'simplex-noise';


@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  constructor(private ngZone: NgZone) {
  }

  WIDTH = 1080;
  HEIGHT = 1080;
  private ctx: CanvasRenderingContext2D;

  cols = 10;
  rows = this.cols;
  scaleFactor = 20;
  timeout = 200;
  angleFactor = 0.3;
  noiseFactor = 1;

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.width = this.WIDTH;
    this.canvas.nativeElement.height = this.HEIGHT;
    this.ctx.fillStyle = 'white';

    // this.draw();
  }


  draw(): void {

    // this.ngZone.runOutsideAngular(() => {
    //   const loop = () => {

    setInterval(() => {

      const simplex3 = new SimplexNoise(Math.random);

      const gridw = this.WIDTH * 0.8;
      const gridh = this.HEIGHT * 0.8;
      const cellw = gridw / this.cols;
      const cellh = gridh / this.cols;
      const marginX = (this.WIDTH - gridw) * 0.5;
      const marginY = (this.HEIGHT - gridh) * 0.5;

      const numCells = this.cols * this.cols;

      this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);

      for (let i = 0; i < numCells; i++) {

        const col = i % this.cols;
        const row = Math.floor(i / this.cols);

        const x = col * cellw;
        const y = row * cellh;

        const w = cellw * 0.8;
        const h = cellh * 0.8;

        const n = simplex3.noise2D(x * 0.001, y * 0.001);
        const n0 = simplex3.noise2D(0 * 0.001, 0 * 0.001);

        const angle = n * Math.PI * this.angleFactor;
        const scale = (n + 1) / 2 * this.scaleFactor;

        this.ctx.save();

        this.ctx.translate(x, y);
        this.ctx.translate(marginX, marginY);
        this.ctx.translate(cellw * 0.5, cellh * 0.5);
        this.ctx.rotate(angle);

        this.ctx.lineWidth = scale;

        this.ctx.beginPath();
        this.ctx.moveTo(w * -0.5, 0);
        this.ctx.lineTo(w * 0.5, 0);
        this.ctx.stroke();

        this.ctx.restore();
      }
    }, this.timeout);

    //     requestAnimationFrame(loop);
    //   };
    //   requestAnimationFrame(loop);
    // });

  }

}
