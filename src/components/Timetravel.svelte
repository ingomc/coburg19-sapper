<script>
  import { onMount } from 'svelte';
  import RangeSlider from 'svelte-range-slider-pips';
  import moment from 'moment';
  import { async_data } from '../stores/stores';

  const tt = [
    {
      sliderLabel: '1 Woche',
      dateLabel: moment().subtract(1, 'weeks').format('DD.MM.YYYY'),
      date: moment().subtract(1, 'weeks').format('DD.MM.YYYY'),
    },
    {
      sliderLabel: 'Gestern',
      dateLabel: 'Gestern',
      date: moment().subtract(1, 'days').format('DD.MM.YYYY'),
    },
    {
      sliderLabel: 'Heute',
      dateLabel: 'Heute',
      date: moment().format('DD.MM.YYYY'),
    },
  ];

  moment.locale();

  let values = [tt.length - 1];

  let changedValue = 0;

  let hasChanged = false;

  // todo: array mit dates reingeben, loop, return array
  // todo: tag von heute nicht fetchen , sondern gibts eh in der Komponente?
  function fetchData() {
    let d = fetch('./data/2020-12-02/data.json').then((res) => res.json());
    return d;
  }

  // fix slider values firing on every mousemove
  $: if (values[0] >= 0) {
    changedValue = Math.round(values[0]);
  }

  // just trigger when actual value changes
  $: if (changedValue >= 0 && changedValue != tt.length - 1) {
    if (changedValue != tt.length - 1 && !hasChanged) {
      // todo: nimm die alten Zahlen
    }
    hasChanged = true;
    if (process.browser) {
      const newData = fetchData();
      newData.then((res) => {
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
    formatter="{(v) => tt[v].sliderLabel}"
    max="{tt.length - 1}"
  />
  <p>{tt[changedValue].dateLabel}</p>
</div>
