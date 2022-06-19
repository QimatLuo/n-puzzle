import { numberTiles } from "./app";

export function genStyleTag(size: number) {
  const style = document.createElement("style");
  style.innerText = `
html, body {
  margin: 0;
}
body {
  display: grid;
  grid-template-columns: repeat(${size}, 1fr);
  grid-gap: 1px;
  height: 100vw;
}
body > div {
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: #aaa;
}
body > div:last-child {
  background-color: #ddd;
}
  `;
  return style;
}

export function initialTiles(size: number) {
  const tiles = numberTiles(size);
  return tiles.map((x) => {
    const dom = document.createElement("div");
    dom.id = x.id;
    dom.innerText = x.ui;
    return dom;
  });
}
