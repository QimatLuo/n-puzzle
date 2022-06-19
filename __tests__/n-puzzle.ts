import {
  customTiles,
  getMovePos,
  numberTiles,
  verifyTiles,
} from "../src/n-puzzle";

describe("customTiles", () => {
  test.each([
    [
      ["a", "b", "c"],
      [
        { id: "0", ui: "a" },
        { id: "1", ui: "b" },
        { id: "2", ui: "c" },
        { id: "3", ui: "" },
      ],
    ],
    [
      ["1", "2", "3"],
      [
        { id: "0", ui: "1" },
        { id: "1", ui: "2" },
        { id: "2", ui: "3" },
        { id: "3", ui: "" },
      ],
    ],
  ])("%s", (x, r) => {
    expect(customTiles(x)).toEqual(r);
  });
});

describe("getMovePos", () => {
  const xs = numberTiles(2);
  const f = getMovePos(xs);

  test.each([
    [0, undefined],
    [1, 3],
    [2, 3],
    [3, undefined],
  ])("%s", (x, r) => {
    expect(f(x)).toEqual(r);
  });
});

describe("numberTiles", () => {
  test.each([
    [
      2,
      [
        { id: "0", ui: "1" },
        { id: "1", ui: "2" },
        { id: "2", ui: "3" },
        { id: "3", ui: "" },
      ],
    ],
    [-1, []],
  ])("%s", (x, r) => {
    expect(numberTiles(x)).toEqual(r);
  });
});

describe("verifyTiles", () => {
  test.each([
    [
      true,
      [
        { id: "0", ui: "a" },
        { id: "1", ui: "b" },
        { id: "2", ui: "c" },
        { id: "3", ui: "" },
      ],
    ],
    [
      false,
      [
        { id: "0", ui: "a" },
        { id: "1", ui: "b" },
        { id: "3", ui: "" },
        { id: "2", ui: "c" },
      ],
    ],
  ])("%s", (r, x) => {
    expect(verifyTiles(x)).toEqual(r);
  });
});
