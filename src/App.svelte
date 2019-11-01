<script>
  import Point from './point';
  import {lineStore, lineStore2, pointStore, pointStore2} from './stores';

  // This is just local to this component, not in a store.
  let point = new Point(1, 2);
  let point2 = pointStore2(1, 2);
  let line2 = lineStore2(pointStore2(0, 0), pointStore2(2, 3));

  let point2String = '';
  point2.subscribe(() => point2String = point2.toString());

  let line2String = '';
  line2.subscribe(() => line2String = line2.toString());
  
  function translate() {
    const dx = 2;
    const dy = 3;

    point.translate(dx, dy);
    point = point;

    pointStore.update(point => point.translate(3, 4));

    point2.translate(dx, dy);

    lineStore.update(line => line.translate(dx, dy));

    line2.translate(dx, dy);
  }
</script>

<div>local point = ({point.x}, {point.y})</div>
<div>point store = {$pointStore.toString()}</div>
<div>point2 = {$point2.x}, {$point2.y}</div>
<div>point2 = {point2String}</div>

<div>line store = {$lineStore.toString()}</div>
<div>line2 = {$line2.start.toString()}, {$line2.end.toString()}</div>
<div>line2 = {line2.toString()} (doesn't update)</div>
<div>line2 = {line2String} (does update)</div>

<button on:click={translate}>Translate</button>
