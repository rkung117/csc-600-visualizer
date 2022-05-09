// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";
let dot: any[] = [];

export const Wave = new Visualizer(
  "Wave",
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0);
    p5.background('#301934');

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    //p5.translate(width / 2.5, height / 2);
    let space = -0.001;

    const values = analyzer.getValue();
    p5.beginShape();

    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 2, 0, width);
      const y = height / 2 + amplitude * height;
      const angleX = p5.map(i, 0, x, 1 * Math.PI, 3 * Math.PI);
     const angleY = p5.map(i, 0, y, 1 * Math.PI, 3 * Math.PI);
     const angle = angleX * (x / width) + angleY * (y / height);

      const myAngleX =
        width / 2 - (width / 2) * p5.cos(1 * Math.PI * amplitude + angle);
      const myAngleY =
        height / 2 -
        (height / 2) * p5.sin(1 * Math.PI * 1 * amplitude + angle);
       
      p5.ellipse(myAngleX, myAngleY, 3); 
      p5.rotate(space); 
    }
    
    space += -0.005;
    p5.endShape();
  
  class Sprinklers {
    pos: P5.Vector;
    vel: P5.Vector;
    acc: number;
    w: number;
    color: number[];
    constructor() {
      this.pos = p5.createVector(
        Math.random() * window.innerWidth +
          Math.random() * -window.innerWidth,
        Math.random() * window.innerHeight +
          Math.random() * -window.innerHeight
      );
      this.vel = p5.createVector(0, 0);
      this.acc = getRandomInt(0.1, 0.001);
      this.w = getRandomInt(6, 20);
      this.color = [
        getRandomInt(0, 400),
        getRandomInt(0, 400),
        getRandomInt(0, 400),
      ];
    }
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }

    edges() {
      if (
        this.pos.x < -width ||
        this.pos.x > width ||
        this.pos.y < -height ||
        this.pos.y > height
      ) {
        return true;
      } else {
        return false;
      }
    }

    draw() {
      dot.push(new Sprinklers());
      dot.forEach((d, index) => {
        if (!dot[index].edges()) {
          d.update();
          d.show();
        }
      });
    }
    show() {
      p5.noStroke();
      p5.fill(this.color);
      p5.circle(this.pos.x, this.pos.y, this.w);
    }
  }
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let d = new Sprinklers();
  d.draw();
}
);