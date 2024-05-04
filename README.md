## Pattern specification

### Configuration

- Octave: The octave number. The default is 5, mapping note 0 onto MIDI note 60.
- Root note: The scale root, given in 12ET MIDI note increments. The default is 0.
- Duration: The duration of one step.

### Atoms

#### Whitespace

The following chars are used as whitespace and have not meaning: ` |,`.

#### Note number

The note number, in any division of the octave. 0 is the scale root.
The midi note is computed by `(note number + root note) * octave`.

Example:

```
// Configuration
// Rote note: 0
// Octave: 5

-1 0 1 2 3 // will map to the midi note number 59, 60, 61, 62, 63
```

#### Note names

Instead of note numbers it is also possible to use note names like `c`, `cs`, `df`. These names are mapped to note numbers.

- `c`: 0
- `cs`, `df`: 1
- `d`: 2,
- `ds`, `ef`: 3
- `e`: 4,
- `f`: 5,
- `fs`, `gf`: 6
- `g`: 7,
- `gs`, `af`: 8
- `a`: 9,
- `b`: 11,

#### Chords names

Chords can be described by the a note name followed by a `'` and a chord name. E.g. `c'minor` represents the C-minor chord. The following chord names are available:

```
major|maj|M|aug|plus|sharp5|six|6|sixNine|six9|sixby9|6by9|major7|maj7|M7|major9|maj9|M9|add9|major11|maj11|M11|add11|major13|maj13|M13|add13|dom7|dom9|dom11|dom13|sevenFlat5|7f5|sevenSharp5|7s5|sevenFlat9|7f9|nine|eleven|11|thirteen|13|minor|min|m|diminished|dim|minorSharp5|msharp5|mS5|minor6|min6|m6|minorSixNine|minor69|min69|minSixNine|m69|mSixNine|m6by9|minor7flat5|minor7f5|min7flat5|min7f5|m7flat5|m7f5|minor7|min7|m7|minor7sharp5|minor7s5|min7sharp5|min7s5|m7sharp5|m7s5|minor7flat9|minor7f9|min7flat9|min7f9|m7flat9|m7f9|minor7sharp9|minor7s9|min7sharp9|min7s9|m7sharp9|m7s9|diminished7|dim7|minor9|min9|m9|minor11|min11|m11|minor13|min13|m13|minorMajor7|minMaj7|mmaj7|one|1|five|5|sus2|sus4|sevenSus2|7sus2|sevenSus4|7sus4|nineSus4|ninesus4|9sus4|sevenFlat10|7f10|nineSharp5|9sharp5|9s5|minor9sharp5|minor9s5|min9sharp5|min9s5|m9sharp5|m9s5|sevenSharp5flat9|7s5f9|minor7sharp5flat9|m7sharp5flat9|elevenSharp|11s|minor11sharp|m11sharp|m11s
```

#### Rest

The `~` symbol is used to represent a rest.

### Sub pattern

#### Sub division

Divide a step into multiple sub steps. E.g. a pattern of `0 [1 2] 3`.

#### Chord values

Play multiple notes at the same time. In contrast to to chord names this is more flexible and allows any combination of notes. E.g. `{0 4 7}` for the C-major chord.

#### Alternating values

Group patterns in `<` and `>` to alter between each subpattern. E.g. `<c d>` to alternate between `c` and `d` or `<[c d] [f g]>` to alternate between `[c d]` and `[f g]`.

### Modifiers

#### Transpose

Note and chords can be transposed by using the `^` char and a one or more transposition operations.

- `+`: Increment the numbers chromatically
- `-`: Decrement the numbers chromatically
- `O`: Increase the numbers by an octave
- `o`: Decrease the numerals by an octave
- `T`: Increase the numbers by a tritone
- `t`: Decrease the numbers by a tritone

E.g. `0+` will be transposed to `1`. `c'maj^o` will be transposed from `{0 4 7}` to `{12 16 19}`.

For chords there are two additional transpose operations:

- `I`: Invert a chord upwards. Increase the lowest note by 12 semitones.
- `i`: Invert a chord downwards. Decreaes the highest note by 12 semitones.
- `v`: Open voicing. This will move the 1st and 3rd note in a chord 1 octave lower.

#### Repeat

Repeat a pattern or a note by adding `!` and a number of repeats. E.g. `[0 1]!3` is equal to `[0 1] [0 1] [0 1]`.

#### Stretch

Stretch a note or pattern in time. `2@2` will play the note 2 twice as long. `2@0.5` will play a note half as long. `[0 1 2]@2` will play each note in the group twice as long.

#### Velocity

Assign a velocity to a note or pattern. E.g. `2*0.5` will assign a velocity of `0.5` to note `2`. If no velocity is provided it will be `1`.

#### Legato

Assign a legato value to a note or pattern. E.g. `2_0.9` will assign a legato of `0.9` to the note; `2_1.1` will assign a legato of `1.1` to the note. If no legato is provide the default value is `0.8`. The final note length will be computed by `duration * stretch * legato`.
