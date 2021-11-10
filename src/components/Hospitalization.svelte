<style>
  .wrapper {
    --circle: var(--info-bg);
    --card-bg: var(--bg-200);
    --card-contrast: white;
    display: flex;
    margin: -0.25rem;
    flex-direction: column;
  }

  .card {
    background-color: var(--card-bg);
    color: var(--card-contrast);
    display: flex;
    border-radius: var(--border-radius--xl);
    padding: 0.25rem;
    margin: 0.25rem;
    overflow: hidden;
    align-items: center;
    opacity: 0.75;
    --circle-contrast: var(--info-contrast);
    --circle: var(--info-bg);
    --card-bg: var(--info-bg);
    --card-contrast: var(--info-contrast);
    transition: opacity 0.3s ease-in-out;
  }

  .card:hover {
    opacity: 0.75;
  }
  .card.yellow {
    --circle-contrast: var(--warning-contrast);
    --circle: var(--warning-bg);
    --card-bg: var(--warning-bg);
    --card-contrast: var(--warning-contrast);
  }
  .card.red {
    --circle-contrast: var(--danger-contrast);
    --circle: var(--danger-bg);
    --card-bg: var(--danger-bg);
    --card-contrast: var(--danger-contrast);
  }

  .card.active {
    opacity: 1;
    box-shadow: 0 0 0px 2px var(--card-bg) inset, 0 0 0px 3px var(--card-contrast) inset;
  }
  .card.active.yellow {
  }
  .card.active.red {
  }

  .circle {
    margin: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    flex: 0 0 auto;
    background-color: var(--circle-contrast);
    box-shadow: 0 0 0 5px var(--circle-contrast) inset;
  }
  .active .circle {
    background-color: var(--circle);
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
      flex-direction: row;
    }
    .card {
      flex: 1 1 0;
    }
  }
</style>

<script>
  export let data;
</script>

<div class="wrapper">
  <div
    class="{`card ${data.hospitalizationLast7Days < 1200 && data.currentIntensiveCarePatients < 450 ? 'active' : ''}`}"
  >
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
  </div>
</div>
