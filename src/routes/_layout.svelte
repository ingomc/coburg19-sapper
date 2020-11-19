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
  import Loading from '../components/Loading.svelte';
  import Header from '../components/Header.svelte';
  import UpdateMessage from '../components/UpdateMessage.svelte';
  import Breadcrumb from '../components/Breadcrumb.svelte';
  import Footer from '../components/Footer.svelte';

  export let update;
  export let segment;

  const { page, preloading } = stores();

  let title = 'Corona';
  let siteId = '5';

  page.subscribe(({ host, path, params, query }) => {
    let url = 'https://tracking.andre-bellmann.de/phpfortr.php';
    if (typeof fetch == 'function') {
      let urlParams = [
        `?action_name=${title} - ${$page.path}`,
        `&rec=1`,
        `&idsite=${siteId}`,
        `&rand=${Date.now()}`,
      ];

      urlParams.map((item) => {
        url += item;
      });
      url = encodeURI(url.replace(/\n|\r/g, ''));

      // console.log(path);
      // console.log($page.path);
      // console.log(url);
      const tracking = fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      })
        .then((_res) => _res)
        .then(() => {
          // console.log("delete params");
          urlParams = [];
        });
    }
  });
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
