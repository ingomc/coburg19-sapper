<style>
  div {
    grid-area: breadcrumb;
  }
</style>

<script>
  export let data;
</script>

<div>Breadcrumb: {data.replace('-', ' ').toUpperCase()}</div>
