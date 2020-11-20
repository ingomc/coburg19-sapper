<style>
  h3 {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .question {
    background-color: var(--bg-200);
    border-radius: var(--border-radius);
    margin-bottom: 3rem;
    padding: 1.5rem;
  }
</style>

<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((data) => {
        return { update: data.update, germannew: data.germannew, bavarianew: data.bavarianew };
      });
  }
</script>

<script>
  export let update;
  export let germannew;
  export let bavarianew;
</script>

<div class="faq" itemscope itemtype="https://schema.org/FAQPage">
  <h1>Häufig gestellte Fragen rund um Covid-19 und Corona</h1>

  <!-- Frage -->
  <div class="question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Wieviel neue Fälle Corona gibt es aktuell in Deutschland</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        Seit gestern gibt es
        <strong>+{germannew} neue Fälle in Deutschland</strong>
        (Stand:
        {update})
      </div>
    </div>
  </div>

  <!-- Frage -->
  <div class="question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Wieviel neue Fälle Corona gibt es aktuell in Bayern</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        Seit gestern gibt es
        <strong>+{bavarianew} neue Fälle in Bayern</strong>
        (Stand:
        {update})
      </div>
    </div>
  </div>

  <!-- Frage -->
  <div class="question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Corona-Ampel Bayern - Wann gilt was? Welche Farbstufe bedeutet was?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <ul>
          <li>Grün - Inzidenz&nbsp;bis 35</li>
          <li>Gelb - Inzidenz 35 bis 50</li>
          <li>Rot - Inzidenz 50 bis 100</li>
          <li>Dunkelrot - Inzidenz ab 100</li>
        </ul>
        <p>
          Was die Farbstufen der Corona-Ampel bedeuten kannst du hier erfahren:
          <a href="./corona-ampel-regeln/" title="Corona-Ampel-Regeln">Zu den Corona-Ampel-Regeln
            &rsaquo;</a>
        </p>
      </div>
    </div>
  </div>
</div>
