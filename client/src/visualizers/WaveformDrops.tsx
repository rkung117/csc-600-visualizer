// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";
let dot: any[] = [];

export const WaveformDropsVisualizer = new Visualizer(
  "WaveformDrops",
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
  

  
    
    p5.background('#191970');
    p5.angleMode("degrees");
   

  
    p5.stroke(600);
    p5.noFill();
    //p5.fill('191970');
    p5.translate(height / 1.0, height / 2);
    let space = 0.0;
    const values = analyzer.getValue();
    for (var t = -1; t <= 1; t += 2) {

     
      

      p5.beginShape();
      for (var i = 0; i <= 450; i += 10) {
        var index = Math.floor(p5.map(i, 0, 500, 0, values.length - 70));
        const amplitude = values[index] as number;
        var r = p5.map(amplitude, -1, 1, 360, 200) / 1.5;
        

        
      var x = r * Math.sin(i) * t;
      var y = r * Math.cos(i);
       
        p5.rotate(space);
        p5.vertex(y, x);
      }
      space += 0.0;
      p5.endShape();
  
    }
    class Dots {
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
   
        this.acc = getRandomInt(.05, 0.1);
        this.w = getRandomInt(30, 10);
        this.color = [
          getRandomInt(0, 255),
          getRandomInt(0, 255),
          getRandomInt(0, 255),
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
        dot.push(new Dots());
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
        p5.circle(this.pos.y, this.pos.x, this.w);
      }
    }
    function getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
    let d = new Dots();
    d.draw();
    
    

   
  }
);