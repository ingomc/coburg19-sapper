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

  .timetravel {
    left: 50%;
    position: fixed;
    top: -3px;
    transform: translate3d(-50%, 0, 0);
    z-index: 10;
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
  import { fly } from 'svelte/transition';
  import { async_data, ttIsActive, ttToday } from '../stores/stores';
  import Loading from '../components/Loading.svelte';
  import Header from '../components/Header.svelte';
  import UpdateMessage from '../components/UpdateMessage.svelte';
  import Breadcrumb from '../components/Breadcrumb.svelte';
  import Footer from '../components/Footer.svelte';
  import Matomo from '../components/Matomo.svelte';
  import Message from '../components/Message.svelte';
  import { onMount } from 'svelte';

  export let update;
  export let segment;
  const { preloading } = stores();

  $: {
    if (!!$async_data && !!$async_data.update) {
      // assign timetraveldata
      update = $async_data.update;
    }
  }

  onMount(() => {
    ttToday.update(() => update.substring(0, update.indexOf(',')));
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

{#if $ttIsActive}
  <div class="timetravel" transition:fly="{{ y: 200, duration: 300 }}">
    <Message>
      <small>
        <svg
          class="danger-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1.5em"
          height="1.5em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          style="transform: translate3d(0, -2px, 0);
    vertical-align: middle;"
        ><path
            d="M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
            fill="currentColor"
          ></path></svg>
        <span> Zeitreise ist aktiv! </span>
      </small>
    </Message>
  </div>
{/if}
