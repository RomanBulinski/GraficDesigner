import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Agent} from '../../objects/agent';
import {Utils} from '../../objects/utils';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  WIDTH = 1080;
  HEIGHT = 1080;
  private ctx: CanvasRenderingContext2D;
  agents: Agent[] = [];

  constructor(private ngZone: NgZone) {
  }

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.width = this.WIDTH;
    this.canvas.nativeElement.height = this.HEIGHT;

    this.fillCanvas();

    for (let i = 0; i < 40; i++) {
      const x = Utils.randomRange(0, this.WIDTH);
      const y = Utils.randomRange(0, this.HEIGHT);
      this.agents.push(new Agent(x, y));
    }
  }

  drawPoint(): void {

    this.ngZone.runOutsideAngular(() => {
      const loop = () => {
        this.fillCanvas();

        for (let i = 0; i < this.agents.length; i++) {
          const agent = this.agents[i];
          for (let j = i + 1; j < this.agents.length; j++) {
            const otherAgent = this.agents[j];

            const dist = agent.pos.getDistance( otherAgent.pos);

            if (dist > 200) { continue; }

            this.ctx.lineWidth = Utils.mapRange(dist, 200, 0, 12, 1);

            this.ctx.beginPath();
            this.ctx.moveTo(agent.pos.x, agent.pos.y);
            this.ctx.lineTo(otherAgent.pos.x, otherAgent.pos.y);
            this.ctx.stroke();
          }
        }

        this.agents.forEach(agent => {
          agent.update();
          agent.draw(this.ctx);
          agent.bounce(this.WIDTH, this.HEIGHT);
        });

        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    });

  }

  private fillCanvas(): void {

    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
  }
}
