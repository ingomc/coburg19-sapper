<style>
  /* Reset List styling */
  ol,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-indent: 0;
  }

  li {
    display: inline-block;
  }

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
  <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="./">&lsaquo; <span itemprop="name">Corona-Ampel</span></a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span> | </span>
      <span itemprop="name">{data.replace(/-/g, ' ').replace(/%C3%B6/g, 'ö')}</span>
      <meta itemprop="position" content="2" />
    </li>
  </ol>
</div>
