<style>
  main {
    grid-area: main;
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    padding: var(--spacing-sm);
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
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
  import { onMount } from 'svelte';
  import Matomo, { matomo } from '../components/Matomo.svelte';
  import Loading from '../components/Loading.svelte';
  import Header from '../components/Header.svelte';
  import UpdateMessage from '../components/UpdateMessage.svelte';
  import Breadcrumb from '../components/Breadcrumb.svelte';
  import Footer from '../components/Footer.svelte';

  export let update;
  export let segment;

  const { page, preloading } = stores();

  const url = '//tracking.andre-bellmann.de';
  const siteId = 5;
  const cookies = false;
  let title = '';

  page.subscribe(({ path }) => {
    if (path == '/') {
      title = 'Home';
    } else {
      title = path.substring(1).toUpperCase();
    }
    matomo.setCustomUrl(path);
    matomo.setDocumentTitle(title);
    matomo.trackPageView();
  });

  onMount(() => {
    matomo.disableCookies();
    matomo.trackPageView();
    matomo.trackAllContentImpressions();
  });
</script>

{#if $preloading}
  <Loading />
{/if}

<Header>
  {#if !segment}
    <UpdateMessage>Stand: {update}</UpdateMessage>
  {/if}
</Header>

<!-- 
<Nav segment="{segment}" /> -->

{#if segment}
  <Breadcrumb data="{segment}" />
{/if}

<main class:loading="{$preloading}">
  <slot />
</main>

{#if segment !== 'impressum'}
  <Footer update="{update}" />
{/if}

<Matomo url="{url}" siteId="{siteId}" cookies="{cookies}" />
