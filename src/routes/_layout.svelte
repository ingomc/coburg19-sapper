<script>
  import { stores } from "@sapper/app";
  const { preloading } = stores();
  import Nav from "../components/Nav.svelte";
  import Loading from "../components/Loading.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 0.5rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .loading {
    opacity: 0.5;
  }
</style>

{#if $preloading}
  <Loading />
{/if}

<Nav {segment} />

<main class:loading={$preloading}>
  <slot />
</main>
