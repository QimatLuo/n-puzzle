export function shuffle<T>(xs: T[]) {
  return Array.from({ length: xs.length }, (_, i) => i)
    .map((i) => ({ i, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .reduce<T[]>((o, { i }) => o.concat(xs[i]), []);
}

export function swap<T>(xs: T[]) {
  return (a: number) => {
    return (b: number) => {
      if (a === b) return xs;
      const x = xs[a];
      const y = xs[b];
      if (!x || !y) return xs;
      const moved = xs.slice();
      moved[b] = x;
      moved[a] = y;
      return moved;
    };
  };
}
