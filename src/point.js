import {writable} from 'svelte/store';

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  translate(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

export function pointCustomStore(x, y) {
  const {subscribe, update} = writable({x, y});
  return {
    subscribe,
    translate(dx, dy) {
      update(({x, y}) => ({x: x + dx, y: y + dy}));
    }
  };
}
