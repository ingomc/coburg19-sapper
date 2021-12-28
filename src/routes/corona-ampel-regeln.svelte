<style>
  .text {
    padding: 0.5em;
    display: inline-block;
    border-radius: var(--border-radius);
  }
  .text.darkred {
    background-color: var(--superdanger-bg);
    color: var(--superdanger-contrast);
  }

  .text.red {
    background-color: var(--danger-bg);
    color: var(--danger-contrast);
  }

  .text.yellow {
    background-color: var(--warning-bg);
    color: var(--warning-contrast);
  }

  .text.green {
    background-color: var(--info-bg);
    color: var(--info-contrast);
  }

  strike > * {
    color: rgba(255, 255, 255, 0.2);
  }
  i {
    font-weight: 100;
    opacity: 0.8;
  }
</style>

<script>
  import Message from '../components/Message.svelte';
</script>

<svelte:head>
  <title>🚦 Corona-Ampel Regeln: ⚠️ Aktuelle Regelung in Bayern</title>
  <meta content="Alle Corona-Ampel Regeln: ⚠️ Aktuelle Regelung in Bayern" name="description" />
  <meta property="og:title" content="🚦 Corona-Ampel Regeln: ⚠️ Aktuelle Regelung in Bayern" />
  <meta
    property="og:description"
    content="Alle Corona-Ampel Regeln und  ⚠️ alle aktuellen Zahlen für Coburg und Umgebung!"
  />
</svelte:head>

