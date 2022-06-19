import { getMovePos, verifyTiles } from "../src/n-puzzle";

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

describe("verifyTiles", () => {
  test.each([
    [true, ["0", "1", "2", "3"]],
    [false, ["0", "1", "3", "2"]],
  ])("%s", (r, x) => {
    expect(verifyTiles(x)).toEqual(r);
  });
});
