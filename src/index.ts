import { genStyleTag, initialTiles, moveTiles } from "./ui";
import { app } from "./app";

const p = new URLSearchParams(location.search);
const pSize = +p.get("size");
const size = pSize > 1 ? pSize : 3;
document.head.append(genStyleTag(size));
const doms = initialTiles(size);
document.body.append(...doms);
app(doms).subscribe({
  next: moveTiles,
  complete: () =>
    setTimeout(() => alert("Complete! Refresh to restart a new game."), 100),
});
