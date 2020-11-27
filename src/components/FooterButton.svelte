<style>
  .card {
    border: 2px solid var(--bg-200);
    border-radius: var(--border-radius);
    color: var(--color);
    display: flex;
    font-size: 1rem;
    padding-right: var(--spacing-xl);
    position: relative;
    /* background-color: var(--bg-200); */
    transition: border 0.1s ease-in-out;
  }

  .card:focus {
    border-color: var(--color);
  }
  @media (hover: hover) {
    .card:hover {
      border-color: var(--color);
    }
  }

  .card-item {
    align-items: center;
    display: flex;
    margin: var(--spacing-xs);
    padding: var(--spacing-xs);
  }

  .icon {
    flex: 0 0 auto;
    height: 2rem;
    justify-content: center;
    width: 2rem;
  }

  .label {
    flex: 1 1 auto;
  }

  .arrow-right-mini {
    fill: var(--color);
    height: 0.5rem;
    position: absolute;
    right: var(--spacing);
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 0.5rem;
  }
</style>

<div class="card">
  <div class="card-item icon">
    <slot name="icon" />
  </div>
  <div class="card-item label">
    <slot name="label" />
  </div>
  <svg class="arrow-right-mini" viewBox="-100.9 99.1 61.9 105.9"><path
      d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"
    ></path></svg>
</div>
