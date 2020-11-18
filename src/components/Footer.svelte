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
    padding: var(--spacing-sm);
    text-align: center;
  }

  nav a {
    display: block;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    nav {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    nav a {
      margin: var(--spacing);
    }
  }

  svg {
    display: block;
    height: 1.5em;
    width: 1.5em;
  }
</style>

<script>
  import FooterButton from './FooterButton.svelte';
  export let update;
</script>

<section>
  <nav>
    <div class="update">Stand: {update}</div>
    <a href="./corona-ampel-regeln" title="Alle Regeln erklärt">
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
    <a href="./impressum" title="Zum Impressum">
      <FooterButton>
        <div slot="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          ><path
              d="M48 82.7v346.7c0 19.1 15.5 34.7 34.7 34.7h346.7c19.1 0 34.7-15.5 34.7-34.7V82.7c0-19.1-15.5-34.7-34.7-34.7H82.7C63.5 48 48 63.5 48 82.7zm89.3 297.1c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zM384.7 374h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14z"
              fill="currentColor"
            ></path></svg>
        </div>
        <div slot="label">Impressum</div>
      </FooterButton>
    </a>
  </nav>

  <footer>
    Crafted with ❤️ from
    <a
      href="https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website"
    >Andre Bellmann</a>
  </footer>
</section>
