<style>
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { city: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Social from '../components/Social.svelte';
  import Chart from 'svelte-frappe-charts';
  export let city;

  // console.log("allcases: ", city.allCases);

  //   city.statistics.tooltipOptions = { formatTooltipX: (d) => d + " Jahre" };
</script>

<svelte:head>
  <title>{city.name} - Corona-Ampel für Franken und mehr</title>
</svelte:head>

<h1>{city.name}</h1>
<h2>{city.district}</h2>

<div class="content">
  <ul>
    <li>{city.cases_in_7_days} Fälle in den letzten 7 Tagen</li>
    <li>Inzidenz: {Number(city.incidence).toFixed(2)}</li>
    <li>Einwohnerzahl: {city.population}</li>
    <li>Fälle: {city.cases}</li>
    <li>Tote: {city.deaths}</li>
    <li>Neue Fälle: {city.newCases}</li>
    <li>Totesrate: {Number(city.death_rate).toFixed(2)} %</li>
    <li>7 Tage Inzidenz im Bundesland {city.BL}: {Number(city.cases7_bl_per_100k).toFixed(2)}</li>
    <li>Bundesland: {city.BL}</li>
  </ul>

  <h2>COVID-19-Fälle nach Altersgruppe und Geschlecht</h2>
  <Chart
    data="{city.statistics}"
    type="bar"
    tooltipOptions="{{ formatTooltipX: (d) => d + ' Jahre', formatTooltipY: (d) => d + ' Erkrankte' }}"
    colors="{['black', '#ffa3ef', 'light-blue']}"
  />
  <small>... und was mit divers 🤷🏻‍♂️ ?</small>

  <h2>COVID-19 Fälle / Genesen / Aktive Fälle in {city.name}</h2>
  <Chart
    data="{city.allCases}"
    type="line"
    colors="{['black', '#ffa3ef', 'light-blue']}"
    xaxismode="tick"
    lineOptions="{{ spline: 1, hideDots: 1 }}"
  />
  <small>*Die Genesenen-Statistik ist umstritten</small>

  <hr />
  <h2>Neue Fälle und Aktive Fälle in eine Statistik</h2>
  <div class="social">
    <Social />
  </div>
</div>
