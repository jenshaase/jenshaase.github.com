// Major chords
export const major = [0, 4, 7];
export const aug = [0, 4, 8];
export const six = [0, 4, 7, 9];
export const sixNine = [0, 4, 7, 9, 14];
export const major7 = [0, 4, 7, 11];
export const major9 = [0, 4, 7, 11, 14];
export const add9 = [0, 4, 7, 14];
export const major11 = [0, 4, 7, 11, 14, 17];
export const add11 = [0, 4, 7, 17];
export const major13 = [0, 4, 7, 11, 14, 21];
export const add13 = [0, 4, 7, 21];

// Dominant chords
export const dom7 = [0, 4, 7, 10];
export const dom9 = [0, 4, 7, 14];
export const dom11 = [0, 4, 7, 17];
export const dom13 = [0, 4, 7, 21];
export const sevenFlat5 = [0, 4, 6, 10];
export const sevenSharp5 = [0, 4, 8, 10];
export const sevenFlat9 = [0, 4, 7, 10, 13];
export const nine = [0, 4, 7, 10, 14];
export const eleven = [0, 4, 7, 10, 14, 17];
export const thirteen = [0, 4, 7, 10, 14, 17, 21];

// Minor chords
export const minor = [0, 3, 7];
export const diminished = [0, 3, 6];
export const minorSharp5 = [0, 3, 8];
export const minor6 = [0, 3, 7, 9];
export const minorSixNine = [0, 3, 9, 7, 14];
export const minor7flat5 = [0, 3, 6, 10];
export const minor7 = [0, 3, 7, 10];
export const minor7sharp5 = [0, 3, 8, 10];
export const minor7flat9 = [0, 3, 7, 10, 13];
export const minor7sharp9 = [0, 3, 7, 10, 15];
export const diminished7 = [0, 3, 6, 9];
export const minor9 = [0, 3, 7, 10, 14];
export const minor11 = [0, 3, 7, 10, 14, 17];
export const minor13 = [0, 3, 7, 10, 14, 17, 21];
export const minorMajor7 = [0, 3, 7, 11];

// Other chords
export const one = [0];
export const five = [0, 7];
export const sus2 = [0, 2, 7];
export const sus4 = [0, 5, 7];
export const sevenSus2 = [0, 2, 7, 10];
export const sevenSus4 = [0, 5, 7, 10];
export const nineSus4 = [0, 5, 7, 10, 14];

// Questionable chords
export const sevenFlat10 = [0, 4, 7, 10, 15];
export const nineSharp5 = [0, 1, 13];
export const minor9sharp5 = [0, 1, 14];
export const sevenSharp5flat9 = [0, 4, 8, 10, 13];
export const minor7sharp5flat9 = [0, 3, 8, 10, 13];
export const elevenSharp = [0, 4, 7, 10, 14, 18];
export const minor11sharp = [0, 3, 7, 10, 14, 18];

