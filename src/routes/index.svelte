<script context="module">
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

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>
<h2>Last update: {update}</h2>

{#each citys as city}
  <li>
    <a rel="prefetch" href={city.slug}>{city.district} {city.name} </a>
    / Inzidenz:
    {city.incidence}
    / Neue Fälle:
    {city.newCases > 0 ? city.newCases : 0}
    / Fälle der letzten 7 Tage:
    {city.cases_in_7_days}
  </li>
{/each}