<div>
  <!-- <Message until="2021-03-07T00:00:00Z">
    <small>
      <svg
        class="danger-icon"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        role="img"
        width="1.5em"
        height="1.5em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        style="transform: translate3d(0, -2px, 0);
  vertical-align: middle;"
      ><path
          d="M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L4.365 16.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H18.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L12.933 5.817a1.12 1.12 0 0 0-.352-.365zM12 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
          fill="currentColor"
        ></path></svg>
      <span> Aktuell gelten zusätzliche Verschärfungen! </span>
    </small>
  </Message> -->

  <h1>Aktuelle Regeln der Corona-Ampel für Bayern</h1>

  <h2>Inzidenz-Farben</h2>
  <p>
    Ab einer 7-Tage-Inzidenz von über 35 in einem Landkreis oder in einer kreisfreien Stadt gilt für
    geschlossene Räume breitflächig das 3G-Prinzip: Zugang haben dann nur Geimpfte, Genesene oder
    aktuell Getestete.
  </p>
  <p>
    Das zuständige Landratsamt oder die kreisfreie Stadt geben bekannt, sobald in ihrem Gebiet an
    drei aufeinanderfolgenden Tagen die 7-Tage-Inzidenz den Wert von 35 überschreitet oder
    unterschreitet.
  </p>
  <ul>
    <li><span class="green text"> Grün: &lt; 35</span></li>
    <li><span class="yellow text"> Gelb: 35 &lt; 50</span></li>
    <li><span class="red text"> Rot: 50 &lt; 100</span></li>
    <li><span class="darkred text"> Dunkelrot: &gt; 100</span></li>
  </ul>

  <h2>Ab dem 28.12.21 gelten folgende Regeln</h2>
  <ul>
    <li>
      <div><strong>Private Treffen:</strong></div>
      <ul>
        <li>
          Bei privaten Zusammenkünften außerhalb der Gastronomie, an denen ausschließlich Geimpfte
          und Genesene teilnehmen, sind
          <strong>maximal 10 Personen</strong>
          erlaubt.
        </li>
        <li>
          Kinder
          <strong>unter 14 Jahren</strong>
          sind bei den Kontaktbeschränkungen ausgenommen. Die Altersgrenze von 14 Jahren findet
          künftig auch für die 2G Plus- und 2G-Erfordernisse Anwendung.
        </li>
      </ul>
    </li>
    <li>
      Für die Silvesternacht wird die Sperrstunde von 22 bis 5 Uhr in der Gastronomie aufgehoben.
      Auf publikumsträchtigen Plätzen gilt landesweit ein Verbot von Menschenansammlungen über 10
      Personen von 31. Dezember 15 Uhr, bis 1. Januar 9 Uhr
    </li>
    <li>
      <strong>Mit Booster-Impfung</strong>
      Testbefreiung bei 2G-PLUS
      <i>(Dreifach Geimpfte müssen sich in Bereichen, in denen2G-PLUS gilt, nicht mehr testen; gilt
        ab Tag 15 nach der dritten Impfung)</i>
    </li>
    <li>
      Alle
      <strong>Clubs, Diskotheken, Bars und Schankwirtschaften</strong>
      geschlossen.
      <i>, soweit es sich nicht um Sportausübung handelt</i>
      Tanzveranstaltungen sind zukünftig auch außerhalb von Clubs und Diskotheken untersagt<i>,
        soweit es sich nicht um Sportausübung handelt</i>
    </li>
    <li><strong>Große Sportveranstaltungen</strong>: Keine Zuschauer zugelassen</li>
    <li>
      In
      <strong> Inzidenz-Hotspots mit mehr als 1000 Neuinfektionen</strong>
      in den letzten 7 Tagen gelten noch härtere Maßnahmen:
      <strong>
        Hier werden Gastronomie, Sport- und Kulturstätten geschlossen. Veranstaltungen werden
        untersagt.</strong>
    </li>
    <li>
      <strong>Schulen und Kitas bleiben offen</strong>, aber hier gilt weiter Maskenpflicht.
      Pooltests werden ausgweitet, vor allem in Kitas soll hier mehr passieren. In
      Bildungseinrichtungen gilt durchgehend 3G.
    </li>
    <li>Gastro: 2G im Innen- und Außenbereich mit Sperrstunde ab 22 Uhr</li>
    <li>
      2G und 2g-Plus werden verschärft:
      <strong>2G gilt bei körpernahen Dienstleistungen, in Hochschulen, Volkshochschulen, Musik- und
        Fahrschulen.&nbsp;</strong>
    </li>
    <li>
      <strong>Handel: </strong>
      Personenobergrenzen (10 m2 pro Person), ab 08.12. gilt 2G für Ladengeschäfte mit Kundenverkehr
      (Geschäfte des täglichen Bedarfs ausgenommen)
    </li>
    <li>
      In Alten- und Pflegeheimen sowie in Krankenhäusern müssen Besucher einen negativen Schnelltest
      vorweisen
    </li>
  </ul>
  <hr />
  <h2>🏥 Krankhausampel Regeln 🚑</h2>
  <p><strong class="green text">GRÜN</strong><br /><br /></p>
  <ul>
    <li>
      Bei regionaler 7-Tage-Inzidenz über 35 gilt Indoor die 3G-Regel (Geimpft, Getestet, Genesen)
      u.a. bei:
      <ul>
        <li>Veranstaltungen, Fitnessstudios, Gastronomie, Freizeiteinrichtungen, Kultur</li>
        <li>körpernahen Dienstleistungen</li>
      </ul>
    </li>
    <li>
      Maskenpflicht:
      <ul>
        <li>Indoor und ÖPNV: medizinische oder FFP2-Maske</li>
        <li>Outdoor: keine Maskenpflicht</li>
      </ul>
    </li>
    <li>
      Gastronomie und Hotellerie:
      <ul>
        <li>Innen- und Außengastronomie ist geöffnet</li>
        <li>Beherbergungsbetriebe sind geöffnet</li>
      </ul>
    </li>
    <li>
      Kultur und Freizeiteinrichtungen, Sport:
      <ul>
        <li>3G Regel in geschlossenen Räumen</li>
      </ul>
    </li>
    <li>
      3G-PLUS/2G:
      <ul>
        <li>
          Überall dort wo 3G Regeln gelten, dürfen Betreiber freiwillig 3G-PLUS oder 2G festlegen
        </li>
      </ul>
    </li>
  </ul>

  <p><strong class="yellow text">GELB </strong></p>
  <ul>
    <li>3G-PLUS, wo vorher 3G galt <i>(PCR-Test statt Schnelltest nötig)</i></li>
    <li>2G, wo vorher 3G-PLUS galt <i>(Ausgenommen ÖPNV, Handel)</i></li>
    <li>2G in Discotheken, Clubs, Bordellen und ähnlichen Freizeiteinrichtungen</li>
    <li>Anhebung Maskenstandard auf FFP2</li>
  </ul>

  <p><strong class="red text">ROT </strong></p>
  <ul>
    <li>
      3G am Arbeitsplatz und bei zehn oder mehr Beschäftigten regelmäßige Tests bei Kontakt mit
      anderen Personen
      <i>(Ausgenommen Handel)</i>
    </li>
    <li>3G im ÖPNV</li>
    <li>
      3G-PLUS für Gastronomie
      <i>(Hotels, Restaurants)</i>
      und körpernahe Dienstleistungen
      <i>(Friseure)</i>
    </li>
    <li>2G bei Veranstaltungen, Kultur und Sport</li>
    <li>Anhebung Maskenstandard auf FFP2</li>
  </ul>
  <hr />
  <h3>Hotspot-Regelung</h3>
  <p>
    In Landkreisen, in denen die 7-Tage-Inzidenz über 1.000 liegt, soll das öffentliche Leben
    weitestgehend heruntergefahren werden. Es gelten dann folgende verschärfte Regeln:
  </p>
  <ul>
    <li>Schließung von Gastronomie und Beherbergung</li>
    <li>keine Freizeit-, Sport- und Kulturveranstaltungen</li>
    <li>keine körpernahen Dienstleistungen <i>(ausgenommen Friseurläden)</i></li>
    <li>Online-Lehre bei Hochschulen</li>
    <li>Personenobergrenzen im Handel von 20&nbsp;m<sup>2</sup> pro Person</li>
  </ul>
  <p>
    Sinkt die Inzidenz für mindestens
    <strong>fünf Tage unter die 1.000er-Grenze</strong>, werden die Regeln aufgehoben.
  </p>
  <p>
    <strong>HINWEIS:</strong>
    Alle Angaben sind ohne Gewähr. Jeder sollte für sich und seinen Landkreis die aktuellen Regeln
    noch einmal nachprüfen. Regeln ändern sich viel zu oft deshalb: Falls ihr denkt es stimmt
    irgendetwas nicht, meldet euch einfach bei mir!
  </p>
</div>
