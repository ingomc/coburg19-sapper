<style>
  .container {
    --font-size-small: 60%;
    display: grid;
    grid-gap: var(--spacing);
    width: 100%;
  }

  .container--aside {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .row {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .social {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .title {
    text-align: center;
    color: var(--bg-50);
  }
  .percent {
    color: var(--bg-50);
    font-weight: 100;
    padding-right: var(--spacing-sm);
  }
  .card {
    background-color: var(--card-bg);
    border-radius: 4px;
    color: var(--card-color);
    max-width: 100%;
    overflow: hidden;
    padding: var(--spacing);
  }

  .card--light {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-small);
    justify-content: space-between;
    text-align: center;
    --card-bg: var(--bg-200);
    --card-color: var(--color);
  }

  .card--ghost {
    border: 1px solid var(--bg-200);
    --card-bg: var(--body-bg);
    --card-color: var(--color);
  }

  .text--big {
    display: block;
    font-size: 1.5em;
    font-weight: 600;
    max-width: 100%;
    overflow: hidden;
    padding-top: var(--spacing-xs);
    text-overflow: ellipsis;
  }

  .incidence {
    flex: 0 0 auto;
    padding-left: 1rem;
  }

  .label {
    max-width: 100%;
    overflow: hidden;
    padding-right: var(--spacing);
    text-overflow: ellipsis;
  }

  .number {
    font-weight: 600;
  }

  .number--big {
    font-size: 3em;
    padding-top: var(--spacing-xs);
  }

  .charts-section {
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: 1fr;
    margin: 2rem 0;
    text-align: center;
  }

  section {
    background-color: var(--bg-200);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--spacing-xs) var(--spacing);
  }

  @media (min-width: 1024px) {
    .container--header {
      grid-template-columns: 1fr 1fr;
    }

    .container--details {
      grid-template-columns: 1fr 1fr;
    }

    .charts-section {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { city: data, slug: params.slug };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import moment from 'moment';
  import Line from 'svelte-chartjs/src/Line.svelte';
  import Social from '../components/Social.svelte';

  export let city;
  // get active Cases with date
  let activeCasesObj =
    city.allCases.recovered.datasets[0].data[city.allCases.recovered.datasets[0].data.length - 1];

  // how many months in graphs
  let months = 2;

  // options for graphs
  let options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520,
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'rgb(255, 255, 255)',
        usePointStyle: true,
      },
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          color: 'rgba(255,255,255,1)',
          time: {
            unit: 'days',
            tooltipFormat: 'DD.MM.YYYY',
            displayFormats: {
              months: 'DD.MM.YYYY',
              days: 'DD.MM.',
            },
          },
          ticks: {
            fontColor: 'rgba(255,255,255,1)',
            min: moment().subtract(months, 'months'),
            max: new Date(),
          },
          gridLines: {
            color: 'rgba(200, 200, 200, 0.1)',
            lineWidth: 1,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Anzahl Fälle',
            fontColor: 'white',
          },
          ticks: {
            maxTicksLimit: 5,
            beginAtZero: false,
            fontColor: 'rgba(255,255,255,1)',
          },
          gridLines: {
            color: 'rgba(200, 200, 200, 0.1)',
            lineWidth: 1,
          },
        },
      ],
    },
  };

  // manage warning state
  let warningclass = 'warning';
  let ampelColor = 'GELB';

  if (city.incidence < 35) {
    warningclass = 'info';
    ampelColor = 'GRÜN';
  }

  if (city.incidence >= 50 && city.incidence < 100) {
    warningclass = 'danger';
    ampelColor = 'ROT';
  }

  if (city.incidence >= 100) {
    warningclass = 'superdanger';
    ampelColor = 'DUNKEL-ROT';
  }

  // workaround for sapperbug for hash navigation
  function scrollTo({ target }) {
    document.querySelector(target.getAttribute('href')).scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
</script>

<svelte:head>
  <title>Corona-Ampel für {city.name}: ⚠️ Alle aktuellen Zahlen</title>
  <meta
    content="{`⚠️ Alle aktuellen Zahlen für ${city.name}: ⚠️ ${city.newCases} neue Fälle - ⚠️ Aktuelle Inzidenz: {city.incidence}`}"
    name="description"
  />
  <meta property="og:title" content="{`Corona-Ampel für ${city.name} (${city.district})`}" />
  <meta
    property="og:description"
    content="{`⚠️ Alle aktuellen Zahlen für ${city.name}: ⚠️ ${city.newCases} neue Fälle - ⚠️ Aktuelle Inzidenz: {city.incidence}`}"
  />
</svelte:head>

<div class="container">
  <div class="container container--header">
    <div class="container container--inzidenz">
      <div class="{`card ${warningclass}`}">
        <div class="row">
          <div><small>{city.district}</small></div>
          <div><small>7 Tage Inzidenz pro 100.000</small></div>
        </div>
        <div class="row">
          <div class="text--big">{city.name}</div>
          <div class="text--big incidence">{city.incidence > 0 ? city.incidence : '0'}</div>
        </div>
      </div>
    </div>
    <div class="container container--aside">
      <div class="card card--light">
        <div>Neue Fälle von gestern</div>
        <div class="number number--big">{city.newCases > 0 ? '+' + city.newCases : '0'}</div>
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
      <div class="label">7 Tage Inzidenz in {city.BL}</div>
      <div class="number">{Number(city.cases7_bl_per_100k).toFixed(2)}</div>
    </div>
  </div>
  {#if city.betten_frei !== null}
    <div class="title">Intensivstation</div>
    <div class="container container--details">
      <div class="card row card--ghost">
        <div class="label">Betten frei</div>
        <div class="number">
          <span class="percent">({Number(city.Anteil_betten_frei).toFixed(0)}%)</span>
          {city.betten_frei}
        </div>
      </div>
      <div class="card row card--ghost">
        <div class="label">Betten belegt</div>
        <div class="number">{city.betten_belegt}</div>
      </div>
      <div class="card row card--ghost">
        <div class="label">Betten belegt mit Covid-19</div>
        <div class="number">
          <span class="percent">({Number(city.Anteil_COVID_betten).toFixed(0)}%)</span>
          {city.faelle_covid_aktuell}
        </div>
      </div>
      <div class="card row card--ghost">
        <div class="label">Covid-19-Fälle die beatmet werden</div>
        <div class="number">{city.faelle_covid_aktuell_beatmet}</div>
      </div>
    </div>
  {:else}
    <div class="title">
      <small>
        Keine Intensivstation-Informationen vorhanden. Intensivpatienten werden in der Regel im
        nächsten Stadtkreis behandelt</small>
    </div>
  {/if}
</div>
<!-- <h2>COVID-19-Fälle nach Altersgruppe und Geschlecht</h2> -->
<div class="charts-section" id="hinweis">
  <section>
    <h2>Aktive Fälle in {city.name}</h2>
    <p>
      <small>*<b>Hinweis:</b>
        Genesene Patienten können niemals zu 100% richtig in der Statistik auftauchen, deswegen ist
        diese Statistik wahrscheinlich nicht zu 100% korrekt.</small>
    </p>
    <Line data="{city.allCases.recovered}" options="{options}" />
  </section>

  <section>
    <h2>Bisher erkrankte und bisher erholte Personen in {city.name}</h2>
    <Line data="{city.allCases.sick}" options="{options}" />
  </section>

  <!-- <Chart
    data="{city.statistics}"
    type="bar"
    tooltipOptions="{{ formatTooltipX: (d) => d + ' Jahre', formatTooltipY: (d) => d + ' Erkrankte' }}"
    colors="{['black', '#ffa3ef', 'light-blue']}"
  /> -->
</div>
<div class="social">
  <Social />
</div>

<div class="seo" itemscope itemtype="https://schema.org/FAQPage">
  <h1>Die Corona-Ampel für {city.name} ({city.district}) ist aktuell auf {ampelColor}!</h1>
  <p>
    Die 7-Tage Inzidenz pro 100.000 Einwohner in
    {city.name}
    ist aktuell
    <strong> {city.incidence > 0 ? city.incidence : '0'}. </strong>
    {#if warningclass == 'info'}
      Das ist die geringste Corona Warnstufe für den Bereich
      {city.district}
      {city.name}.
    {/if}
    {#if warningclass == 'warning'}
      Somit gilt im Bereich
      {city.district}
      {city.name}
      die gelbe (mittlere) Corona Warnstufe.
    {/if}
    {#if warningclass == 'danger'}
      Somit gilt im Bereich
      {city.district}
      {city.name}
      die rote (hohe) Corona Warnstufe ⚠️.
    {/if}
    {#if warningclass == 'superdanger'}
      Somit gilt im Bereich
      {city.district}
      {city.name}
      die dunkelrote (höchste) Corona Warnstufe ⚠️.
    {/if}
  </p>
  <p>
    {`
    ${city.district} ${city.name} hat insgesamt ${city.population.toLocaleString('de')} Einwohner. 
    Es gab bisher schon ${city.cases} positive Tests in der Region. Insgesamt sind hier schon 
    ${city.deaths}  Menschen mit oder an den Folgen des Corona-Virus gestorben.
    `}
  </p>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h2 itemprop="name">
      Wieviel Intensivbetten sind in
      {city.name}
      ({city.district}) frei oder belegt?
    </h2>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p>
        Aktuell sind
        {city.betten_frei}
        Betten frei, das entspricht
        {Number(city.Anteil_betten_frei).toFixed(0)}% aller Intensivbetten. Belegt sind
        {city.betten_belegt}
        Betten ({100 - Number(city.Anteil_betten_frei).toFixed(0)}%) der insgesamt
        {city.betten_frei + city.betten_belegt}
        vorhandenen Intensivbetten. Von den
        {city.betten_belegt}
        belegten Betten sind
        {city.faelle_covid_aktuell}
        mit Covid-19 Patienten belegt, das entspricht etwa
        {Number(city.Anteil_COVID_betten).toFixed(0)}%. Davon werden aktuell
        {city.faelle_covid_aktuell_beatmet}
        beatmet.
      </p>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h2 itemprop="name">Wieviele aktive Fälle gibt es in {city.name} ({city.district})?</h2>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p>
        Aktuell gibt es in
        {city.name}
        ({city.district})
        {activeCasesObj.y}
        aktive Fälle<a class="stern" href="#hinweis" on:click|preventDefault="{scrollTo}">*</a>
        (Stand:
        {moment(activeCasesObj.t).format('DD.MM.YYYY, hh:mm')}
        Uhr).
      </p>
    </div>
  </div>
</div>
