import * as Tone from "tone";
import { RecursivePartial } from "tone/build/esm/core/util/Interface";
import { Instrument as ToneInstrument } from "tone/build/esm/instrument/Instrument";

type InstrumentGroup = "Synth" | "Bass" | "Drum" | "Percussion";

export type Instrument<Options> = {
  id: string;
  name: string;
  group: InstrumentGroup;
  create: (options?: Options) => ToneInstrument<any>;
  createPoly?: (options?: Options) => Tone.PolySynth;
};

const acidConfig = (
  cutoff: number,
  resonance: number
): RecursivePartial<Tone.MonoSynthOptions> => ({
  oscillator: {
    type: "sawtooth",
  },
  envelope: {
    attackCurve: "exponential",
    releaseCurve: "exponential",
    attack: 0.01,
    decay: 0.3,
    sustain: 0.5,
    release: 0.2,
  },
  filterEnvelope: {
    attackCurve: "exponential",
    releaseCurve: "exponential",
    attack: 0.01,
    decay: 0.3,
    sustain: 0.5,
    release: 1,
    baseFrequency: cutoff,
    exponent: 5,
  },
  filter: {
    frequency: cutoff,
    rolloff: -24,
    Q: resonance,
    type: "lowpass",
  },
  portamento: 0.02,
});

export const Acid: Instrument<{ cutoff: number; resonance: number }> = {
  id: "acid",
  name: "Acid",
  group: "Bass",
  create: (options) => {
    const cutoff = options?.cutoff || 600;
    const resonance = options?.resonance || 2.7;

    return new Tone.MonoSynth(acidConfig(cutoff, resonance));
  },
  createPoly: (options) => {
    const cutoff = options?.cutoff || 600;
    const resonance = options?.resonance || 2.7;

    return new Tone.PolySynth(Tone.MonoSynth, acidConfig(cutoff, resonance));
  },
};

const superSawConfig: RecursivePartial<Tone.SynthOptions> = {
  oscillator: {
    type: "fatsawtooth",
    count: 3,
    spread: 30,
  },
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.5,
    release: 0.4,
    attackCurve: "exponential",
  },
};

export const SuperSaw: Instrument<{}> = {
  id: "supersaw",
  name: "SuperSaw",
  group: "Synth",
  create: () => {
    return new Tone.Synth(superSawConfig);
  },
  createPoly: () => {
    return new Tone.PolySynth(Tone.Synth, superSawConfig);
  },
};

export const Kick: Instrument<{}> = {
  id: "kick",
  name: "Kick",
  group: "Drum",
  create: () => {
    return new Tone.MembraneSynth({
      envelope: {
        sustain: 0,
        attack: 0.02,
        decay: 0.8,
      },
      octaves: 10,
    });
  },
};

export const Snare: Instrument<{}> = {
  id: "snare",
  name: "Snare",
  group: "Drum",
  create: () => {
    return new Tone.NoiseSynth({
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0,
      },
    });
  },
};

export const HiHat: Instrument<{}> = {
  id: "hihat",
  name: "HiHat",
  group: "Drum",
  create: () => {
    return new Tone.MetalSynth({
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0,
      },
    });
  },
};

export const Kalimba: Instrument<{}> = {
  id: "kalimba",
  name: "Kalimba",
  group: "Percussion",
  create: () => {
    return new Tone.FMSynth({
      harmonicity: 8,
      modulationIndex: 2,
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 0.001,
        decay: 2,
        sustain: 0.1,
        release: 2,
      },
      modulation: {
        type: "square",
      },
      modulationEnvelope: {
        attack: 0.002,
        decay: 0.2,
        sustain: 0,
        release: 0.2,
      },
    });
  },
};

export const Marimba: Instrument<{}> = {
  id: "marimba",
  name: "Marimba",
  group: "Percussion",
  create: () => {
    return new Tone.Synth({
      oscillator: {
        partials: [1, 0, 2, 0, 3],
      },
      envelope: {
        attack: 0.001,
        decay: 1.2,
        sustain: 0,
        release: 1.2,
      },
    });
  },
};

export const Sin: Instrument<{}> = {
  id: "sin",
  name: "Sin",
  group: "Synth",
  create: () => {
    return new Tone.Synth({
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.1,
        release: 1.2,
      },
    });
  },
  createPoly: () => {
    return new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.1,
        release: 1.2,
      },
    });
  },
};

export const AllInstruments: Instrument<any>[] = [
  Sin,
  Acid,
  SuperSaw,
  Kick,
  Snare,
  HiHat,
  Kalimba,
  Marimba,
];

export const findInstrumentById = (id: string) =>
  AllInstruments.find((i) => i.id === id);
