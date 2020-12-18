<style>
  .circlebutton {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-100);
    cursor: pointer;
    border: none;
    appearance: none;
    color: inherit;
    transition: border-color 0.2s ease-out;
    border: 2px solid var(--bg-100);
  }
  .circlebutton:hover {
    border-color: var(--bg-50);
  }
  .circlebutton:active {
    background-color: var(--bg-200);
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const onClick = () => {
    dispatch('click', {});
  };
</script>

<button class="circlebutton" on:click="{onClick}">
  <slot />
</button>
