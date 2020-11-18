<style>
  nav {
    background-color: var(--body-bg);
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    grid-area: header;
    left: 0;
    padding: 0 1em;
    position: sticky;
    right: 0;
    top: 0;
    z-index: var(--z-index--header);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    clear: both;
    content: '';
    display: block;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    display: inline-block;
    position: relative;
  }

  [aria-current]::after {
    background-color: rgb(255, 62, 0);
    bottom: -1px;
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    width: calc(100% - 1em);
  }

  a {
    display: block;
    padding: 1em 0.5em;
    text-decoration: none;
  }
</style>

<script>
  export let segment;
</script>

<nav>
  <ul>
    <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
    <li>
      <a
        aria-current="{segment === 'corona-ampel-regeln' ? 'page' : undefined}"
        href="corona-ampel-regeln"
      >corona-ampel-regeln</a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current="{segment === 'impressum' ? 'page' : undefined}"
        href="impressum"
      >Impressum</a>
    </li>
  </ul>
</nav>
