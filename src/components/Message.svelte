<style>
  .message {
    background-color: var(--bg-200);
    border-radius: 4px;
    display: inline-block;
    margin: 0 auto;
    max-width: 700px;
    padding: var(--spacing-xs) var(--spacing);
  }
</style>

<script>
  import moment from 'moment';
  export let until;
</script>

{#if moment().isBefore(until)}
  <div class="message">
    <slot />
  </div>
{/if}
