import { getMovePos } from "../src/n-puzzle";
import { swap } from "../src/util";

describe("play", () => {
  let tiles = ["3", "2", "1", "0"];

  let pos: number;

  test.each([
    [0, ["3", "2", "1", "0"]],
    [1, ["2", "3", "1", "0"]],
    [2, ["2", "3", "1", "0"]],
    [3, ["2", "0", "1", "3"]],
    [4, ["2", "0", "1", "3"]],
    [2, ["2", "0", "3", "1"]],
    [0, ["3", "0", "2", "1"]],
    [1, ["0", "3", "2", "1"]],
    [3, ["0", "1", "2", "3"]],
  ])("%s", (x, r) => {
    pos = getMovePos(tiles)(x);
    tiles = swap(tiles)(x)(pos);
    expect(tiles).toEqual(r);
  });
});
