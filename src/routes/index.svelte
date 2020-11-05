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
</style>

<script context="module">
  import Card from '../components/Card.svelte';
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((data) => {
        return { data };
      });
  }
</script>

<script>
  export let data;
  const { citys, update } = data;
</script>

<svelte:head>
  <title>Corona-Ampel-Coburg</title>
</svelte:head>

<nav>
  <ul>
    {#each citys as city}
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
  </ul>
</nav>
