<style>
  .container {
    grid-area: breadcrumb;
    margin: 0 auto;
    max-width: var(--max-width);
    width: 100%;
  }

  .breadcrumb {
    color: var(--bg-50);
    font-size: 80%;
    padding: var(--spacing);
    text-transform: uppercase;
  }

  a {
    color: var(--bg-50);
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: var(--color);
  }
</style>

<script>
  export let data;
</script>

<div class="container">
  <div class="breadcrumb"><a href="./">&lsaquo; Zurück</a> | {data.replace(/-/g, ' ')}</div>
</div>
