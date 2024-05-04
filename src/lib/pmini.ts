import { chordDict, invertUp, invertDown, open, transpose } from "./chords";

type Token = {
  type: string;
  value: string;
  data: string[];
};

type AstTypes = "group" | "chord" | "rest" | "number";

type Modifiers = {
  stretch?: number;
  transposer?: string[];
  velocity?: number;
  legato?: number;
  repeat?: number;
};

interface Ast {
  type: AstTypes;
  modifiers: Modifiers;
}

interface Group extends Ast {
  type: "group";
  children: Ast[];
}

interface Chord extends Ast {
  type: "chord";
  children: Ast[];
}

interface Rest extends Ast {
  type: "rest";
}

interface Number extends Ast {
  type: "number";
  value: number;
}

export type MiniValue = {
  notes: number[];
  dur: number;
  velocity: number;
  legato: number;
};

export interface MiniNode {
  reset(): void;
  hasNext(): boolean;
  next(): MiniNode;
  isChild(): boolean;
  value(): MiniValue;
}

export type MiniState = {
  dur: number;
  stretch: number;
  transposer: string[];
  velocity: number;
  legato: number;
};

export function* traverseOnce(node: MiniNode): Generator<MiniValue> {
  node.reset();

  if (node.isChild()) {
    yield node.value();
  } else {
    while (node.hasNext()) {
      yield* traverseOnce(node.next());
    }
  }
}

export function* traverseN(node: MiniNode, n: number): Generator<MiniValue> {
  for (let i = 0; i < n; i++) {
    yield* traverseOnce(node);
  }
}

export class MiniAtom implements MiniNode {
  constructor(private item: number[], private state: MiniState) {}

  reset(): void {}

  next(): MiniNode {
    throw new Error("calling next on MiniAtom is not possible");
  }

  hasNext(): boolean {
    return false;
  }

  isChild(): boolean {
    return true;
  }

  value(): MiniValue {
    const dur = this.state.dur * this.state.stretch;

    const notes = this.state.transposer.reduce((chord, t) => {
      switch (t) {
        case "+":
          return transpose(chord, 1);
        case "-":
          return transpose(chord, -1);
        case "O":
          return transpose(chord, 12);
        case "o":
          return transpose(chord, -12);
        case "T":
          return transpose(chord, 6);
        case "t":
          return transpose(chord, -6);
        case "I":
          return invertUp(chord);
        case "i":
          return invertDown(chord);
        case "v":
          return open(chord);
        default:
          return chord;
      }
    }, this.item);
    return {
      notes,
      dur,
      velocity: this.state.velocity,
      legato: this.state.legato,
    };
  }
}

export class MiniSeq implements MiniNode {
  private index = 0;
  constructor(private items: MiniNode[], private repeat: number = 1) {}
  reset(): void {
    this.items.forEach((i) => i.reset());
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.items.length * this.repeat;
  }

  isChild(): boolean {
    return false;
  }

  next(): MiniNode {
    if (this.index % this.items.length == 0) {
      this.items.forEach((i) => i.reset());
    }

    const value = this.items[this.index % this.items.length];
    this.index++;

    return value;
  }

  value(): MiniValue {
    throw new Error("not supported");
  }
}

export class MiniChord implements MiniNode {
  private hasMore = true;
  private generators: Generator<MiniValue>[];
  constructor(private items: MiniNode[], private state: MiniState) {
    this.generators = items.map((i) => traverseN(i, Infinity));
  }

  hasNext(): boolean {
    return this.hasMore;
  }

  reset(): void {
    this.items.forEach((i) => i.reset());
    this.hasMore = true;
  }

  next(): MiniNode {
    const chord = this.generators.map((g) => g.next().value.notes);
    this.hasMore = false;

    return new MiniAtom(chord.flat(), this.state);
  }

  isChild(): boolean {
    return false;
  }

  value(): MiniValue {
    throw new Error("calling value of MiniChord is not possible");
  }
}

const noteNameToNumber = (noteName: string) => {
  const notes: Record<string, number> = {
    c: 0,
    d: 2,
    e: 4,
    f: 5,
    g: 7,
    a: 9,
    b: 11,
  };
  let note = notes[noteName[0].toLowerCase()];
  if (noteName[1] == "s") {
    note += 1;
  }

  if (noteName[1] == "f") {
    note -= 1;
  }

  return note;
};

