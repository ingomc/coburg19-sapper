<style>
  .card {
    background-color: var(--card-bg);
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    color: var(--card-color);
    display: block;
    overflow: hidden;
    padding: var(--spacing);
    /* padding-right: var(--spacing-xl); */
    position: relative;
    transition: border 0.1s ease-in-out;
    user-select: none;
    width: 100%;
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
    align-items: center;
    display: flex;
    padding: 0.25rem;
  }

  .column {
    width: 50%;
  }

  .danger-icon {
    height: 0.7em;
    vertical-align: middle;
    width: 0.7em;
  }

  .number {
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  .area {
    font-size: 0.75rem;
  }

  .city {
    font-size: 1.4rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cases {
    font-size: 0.75rem;
  }

  .arrow-right-mini {
    fill: var(--card-color);
    height: 1em;
    position: absolute;
    /* right: 0; */
    right: calc(-0.5 * var(--spacing));
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 1em;
  }

  .content {
    position: relative;
    z-index: 5;
  }

  .canvas {
    bottom: 0;
    height: 200%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 200%;
    z-index: 0;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
</style>

<script>
  export let data;
  let canvas;
  let warningclass = 'warning';
  let points;
  let max;

  // Subscribe on changes
  $: {
    warningclass = 'warning';
    if (data.incidence < 35) {
      warningclass = 'info';
    }

    if (data.incidence >= 50 && data.incidence < 100) {
      warningclass = 'danger';
    }

    if (data.incidence >= 100) {
      warningclass = 'superdanger';
    }
    if (data.allIncidences) {
      points = Array.from(data.allIncidences.incidences.datasets[0].data, (x) => x.y);
      max = Math.ceil(Math.max(...points) / 100) * 100;
    }
    function draw() {
      if (!canvas && !canvas.getContext) {
        return;
      }
      const width = canvas.width;
      const height = canvas.height;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(-10, 0, width + 10, height);

      if (!!data.allIncidences) {
        ctx.fillStyle = data.incidence >= 100 ? 'rgba(255,100,100,0.1)' : 'rgba(0,0,0,0.1)';

        // draw the area
        ctx.beginPath();
        // Startpoint
        ctx.moveTo(-10, height);
        // Draw each point
        points.reverse().forEach((point, index) => {
          ctx.lineTo((width / (points.length - 1)) * index, height - point / (max / height));
        });
        // Last point
        ctx.lineTo(610, height);
        ctx.strokeStyle = data.incidence >= 100 ? 'rgba(255,100,100,0.2)' : 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fill();
      }
    }
    if (typeof window != 'undefined' && typeof canvas != 'undefined') {
      draw();
    }
  }
</script>

<div class="{`card ${warningclass}`}">
  <canvas class="canvas" bind:this="{canvas}"></canvas>

  <div class="content">
    <div class="row">
      <div class="column">
        <h3 class="number">
          {#if data.incidence >= 200 && data.incidence < 1000}
            <svg
              class="danger-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              style="transform: rotate(360deg);"
            ><path
                d="M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
                fill="currentColor"
              ></path></svg>
          {/if}
          {Number(data.incidence).toLocaleString('de-DE', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
        </h3>
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
          {data.newCases > 0 ? data.newCases.toLocaleString('de-DE') : 0}
        </div>
        {#if data.faelle_covid_aktuell !== null}
          <div class="cases">Betten frei: {data.betten_frei > 0 ? data.betten_frei : 0}</div>
        {/if}
      </div>
      <div class="column">
        {#if data.faelle_covid_aktuell !== null}
          <div class="cases">
            Intensiv-Betten belegt mit Covid-19:
            <span class="percent">({Number(data.Anteil_COVID_betten).toFixed(0)}%)</span>
            {data.faelle_covid_aktuell}
          </div>
        {:else}
          <div class="cases">Es gibt keine Intensiv-Betten in diesem Landkreis</div>
        {/if}
      </div>
    </div>
    <svg class="arrow-right-mini" viewBox="-100.9 99.1 61.9 105.9"><path
        d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"
      ></path></svg>
  </div>
</div>
