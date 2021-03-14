<style>
  h3 {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .question {
    background-color: var(--bg-200);
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
    padding: 1rem;
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

<svelte:head>
  <title>FAQ Corona: Aktuelle Fragen rund um Covid-19</title>
  <meta
    content="Wie sind die aktuellen zahlen in Deutschland? Sind Fahrgemeinschaften erlaubt? Was muss ich aktuell beachten? - Alle Fragen hier beantwortet!"
    name="description"
  />
  <meta property="og:title" content="FAQ Corona: Aktuelle Fragen rund um Covid-19" />
  <meta
    property="og:description"
    content="Alle Corona-Ampel Regeln und  ⚠️ alle aktuellen Zahlen für Coburg und Umgebung!"
  />
</svelte:head>

<div class="faq" itemscope itemtype="https://schema.org/FAQPage">
  <h1>Häufig gestellte Fragen rund um Covid-19 und Corona</h1>

  <!-- Frage -->
  <div class="question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Wieviel neue Fälle Corona gibt es aktuell in Deutschland?</h3>
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
    <h3 itemprop="name">Wieviel neue Fälle Corona gibt es aktuell in Bayern?</h3>
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
          <li>Grün - Inzidenz bis 35</li>
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

  <!-- Frage -->
  <div class="question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Wie lange ist eine mit COVID-19 infizierte Person ansteckend?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        Der genaue Zeitraum, in dem eine mit dem Corona-Virus SARS-CoV-2 infizierte Person andere
        anstecken kann, ist noch nicht klar festgelegt. Man geht aktuell davon aus, dass die
        Ansteckungsfähigkeit zu Beginn am größten ist und dass ein erheblicher Teil der
        Übertragungen bereits vor dem Auftreten erster Krankheitszeichen erfolgt. Die
        Ansteckungsfähigkeit nimmt im Laufe der Erkrankung ab. Bei milden Verlauf der Krankheit ist
        eine Ansteckung nach mehr als 10 Tagen unwahrscheinlich. Bei schweren Erkrankungen können
        Betroffene auch noch wesentlich länger ansteckend sein.
      </div>
    </div>
  </div>

  <!-- Frage -->
  <div class="question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Wie wird das Corona-Virus übertragen?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        Das Corona-Virus SARS-CoV-2 wird durch Tröpfchen- oder Schmierinfektion übertragen, d.h. die
        Übertragung kann über die Schleimhäute oder auch indirekt über die Hände erfolgen. Unsere
        Schleimhäute nehmen das Virus unter anderem auch durch die eingeatmete Luft auf.
      </div>
    </div>
  </div>

  <!-- Frage -->
  <div class="question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Wann muss ich mich auf Corona testen lassen?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        Wenn Sie ...
        <ul>
          <li>
            typische Symptome (siehe Unten) für Corona aufweisen (Vorher mit Hausarzt telefonisch
            besprechen)
          </li>
          <li>Kontakt zu Corona-Kranken hatten</li>
          <li>in einem Gesundheitsberuf arbeiten</li>
          <li>nach bestimmten Reisen</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Frage -->
  <div class="question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Was sind die Symptome von Corona (COVID-19)?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        Die häufigsten Symptome sind Fieber über 38°C, Husten, Schnupfen, Kopf- und
        Gliederschmerzen, Abgeschlagenheit sowie Kratzen im Hals. Bei einigen Personen kommt es zu
        einem vorübergehenden Verlust des Geruchs- und Geschmackssinns, dessen Ursache derzeit
        erforscht wird.
        <br />
        <br />
        Typische Symptome sind:
        <ul>
          <li>Husten</li>
          <li>Fieber</li>
          <li>Schnupfen</li>
          <li>Geruchs- und Geschmacksstörungen</li>
        </ul>
        Auch diese Symptome können auf COVID-19 hinweisen:
        <ul>
          <li>Kurzatmigkeit, Atemnot</li>
          <li>Halsschmerzen</li>
          <li>Kopf- und Gliederschmerzen</li>
          <li>Bauchschmerzen</li>
          <li>Magen-Darm-Symptome</li>
          <li>Hautausschlag</li>
          <li>Augenbindehautentzündung</li>
          <li>Lymphknotenschwellung</li>
          <li>Schläfrigkeit</li>
          <li>Bewusstseinsstörungen</li>
        </ul>
      </div>
    </div>
  </div>
</div>
