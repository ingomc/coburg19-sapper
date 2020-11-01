<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
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
  export let city;
  console.log(city.statistics);
</script>

<style>
</style>

<svelte:head>
  <title>{city.name}</title>
</svelte:head>

<h1>{city.name}</h1>
<h2>{city.district}</h2>

<div class="content">
  <ul>
    <li>Inzidenz: {Number(city.incidence).toFixed(2)}</li>
    <li>Einwohnerzahl: {city.population}</li>
    <li>Fälle: {city.cases}</li>
    <li>Tote: {city.deaths}</li>
    <li>Neue Fälle: {city.newCases}</li>
    <li>Totesrate: {Number(city.death_rate).toFixed(2)} %</li>
    <li>
      7 Tage Inzidenz im Bundesland
      {city.BL}:
      {Number(city.cases7_bl_per_100k).toFixed(2)}
    </li>
    <li>Bundesland: {city.BL}</li>
  </ul>
</div>
