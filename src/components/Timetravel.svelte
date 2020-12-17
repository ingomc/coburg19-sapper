<script>
  import { onMount } from 'svelte';
  import RangeSlider from 'svelte-range-slider-pips';
  import moment from 'moment';
  import { async_data, sliderValue } from '../stores/stores';

  const tt = [
    {
      sliderLabel: '1 Woche',
      dateLabel: moment().subtract(1, 'weeks').format('DD.MM.YYYY'),
      date: moment().subtract(1, 'weeks').format('YYYY-MM-DD'),
    },
    {
      sliderLabel: 'Gestern',
      dateLabel: 'Gestern',
      date: moment().subtract(1, 'days').format('YYYY-MM-DD'),
    },
    {
      sliderLabel: 'Heute',
      dateLabel: 'Heute',
      date: moment().format('YYYY-MM-DD'),
    },
  ];

  moment.locale();

  let values = $sliderValue >= 0 ? [$sliderValue] : [tt.length - 1];

  let changedValue = 0;

  let hasChanged = false;
  let hasMounted = false;

  let newData;

  function fetchData() {
    return Promise.all(
      tt.map(({ date }) =>
        fetch(`./data/${date}.json`)
          .then((res) => res.json())
          .then((data) => data),
      ),
    ).then((res) => res);
  }

  // fix slider values firing on every mousemove
  $: if (values[0] >= 0) {
    changedValue = Math.round(values[0]);
  }

  // just trigger when actual value changes
  $: if (changedValue >= 0 && (changedValue != tt.length - 1 || hasChanged) && hasMounted) {
    hasChanged = true;
    if (process.browser) {
      console.log(newData);
      async_data.update(() => newData[changedValue]);
      sliderValue.update(() => changedValue);
    }
  }

  onMount(async () => {
    const newDateFormat = 'DD.MM.YYYY';
    // fetch data and sort to date
    newData = (await fetchData()).sort((a, b) => {
      const updateA = a.update.substring(0, a.update.indexOf(','));
      const updateB = b.update.substring(0, b.update.indexOf(','));
      if (moment(updateA, newDateFormat).isAfter(moment(updateB, newDateFormat))) {
        return 1;
      }
      if (moment(updateA, newDateFormat).isBefore(moment(updateB, newDateFormat))) {
        return -1;
      }
      return 0;
    });
    hasMounted = true;
    sliderValue.update(() => changedValue);
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
