<script>
  import { onMount } from 'svelte';
  import RangeSlider from 'svelte-range-slider-pips';
  import { async_data } from '../stores/stores';

  const moods = ['😁', '😀', '😊', '😐', '😥', '😫'];
  let values = [moods.length - 1];
  let changedValue = 0;

  function fetchData() {
    let d = fetch('./data/2020-12-02/data.json').then((res) => res.json());
    return d;
  }

  // fix slider values firing on every mousemove
  $: if (values[0] >= 0) {
    changedValue = Math.round(values[0]);
  }
  // just trigger when actual value changes
  $: if (changedValue >= 0 && changedValue != moods.length - 1) {
    console.log(changedValue);
    if (process.browser) {
      const newData = fetchData();
      newData.then((res) => {
        console.log(res);
        async_data.update(() => res);
      });
    }
  }

  onMount(async () => {
    // console.log({ async_data });
    // console.log($async_data);
  });
</script>

<div>
  <h1>slider</h1>
  <RangeSlider
    pips
    all="label"
    bind:values
    range="max"
    springValues="{{ stiffness: 0.3, damping: 0.9 }}"
    formatter="{(v) => moods[v]}"
    max="{moods.length - 1}"
  />
  <p>{moods[values[0]]}</p>
  <p>{values[0]}</p>
  <p>{changedValue}</p>
</div>
