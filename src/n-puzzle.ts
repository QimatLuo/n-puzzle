export function getMovePos(xs: string[]) {
  return (i: number) => {
    const n = Math.sqrt(xs.length);
    const isEdage = (i: number) => (i === 0 ? false : i % n === 0);

    return [
      { pos: i - 1, t: isEdage(i) ? undefined : xs[i - 1] },
      { pos: i + 1, t: isEdage(i + 1) ? undefined : xs[i + 1] },
      { pos: i - n, t: xs[i - n] },
      { pos: i + n, t: xs[i + n] },
    ].find((x) => x.t === `${xs.length - 1}`)?.pos;
  };
}

export function verifyTiles(xs: string[]) {
  return xs.every((x, i) => x === `${i}`);
}
