import { shuffle, swap } from "../src/util";

describe("shuffle", () => {
  test.each([[[1, 2, 3, 4, 5, 6, 7, 8, 9]]])("%s", (x) => {
    expect(shuffle(x)).not.toEqual(x);
    expect(Array.isArray(x)).toBe(true);
  });
});

describe("swap", () => {
  const xs = [1, 2, 3, 4];
  const f = swap(xs);

  test.each([
    [0, 1, [2, 1, 3, 4]],
    [0, 0, xs],
    [-1, 0, xs],
    [undefined, 0, xs],
    [1, undefined, xs],
    [undefined, undefined, xs],
  ])("%s,%s", (x, y, r) => {
    expect(f(x)(y)).toEqual(r);
  });
});
