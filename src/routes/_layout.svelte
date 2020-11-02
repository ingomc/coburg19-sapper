<script>
  import { stores } from "@sapper/app";
  const { preloading } = stores();
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Loading from "../components/Loading.svelte";

  export let segment;
</script>

<style>
  main {
    grid-area: main;
    position: relative;
    max-width: 92em;
    padding: var(--spacing);
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
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

<Footer />
