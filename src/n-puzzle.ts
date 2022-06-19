export function customTiles(xs: string[]) {
  return xs
    .map((ui, i) => ({ ui, id: `${i}` }))
    .concat({ ui: "", id: `${xs.length}` });
}

export function getMovePos<T extends Tile>(xs: T[]) {
  return (i: number) => {
    const n = Math.sqrt(xs.length);
    const isEdage = (i: number) => (i === 0 ? false : i % n === 0);

    return [
      { pos: i - 1, t: isEdage(i) ? undefined : xs[i - 1] },
      { pos: i + 1, t: isEdage(i + 1) ? undefined : xs[i + 1] },
      { pos: i - n, t: xs[i - n] },
      { pos: i + n, t: xs[i + n] },
    ].find((x) => x.t?.id === `${xs.length - 1}`)?.pos;
  };
}

export function numberTiles(x: number) {
  if (x < 2) return [];
  const xs = Array.from({ length: x ** 2 - 1 }, (_, i) => `${i + 1}`);
  return customTiles(xs);
}

export function verifyTiles<T extends Tile>(xs: T[]) {
  return xs.every((x, i) => x.id === `${i}`);
}

export interface Tile {
  id: string;
  ui: string;
}