const chordNameToNumber = (
  rootNoteName: string,
  patternName: string
): number[] => {
  const rootNumber = noteNameToNumber(rootNoteName);
  return chordDict[patternName].map((v) => v + rootNumber);
};

export const tokenize = (input: string): Token[] => {
  const specs: Record<string, RegExp> = {
    // Whitespace
    whitespace: /^[\s|,]+/,
    // Subpattern
    "[": /^\[/,
    "]": /^\]/,
    /*"<": /^\</,
    ">": /^\>/,*/
    "{": /^\{/,
    "}": /^\}/,
    // modifieres
    "^": /^\^([\+\-OoTtIiv]+)/,
    "@": /^\@/,
    "!": /^\!/,
    "*": /^\*/,
    _: /^_/,
    // Atoms
    rest: /^~/,
    number: /^[+-]?([0-9]*[.])?[0-9]+/,
    chord: /^([CcDdEeFfGgAaBb][sf]?)'([a-z0-9]+)/,
    note: /^[CcDdEeFfGgAaBb][sf]?/,
  };

  var keys = Object.keys(specs);

  const result: Token[] = [];
  var cursor = 0;

  while (cursor < input.length) {
    var found = false;
    for (let i = 0; i < keys.length; i++) {
      var key = keys[i];
      var spec = specs[key];

      const data = spec.exec(input.slice(cursor));

      if (data) {
        result.push({ type: key, value: data[0], data: [...data].slice(1) });
        cursor += data[0].length;
        found = true;
        break;
      }
    }

    if (!found) {
      throw new Error(`unexpected token: '${input[cursor]}'`);
    }
  }

  return result;
};

export const parse = (tokens: Token[]): Ast[] => {
  var index = 0;
  const parseRec = (): Ast[] => {
    const list: Ast[] = [];
    while (index < tokens.length) {
      const token = tokens[index];
      index++;

      switch (token.type) {
        case "whitespace":
          break;
        case "[":
          list.push({
            type: "group",
            repeat: 1,
            modifiers: {},
            children: parseRec(),
          } as Group);
          break;
        case "]":
          return list;
        case "{":
          list.push({
            type: "chord",
            children: parseRec(),
            modifiers: {},
          } as Chord);
          break;
        case "}":
          return list;
        case "@":
          var next = tokens[index];
          if (next && next.type === "number") {
            list[list.length - 1].modifiers.stretch = parseFloat(next.value);
            index += 1;
          } else {
            throw new Error("expect number after @");
          }
          break;
        case "^":
          const transposer = token.data[0].split("");
          list[list.length - 1].modifiers.transposer = transposer;

          break;
        case "!":
          var next = tokens[index];
          if (next && next.type === "number") {
            list[list.length - 1].modifiers.repeat = parseInt(next.value);
            index += 1;
          } else {
            throw new Error("expect number after !");
          }
          break;
        case "*":
          var next = tokens[index];
          if (next && next.type === "number") {
            list[list.length - 1].modifiers.velocity = parseFloat(next.value);
            index += 1;
          } else {
            throw new Error("expect number after *");
          }
          break;
        case "_":
          var next = tokens[index];
          if (next && next.type === "number") {
            list[list.length - 1].modifiers.legato = parseFloat(next.value);
            index += 1;
          } else {
            throw new Error("expect number after _");
          }
          break;

        case "rest":
          list.push({
            type: "rest",
            modifiers: {},
          } as Rest);
          break;
        case "note":
          list.push({
            type: "number",
            value: noteNameToNumber(token.value),
            modifiers: {},
          } as Number);

          break;
        case "chord":
          const rootName = token.data[0];
          const chordPatternName = token.data[1];

          list.push({
            type: "chord",
            children: chordNameToNumber(rootName, chordPatternName).map((n) => {
              return {
                type: "number",
                value: n,
                modifiers: {},
              };
            }),
            modifiers: {},
          } as Chord);
          break;
        case "number":
          list.push({
            type: "number",
            value: parseFloat(token.value),
            modifiers: {},
          } as Number);
          break;
      }
    }

    return list;
  };

  return parseRec();
};

