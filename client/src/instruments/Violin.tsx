// 3rd party library imports
import * as Tone from 'tone';
//import classNames from 'classnames';
//import { List, Range } from 'immutable';
//import React from 'react';

// project imports
import { Instrument } from '../Instruments';
import ViolinC4Image from "../img/ViolinC4.png";
import ViolinD4Image from "../img/ViolinD4.png";
import ViolinE4Image from "../img/ViolinE4.png";
import ViolinF4Image from "../img/ViolinF4.png";
import ViolinG4Image from "../img/ViolinG4.png";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

function Violin(): JSX.Element {
  const note = new Tone.Sampler({
    urls: {
      C1: "ViolinC4.mp3",
      D2: "ViolinD4.mp3",
      E3: "ViolinE4.mp3",
      F4: "ViolinF4.mp3",
      G5: "ViolinG4.mp3",
    },
    baseUrl: "http://localhost:3000/"
  }).toDestination();
  
  return (
    <div>
      <div className ="violin-container" style={{marginLeft: "6rem" }}>
        <img
           className="ViolinC4"
           onMouseDown={ () => {
             note.triggerAttackRelease("C1", "10n");  
           }}
           src={ViolinC4Image}
           alt="red"
      />
      <img
           className="ViolinD4"
           onMouseDown={ () => {
             note.triggerAttackRelease("D2", "10n");  
           }}
           src={ViolinD4Image}
           alt="orange"
      />
      <img
           className="ViolinE4"
           onMouseDown={ () => {
             note.triggerAttackRelease("E3", "10n");  
           }}
           src={ViolinE4Image}
           alt="yellow"
      />
      <img
           className="ViolinF4"
           onMouseDown={ () => {
             note.triggerAttackRelease("F4", "10n");  
           }}
           src={ViolinF4Image}
           alt="green"
      />
      <img
           className="ViolinG4"
           onMouseDown={ () => {
             note.triggerAttackRelease("G5", "10n");  
           }}
           src={ViolinG4Image}
           alt="bluegreen"
     
      />
      </div>
    </div>
  );
}

export const ViolinInstrument = new Instrument ("Violin", Violin);