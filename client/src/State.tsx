// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { ViolinInstrument } from './instruments/rkung117';
import { WaveformVisualizer } from './visualizers/Waveform';

import { XylophoneInstrument } from './instruments/reechevarriaXylophone';
import { Wave } from './visualizers/reechevarriaWave';
=======
import { ColorVisualizer } from './visualizers/rkung117';


/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */

const instruments = List([PianoInstrument, XylophoneInstrument, ViolinInstrument]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */

const visualizers = List([WaveformVisualizer, Wave, ColorVisualizer]);    // similar to Visualizer[]

/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});