import * as Tone from "tone";
import { Chord } from "../pianoroll/PianoRoll";
import { findInstrumentById } from "@/lib/instruments";

type PlayerSeq = {
  chords: Chord[];
  instrument: string;
  muted: boolean;
};

export type PlayerData = {
  bpm: number;
  sequences: PlayerSeq[];
};

class Player {
  private sequences: Tone.Part[] = [];
  public isPlaying = false;

  async play(data: PlayerData) {
    await Tone.start();

    this.sequences = data.sequences.map((seq) => this.createSeq(data.bpm, seq));

    this.sequences.forEach((s) => s.start());
    Tone.Transport.bpm.value = data.bpm;
    Tone.Transport.start("+0.1");
    this.isPlaying = true;
  }

  private createSeq(bpm: number, seq: PlayerSeq): Tone.Part {
    const instrument = findInstrumentById(seq.instrument)!;
    const isPoly = instrument.createPoly;
    const synth = instrument.createPoly
      ? (instrument.createPoly() as Tone.PolySynth)
      : instrument.create();

    synth.debug = true;

    synth.toDestination();

    const sequence = new Tone.Part((time, chord) => {
      if (isPoly) {
        (synth as Tone.PolySynth).triggerAttackRelease(
          chord.midiNoteNumber.map((n) =>
            Tone.Frequency(n, "midi").toFrequency()
          ),
          chord.duration * chord.legato,
          time,
          chord.velocity
        );
      } else {
        if (synth.toString() == "NoiseSynth") {
          if (chord.midiNoteNumber)
            synth.triggerAttack(
              //Tone.Frequency(chord.midiNoteNumber[0], "midi").toFrequency(),
              time,
              chord.velocity
            );
        } else {
          synth.triggerAttackRelease(
            Tone.Frequency(chord.midiNoteNumber[0], "midi").toFrequency(),
            chord.duration * chord.legato,
            time,
            chord.velocity
          );
        }
      }
    }, this.buildSeq(bpm, seq.chords));
    sequence.loop = true;
    sequence.loopEnd = this.calcLoopLength(bpm, seq.chords);
    sequence.mute = seq.muted;

    return sequence;
  }

  update(data: PlayerData) {
    Tone.Transport.bpm.value = data.bpm;

    data.sequences.forEach((seq, i) => {
      if (i < this.sequences.length) {
        this.sequences[i].clear();
        this.sequences[i].set({
          loopEnd: this.calcLoopLength(data.bpm, seq.chords),
          mute: seq.muted,
        });

        this.buildSeq(data.bpm, seq.chords).forEach((e) => {
          this.sequences[i].add(e);
        });
      } else {
        const s = this.createSeq(data.bpm, seq);
        this.sequences.push(s);
        s.start();
      }
    });
  }

  private buildSeq(bpm: number, chords: Chord[]) {
    const beatTimeInSec = 1 / (bpm / 60);
    return chords
      .filter((chord) => chord.midiNoteNumber.length > 0)
      .map((chord) => {
        return {
          ...chord,
          duration: chord.duration * beatTimeInSec,
          time: chord.time * beatTimeInSec,
        };
      });
  }

  private calcLoopLength(bpm: number, chords: Chord[]) {
    const beatTimeInSec = 1 / (bpm / 60);
    const lastChord = chords.sort((a, b) => b.time - a.time)[0];
    return (lastChord.time + lastChord.duration) * beatTimeInSec;
  }

  stop() {
    this.sequences.forEach((s) => s.stop());
    this.sequences = [];
    Tone.Transport.stop();
    this.isPlaying = false;
  }
}

export const defaultPlayer = new Player();
