import { getMovePos, shuffleTiles, verifyTiles } from "../src/n-puzzle";

describe("getMovePos", () => {
  const f = getMovePos(["0", "1", "2", "3"]);

  test.each([
    [0, undefined],
    [1, 3],
    [2, 3],
    [3, undefined],
  ])("%s", (x, r) => {
    expect(f(x)).toEqual(r);
  });
});

describe("shuffleTiles", () => {
  const xs = ["0", "1", "2", "3"];
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(1);
  });
  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });
  test.each([
    [1, ["0", "3", "2", "1"]],
    [2, ["3", "0", "2", "1"]],
    [3, ["2", "0", "3", "1"]],
    [4, ["2", "0", "1", "3"]],
    [5, ["2", "3", "1", "0"]],
  ])("%s", (x, r) => {
    expect(shuffleTiles(x)(xs)).toEqual(r);
  });
});

describe("verifyTiles", () => {
  test.each([
    [true, ["0", "1", "2", "3"]],
    [false, ["0", "1", "3", "2"]],
  ])("%s", (r, x) => {
    expect(verifyTiles(x)).toEqual(r);
  });
});
