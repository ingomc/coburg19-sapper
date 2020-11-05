<style>
  section {
    grid-area: footer;
  }
  footer {
    padding: var(--spacing);
    background-color: var(--bg-200);
    font-size: 0.75rem;
    text-align: center;
  }
  .update {
    text-align: center;
    color: var(--bg-100);
    padding: var(--spacing-sm);
  }
  aside a {
    display: block;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    aside {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    aside a {
      margin: var(--spacing);
    }
  }

  svg {
    width: 1.5em;
    height: 1.5em;
  }
</style>

<script>
  import FooterCard from '../components/FooterCard.svelte';
  export let update;
</script>

<section>
  <aside>
    <div class="update">Stand: {update}</div>
    <a
      href="https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0"
      target="_blank"
      rel="noopener"
      title="Zum RKI"
    >
      <FooterCard>
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
      </FooterCard>
    </a>
  </aside>

  <footer>
    Crafted with ❤️ from
    <a
      href="https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website"
    >Andre Bellmann</a>
  </footer>
</section>
