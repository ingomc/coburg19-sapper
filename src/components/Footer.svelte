<style>
  section {
    grid-area: footer;
  }

  footer {
    background-color: var(--bg-200);
    font-size: 0.75rem;
    padding: var(--spacing);
    text-align: center;
  }

  .update {
    color: var(--bg-100);
    padding: var(--spacing-sm) var(--spacing-xl);
    text-align: center;
  }

  nav a {
    display: block;
    margin: var(--spacing-sm);
    text-decoration: none;
  }

  .hint {
    margin: 0 auto;
    max-width: 1000px;
    padding: 1rem;
  }
  @media (min-width: 1024px) {
    nav {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    nav a {
      margin: var(--spacing) var(--spacing-xs);
    }
  }

  svg {
    display: block;
    height: 1.5em;
    width: 1.5em;
  }
</style>

<script>
  import moment from 'moment';
  import FooterButton from './FooterButton.svelte';
  export let update;
</script>

<section>
  <nav id="footer-nav">
    <div class="update">
      Stand:
      <time
        itemprop="dateModified"
        datetime="{moment(update.replace(' Uhr', ''), 'DD.MM.YYYY, HH:mm').toISOString()}"
      >{update}</time>
    </div>
    <a href="./aktuelle-fragen-zu-covid/" title="FAQ">
      <FooterButton>
        <div slot="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            viewBox="0 0 24 24"
          ><path
              d="M13 8a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4m4 10v2H1v-2c0-2.21 3.58-4 8-4s8 1.79 8 4m3.5-3.5V16H19v-1.5h1.5m-2-5H17V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 .97-.5 1.88-1.29 2.41l-.3.19c-.57.4-.91 1.01-.91 1.7v.2H19v-.2c0-1.19.6-2.3 1.59-2.95l.29-.19c.39-.26.62-.69.62-1.16A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 18.5 9v.5z"
              fill="currentColor"
            ></path></svg>
        </div>
        <div slot="label">Häufige Fragen</div>
      </FooterButton>
    </a>
    <a href="./corona-ampel-regeln/" title="Alle Regeln erklärt">
      <FooterButton>
        <div slot="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 64 64"
          ><path
              d="M32 2c-8.25 0-15 6.751-15 15v30c0 8.25 6.75 15 15 15s15-6.75 15-15V17c0-8.249-6.75-15-15-15m0 56.25a7.5 7.5 0 0 1-7.5-7.5a7.5 7.5 0 1 1 7.5 7.5m0-18.75a7.5 7.5 0 0 1-7.5-7.5a7.5 7.5 0 1 1 7.5 7.5m0-18.75a7.5 7.5 0 0 1-7.5-7.5a7.5 7.5 0 1 1 7.5 7.5"
              fill="currentColor"
            ></path></svg>
        </div>
        <div slot="label">Corona-Ampel-Regeln</div>
      </FooterButton>
    </a>
    <a
      href="https://ko-fi.com/coronaampel/?hidefeed=true&widget=true&embed=true"
      target="_blank"
      rel="noopener"
    >
      <FooterButton>
        <div slot="icon">❤️</div>
        <div slot="label">Werbefrei durch deine Spende</div>
      </FooterButton>
    </a>
  </nav>
  <p class="hint">
    <small>Diese Webseite soll weiterhin ohne Werbung bleiben. Auch möchte ich unsere Daten nicht an
      Dritte verkaufen und genau da kannst
      <strong>DU</strong>
      helfen. Mit einer kleinen Spende bleibt alles beim Alten und ihr könnt völlig entspannt ohne
      Cookies, ohne Werbung, ohne Datenweitergabe etc. "weiterampeln". Und natürlich soll ab und zu
      mal eine neue Funktion dazu kommen.</small>
  </p>

  <footer itemscope itemtype="https://schema.org/Person">
    Crafted with ❤️ from
    <a
      href="https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website"
    ><span itemprop="name">Andre Bellmann</span></a>
    |
    <a href="./impressum/" title="Zum Impressum">Impressum</a>
  </footer>
</section>
