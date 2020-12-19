<style>
  .timetravel {
    bottom: 0;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 100;
    min-height: 4rem;
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
  import IconTTactive from './icons/IconTTactive.svelte';
  import IconTTactivecheck from './icons/IconTTactivecheck.svelte';
  import IconTTinactive from './icons/IconTTinactive.svelte';
  import IconTTclose from './icons/IconTTclose.svelte';

  import CircleButton from './CircleButton.svelte';
  import TimetravelSlider from './TimetravelSlider.svelte';
  import { ttIsActive, ttIsOpen } from '../stores/stores';

  // Handle click on circle button
  function handleCircleButtonClick() {
    console.log('Clicki');
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
  <div class="timetravel">
    <div class="btn">
      <CircleButton on:click="{() => handleCircleButtonClick()}">
        {#if $ttIsActive}
          <IconTTactivecheck />
        {:else}
          <IconTTinactive />
        {/if}
      </CircleButton>
    </div>
  </div>
{/if}
