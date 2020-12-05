<script>
  import { onMount } from 'svelte';
  import RangeSlider from 'svelte-range-slider-pips';
  import moment from 'moment';
  import { async_data } from '../stores/stores';

  const interval = ['Vor 1 Monat', 'vor 1 Woche', 'Gestern', 'Heute'];
  moment.locale();
  const oldDate = [
    moment().subtract(1, 'months').format('DD.MM.YYYY'),
    moment().subtract(1, 'weeks').format('DD.MM.YYYY'),
    'Gestern',
    'Heute',
  ];
  let values = [interval.length - 1];
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
  $: if (changedValue >= 0 && changedValue != interval.length - 1) {
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
    formatter="{(v) => interval[v]}"
    max="{interval.length - 1}"
  />
  <p>{interval[values[0]]}</p>
  <p>{values[0]}</p>
  <p>{changedValue}</p>
  <p>{oldDate[values[0]]}</p>
</div>
