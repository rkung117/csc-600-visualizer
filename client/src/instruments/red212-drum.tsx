// 3rd party library imports
import * as Tone from 'tone';
//import classNames from 'classnames';
//import { List, Range } from 'immutable';
//import React from 'react';

// project imports
import { Instrument } from '../Instruments';
import bassImage from "../img/bass.png";
import crashImage from "../img/crash.png";
import hatImage from "../img/hat.png";
import snareImage from "../img/snare.png";
import tomImage from "../img/tom.png";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

 function Drum(): JSX.Element {
    const note = new Tone.Sampler({
      urls: {
         C1: "bass1.wav",
         D2: "crash1.wav",
         E3: "hat1.wav",
         F4: "snare1.wav",
         G5: "tom1.wav",
      },
      baseUrl: "http://localhost:3000/"
    }).toDestination();
  
    return (
      <div>
        <div className ="drum-container" style={{marginLeft: "6rem" }}>
          <img
             className="bass"
             onMouseDown={ () => {
               note.triggerAttackRelease("C1", "10n");  
             }}
             src={bassImage}
             alt="bass"
        />
        <img
             className="crash"
             onMouseDown={ () => {
               note.triggerAttackRelease("D2", "10n");  
             }}
             src={crashImage}
             alt="crash"
        />
        <img
             className="hat"
             onMouseDown={ () => {
               note.triggerAttackRelease("E3", "10n");  
             }}
             src={hatImage}
             alt="hat"
        />
        <img
             className="snare"
             onMouseDown={ () => {
               note.triggerAttackRelease("F4", "10n");  
             }}
             src={snareImage}
             alt="snare"
        />
        <img
             className="tom"
             onMouseDown={ () => {
               note.triggerAttackRelease("G5", "10n");  
             }}
             src={tomImage}
             alt="tom"
       
        />
        </div>
      </div>
    );
  }
  
  export const DrumInstrument = new Instrument ("Drum", Drum);