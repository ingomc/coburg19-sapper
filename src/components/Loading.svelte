<style>
  .spinner {
    animation: rotate 0.3s linear infinite;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-bottom-color: var(--color);
    border-radius: 50%;
    display: inline-block;
    height: 1rem;
    position: fixed;
    right: 1rem;
    top: 1rem;
    width: 1rem;
    z-index: var(--z-index--loading);
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>

<script>
  import { fade } from 'svelte/transition';
</script>

<div transition:fade>
  <div class="spinner"></div>
</div>
