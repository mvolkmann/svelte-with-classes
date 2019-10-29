import {writable} from 'svelte/store';
import Line from './line';
import Point from './point';

const line = new Line(new Point(0, 0), new Point(2, 3));
export const lineStore = writable(line);

export const pointStore = writable(new Point(1, 2));
