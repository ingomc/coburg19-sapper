<style>
  a {
    text-decoration: none;
  }

  /* reset liststyling */
  /* Remove default padding */
  ul,
  li {
    padding: 0;
    list-style: none;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--spacing);
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
    display: flex;
    justify-content: center;
    align-items: center;
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
  import Social from '../components/Social.svelte';
  import Card from '../components/Card.svelte';

  export let data;

  const { citys, update } = data;
  let sortedData = [];
  citys.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 0;
    }
    return 0;
  });
  citys.forEach((item) => {
    // SORT COBURG TO THE TOP
    const city = item.name.toLowerCase();
    const myCity = 'Coburg';
    if (city == myCity.toLowerCase()) {
      sortedData.unshift(item);
    } else {
      sortedData.push(item);
    }
  });
</script>

<svelte:head>
  <title>Corona-Ampel-Coburg</title>
  <meta property="og:title" content="Coburg: aktuelle 7 Tage Corona Inzidenz" />
  <meta
    property="og:description"
    content="🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Coburg, Bamberg, Schweinfurt, Lichtenfels, Haßberge und mehr!  ⚠️ Alle aktuelle Zahlen"
  />
  <meta property="og:url" content="https://www.corona-ampel-coburg.de/" />
</svelte:head>

<nav>
  <ul>
    {#each sortedData as city}
      <li>
        <a
          rel="prefetch"
          href="{city.slug}"
          title="{`Zu ${city.district} ${city.district} &rsaquo;`}"
        >
          <Card data="{city}" />
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
