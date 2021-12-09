import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import SimplexNoise from 'simplex-noise';
import {makeNoise2D} from 'open-simplex-noise';


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

    this.draw();
  }


  draw(): void {

    // this.ngZone.runOutsideAngular(() => {
    //   const loop = () => {

    // setInterval(() => {

    const simplex2 = new SimplexNoise('Seed' );
    const noise2D = makeNoise2D( Math.random() );
    //   const noise2D = makeNoise2D( Date.now)
    const simplex3 = new SimplexNoise('Seed' );

    const gridw = this.WIDTH * 0.8;
    const gridh = this.HEIGHT * 0.8;
    const cellw = gridw / this.cols;
    const cellh = gridh / this.cols;
    const marginX = (this.WIDTH - gridw) * 0.5;
    const marginY = (this.HEIGHT - gridh) * 0.5;


    this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);

    const numCells = this.cols * this.cols;

    for (let i = 0; i < numCells; i++) {
      console.log(i);
      console.log(simplex3);


      const col = i % this.cols;
      const row = Math.floor(i / this.cols);

      const x = col * cellw;
      const y = row * cellh;

      const w = cellw * 0.8;
      const h = cellh * 0.8;

      // const n = Math.random();
      const n = simplex3.noise2D(x, y ) ;
      // const n = noise2D(x, y);
      console.log(n);

      // const angle = n * Math.PI * this.angleFactor;
      const angle = n * Math.PI * 0.2;
      const scale = (n + 1) / 2 * this.scaleFactor;
      // const scale = n  * this.scaleFactor;

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


    // }, this.timeout);


    //     requestAnimationFrame(loop);
    //   };
    //   requestAnimationFrame(loop);
    // });

  }

}
