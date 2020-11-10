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
  import Loading from '../components/Loading.svelte';
  import Header from '../components/Header.svelte';
  import UpdateMessage from '../components/UpdateMessage.svelte';
  import Breadcrumb from '../components/Breadcrumb.svelte';
  import Footer from '../components/Footer.svelte';

  export let update;
  export let segment;

  const { page, preloading } = stores();



  onMount(async () => {
    // normal site tracking
    var siteID = '5';
    var _paq = (window._paq = window._paq || []);
    _paq.push(['disableCookies']);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function () {
      var u = '//tracking.andre-bellmann.de/';
      _paq.push(['setTrackerUrl', u + 'phpfortr.php']);
      _paq.push(['setSiteId', siteID]);
      var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
      g.type = 'text/javascript';
      g.async = true;
      g.crossorigin = 'anonymous';
      g.src = u + 'jsfortr.js';
      s.parentNode.insertBefore(g, s);
    })();

    // SPA Tracking
    page.subscribe(({ path, params, query }) => {
      _paq.push(['setCustomUrl', $page.path]);
      _paq.push(['setDocumentTitle', params.slug]);
      _paq.push(['trackPageView']);
  })

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
