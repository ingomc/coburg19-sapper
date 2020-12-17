<style>
  main {
    box-sizing: border-box;
    grid-area: main;
    margin: 0 auto;
    max-width: var(--max-width);
    overflow: hidden;
    padding: var(--spacing-sm);
    position: relative;
    width: 100%;
  }

  .loading {
    opacity: 0.5;
  }
</style>

<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((data) => {
        return { update: data.update };
      });
  }
</script>

<script>
  import { stores } from '@sapper/app';
  import { async_data } from '../stores/stores';
  import Loading from '../components/Loading.svelte';
  import Header from '../components/Header.svelte';
  import UpdateMessage from '../components/UpdateMessage.svelte';
  import Breadcrumb from '../components/Breadcrumb.svelte';
  import Footer from '../components/Footer.svelte';
  import Matomo from '../components/Matomo.svelte';

  export let update;
  export let segment;

  $: {
    if (!!$async_data.update) {
      // assign timetraveldata
      update = $async_data.update;
    }
  }

  const { preloading } = stores();
</script>

<svelte:head>
  <meta
    property="og:url"
    href="{`https://www.corona-ampel-coburg.de${!!segment ? `/${segment}/` : ''}`}"
  />
  <link
    rel="canonical"
    href="{`https://www.corona-ampel-coburg.de${!!segment ? `/${segment}/` : ''}`}"
  />
</svelte:head>

{#if $preloading}
  <Loading />
{/if}

<Header segment="{segment}">
  {#if !segment}
    <UpdateMessage>Stand: {update}</UpdateMessage>
  {/if}
</Header>

{#if segment}
  <Breadcrumb data="{segment}" />
{/if}

<main class:loading="{$preloading}">
  <slot />
</main>

{#if segment !== 'impressum'}
  <Footer update="{update}" />
{/if}

<Matomo />
