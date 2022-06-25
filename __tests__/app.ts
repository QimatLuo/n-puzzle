import { app, customTiles, numberTiles } from "../src/app";

describe("app", () => {
  const doms = numberTiles(2).map((x) => {
    const d = document.createElement("div");
    d.id = x.id;
    d.innerText = x.ui;
    return d;
  });
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(1);
  });
  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });
  test("integration", (complete) => {
    const next = jest.fn();
    app(doms).subscribe({
      next,
      complete,
    });
    doms[1].click();
    doms[2].click();
    doms[0].click();
    doms[1].click();
    expect(next.mock.calls).toEqual([
      [["2", "0", "1", "3"]],
      [["2", "0", "3", "1"]],
      [["3", "0", "2", "1"]],
      [["0", "3", "2", "1"]],
      [["0", "1", "2", "3"]],
    ]);
  });
});

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
