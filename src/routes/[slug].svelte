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
        <li>Inzidenz: {city.incidence}</li>
        <li>Bevölkerung: {city.population}</li>
        <li>Fälle: {city.cases}</li>
        <li>Tote: {city.deaths}</li>
        <li>Neue Fälle: {city.newCases}</li>
    </ul>
</div>
