<style>
  .container {
    width: 100%;
    grid-area: breadcrumb;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .breadcrumb {
    text-transform: uppercase;
    font-size: 80%;
    padding: var(--spacing);
    color: var(--bg-50);
  }
  a {
    color: var(--bg-50);
    transition: color 0.3s ease-in-out;
    text-decoration: none;
  }
  a:hover {
    color: var(--color);
  }
</style>

<script>
  export let data;
</script>

<div class="container">
  <div class="breadcrumb"><a href="/">&lsaquo; Zurück</a> | {data.replace('-', ' ')}</div>
</div>
