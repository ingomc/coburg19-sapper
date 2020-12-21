<style>
  .timetravel {
    bottom: 0;
    min-height: 4rem;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 100;
  }

  @media (min-width: 768px) {
    .timetravel {
      bottom: 0;
      max-width: 500px;
      right: var(--spacing-xs);
    }
  }

  .tt-button {
    border-radius: 50%;
    bottom: 0;
    overflow: hidden;
    padding: 2px;
    position: fixed;
    right: 0;
    transform: translate3d(-50%, -50%, 0);
    z-index: 5;
  }

  .btn {
    border-radius: 50%;
    overflow: hidden;
    padding: 2px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(-50%, -50%, 0);
    z-index: 10;
  }

  .slider {
    background-color: rgba(55, 62, 71, 0.98);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 1.5rem 0;
  }
</style>

<script>
  import { fly } from 'svelte/transition';
  import IconTTactivecheck from './icons/IconTTactivecheck.svelte';
  import IconTTinactive from './icons/IconTTinactive.svelte';
  import IconTTclose from './icons/IconTTclose.svelte';

  import CircleButton from './CircleButton.svelte';
  import TimetravelSlider from './TimetravelSlider.svelte';
  import { ttIsActive, ttIsOpen } from '../stores/stores';

  // Handle click on circle button
  function handleCircleButtonClick() {
    // console.log('Clicki');
    // Tigger Trackingevent
    ttIsOpen.update(() => !$ttIsOpen);
  }
</script>

{#if $ttIsOpen}
  <div class="timetravel" transition:fly="{{ y: 200, duration: 300 }}">
    <div class="btn">
      <CircleButton on:click="{() => handleCircleButtonClick()}">
        <IconTTclose />
      </CircleButton>
    </div>
    <div class="slider">
      <TimetravelSlider />
    </div>
  </div>
{:else}
  <div class="tt-button">
    <CircleButton on:click="{() => handleCircleButtonClick()}">
      {#if $ttIsActive}
        <IconTTactivecheck />
      {:else}
        <IconTTinactive />
      {/if}
    </CircleButton>
  </div>
{/if}
