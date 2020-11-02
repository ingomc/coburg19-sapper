<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .spinner {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-bottom-color: var(--color);
    animation: rotate 0.3s linear infinite;
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

<div transition:fade>
  <div class="spinner" />
</div>