export const compile = (
  ast: Ast[],
  options?: {
    dur?: number;
    stretch?: number;
    transposer?: string[];
    legato?: number;
    velocity?: number;
  }
): MiniNode => {
  const compileRec = (ast: Ast[], state: MiniState): MiniNode[] => {
    const result: MiniNode[] = [];

    ast.forEach((element) => {
      const newState: MiniState = {
        ...state,
        stretch: (state.stretch ?? 1) * (element.modifiers.stretch ?? 1),
        transposer: [
          ...(state.transposer ?? []),
          ...(element.modifiers.transposer ?? []),
        ],
        legato: element.modifiers.legato ?? state.legato,
        velocity: element.modifiers.velocity ?? state.velocity,
      };

      switch (element.type) {
        case "group":
          const children = (element as Group).children;
          const elements = children.reduce((sum, child) => {
            return sum + (child.modifiers.repeat ?? 1);
          }, 0);
          const items = compileRec(children, {
            ...newState,
            dur: state.dur / elements,
          });
          result.push(new MiniSeq(items));
          break;
        case "chord":
          result.push(
            new MiniChord(
              compileRec((element as Chord).children, {
                ...newState,
                transposer: [],
              }),
              newState
            )
          );
          break;
        case "rest":
          result.push(new MiniAtom([], newState));
          break;
        case "number":
          result.push(new MiniAtom([(element as Number).value], newState));
          break;
      }

      if (element.modifiers.repeat && element.modifiers.repeat > 1) {
        result[result.length - 1] = new MiniSeq(
          [result[result.length - 1]],
          element.modifiers.repeat
        );
      }
    });

    return result;
  };

  return new MiniSeq(
    compileRec(ast, {
      dur: options?.dur ?? 1,
      stretch: options?.stretch ?? 1,
      transposer: options?.transposer ?? [],
      legato: options?.legato ?? 0.8,
      velocity: options?.velocity ?? 1,
    })
  );
};

export const pmini = (
  input: string,
  repeat: number = 1,
  options?: {
    dur?: number;
    stretch?: number;
    transpose?: number;
    legato?: number;
    velocity?: number;
  }
): Generator<MiniValue> => {
  const node = compile(parse(tokenize(input)), options);

  return traverseN(node, repeat);
};

const all = (g: Generator<MiniValue>): MiniValue[] => {
  var result: MiniValue[] = [];
  for (const v of g) {
    result.push(v);
  }

  return result;
};

export function* arp(
  arpPattern: Generator<MiniValue, void>,
  chordPattern: Generator<MiniValue, void>
): Generator<MiniValue, void> {
  for (const chord of chordPattern) {
    let chordDuration = chord.dur;
    let maxIterationCounter = 100;

    while (chordDuration > 0.00001 && maxIterationCounter > 0) {
      maxIterationCounter--;
      const next = arpPattern.next().value;
      const {
        notes: indices,
        dur: arpDur,
        velocity: arpVelocity,
        legato: arpLegato,
      } = next as MiniValue;

      const eventDur = Math.min(arpDur, chordDuration);
      const chordSize = chord.notes.length;
      const notes = indices.map(
        (i) => chord.notes[((i % chordSize) + chordSize) % chordSize]
      );

      yield {
        notes,
        dur: eventDur,
        velocity: arpVelocity,
        legato: arpLegato,
      };

      chordDuration -= eventDur;
    }
  }
}

export const pminiArray = (
  chordInput: string,
  arpInput?: string,
  chordOptions?: {
    dur?: number;
    stretch?: number;
    transpose?: number;
    legato?: number;
    velocity?: number;
  },
  arpOptions?: {
    dur?: number;
    stretch?: number;
    transpose?: number;
    legato?: number;
    velocity?: number;
  }
): MiniValue[] => {
  let generator = pmini(chordInput, 1, chordOptions);
  if (arpInput) {
    generator = arp(pmini(arpInput, 100, arpOptions), generator);
  }

  const result = all(generator);
  console.log(result, chordInput, arpInput);
  return result;
};
