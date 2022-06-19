import {
  expand,
  filter,
  findIndex,
  from,
  fromEvent,
  map,
  mergeMap,
  share,
  switchMap,
  take,
  takeWhile,
  toArray,
  zip,
} from "rxjs";
import { getMovePos, verifyTiles } from "./n-puzzle";
import { shuffle, swap } from "./util";

export function app(doms: HTMLElement[]) {
  const tileClicked = from(doms).pipe(
    mergeMap((x) => fromEvent(x, "click").pipe(map(() => x.id)))
  );

  return from(doms).pipe(
    map((x) => x.id),
    toArray(),
    map(shuffle),
    expand((xs) => {
      const getMovePosF = getMovePos(xs);
      const swapF = swap(xs);

      const posA = tileClicked.pipe(
        switchMap((id) => from(xs).pipe(findIndex((x) => x === id))),
        share()
      );

      const posB = posA.pipe(map(getMovePosF));

      return zip(posB, posA).pipe(
        filter(([x]) => x !== undefined),
        take(1),
        map(([x, y]) => swapF(x)(y))
      );
    }),
    takeWhile((xs) => !verifyTiles(xs), true)
  );
}

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
