<script>
  import {lineCustomStore} from './line';
  import {Point, pointCustomStore} from './point';
  import {lineStore, pointStore} from './stores';

  // This is just local to this component, not in a store.
  let point = new Point(1, 2);
  let point2 = pointCustomStore(1, 2);
  let line2 = lineCustomStore(new Point(0, 0), new Point(2, 3));
  
  function translate() {
    const dx = 2;
    const dy = 3;

    point.translate(dx, dy);
    point = point;

    pointStore.update(pt => {
      pt.translate(3, 4);
      return pt;
    });
    point2.translate(dx, dy);

    lineStore.update(line => {
      line.translate(dx, dy);
      return line;
    });
    line2.translate(dx, dy);
  }
</script>

<h1>local point = ({point.x}, {point.y})</h1>
<h1>point store = {$pointStore.toString()}</h1>
<h1>point2 = {$point2.x}, {$point2.y}</h1>
<h1>line store = {$lineStore.toString()}</h1>
<h1>line2 = {$line2.start.toString()}, {$line2.end.toString()}</h1>

<button on:click={translate}>Translate</button>
