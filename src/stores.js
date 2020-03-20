import {get, writable} from 'svelte/store';
import Line from './line';
import Point from './point';

export const pointStore = writable(new Point(1, 2));

const line = new Line(new Point(0, 0), new Point(2, 3));
export const lineStore = writable(line);

export function pointStore2(x, y) {
  const store = writable({x, y});
  const {subscribe, update} = store;
  let cache = {x, y};
  return {
    subscribe,
    toString() {
      return `(${cache.x}, ${cache.y})`;
    },
    translate(dx, dy) {
      update(({x, y}) => {
        cache = {x: x + dx, y: y + dy};
        return cache;
      });
    }
  };
}

export function lineStore2(start, end) {
  const store = writable({start, end});
  const {subscribe, update} = store;
  return {
    subscribe,
    toString() {
      const {start, end} = get(store);
      return `line from (${start.toString()} to ${end.toString()})`;
    },
    translate(dx, dy) {
      update(({start, end}) => {
        start.translate(dx, dy);
        end.translate(dx, dy);
        return {start, end};
      });
    }
  };
}
