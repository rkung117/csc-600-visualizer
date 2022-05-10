// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const ColorVisualizer = new Visualizer(
  'rkung117-Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      // how to make color change smoother?
      const amplitude = values[i] as number;
      const radius = 50 + amplitude * width/1.5;
      const red = amplitude;
      const green = radius + amplitude;
      const blue = i * radius/3;
      
      p5.fill(red,green,blue);
      p5.circle(width / 2 , height / 2 , radius);   
    }
    p5.endShape();
  },
);
