<style>
  a {
    text-decoration: none;
  }

  h2 {
    /* color: var(--bg-100); */
    padding: var(--spacing-sm) var(--spacing-xl);
    text-align: center;
  }

  /* Landkreise  */

  /* reset liststyling */
  /* Remove default padding */
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul {
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    ul,
    ul.cols2 {
      grid-template-columns: 1fr 1fr;
    }

    ul.cols2 {
      max-width: var(--max-width-container);
      margin: 0 auto;
    }
  }
  @media (min-width: 1024px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  li,
  a {
    /* damit die Höhe 100% auf allen Browsern hat */
    display: grid;
  }

  .social {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .hints {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .list-tile {
    display: flex;
  }

  .logo {
    flex-shrink: 0;
    width: 24px;
  }

  .logo img {
    border-radius: var(--border-radius);
    display: block;
    overflow: hidden;
  }

  .details {
    align-self: center;
    margin: 0;
    padding-left: 0.75rem;
    text-align: left;
    line-height: 1rem;
  }
</style>

<script context="module">
  export function preload() {
    // needs this for starting generation
    const sitemap = this.fetch('sitemap.xml');
    const index = this.fetch(`index.json`)
      .then((r) => r.json())
      .then((data) => {
        return { data };
      });
    return index;
  }
</script>

<script>
  import { async_data } from '../stores/stores';
  import Social from '../components/Social.svelte';
  import Card from '../components/Card.svelte';
  import CardNarrow from '../components/CardNarrow.svelte';
  import { sortCitys } from '../utils/sortCitys';
  import Message from '../components/Message.svelte';
  // import Snow from '../components/Snow.svelte';
  import Timetravel from '../components/Timetravel.svelte';
  import Hospitalization from '../components/Hospitalization.svelte';
  // import moment from 'moment';

  export let data;

  let { citys, germannew, bavarianew, germanincidence, bavariaincidence, hospitalization } = data;

  let sortedCitys = [];
  sortedCitys = sortCitys(citys);

  let germanycard = {
    name: 'Deutschland',
    incidence: germanincidence,
    newCases: germannew,
  };
  let bavariacard = {
    name: 'Bayern',
    incidence: bavariaincidence,
    newCases: bavarianew,
  };

  $: {
    if (!!$async_data && !!$async_data.citys) {
      // assign timetraveldata
      sortedCitys = sortCitys($async_data.citys);
      germannew = $async_data.germannew;
      bavarianew = $async_data.bavarianew;
      germanycard.incidence = $async_data.germanincidence;
      bavariacard.incidence = $async_data.bavariaincidence;
      germanycard.newCases = $async_data.germannew;
      bavariacard.newCases = $async_data.bavarianew;
      hospitalization = $async_data.hospitalization;
    }
  }
</script>

<svelte:head>
  <title>Corona-Ampel-Coburg: 🚦 Aktuelle Fälle und Zahlen</title>
  <meta
    content="🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"
    name="description"
  />
  <meta
    property="og:title"
    content="Corona-Ampel Coburg und Umgebung: aktuelle 7 Tage Corona Inzidenz"
  />
  <meta
    property="og:description"
    content="🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Kronach, Schweinfurt, Lichtenfels, Haßberge, Hildburghausen und Sonneberg !  ⚠️ Alle aktuellen Zahlen ⚠️ Alle aktuellen Fälle"
  />
</svelte:head>

<div class="homepage">
  <center>
    <Message until="2023-12-15T23:00:00Z">
      <!-- +1 Stunde -->
      <a class="list-tile" href="https://corona-ampel.app/?coburg">
        <div class="logo">
          <img
            src="https://www.corona-ampel.app/favicons/maskable_icon_x128.png"
            width="24"
            height="24"
            alt="Ampel-Icon"
            style=" height: auto;
  max-width: 100%;"
          />
        </div>
        <p class="details">
          <small> <strong>Zur App mit ALLEN Landkreisen&nbsp;&rsaquo;</strong> </small>
        </p>
      </a>
    </Message>
  </center>

  <center>
    <Message until="2021-09-09T17:00:00Z">
      <!-- +1 Stunde -->
      <small>
        <span> 💥 <strong>ACHTUNG!</strong> Das RKI aktualisiert aktuell noch ihre Daten ... </span>
      </small>
    </Message>
  </center>

  <!-- <Snow /> -->
  <div style="margin-top:10px;">
    <ul class="cols2">
      <li>
        <CardNarrow bind:data="{germanycard}" />
      </li>
      <li>
        <CardNarrow bind:data="{bavariacard}" />
      </li>
    </ul>
  </div>

  {#if !!hospitalization}
    <h2>Hospitalisierung in Bayern</h2>
    <Hospitalization bind:data="{hospitalization[0]}" />
    <!-- <br />
    <center>
      <Message until="2022-12-15T23:00:00Z">
        <p style="margin:0 .5rem;">
          <small> <strong>Erweiterte Maßnahmen seit 28.12.2021</strong> </small>
        </p>
      </Message>
    </center> -->
    <h2>7 Tage Inzidenz</h2>
  {/if}

  <nav>
    <ul id="hp-cardlist">
      {#each sortedCitys as city}
        <li>
          <a rel="prefetch" href="{city.slug}/" title="{`Zu ${city.district} ${city.name} ›`}">
            <Card bind:data="{city}" />
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="social">
    <Social />
  </div>
  <br />
  <center>
    <Message until="2024-09-09T17:00:00Z" left>
      <!-- +1 Stunde -->
      <small>
        <span><strong>Hinweis</strong>: Alle Angaben sind ohne Gewähr. Dies ist nicht die offizielle
          Corona-Ampel. Farben können eventuell abweichen und sind nur zur Orientierung gedacht.</span>
      </small>
    </Message>
    <Message until="2024-09-09T17:00:00Z" left>
      <!-- +1 Stunde -->
      <small>
        <span><strong>Hinweis zur Hospitalisierung</strong>: Die wirklichen Zahlen zur
          Hospitalisierung können nicht zu 100% korrekt angegeben werden, da es über Tage und Wochen
          hinweg noch Nachmeldungen gibt. Ich kann hier leider nur die offiziellen Zahlen des LGLs
          angeben, nach der sich unsere Regierung in Bayern orientiert.
          <a
            href="https://www.lgl.bayern.de/gesundheit/infektionsschutz/infektionskrankheiten_a_z/coronavirus/karte_coronavirus/index.htm#wKennzahlen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small>Quelle: LGL</small>
          </a></span>
      </small>
    </Message>
  </center>

  <Timetravel />
  <div class="hints">
    <Message until="2021-01-31T00:00:00Z">
      <small>
        <svg
          class="danger-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1.5em"
          height="1.5em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          style="transform: translate3d(0, -2px, 0);
  vertical-align: middle;"
        ><path
            d="M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
            fill="currentColor"
          ></path></svg>
        <span> Ab 200 gelten weitere Maßnahmen in Bayern! </span>
      </small>
    </Message>
  </div>
</div>