export const chordDict: Record<string, number[]> = {
  major: major,
  maj: major,
  M: major,
  aug: aug,
  plus: aug,
  sharp5: aug,
  six: six,
  "6": six,
  sixNine: sixNine,
  six9: sixNine,
  sixby9: sixNine,
  "6by9": sixNine,
  major7: major7,
  maj7: major7,
  M7: major7,
  major9: major9,
  maj9: major9,
  M9: major9,
  add9: add9,
  major11: major11,
  maj11: major11,
  M11: major11,
  add11: add11,
  major13: major13,
  maj13: major13,
  M13: major13,
  add13: add13,
  dom7: dom7,
  dom9: dom9,
  dom11: dom11,
  dom13: dom13,
  sevenFlat5: sevenFlat5,
  "7f5": sevenFlat5,
  sevenSharp5: sevenSharp5,
  "7s5": sevenSharp5,
  sevenFlat9: sevenFlat9,
  "7f9": sevenFlat9,
  nine: nine,
  eleven: eleven,
  "11": eleven,
  thirteen: thirteen,
  "13": thirteen,
  minor: minor,
  min: minor,
  m: minor,
  diminished: diminished,
  dim: diminished,
  minorSharp5: minorSharp5,
  msharp5: minorSharp5,
  mS5: minorSharp5,
  minor6: minor6,
  min6: minor6,
  m6: minor6,
  minorSixNine: minorSixNine,
  minor69: minorSixNine,
  min69: minorSixNine,
  minSixNine: minorSixNine,
  m69: minorSixNine,
  mSixNine: minorSixNine,
  m6by9: minorSixNine,
  minor7flat5: minor7flat5,
  minor7f5: minor7flat5,
  min7flat5: minor7flat5,
  min7f5: minor7flat5,
  m7flat5: minor7flat5,
  m7f5: minor7flat5,
  minor7: minor7,
  min7: minor7,
  m7: minor7,
  minor7sharp5: minor7sharp5,
  minor7s5: minor7sharp5,
  min7sharp5: minor7sharp5,
  min7s5: minor7sharp5,
  m7sharp5: minor7sharp5,
  m7s5: minor7sharp5,
  minor7flat9: minor7flat9,
  minor7f9: minor7flat9,
  min7flat9: minor7flat9,
  min7f9: minor7flat9,
  m7flat9: minor7flat9,
  m7f9: minor7flat9,
  minor7sharp9: minor7sharp9,
  minor7s9: minor7sharp9,
  min7sharp9: minor7sharp9,
  min7s9: minor7sharp9,
  m7sharp9: minor7sharp9,
  m7s9: minor7sharp9,
  diminished7: diminished7,
  dim7: diminished7,
  minor9: minor9,
  min9: minor9,
  m9: minor9,
  minor11: minor11,
  min11: minor11,
  m11: minor11,
  minor13: minor13,
  min13: minor13,
  m13: minor13,
  minorMajor7: minorMajor7,
  minMaj7: minorMajor7,
  mmaj7: minorMajor7,
  one: one,
  "1": one,
  five: five,
  "5": five,
  sus2: sus2,
  sus4: sus4,
  sevenSus2: sevenSus2,
  "7sus2": sevenSus2,
  sevenSus4: sevenSus4,
  "7sus4": sevenSus4,
  nineSus4: nineSus4,
  ninesus4: nineSus4,
  "9sus4": nineSus4,
  sevenFlat10: sevenFlat10,
  "7f10": sevenFlat10,
  nineSharp5: nineSharp5,
  "9sharp5": nineSharp5,
  "9s5": nineSharp5,
  minor9sharp5: minor9sharp5,
  minor9s5: minor9sharp5,
  min9sharp5: minor9sharp5,
  min9s5: minor9sharp5,
  m9sharp5: minor9sharp5,
  m9s5: minor9sharp5,
  sevenSharp5flat9: sevenSharp5flat9,
  "7s5f9": sevenSharp5flat9,
  minor7sharp5flat9: minor7sharp5flat9,
  m7sharp5flat9: minor7sharp5flat9,
  elevenSharp: elevenSharp,
  "11s": elevenSharp,
  minor11sharp: minor11sharp,
  m11sharp: minor11sharp,
  m11s: minor11sharp,
};

export const transpose = (chord: number[], i: number): number[] => {
  return chord.map((n) => n + i);
};

export const invertUp = (chord: number[]): number[] => {
  if (chord.length === 0) {
    return chord;
  }

  chord = chord.sort((a, b) => a - b);

  return [...chord.slice(1), chord[0] + 12];
};

export const invertDown = (chord: number[]): number[] => {
  if (chord.length === 0) {
    return chord;
  }

  chord = chord.sort((a, b) => a - b);
  const last = chord.length - 1;

  return [chord[last] - 12, ...chord.splice(0, last)];
};

export const open = (chord: number[]): number[] => {
  if (chord.length <= 2) {
    return chord;
  }

  return [chord[0] - 12, chord[1], chord[2] - 12, ...chord.slice(3)].sort(
    (a, b) => a - b
  );
};
