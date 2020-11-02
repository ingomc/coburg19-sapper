<script>
  import { stores } from "@sapper/app";
  const { preloading } = stores();
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: .5rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

{#if $preloading}
  <h1>LOADING</h1>
{/if}

<Nav {segment} />

<main>
  <slot />
</main>
