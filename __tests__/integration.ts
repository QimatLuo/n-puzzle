import { getMovePos } from "../src/n-puzzle";
import { swap } from "../src/util";

describe("play", () => {
  let tiles = [
    { id: "3", ui: "" },
    { id: "2", ui: "c" },
    { id: "1", ui: "b" },
    { id: "0", ui: "a" },
  ];

  let pos: number;

  test.each([
    [
      0,
      [
        { id: "3", ui: "" },
        { id: "2", ui: "c" },
        { id: "1", ui: "b" },
        { id: "0", ui: "a" },
      ],
    ],
    [
      1,
      [
        { id: "2", ui: "c" },
        { id: "3", ui: "" },
        { id: "1", ui: "b" },
        { id: "0", ui: "a" },
      ],
    ],
    [
      2,
      [
        { id: "2", ui: "c" },
        { id: "3", ui: "" },
        { id: "1", ui: "b" },
        { id: "0", ui: "a" },
      ],
    ],
    [
      3,
      [
        { id: "2", ui: "c" },
        { id: "0", ui: "a" },
        { id: "1", ui: "b" },
        { id: "3", ui: "" },
      ],
    ],
    [
      4,
      [
        { id: "2", ui: "c" },
        { id: "0", ui: "a" },
        { id: "1", ui: "b" },
        { id: "3", ui: "" },
      ],
    ],
    [
      2,
      [
        { id: "2", ui: "c" },
        { id: "0", ui: "a" },
        { id: "3", ui: "" },
        { id: "1", ui: "b" },
      ],
    ],
    [
      0,
      [
        { id: "3", ui: "" },
        { id: "0", ui: "a" },
        { id: "2", ui: "c" },
        { id: "1", ui: "b" },
      ],
    ],
    [
      1,
      [
        { id: "0", ui: "a" },
        { id: "3", ui: "" },
        { id: "2", ui: "c" },
        { id: "1", ui: "b" },
      ],
    ],
    [
      3,
      [
        { id: "0", ui: "a" },
        { id: "1", ui: "b" },
        { id: "2", ui: "c" },
        { id: "3", ui: "" },
      ],
    ],
  ])("%s", (x, r) => {
    pos = getMovePos(tiles)(x);
    tiles = swap(tiles)(x)(pos);
    expect(tiles).toEqual(r);
  });
});
