<style>
  .wrapper {
    --range-slider: var(--bg-100); /* slider main background color */
    --range-handle-inactive: var(--color); /* inactive handle color */
    --range-handle: var(--bg-400); /* non-focussed handle color */
    --range-handle-focus: var(--color); /* focussed handle color */
    --range-handle-border: var(--color);
    --range-range-inactive: var(--color); /* inactive range bar background color */
    --range-range: var(--color); /* active range bar background color */
    --range-float-inactive: var(--color); /* inactive floating label background color */
    --range-float: var(--color); /* floating label background color */
    --range-float-text: var(--color); /* text color on floating label */
    --range-pip: var(--bg-50);
    --range-pip-active: var(--color);
    --range-pip-in-range-text: var(--bg-50);
    cursor: initial;
  }

  .labelwrapper {
    padding: 0.5rem 2.5rem;
  }

  .icon {
    display: inline-block;
    height: 1rem;
    vertical-align: middle;
    width: 1rem;
  }

  .label {
    vertical-align: middle;
  }

  .rangeslider {
    font-size: 0.8rem;
    padding: 0.25rem 1.5rem;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import RangeSlider from 'svelte-range-slider-pips';
  import moment from 'moment';
  import { async_data, sliderValue, ttIsActive, ttToday } from '../stores/stores';
  import IconTTactive from './icons/IconTTactive.svelte';
  import IconTTinactive from './icons/IconTTinactive.svelte';

  const tt = [
    {
      sliderLabel: '2 Wochen',
      dateLabel: moment($ttToday, 'DD.MM.YYYY').subtract(2, 'weeks').format('DD.MM.YYYY'),
      date: moment($ttToday, 'DD.MM.YYYY').subtract(2, 'weeks').format('YYYY-MM-DD'),
    },
    {
      sliderLabel: '1 Woche',
      dateLabel: moment($ttToday, 'DD.MM.YYYY').subtract(1, 'weeks').format('DD.MM.YYYY'),
      date: moment($ttToday, 'DD.MM.YYYY').subtract(1, 'weeks').format('YYYY-MM-DD'),
    },
    {
      sliderLabel: 'Vorgestern',
      dateLabel: 'Vorgestern',
      date: moment($ttToday, 'DD.MM.YYYY').subtract(2, 'days').format('YYYY-MM-DD'),
    },
    {
      sliderLabel: 'Gestern',
      dateLabel: 'Gestern',
      date: moment($ttToday, 'DD.MM.YYYY').subtract(1, 'days').format('YYYY-MM-DD'),
    },
    {
      sliderLabel: 'Heute',
      dateLabel: 'Heute',
      date: moment($ttToday, 'DD.MM.YYYY').format('YYYY-MM-DD'),
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
          .then((data) => data)
          .catch((err) => console.error({ date, err })),
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
      async_data.update(() => newData[changedValue]);
      sliderValue.update(() => changedValue);
      if (changedValue < tt.length - 1) {
        ttIsActive.update(() => true);
      } else {
        ttIsActive.update(() => false);
      }
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

<div class="wrapper">
  {#if $ttIsActive}
    <div class="labelwrapper">
      <span class="icon"><IconTTactive /></span>
      <span class="label"> Zeitreise aktiviert: {tt[changedValue].dateLabel} </span>
    </div>
  {:else}
    <div class=" labelwrapper muted">
      <span class="icon"><IconTTinactive /></span>
      <span class="label"> Zeitreise inaktiv </span>
    </div>
  {/if}
  <div class="rangeslider">
    <RangeSlider
      pips
      all="label"
      bind:values
      range="max"
      springValues="{{ stiffness: 0.3, damping: 0.9 }}"
      formatter="{(v) => tt[v].sliderLabel}"
      max="{tt.length - 1}"
    />
  </div>
</div>
