// 3rd party library imports
import * as Tone from 'tone';
//import classNames from 'classnames';
//import { List, Range } from 'immutable';
//import React, {useState} from 'react';

// project imports
import { Instrument } from '../Instruments';
import C1red from "../img/C1red.png";
import Dorange from "../img/Dorange.png";
import Eyellow from "../img/Eyellow.png";
import Fgreen from "../img/Fgreen.png";
import Gbluegreen from "../img/Gbluegreen.png";
import Alightblue from "../img/Alightblue.png";
import Bblue from "../img/Bblue.png";
import C2purple from "../img/C2purple.png";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

function Xylophone(): JSX.Element {
  const note = new Tone.Sampler({
    urls: {
      C1: "C1.mp3",
      D2: "D.mp3",
      E3: "E.mp3",
      F4: "F.mp3",
      G5: "G.mp3",
      A6: "A.wav",
      B7: "B.mp3",
      C2: "C2.mp3",
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

export const XylophoneInstrument = new Instrument ("Xylophone", Xylophone);