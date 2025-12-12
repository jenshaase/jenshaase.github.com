import React from "react";

export type RootNote =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";

type Note = {
  midiNoteNumber: number;
  time: number;
  duration: number;
  velocity: number;
  legato: number;
};

export type Chord = {
  midiNoteNumber: number[];
  time: number;
  duration: number;
  velocity: number;
  legato: number;
};

export type PianoRollProps = {
  timeSignature: [number, number];
  grid: number;
  rootNote: RootNote;
  notes: Chord[];
};

type OctaveProps = {
  rows: number;
  grid: number;
  octaveNumber: number;
  notes: Note[];
};

const Octave: React.FC<OctaveProps> = ({ octaveNumber, rows, grid, notes }) => {
  const notesIndexedByMidiNote = notes.reduce<Map<number, Note[]>>(
    (index, note) => {
      if (!index.get(note.midiNoteNumber)) {
        index.set(note.midiNoteNumber, []);
      }

      index.get(note.midiNoteNumber)!.push(note);
      index
        .get(note.midiNoteNumber)
        ?.sort((a, b) => a.midiNoteNumber - b.midiNoteNumber);

      return index;
    },
    new Map<number, Note[]>()
  );

  const noteNames = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const noteColors = [
    "white",
    "black",
    "white",
    "black",
    "white",
    "white",
    "black",
    "white",
    "black",
    "white",
    "black",
    "white",
  ];

  const stepWidthInPx = 20;
  const borderWidthInPx = 2;

  return noteNames.reverse().map((noteName, i) => {
    const midiNote = octaveNumber * 12 + (noteNames.length - i - 1);

    const noteColorNames =
      noteColors[noteNames.length - i - 1] === "black"
        ? "bg-muted-foreground text-primary-foreground"
        : "bg-white";

    return (
      <tr key={`note_${midiNote}`}>
        <td
          className={`w-[80px] min-w-[80px] border border-r-2 border-r-muted-foreground ${noteColorNames} sticky left-0 z-30`}
        >{`${noteName}${octaveNumber} (${midiNote})`}</td>
        {[...Array(rows)].map((_, i) => {
          const isBarEnd = (i + 1) % (4 * grid) == 0;
          const isNoteEnd = (i + 1) % 4 == 0;

          const beginDuration = i / grid;
          const endDuration = (i + 1) / grid;
          const note = notesIndexedByMidiNote
            .get(midiNote)
            ?.filter(
              (note) => note.time >= beginDuration && note.time < endDuration
            )[0];

          const classnames = [
            "border relative",
            isBarEnd ? "border-r-2 border-r-muted-foreground" : "",
            isNoteEnd ? "border-r border-r-muted-foreground" : "",
          ]
            .filter((x) => x != "")
            .join(" ");

          return (
            <td className={classnames} key={`note_${midiNote}_step_${i}`}>
              {note && (
                <div
                  className="absolute top-[2px] bg-primary min-w-[2px] bottom-[2px] z-20"
                  style={{
                    left:
                      (note.time - beginDuration) *
                      (stepWidthInPx / (endDuration - beginDuration)),
                    width:
                      note.duration * note.legato * grid * stepWidthInPx -
                      borderWidthInPx,
                    opacity: Math.max(0.1, note.velocity),
                  }}
                ></div>
              )}
            </td>
          );
        })}
      </tr>
    );
  });
};

type TableHeaderProps = {
  /*timeSignature: [number, number];*/
  grid: number;
  rows: number;
};

const TableHeader: React.FC<TableHeaderProps> = ({ rows, grid }) => {
  return (
    <tr>
      <th className="border border-r-2 border-r-muted-foreground sticky left-0 z-30 bg-white"></th>
      {[...Array(rows)].map((_, i) => {
        const isFirstInBar = i % (4 * grid) == 0;
        const isBarEnd = (i + 1) % (4 * grid) == 0;
        const isNoteEnd = (i + 1) % 4 == 0;

        const barNum = isFirstInBar ? i / (4 * grid) + 1 : "";
        const classnames = [
          "border border-b-2 border-b-muted-foreground w-[20px] min-w-[20px] text-muted-foreground",
          isBarEnd ? "border-r-2 border-r-muted-foreground" : "",
          isNoteEnd ? "border-r border-r-muted-foreground" : "",
        ]
          .filter((x) => x != "")
          .join(" ");

        return (
          <th className={classnames} key={`step_${i}`}>
            {isFirstInBar ? barNum : ""}
          </th>
        );
      })}
    </tr>
  );
};

export const PianoRoll: React.FC<PianoRollProps> = ({ grid, notes }) => {
  const notesIndexedByOctave = notes
    .flatMap((chord) => {
      return chord.midiNoteNumber.map((note) => {
        return {
          midiNoteNumber: note,
          time: chord.time,
          duration: chord.duration,
          velocity: chord.velocity,
          legato: chord.legato,
        };
      });
    })
    .reduce<Map<number, Note[]>>((index, note) => {
      const octave = Math.floor(note.midiNoteNumber / 12);

      if (!index.get(octave)) {
        index.set(octave, []);
      }

      index.get(octave)!.push(note);

      return index;
    }, new Map<number, Note[]>());

  const minOctave = Math.min(...notesIndexedByOctave.keys());
  const maxOctave = Math.max(...notesIndexedByOctave.keys());
  const numberOfOctaves = maxOctave - minOctave + 1;
  const octavesToRender = Array.from(
    { length: numberOfOctaves },
    (_, i) => maxOctave - i
  );

  const lastNote = notes.sort(
    (a, b) => b.time + b.duration - (a.time + a.duration)
  )[0];
  let rows = 4 * 4 * grid;
  if (lastNote) {
    rows = Math.ceil(lastNote.time + lastNote.duration) * grid;
  }

  return (
    <table className="piano-roll border-separate border-spacing-0 border table-fixed">
      <thead>
        <TableHeader rows={rows} grid={grid} />
      </thead>
      <tbody>
        {octavesToRender.map((octave) => {
          var notes = notesIndexedByOctave.get(octave);
          return (
            notes && (
              <Octave
                key={octave}
                octaveNumber={octave}
                rows={rows}
                grid={grid}
                notes={notes}
              />
            )
          );
        })}
      </tbody>
    </table>
  );
};
