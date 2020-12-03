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
  import { onMount } from 'svelte';
  import RangeSlider from 'svelte-range-slider-pips';
  import Social from '../components/Social.svelte';
  import Card from '../components/Card.svelte';
  import { sortCitys } from '../utils/sortCitys';

  const moods = ['😁', '😀', '😊', '😐', '😥', '😫'];

  export let data;
  let values;

  let { citys, germannew, bavarianew } = data;

  let sortedCitys = [];
  sortedCitys = sortCitys(citys);

  onMount(async () => {
    let d = await fetch('./data/2020-12-02/data.json').then((res) => res.json());
    // assign timetraveldata
    sortedCitys = sortCitys(d.citys);
    germannew = d.germannew;
    bavarianew = d.bavarianew;
  });
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

<div>
  <h1>slider</h1>
  <RangeSlider
    pips
    all="label"
    bind:values
    springValues="{{ stiffness: 0.3, damping: 0.9 }}"
    formatter="{(v) => moods[v]}"
    max="{moods.length - 1}"
  />
  <p>{moods[values]}</p>
</div>
