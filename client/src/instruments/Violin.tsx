// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface PianoKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

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
        <div className ="xylophone-container" style={{marginLeft: "6rem" }}>
          <img
             className="C1red"
             onMouseDown={ () => {
               note.triggerAttackRelease("C1", "10n");
             }}
             src={C1red}
             alt="red"
        />
        <img
             className="Dorange"
             onMouseDown={ () => {
               note.triggerAttackRelease("D2", "10n");
             }}
             src={Dorange}
             alt="orange"
        />
        <img
             className="Eyellow"
             onMouseDown={ () => {
               note.triggerAttackRelease("E3", "10n");
             }}
             src={Eyellow}
             alt="yellow"
        />
        <img
             className="Fgreen"
             onMouseDown={ () => {
               note.triggerAttackRelease("F5", "10n");
             }}
             src={Fgreen}
             alt="green"
        />
        <img
             className="Gbluegreen"
             onMouseDown={ () => {
               note.triggerAttackRelease("G5", "10n");
             }}
             src={Gbluegreen}
             alt="bluegreen"
        />
        <img
             className="Alightblue"
             onMouseDown={ () => {
               note.triggerAttackRelease("A6", "10n");
             }}
             src={Alightblue}
             alt="lightblue"
        />
        <img
             className="Bblue"
             onMouseDown={ () => {
               note.triggerAttackRelease("B7", "10n");
             }}
             src={Bblue}
             alt="blue"
        />
        <img
             className="C2purple"
             onMouseDown={ () => {
               note.triggerAttackRelease("C2", "10n");
             }}
             src={C2purple}
             alt="purple"
        />
        </div>
      </div>
    );
  }

export const ViolinInstrument = new Instrument('Violin', Violin);
