<style>
  .timetravel {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 2rem 1.5rem;
    z-index: 100;
    background-color: var(--bg-200);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  .btn {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  .slider {
  }
</style>

<script>
  import CircleButton from './CircleButton.svelte';
  import TimetravelSlider from './TimetravelSlider.svelte';

  // Handle click on circle button
  function handleCircleButtonClick() {
    console.log('Clicki');
    // Tigger Trackingevent
  }
</script>

<div class="timetravel">
  <div class="btn">
    <CircleButton on:click="{() => handleCircleButtonClick()}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        role="img"
        width="1.5rem"
        height="1.5rem"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      ><path
          d="M4 2v6H2V2h2M2 22v-6h2v6H2m3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m11-8c4.42 0 8 3.58 8 8s-3.58 8-8 8c-3.6 0-6.64-2.38-7.65-5.65L6 12l2.35-2.35C9.36 6.38 12.4 4 16 4m-1 9l4.53 2.79l.8-1.29l-3.83-2.3V7H15v6z"
          fill="currentColor"
        ></path></svg>
    </CircleButton>
  </div>
  <div class="slider">
    <TimetravelSlider />
  </div>
</div>
