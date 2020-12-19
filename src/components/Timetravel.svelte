<style>
  .timetravel {
    background-color: var(--bg-200);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    bottom: 0;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 100;
  }

  .btn {
    border-radius: 50%;
    overflow: hidden;
    padding: 2px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(-50%, -50%, 0);
  }
</style>

<script>
  import IconTTactive from './icons/IconTTactive.svelte';
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
      <IconTTactive />
    </CircleButton>
  </div>
  <div class="slider">
    <TimetravelSlider />
  </div>
</div>
