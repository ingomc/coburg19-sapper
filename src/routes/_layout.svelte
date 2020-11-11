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
  import { afterUpdate, onMount } from 'svelte';
  import Loading from '../components/Loading.svelte';
  import Header from '../components/Header.svelte';
  import UpdateMessage from '../components/UpdateMessage.svelte';
  import Breadcrumb from '../components/Breadcrumb.svelte';
  import Footer from '../components/Footer.svelte';

  export let update;
  export let segment;

  const { page, preloading } = stores();
  const { host } = $page;

  let title = 'Corona';
  let siteId = '5';
  let url = 'https://tracking.andre-bellmann.de/phpfortr.php';

  
  page.subscribe(({ path, params, query }) => {
    if (typeof fetch == 'function') {
    const urlParams = [
      `?action_name=${title}`,
      `&rec=1`,
      `&idsite=${siteId}`
    ];
    
    urlParams.map((item) => {
      url += item;
    });
    url = encodeURI(url.replace(/\n|\r/g, ''));
    
    console.log(path);
    console.log($page.path);
    console.log(url);
      const tracking = fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      }).then((_res) => _res);
    }
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
