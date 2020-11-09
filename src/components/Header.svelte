<style>
  .header {
    display: block;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  header {
    display: block;
    position: relative;
    background-color: var(--bg-200);
    text-align: center;
    box-shadow: var(--box-shadow);
    z-index: 10;
  }

  .wrapper {
    display: block;
    padding: 0.75rem 1rem;
    text-decoration: none;
  }

  h1 {
    font-size: 5vw;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2.2vw;
    padding: 0 1rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 0.7rem;
    }
  }
  @media (min-width: 1024px) {
    .wrapper {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      justify-content: center;
    }
  }

  .message {
    position: absolute;
    bottom: -3rem;
    left: 0;
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
