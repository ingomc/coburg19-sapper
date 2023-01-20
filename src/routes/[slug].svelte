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

  .daysinfo-container {
    max-width: 100%;
    overflow-x: auto;
  }

  .daysinfo-row {
    font-size: 80%;
    display: flex;
    flex-wrap: nowrap;

    justify-content: flex-start;
    align-items: center;
  }
  .daysinfo {
    font-weight: 600;
    color: var(--info-bg);
    text-align: center;
    background-color: var(--bg-200);
    border-radius: 4px;
    padding: var(--spacing);
    margin-right: var(--spacing);
    white-space: nowrap;
  }
  .daysinfo.above {
    color: var(--danger-bg);
  }

  .title {
    color: var(--bg-50);
    text-align: center;
    margin: 0 1em;
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
    font-size: 2em;
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

  .new {
    background-color: var(--warning-bg);
    border-radius: var(--border-radius);
    color: var(--warning-contrast);
    font-size: 0.8em;
    margin: 0 0.2rem;
    padding: 0.1rem 0.25rem;
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
  import { tick } from 'svelte';
  import { async_data } from '../stores/stores';
  import moment from 'moment';
  import Line from 'svelte-chartjs/src/Line.svelte';
  import Bar from 'svelte-chartjs/src/Bar.svelte';
  import Social from '../components/Social.svelte';
  import Timetravel from '../components/Timetravel.svelte';
  import Message from '../components/Message.svelte';

  export let city;
  export let remount = false;

  let cityId = city.id;

  // how many months in graphs
  let months = 2;

  // options for graphs
  // Todo: reducer mit neuestem und ältestem Datum
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

  let daysinfo = {
    165: { above: 0, below: 0 },
    150: { above: 0, below: 0 },
    100: { above: 0, below: 0 },
    50: { above: 0, below: 0 },
    35: { above: 0, below: 0 },
  };

  // Barchart has an update bug, fix it with complete remount the component
  async function remountComponent() {
    if (remount) {
      return;
    }
    remount = true;
    // Wait for the next tick
    await tick();
    remount = false;
  }

  $: {
    remountComponent(); // Barchart has an update bug, fix it with complete remount the component

    // apply new data
    if (!!$async_data && !!$async_data.citys) {
      const found = $async_data.citys.find((el) => cityId == el.id);
      city = { ...found };
    }

    const slicedData = city.allIncidences.incidences.datasets[0].data.slice(0, 7);
    const limits = [165, 150, 100, 50, 35];

    daysinfo = {
      165: { above: 0, below: 0 },
      150: { above: 0, below: 0 },
      100: { above: 0, below: 0 },
      50: { above: 0, below: 0 },
      35: { above: 0, below: 0 },
    };

    console.log(slicedData);
    // unter limit
    slicedData.reverse().forEach((num) => {
      // console.log(num.y);
      limits.forEach((limit) => {
        if (num.y < limit) {
          // console.log(daysinfo[limit]);
          daysinfo[limit].below++;
        } else {
          daysinfo[limit].below = 0;
        }
      });
    });

    // über limit
    slicedData.forEach((num) => {
      // console.log(num.y);
      limits.forEach((limit) => {
        if (num.y >= limit) {
          console.log('above', num.t, num.y, limit);
          // console.log(limit);
          daysinfo[limit].above++;
        } else {
          daysinfo[limit].above = 0;
        }
      });
    });
    daysinfo = Object.entries(daysinfo);
    console.log(daysinfo);

    // manage warning state
    warningclass = 'warning';
    ampelColor = 'GELB';

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
  }
</script>

<svelte:head>
  <title>Corona-Ampel {city.name} ({city.district}): ⚠️ Aktuelle Covid-Zahlen und Inzidenz</title>
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

{#if Object.keys(city).length}
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
            <div class="text--big incidence">
              {city.incidence > 0 ? Number(city.incidence).toLocaleString('de-DE', {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  }) : '0'}
            </div>
          </div>
        </div>
      </div>
      <div class="container container--aside">
        <div class="card card--light">
          <div>Neue Fälle von gestern</div>
          <div class="number number--big">
            {city.newCases > 0 ? '+' + city.newCases.toLocaleString('de-DE') : '0'}
          </div>
        </div>
        <div class="card card--light">
          <div>Fälle der letzten 7 Tage</div>
          <div class="number number--big">+{city.cases_in_7_days.toLocaleString('de-DE')}</div>
        </div>
        <div class="card card--light">
          <div>Fälle insgesamt</div>
          <div class="number number--big">{city.cases.toLocaleString('de-DE')}</div>
        </div>
      </div>
    </div>
    <div class="card card--ghost">
      <div class="daysinfo-container">
        <div class="daysinfo-row">
          <div class="title">Stabilität:</div>
          {#each daysinfo as dayinfo}
            {#if dayinfo[1].above > 0 && dayinfo[1].above < 7}
              <span class="daysinfo above">{dayinfo[1].above}
                {dayinfo[1].above == 1 ? 'Tag' : 'Tage'}
                über
                {dayinfo[0]}</span>
            {:else if dayinfo[1].above >= 7}
              <span class="daysinfo above">>7 Tage über {dayinfo[0]}</span>
            {/if}
            {#if dayinfo[1].below > 0 && dayinfo[1].below < 7}
              <span class="daysinfo">{dayinfo[1].below}
                {dayinfo[1].below == 1 ? 'Tag' : 'Tage'}
                unter
                {dayinfo[0]}</span>
            {:else if dayinfo[1].below >= 7}
              <span class="daysinfo">>7 Tage unter {dayinfo[0]}</span>
            {/if}
          {/each}
        </div>
      </div>
    </div>
    <div class="container container--details">
      <div class="card row card--ghost">
        <div class="label">Tote bisher</div>
        <div class="number">{city.deaths.toLocaleString('de-DE')}</div>
      </div>
      <div class="card row card--ghost">
        <div class="label">Todesrate</div>
        <div class="number">
          {Number(city.death_rate).toLocaleString('de-DE', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}
          %
        </div>
      </div>
      <div class="card row card--ghost">
        <div class="label">Einwohnerzahl</div>
        <div class="number">{city.population ? city.population.toLocaleString('de') : '-'}</div>
      </div>
      <div class="card row card--ghost">
        <div class="label">7 Tage Inzidenz in {city.BL}</div>
        <div class="number">
          {city.cases7_bl_per_100k ? Number(city.cases7_bl_per_100k).toLocaleString('de-DE', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              }) : '-'}
        </div>
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
    {:else if city.its_error == false}
      <div class="title">
        <small>
          Keine Intensivstation-Informationen vorhanden. Intensivpatienten werden in der Regel im
          nächsten Stadtkreis behandelt</small>
      </div>
    {:else}
      <div class="title">
        <small>
          Keine Intensivstation-Informationen vorhanden. Intensivpatienten werden in der Regel im
          nächsten Stadtkreis behandelt</small>
      </div>
    {/if}
  </div>

  <div class="charts-section" id="hinweis">
    {#if !!city.allCases && city.allCases.recovered}
      <section>
        <h2>Aktive Fälle in {city.name}</h2>
        <p>
          <small>*<b>Hinweis:</b>
            Genesene Patienten können niemals zu 100% richtig in der Statistik auftauchen, deswegen
            ist diese Statistik wahrscheinlich nicht zu 100% korrekt.</small>
        </p>
        <Line data="{city.allCases.recovered}" options="{options}" />
      </section>
    {/if}
    <!-- Barchart has an update bug, fix it with complete remount the component 
    {#if city.allIncidences && city.allIncidences.incidences && !remount}
      <section>
        <h2>Inzidenz-Verlauf {city.name}</h2>
        <Bar data="{city.allIncidences.incidences}" options="{options}" />
      </section>
    {/if}
-->
    <!-- Barchart has an update bug, fix it with complete remount the component -->
    {#if city.allCases && city.allCases.casesperday && !remount}
      <section>
        <h2>Neue Fälle pro Tag in {city.name}</h2>
        <Bar data="{city.allCases.casesperday}" options="{options}" />
      </section>
    {/if}

    {#if !!city.allCases && city.allCases.sick}
      <section>
        <h2>Alle Fälle bisher in {city.name}</h2>
        <Line data="{city.allCases.sick}" options="{options}" />
      </section>
    {/if}
  </div>
  <div class="social">
    <Social />
  </div>

  <div class="seo" itemscope itemtype="https://schema.org/FAQPage">
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h1>Die Corona-Ampel für {city.name} ({city.district}) ist aktuell auf {ampelColor}!</h1>
      <h2 itemprop="name">Aktuelle Inzidenz in {city.name} ({city.district})</h2>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
          <p>
            Die 7-Tage Inzidenz pro 100.000 Einwohner in
            {city.name}
            ist aktuell
            <strong>
              {city.incidence > 0 ? Number(city.incidence).toLocaleString('de-DE', {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  }) : '0'}.
            </strong>
            <!-- {#if warningclass == 'info'}
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
            {/if} -->
          </p>
          <p>
            {`
          ${city.district} ${city.name} hat insgesamt ${city.population ? city.population.toLocaleString('de') : '-'} Einwohner. 
          Es gab bisher schon ${city.cases.toLocaleString('de-DE')} positive Tests in der Region. Insgesamt sind hier schon 
          ${city.deaths}  Menschen mit oder an den Folgen des Corona-Virus gestorben.
          `}
          </p>
        </div>
      </div>
    </div>

    {#if city.betten_frei > 0 && city.betten_belegt > 0 && city.Anteil_betten_frei > 0}
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h2 itemprop="name">
          Wieviel Intensivbetten sind in
          {city.name}
          ({city.district}) frei oder belegt?
        </h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">
            Aktuell
            {#if city.betten_frei == 1}
              ist ein Bett frei,
            {:else if city.betten_frei > 1}
              sind
              {city.betten_frei}
              Betten frei,
            {:else}ist kein Bett frei,{/if}
            das entspricht
            {Number(city.Anteil_betten_frei).toFixed(0)}% aller Intensivbetten.
            {#if city.betten_belegt == 1}
              Belegt ist ein
              {city.betten_belegt}
              Bett
            {:else if city.betten_belegt > 1}
              Belegt sind
              {city.betten_belegt}
              Betten
            {:else}Belegt ist kein Bett{/if}
            ({100 - Number(city.Anteil_betten_frei).toFixed(0)}%) der insgesamt
            {city.betten_frei + city.betten_belegt}
            vorhandenen Intensivbetten. Von den
            {city.betten_belegt}
            belegten Betten sind
            {city.faelle_covid_aktuell}
            mit Covid-19 Patienten belegt, das entspricht etwa
            {Number(city.Anteil_COVID_betten).toFixed(0)}%.
            {#if city.faelle_covid_aktuell_beatmet < 1}
              Aktuell wird niemand beatmet.
            {:else if city.faelle_covid_aktuell_beatmet == 1}
              Davon wird aktuell einer beatmet.
            {:else}Davon werden aktuell {city.faelle_covid_aktuell_beatmet} beatmet.{/if}
          </p>
        </div>
      </div>
    {/if}
  </div>
{:else}
  <div class="container container--details">
    <div class="card row card--ghost">Keine Zeitreisedaten für diesen Tag vorhanden!</div>
  </div>
{/if}
<Timetravel />
