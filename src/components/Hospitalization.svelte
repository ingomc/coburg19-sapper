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
  }
  .card.stage-1 {
    --_circle: var(--warning-bg);
  }
  .card.stage-2 {
    --_circle: var(--danger-bg);
  }
  .circle {
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

  .text {
    width: 100%;
  }

  .text-column {
    flex: 1 1 0;
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
    padding-bottom: 0.15rem;
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

  .light {
    font-weight: 300;
  }

  @media (min-width: 1024px) {
    .wrapper {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--spacing);
    }
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
  <div class="{`card stage-${getStage()}`}">
    <div class="circle"></div>
    <div class="text">
      <div class="text-column">
        <p>
          <span class="label">
            currentIntensiveCarePatients:
            <strong>{data.currentIntensiveCarePatients}</strong></span>
        </p>
        <p>
          <span class="label">
            hospitalizationLast7Days:
            <strong>{data.hospitalizationLast7Days}</strong></span>
        </p>
        <p><span class="label"> blablabl {getStage()}</span></p>
      </div>
    </div>
  </div>
  <!-- 
  <div class="card">
    <div class="circle"></div>
    <div class="text">
      <div class="text-column">
        <p><span class="label">Keine Werte überschritten</span></p>
      </div>
    </div>
  </div>
  <div
    class="{`card yellow ${(data.hospitalizationLast7Days > 1200 && data.currentIntensiveCarePatients < 600) || (data.currentIntensiveCarePatients >= 450 && data.currentIntensiveCarePatients < 600) ? 'active' : ''}`}"
  >
    <div class="circle"></div>
    <div class="text">
      <div class="text-column">
        <span class="label">Neue Krankenhaus-Corona-Einweisungen in den letzten 7 Tagen</span>
        <span class="number"><span class="light">{data.hospitalizationLast7Days}</span>
          / 1200
        </span>
      </div>
      <div class="text-column">
        <span class="label">COVID-19 Patienten auf Intensivstationen</span>
        <span class="number"><span class="light">{data.currentIntensiveCarePatients}</span>
          / 450
        </span>
      </div>
    </div>
  </div>
  <div class="{`card red ${data.currentIntensiveCarePatients > 600 ? 'active' : ''}`}">
    <div class="circle"></div>
    <div class="text">
      <div class="text-column">
        <span class="label">COVID-19 Patienten auf Intensivstationen</span>
        <span class="number"><span class="light">{data.currentIntensiveCarePatients}</span>
          / 600
        </span>
      </div>
    </div>
  </div> -->
</div>
