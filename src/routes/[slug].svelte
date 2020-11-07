<style>
  .container {
    --font-size-small: 60%;
    display: grid;
    width: 100%;
    grid-gap: var(--spacing);
  }

  .container--aside {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    border-radius: 4px;
    padding: var(--spacing);
    background-color: var(--card-bg);
    color: var(--card-color);
  }

  .card--light {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    --card-bg: var(--bg-100);
    --card-color: var(--color);
    font-size: var(--font-size-small);
  }

  .card--ghost {
    border: 1px solid var(--bg-100);
    --card-bg: var(--body-bg);
    --card-color: var(--color);
  }

  .number {
    font-weight: 600;
  }
  .number--big {
    padding-top: var(--spacing-xs);
    font-size: 3em;
  }

  @media (min-width: 1024px) {
    .container--header {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

<script context="module">
  export async function preload({ params }) {
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

  let warningclass = 'warning';

  if (city.incidence < 35) {
    warningclass = 'info';
  }

  if (city.incidence >= 50 && city.incidence < 100) {
    warningclass = 'danger';
  }

  if (city.incidence >= 100) {
    warningclass = 'superdanger';
  }
</script>

<svelte:head>
  <title>{city.name} - Corona-Ampel für Franken und mehr</title>
</svelte:head>

<div class="container">
  <div class="container container--header">
    <div class="container container--inzidenz">
      <div class="{`card ${warningclass}`}">
        <div class="row">
          <div>{city.district}</div>
          <div>7-Tage Inzidenz pro 100.000</div>
        </div>
        <div class="row">
          <div>{city.name}</div>
          <div>{city.incidence}</div>
        </div>
      </div>
    </div>
    <div class="container container--aside">
      <div class="card card--light">
        <div>Neue Fälle von gestern</div>
        <div class="number number--big">+{city.newCases}</div>
      </div>
      <div class="card card--light">
        <div>Fälle der letzten 7 Tage</div>
        <div class="number number--big">+{city.cases_in_7_days}</div>
      </div>
      <div class="card card--light">
        <div>Fälle insgesamt</div>
        <div class="number number--big">{city.cases}</div>
      </div>
    </div>
  </div>
  <div class="container container--details">
    <div class="card row card--ghost">
      <div class="label">Tote bisher</div>
      <div class="number">{city.deaths}</div>
    </div>
    <div class="card row card--ghost">
      <div class="label">Todesrate</div>
      <div class="number">{Number(city.death_rate).toFixed(2)} %</div>
    </div>
    <div class="card row card--ghost">
      <div class="label">Einwohnerzahl</div>
      <div class="number">{city.population.toLocaleString('de')}</div>
    </div>
    <div class="card row card--ghost">
      <div class="label">7-Tage Inzidenz in {city.BL}</div>
      <div class="number">{Number(city.cases7_bl_per_100k).toFixed(2)}</div>
    </div>
  </div>
</div>

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
