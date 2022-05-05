// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import C4pic from '../img/C4.png';
import D4pic from '../img/D4.png'; 
import E4pic from '../img/E4.png'; 
import F4pic from '../img/F4.png'; 
import G4pic from '../img/G4.png'; 

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

function Violin(): JSX.Element {
    const note = new Tone.Sampler({
      urls: {
        C1: "Violin_C4.mp3",
        D2: "Violin_D4.mp3",
        E3: "Violin_E4.mp3",
        F4: "Violin_F4.mp3",
        G5: "Violin_G4.mp3",
      },
      baseUrl: "http://localhost:3000/"
    }).toDestination();
  return (
      <div>
        <div className ="violin-container" style={{marginLeft: "6rem" }}>
          <img
             className="C4pic"
             onMouseDown={ () => {
               // note.triggerAttack("note", "time", velocity); velocity = volume for example velocity = 0.5 means half volume
               note.triggerAttack("C1", "+0", 2);
             }}
             src={C4pic}
             alt="red"
        />
        <img
             className="D4pic"
             onMouseDown={ () => {
               note.triggerAttack("D2", "+0", 2);
             }}
             src={D4pic}
             alt="orange"
        />
        <img
             className="E4pic"
             onMouseDown={ () => {
               note.triggerAttack("E3", "+0", 2);
             }}
             src={E4pic}
             alt="yellow"
        />
        <img
             className="F4pic"
             onMouseDown={ () => {
               note.triggerAttack("F4", "+0", 2);
             }}
             src={F4pic}
             alt="green"
        />

        <img
             className="G4pic"
             onMouseDown={ () => {
               note.triggerAttack("G5", "+0", 2);
             }}
             src={G4pic}
             alt="bluegreen"
        />
        </div>
      </div>
    );
  }

export const ViolinInstrument = new Instrument('Violin', Violin);
