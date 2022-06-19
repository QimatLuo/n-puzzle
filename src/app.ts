export function customTiles(xs: string[]) {
  return xs
    .map((ui, i) => ({ ui, id: `${i}` }))
    .concat({ ui: "", id: `${xs.length}` });
}

export function numberTiles(x: number) {
  if (x < 2) return [];
  const xs = Array.from({ length: x ** 2 - 1 }, (_, i) => `${i + 1}`);
  return customTiles(xs);
}
