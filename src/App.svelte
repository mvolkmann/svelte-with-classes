<script>
  import Point from './point';
  import {lineStore, pointStore} from './stores';

  // This is just local to this component, not in a store.
  let point = new Point(1, 2);
  
  function translate() {
    const dx = 2;
    const dy = 3;
    point.translate(dx, dy);
    point = point;

    pointStore.update(pt => {
      pt.translate(3, 4);
      return pt;
    });

    lineStore.update(line => {
      line.translate(dx, dy);
      return line;
    });
  }
</script>

<h1>local point = ({point.x}, {point.y})</h1>
<h1>point store = {$pointStore.toString()}</h1>
<h1>line store = {$lineStore.toString()}</h1>

<button on:click={translate}>Translate</button>
