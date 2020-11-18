<style>
  .header {
    display: block;
    grid-area: header;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  header {
    background-color: var(--bg-200);
    box-shadow: var(--box-shadow);
    display: block;
    position: relative;
    text-align: center;
    z-index: 10;
  }

  .wrapper {
    display: block;
    padding: 0.75rem 1rem;
    text-decoration: none;
  }

  h1 {
    font-size: 5vw;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.2vw;
    margin: 0;
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 0.75rem;
    }
  }
  @media (min-width: 1024px) {
    .wrapper {
      align-items: center;
      display: inline-flex;
      justify-content: center;
    }
  }

  .message {
    bottom: -3rem;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
    z-index: 5;
  }
</style>

<script>
  import { fade, fly } from 'svelte/transition';
  let visible = false;
  setTimeout(function () {
    visible = true;
  }, 1000);
  setTimeout(function () {
    visible = false;
  }, 3500);
</script>

<div class="header">
  <header>
    <a class="wrapper" href="./" title="Zur Startseite &rsaquo;">
      <h1>🚦 Corona-Ampel für Coburg 🚦</h1>
      <h2>7 Tage Inzidenz für Coburg und Umgebung</h2>
    </a>
  </header>
  {#if visible}
    <div
      class="message"
      in:fly="{{ y: -100, duration: 500 }}"
      out:fly="{{ y: -100, duration: 1000 }}"
    >
      <slot />
    </div>
  {/if}
</div>
