<style>
  .circlebutton {
    align-items: center;
    appearance: none;
    background-color: var(--bg-100);
    border: 2px solid var(--bg-100);
    border-radius: 50%;
    color: inherit;
    cursor: pointer;
    display: flex;
    height: 3.5rem;
    justify-content: center;
    overflow: hidden;
    transition: border-color 0.2s ease-out;
    width: 3.5rem;
  }

  .circlebutton:hover {
    border-color: var(--bg-100);
  }

  .circlebutton:active {
    background-color: var(--bg-200);
  }

  .icon {
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  export let label;
  const dispatch = createEventDispatcher();
  const onClick = () => {
    dispatch('click', {});
  };
</script>

<button class="circlebutton" on:click="{onClick}" aria-label="{label}">
  <div class="icon">
    <slot />
  </div>
</button>
