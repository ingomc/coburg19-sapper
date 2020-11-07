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
    max-width: 100%;
    overflow: hidden;
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

  .text--big {
    display: block;
    padding-top: var(--spacing-xs);
    font-size: 1.5em;
    font-weight: 600;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .incidence {
    flex: 0 0 auto;
    padding-left: 1rem;
  }

  .label {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: var(--spacing);
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
    .container--details {
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
          <div><small>{city.district}</small></div>
          <div><small>7-Tage Inzidenz pro 100.000</small></div>
        </div>
        <div class="row">
          <div class="text--big">{city.name}</div>
          <div class="text--big incidence">{city.incidence}</div>
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
<div>
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
