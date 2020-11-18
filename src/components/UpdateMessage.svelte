<style>
  .message {
    align-items: center;
    background-color: var(--bg-200);
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 700px;
    padding: var(--spacing-sm) var(--spacing);
    text-align: center;
  }

  svg {
    display: block;
  }

  .icon {
    animation: rotate 0.7s ease-in-out infinite forwards;
    margin-right: var(--spacing);
    transform-origin: 50% 50%;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg) scaleX(-1);
    }

    to {
      transform: rotate(360deg) scaleX(-1);
    }
  }
</style>

<div class="message">
  <div class="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      focusable="false"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    ><path
        d="M8.625 8.5h-4.5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v3.5h3.5a1 1 0 0 1 0 2z"
        fill="currentColor"
      ></path>
      <path
        class="uim-primary"
        d="M21 13a1 1 0 0 1-1-1A7.995 7.995 0 0 0 5.08 8.001a1 1 0 0 1-1.731-1.002A9.995 9.995 0 0 1 22 12a1 1 0 0 1-1 1zm-1.125 9a1 1 0 0 1-1-1v-3.5h-3.5a1 1 0 0 1 0-2h4.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1z"
        fill="currentColor"
      ></path>
      <path
        class="uim-primary"
        d="M12 22A10.012 10.012 0 0 1 2 12a1 1 0 0 1 2 0a7.995 7.995 0 0 0 14.92 3.999a1 1 0 0 1 1.731 1.002A10.032 10.032 0 0 1 12 22z"
        fill="currentColor"
      ></path></svg>
  </div>
  <slot />
</div>
