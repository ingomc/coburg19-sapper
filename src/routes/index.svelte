<style>
  a {
    text-decoration: none;
  }

  /* Allgemeine Statistiken  */
  .statistics {
    display: flex;
    margin: var(--spacing-lg) auto;
    position: relative;
    text-align: center;
    width: 100%;
  }

  .statistics::after {
    background-color: var(--bg-100);
    content: '';
    display: block;
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    width: 1px;
  }

  .column {
    flex: 1;
    padding: var(--spacing-sm);
  }

  .label {
    color: var(--bg-100);
    font-size: 0.7rem;
    font-weight: 400;
    margin-bottom: var(--spacing-sm);
    margin-top: 0;
  }

  .cases {
    color: var(--bg-50);
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .statistics {
      display: block;
      margin: 0 auto;
      text-align: center;
      white-space: nowrap;
      width: auto;
    }

    .statistics::after {
      display: none;
    }

    .column {
      display: inline-flex;
    }

    .label {
      font-size: 0.8rem;
      margin: 0 0.5rem;
    }

    .cases {
      font-size: 0.8rem;
      margin: 0 0.5rem;
    }
  }

  /* Landkreise  */

  /* reset liststyling */
  /* Remove default padding */
  ul,
  li {
    list-style: none;
    padding: 0;
  }

  ul {
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    ul {
      grid-template-columns: 1fr 1fr;
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
  import Timetravel from '../components/Timetravel.svelte';
  import { sortCitys } from '../utils/sortCitys';
  import Message from '../components/Message.svelte';
  import CircleButton from '../components/CircleButton.svelte';

  export let data;

  let { citys, germannew, bavarianew } = data;

  let sortedCitys = [];
  sortedCitys = sortCitys(citys);

  $: {
    if (!!$async_data.citys) {
      // assign timetraveldata
      sortedCitys = sortCitys($async_data.citys);
      germannew = $async_data.germannew;
      bavarianew = $async_data.bavarianew;
    }
  }

  // Handle click on circle button
  function handleCircleButtonClick() {
    console.log('Clicki');
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

<section class="statistics">
  <div class="column left">
    <h3 class="label">Neue Fälle in Deutschland</h3>
    <div class="cases">+{germannew.toLocaleString('de')}</div>
  </div>
  <div class="column right">
    <h3 class="label">Neue Fälle in Bayern</h3>
    <div class="cases">+{bavarianew.toLocaleString('de')}</div>
  </div>
</section>

<nav>
  <ul id="hp-cardlist">
    {#each sortedCitys as city}
      <li>
        <a rel="prefetch" href="{city.slug}/" title="{`Zu ${city.district} ${city.name} ›`}">
          <Card bind:data="{city}" />
        </a>
      </li>
    {/each}
    <li>
      <div class="social">
        <Social />
      </div>
    </li>
  </ul>
</nav>
<CircleButton on:click="{() => handleCircleButtonClick()}">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      d="M4 2v6H2V2h2M2 22v-6h2v6H2m3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m11-8c4.42 0 8 3.58 8 8s-3.58 8-8 8c-3.6 0-6.64-2.38-7.65-5.65L6 12l2.35-2.35C9.36 6.38 12.4 4 16 4m-1 9l4.53 2.79l.8-1.29l-3.83-2.3V7H15v6z"
      fill="currentColor"
    ></path></svg>
</CircleButton>
<Timetravel />
<div class="hints">
  <Message until="2021-01-05T00:00:00Z">
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
