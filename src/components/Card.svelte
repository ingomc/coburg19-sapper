<script>
  export let data;

  let warningclass = "warning";

  if (data.incidence < 35) {
    warningclass = "info";
  }

  if (data.incidence >= 50 && data.incidence < 100) {
    warningclass = "danger";
  }

  if (data.incidence >= 100) {
    warningclass = "superdanger";
  }
</script>

<style>
  .card {
    display: block;
    position: relative;
    padding: var(--spacing);
    padding-right: var(--spacing-xl);
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    background-color: var(--card-bg);
    color: var(--card-color);
    user-select: none;
    transition: border 0.1s ease-in-out;
    border: 2px solid transparent;
  }
  .card:focus {
      border-color: var(--color);
    }
  @media (hover: hover) {
    .card:hover {
      border-color: var(--color);
    }
  }

  .row {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  .column {
    width: 50%;
  }

  .number {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    font-weight: 500;
  }

  .area {
    font-size: 0.7rem;
  }

  .city {
    font-size: 1.4rem;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .cases {
    font-size: 0.7rem;
  }

  #arrow-right-mini {
    position: absolute;
    right: var(--spacing);
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 1em;
    height: 1em;
    fill: var(--card-color);
  }
</style>

<div class={`card ${warningclass}`}>
  <div class="row">
    <div class="column">
      <h3 class="number">{Number(data.incidence).toFixed(2)}</h3>
    </div>
    <div class="column">
      <div class="area">{data.district}</div>
      <div class="city">{data.name}</div>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <div class="cases">
        Neue Fälle:
        {data.newCases > 0 ? data.newCases : 0}
      </div>
    </div>
    <div class="column">
      <div class="cases">Fälle insgesamt: {data.cases}</div>
    </div>
  </div>
  <svg id="arrow-right-mini" viewBox="-100.9 99.1 61.9 105.9"><path
      d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z" /></svg>
</div>
