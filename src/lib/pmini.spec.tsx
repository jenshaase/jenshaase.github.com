import { describe, test, expect } from "vitest";
import { MiniValue, parse, pmini, tokenize } from "./pmini";

describe("pmini", () => {
  describe("tokenize", () => {
    test.each([
      ["1", [{ type: "number", value: "1", data: [undefined] }]],
      [
        "1 2",
        [
          { type: "number", value: "1", data: [undefined] },
          { type: "whitespace", value: " ", data: [] },
          { type: "number", value: "2", data: [undefined] },
        ],
      ],
    ])("tokenize number", (input, result) => {
      expect(tokenize(input)).toStrictEqual(result);
    });
  });

  describe("parse", () => {
    test.each([
      ["1", [{ type: "number", value: 1, modifiers: {} }]],
      [
        "1 2",
        [
          { type: "number", value: 1, modifiers: {} },
          { type: "number", value: 2, modifiers: {} },
        ],
      ],
      [
        "[1 2]",
        [
          {
            type: "group",
            repeat: 1,
            modifiers: {},
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "[1 ~ 2]",
        [
          {
            type: "group",
            repeat: 1,
            modifiers: {},
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "rest", modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "{1 2}",
        [
          {
            type: "chord",
            modifiers: {},
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "{1 2}@2",
        [
          {
            type: "chord",
            modifiers: {
              stretch: 2,
            },
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "{1 2}^O",
        [
          {
            type: "chord",
            modifiers: {
              transposer: ["O"],
            },
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "{1 2}^O-",
        [
          {
            type: "chord",
            modifiers: {
              transposer: ["O", "-"],
            },
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "{1 2}!3",
        [
          {
            type: "chord",
            modifiers: {
              repeat: 3,
            },
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "{1 2}*0.7",
        [
          {
            type: "chord",
            modifiers: {
              velocity: 0.7,
            },
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "{1 2}_1.1",
        [
          {
            type: "chord",
            modifiers: {
              legato: 1.1,
            },
            children: [
              { type: "number", value: 1, modifiers: {} },
              { type: "number", value: 2, modifiers: {} },
            ],
          },
        ],
      ],
      ["c", [{ type: "number", value: 0, modifiers: {} }]],
      ["Cs", [{ type: "number", value: 1, modifiers: {} }]],
      ["Df", [{ type: "number", value: 1, modifiers: {} }]],
      [
        "c'major",
        [
          {
            type: "chord",
            modifiers: {},
            children: [
              { type: "number", value: 0, modifiers: {} },
              { type: "number", value: 4, modifiers: {} },
              { type: "number", value: 7, modifiers: {} },
            ],
          },
        ],
      ],
      [
        "c'major^I",
        [
          {
            type: "chord",
            modifiers: {
              transposer: ["I"],
            },
            children: [
              { type: "number", value: 0, modifiers: {} },
              { type: "number", value: 4, modifiers: {} },
              { type: "number", value: 7, modifiers: {} },
            ],
          },
        ],
      ],
    ])("parse: %s", (input, result) => {
      expect(parse(tokenize(input))).toStrictEqual(result);
    });
  });

  describe("generate", () => {
    const all = (generator: Generator<MiniValue>): MiniValue[] => {
      var result: MiniValue[] = [];
      for (const v of generator) {
        result.push(v);
      }

      return result;
    };

    test.each([
      ["1", [{ notes: [1], dur: 1, velocity: 1, legato: 1 }]],
      ["1^O-", [{ notes: [12], dur: 1, velocity: 1, legato: 1 }]],
      [
        "1!2",
        [
          { notes: [1], dur: 1, velocity: 1, legato: 1 },
          { notes: [1], dur: 1, velocity: 1, legato: 1 },
        ],
      ],
      ["1@2", [{ notes: [1], dur: 2, velocity: 1, legato: 1 }]],
      ["1*0.5", [{ notes: [1], dur: 1, velocity: 0.5, legato: 1 }]],
      ["1_0.5", [{ notes: [1], dur: 1, velocity: 1, legato: 0.5 }]],
      ["~", [{ notes: [], dur: 1, velocity: 1, legato: 1 }]],
      ["~@2", [{ notes: [], dur: 2, velocity: 1, legato: 1 }]],
      [
        "1 2",
        [
          { notes: [1], dur: 1, velocity: 1, legato: 1 },
          { notes: [2], dur: 1, velocity: 1, legato: 1 },
        ],
      ],
      [
        "[1 2]",
        [
          { notes: [1], dur: 0.5, velocity: 1, legato: 1 },
          { notes: [2], dur: 0.5, velocity: 1, legato: 1 },
        ],
      ],
      [
        "[1 2 3 4]",
        [
          { notes: [1], dur: 0.25, velocity: 1, legato: 1 },
          { notes: [2], dur: 0.25, velocity: 1, legato: 1 },
          { notes: [3], dur: 0.25, velocity: 1, legato: 1 },
          { notes: [4], dur: 0.25, velocity: 1, legato: 1 },
        ],
      ],
      [
        "[1 2]!2",
        [
          { notes: [1], dur: 0.5, velocity: 1, legato: 1 },
          { notes: [2], dur: 0.5, velocity: 1, legato: 1 },
          { notes: [1], dur: 0.5, velocity: 1, legato: 1 },
          { notes: [2], dur: 0.5, velocity: 1, legato: 1 },
        ],
      ],
      [
        "[1!2 2!2]",
        [
          { notes: [1], dur: 0.25, velocity: 1, legato: 1 },
          { notes: [1], dur: 0.25, velocity: 1, legato: 1 },
          { notes: [2], dur: 0.25, velocity: 1, legato: 1 },
          { notes: [2], dur: 0.25, velocity: 1, legato: 1 },
        ],
      ],
      ["{1 2}", [{ notes: [1, 2], dur: 1, velocity: 1, legato: 1 }]],
      [
        "{1 2}!2",
        [
          { notes: [1, 2], dur: 1, velocity: 1, legato: 1 },
          { notes: [1, 2], dur: 1, velocity: 1, legato: 1 },
        ],
      ],
      ["{0 4 7}^O", [{ notes: [12, 16, 19], dur: 1, velocity: 1, legato: 1 }]],
      [
        "{0 4^+ 7}^O",
        [{ notes: [12, 17, 19], dur: 1, velocity: 1, legato: 1 }],
      ],
      ["{0 4 7}^I", [{ notes: [4, 7, 12], dur: 1, velocity: 1, legato: 1 }]],
      ["{0 4 7}^i", [{ notes: [-5, 0, 4], dur: 1, velocity: 1, legato: 1 }]],
      ["{0 4 7}^v", [{ notes: [-12, -5, 4], dur: 1, velocity: 1, legato: 1 }]],
      [
        "{0 4 7}^IO",
        [
          {
            notes: [16, 19, 24],
            dur: 1,
            velocity: 1,
            legato: 1,
          },
        ],
      ],
      [
        "c ~ d",
        [
          { notes: [0], dur: 1, velocity: 1, legato: 1 },
          { notes: [], dur: 1, velocity: 1, legato: 1 },
          { notes: [2], dur: 1, velocity: 1, legato: 1 },
        ],
      ],
      ["c'major", [{ notes: [0, 4, 7], dur: 1, velocity: 1, legato: 1 }]],
      ["c'major^I", [{ notes: [4, 7, 12], dur: 1, velocity: 1, legato: 1 }]],
      ["c'major^Io", [{ notes: [-8, -5, 0], dur: 1, velocity: 1, legato: 1 }]],
    ])("pmini %s", (input, result) => {
      expect(all(pmini(input, 1, { dur: 1, legato: 1 }))).toStrictEqual(result);
    });
  });
});
