<script>
    export let data;
  
    let warningclass = 'warning';
  
    if (data.incidence < 35) {
      warningclass = 'info';
    }
  
    if (data.incidence >= 50 && data.incidence < 100) {
      warningclass = 'danger';
    }
  
    if (data.incidence >= 100) {
      warningclass = 'superdanger';
    }
  </script>
  
  <style>
    .card {
      display: block;
      padding: var(--spacing);
      border-radius: 4px;
      margin: var(--spacing)/2 var(--spacing);
      overflow: hidden;
      width: 100%;
      background-color: var(--card-bg);
      color: var(--card-color);
      user-select: none;
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
        <div class="cases">Neue Fälle: {data.newCases > 0 ? data.newCases : 0}</div>
      </div>
      <div class="column">
        <div class="cases">Fälle insgesamt: {data.cases}</div>
      </div>
    </div>
  </div>
