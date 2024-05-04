import { describe, test, expect } from "vitest";
import { invertUp, invertDown, open } from "./chords";

describe("chord", () => {
  test.each([
    [
      [0, 2, 4],
      [2, 4, 12],
    ],
    [[], []],
  ])("invertUp", (chord, inversion) => {
    expect(invertUp(chord)).toStrictEqual(inversion);
  });

  test.each([
    [
      [0, 2, 4],
      [-8, 0, 2],
    ],
    [[], []],
  ])("invertDown", (chord, inversion) => {
    expect(invertDown(chord)).toStrictEqual(inversion);
  });

  test.each([
    [[], []],
    [[0], [0]],
    [
      [0, 2],
      [0, 2],
    ],
    [
      [0, 2, 4],
      [-12, 2, -8],
    ],
    [
      [0, 2, 4, 6],
      [-12, 2, -8, 6],
    ],
  ])("open", (chord, opened) => {
    expect(open(chord)).toStrictEqual(opened);
  });
});
