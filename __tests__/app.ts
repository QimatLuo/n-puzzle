import { customTiles, numberTiles } from "../src/app";

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
    [-1, [{ id: "0", ui: "" }]],
  ])("%s", (x, r) => {
    expect(numberTiles(x)).toEqual(r);
  });
});
