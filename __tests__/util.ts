import { shuffle, swap } from "../src/util";

describe("shuffle", () => {
  const xs = [1, 2, 3];
  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });
  test.each([[[1, 2, 3]], [[2, 1, 3]], [[3, 2, 1]]])("%s", (r) => {
    r.forEach(jest.spyOn(global.Math, "random").mockReturnValueOnce);
    expect(shuffle(xs)).toEqual(r);
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
