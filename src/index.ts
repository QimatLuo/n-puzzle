import { genStyleTag, initialTiles } from "./ui";

const p = new URLSearchParams(location.search);
const size = +p.get("size") || 3;
document.head.append(genStyleTag(size));
const doms = initialTiles(size);
document.body.append(...doms);
