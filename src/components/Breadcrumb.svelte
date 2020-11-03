<script>
    export let data;
</script>
<style>
    div {
        grid-area: breadcrumb;
    }
</style>
    <div>
        Breadcrumb: {data.replace('-', ' ').toUpperCase()}
      </div>
