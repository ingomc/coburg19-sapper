<style>
  .message {
    background-color: var(--bg-200);
    border: 3px solid var(--bg-400);
    border-radius: var(--border-radius--xl);
    display: inline-block;
    margin: 0 auto;
    max-width: 700px;
    overflow: hidden;
    padding: var(--spacing-xs);
  }
</style>

<script>
  import moment from 'moment';
  export let until;
</script>

{#if moment().isBefore(until) || until == undefined}
  <div class="message">
    <slot />
  </div>
{/if}
