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
        C1: "A3.mp3",
        D2: "B3.mp3",
        E3: "C3.mp3",
        F4: "C4.mp3",
        G5: "C7.mp3",
      },
      baseUrl: "http://localhost:3000/"
    }).toDestination();
  return (
      <div>
        <div className ="violin-container" style={{marginLeft: "6rem" }}>
          <img
             className="C4pic"
             onMouseDown={ () => {
               note.triggerAttackRelease("C1", "3n");
             }}
             src={C4pic}
             alt="red"
        />
        <img
             className="D4pic"
             onMouseDown={ () => {
               note.triggerAttackRelease("B3", "10n");
             }}
             src={D4pic}
             alt="orange"
        />
        <img
             className="E4pic"
             onMouseDown={ () => {
               note.triggerAttackRelease("G6", "10n");
             }}
             src={E4pic}
             alt="yellow"
        />
        <img
             className="F4pic"
             onMouseDown={ () => {
               note.triggerAttackRelease("C7", "10n");
             }}
             src={F4pic}
             alt="green"
        />

        {/* why does only specific notes work (A6, B6, G6, C7, G7) */}
        <img
             className="G4pic"
             onMouseDown={ () => {
               note.triggerAttackRelease("G7", "10n");
             }}
             src={G4pic}
             alt="bluegreen"
        />
        </div>
      </div>
    );
  }

export const ViolinInstrument = new Instrument('Violin', Violin);
