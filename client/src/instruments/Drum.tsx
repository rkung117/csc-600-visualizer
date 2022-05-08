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
         C4: "bass1.wav",
         C5: "crash1.wav",
         C6: "hat1.wav",
         C7: "snare1.wav",
         G3: "tom1.wav",
      },
      baseUrl: "http://localhost:3000/"
    }).toDestination();
  
    return (
      <div>
        <div className ="drum-container" style={{marginLeft: "6rem" }}>
          <img
             className="bass"
             onMouseDown={ () => {
               note.triggerAttackRelease("C4", "10n");  
             }}
             src={bassImage}
             alt="bass"
        />
        <img
             className="crash"
             onMouseDown={ () => {
               note.triggerAttackRelease("C5", "10n");  
             }}
             src={crashImage}
             alt="crash"
        />
        <img
             className="hat"
             onMouseDown={ () => {
               note.triggerAttackRelease("C6", "10n");  
             }}
             src={hatImage}
             alt="hat"
        />
        <img
             className="snare"
             onMouseDown={ () => {
               note.triggerAttackRelease("C7", "10n");  
             }}
             src={snareImage}
             alt="snare"
        />
        <img
             className="tom"
             onMouseDown={ () => {
               note.triggerAttackRelease("G3", "10n");  
             }}
             src={tomImage}
             alt="tom"
       
        />
        </div>
      </div>
    );
  }
  
  export const DrumInstrument = new Instrument ("Drum", Drum);