import {writable} from 'svelte/store';
import {Point} from './point';

export class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  toString() {
    return `line from ${this.start.toString()} to ${this.end.toString()}`;
  }

  translate(dx, dy) {
    this.start.translate(dx, dy);
    this.end.translate(dx, dy);
  }
}

export function lineCustomStore(start, end) {
  const {subscribe, update} = writable({start, end});
  return {
    subscribe,
    translate(dx, dy) {
      update(({start, end}) => {
        start.translate(dx, dy);
        end.translate(dx, dy);
        return {start, end};
      });
    }
  };
}
