// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import Coin from '../img/Coin.png';
import Enter from '../img/Enter.png';
import Finished from '../img/Finished.png';
import Game from '../img/Game-Over.jpg';
import Jump from '../img/Jump.png';
import Power from '../img/Power up.png';
import Weapon from '../img/Weapon.jpg';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

 function Mario(): JSX.Element {
  const note = new Tone.Sampler({
    urls: {
      C1: "Coin.mp3",
      D2: "Enter.mp3",
      E3: "Finished.mp3",
      F4: "Game.mp3",
      G5: "Jump.mp3",
      A6: "Power.mp3",
      B7: "Weapon.mp3",
    },
    baseUrl: "http://localhost:3000/"
  }).toDestination();
return (
    <div>
      <div className ="Mario-container" style={{marginLeft: "6rem" }}>
        <img
           className="Coin"
           onMouseDown={ () => {
             note.triggerAttackRelease("C1", "3n");
           }}
           src={Coin}
           alt="red"
           height={175}
           width = {175}
      />
      <img
           className="Dorange"
           onMouseDown={ () => {
             note.triggerAttackRelease("D2", "3n");
           }}
           src={Enter}
           alt="orange"
           height={175}
           width = {175}
      />
      <img
           className="Eyellow"
           onMouseDown={ () => {
             note.triggerAttackRelease("E3", "1n");
           }}
           src={Finished}
           alt="yellow"
           height={175}
           width = {175}
      />
      <img
           className="Fgreen"
           onMouseDown={ () => {
             note.triggerAttackRelease("F4", "1n");
           }}
           src={Game}
           alt="green"
           height={175}
           width = {175}
      />
      <img
           className="Gbluegreen"
           onMouseDown={ () => {
             note.triggerAttackRelease("G5", "1n");
           }}
           src={Jump}
           alt="bluegreen"
           height={175}
           width = {175}
      />
      <img
           className="Alightblue"
           onMouseDown={ () => {
             note.triggerAttackRelease("A6", "1n");
           }}
           src={Power}
           alt="lightblue"
           height={175}
           width = {175}
      />
      <img
           className="Bblue"
           onMouseDown={ () => {
             note.triggerAttackRelease("B7", "1n");
           }}
           src={Weapon}
           alt="blue"
           height={175}
           width = {175}
      />
      </div>
    </div>
  );
}

export const MarioInstrument = new Instrument ("Super Mario Bros.", Mario);