<style>
  .wrapper {
    --_circle: var(--info-bg);
  }

  .card {
    background-color: var(--bg-200);
    color: white;
    border-radius: var(--border-radius);
    padding: 0.25rem;
    overflow: hidden;
    --_circle: var(--info-bg);
    max-width: var(--max-width-container);
    margin: auto;
  }

  .stage-wrapper {
    display: flex;
    place-content: center;
    justify-content: space-around;
    align-items: center;
  }

  .card.stage-1 {
    --_circle: var(--warning-bg);
  }
  .card.stage-2 {
    --_circle: var(--danger-bg);
  }
  .circle {
    position: relative;
    margin: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    flex: 0 0 auto;
    background-color: var(--_circle);
    box-shadow: 0 0 0 5px var(--_circle) inset;
  }

  .circle::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -60%, 0) rotate(45deg);
    content: '';
    width: 0.6rem;
    height: 1rem;
    border: 3px solid var(--info-contrast);
    border-top-width: 0;
    border-left-width: 0;
  }

  .text-column {
    flex: 1 1 0;
    display: flex;
    align-items: center;
  }

  .label {
    display: block;
    font-size: 0.75rem;
    line-height: 1rem;
    flex: 1 1 auto;
    padding: 0.25rem;
  }

  .number {
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    flex: 0 0 auto;
    min-width: 100px;
    text-align: right;
  }
</style>

<script>
  export let data;
  const red = 600;
  const yellowH = 1200;
  const yellowP = 450;
  export let getStage = () => {
    if (data.currentIntensiveCarePatients >= red) {
      return 2;
    }
    if (
      (data.hospitalizationLast7Days >= yellowH && data.currentIntensiveCarePatients < red) ||
      (data.currentIntensiveCarePatients >= yellowP && data.currentIntensiveCarePatients < red)
    ) {
      return 1;
    }
    return 0;
  };
</script>

<div class="wrapper">
  <div class="card">
    <div class="{`stage-wrapper stage-${getStage()}`}">
      <!-- <div class="circle"></div> -->
      <div class="text">
        <div class="text-column">
          <span class="label"> Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen </span>
          <span class="number">{data.hospitalizationLast7Days} </span>
        </div>
        <div class="text-column">
          <span class="label"> COVID-19 Patienten auf Intensivstationen </span>
          <span class="number">{data.currentIntensiveCarePatients} </span>
        </div>
      </div>
    </div>
  </div>
</div>
