import { shuffle, swap } from "./util";

export function getMovePos(xs: string[]) {
  return (i: number) => {
    return posAroundTile(xs)(i).find((pos) => xs[pos] === `${xs.length - 1}`);
  };
}

function posAroundTile(xs: string[]) {
  const n = Math.sqrt(xs.length);
  const isEdage = (i: number) => i % n === 0;
  return (i: number) => {
    const left = isEdage(i) ? [] : [i - 1];
    const right = isEdage(i + 1) ? [] : [i + 1];
    const top = i - n < 0 ? [] : [i - n];
    const bottom = i + n >= xs.length ? [] : [i + n];
    return [].concat(left, right, top, bottom);
  };
}

export function shuffleTiles(n: number) {
  const loop = (
    xs: string[],
    c: number,
    la?: number,
    lb?: number
  ): string[] => {
    const a = isNaN(lb) ? xs.length - 1 : lb;
    const ps = posAroundTile(xs)(a).filter((i) => i !== la);
    const b = shuffle(ps).pop();
    const nxs = swap(xs)(a)(b);
    return c ? loop(nxs, c - 1, a, b) : nxs;
  };
  return (xs: string[]) => {
    return loop(xs, n - 1);
  };
}

export function verifyTiles(xs: string[]) {
  return xs.every((x, i) => x === `${i}`);
}
