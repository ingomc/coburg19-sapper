<style>
  .redtext {
    color: var(--danger-bg);
  }

  .yellowtext {
    color: var(--warning-bg);
  }

  .greentext {
    color: var(--info-bg);
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
  <Message until="2021-01-05T00:00:00Z">
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
      <span> Aktuell sind die Maßnahmen der Corona-Ampel irrelevant! </span>
    </small>
  </Message>
  <h1>Was bedeuten die Farben der Corona-Ampel?</h1>
  <p>
    <strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz&nbsp;bis 35</span></span></strong>
  </p>
  <ul>
    <li>Allgemeine AHA + L-Regeln&nbsp;&nbsp;(Abstand, Hygiene, Alltagsmaske und Lüften)</li>
    <li>
      Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit treffen
      ist erlaubt
    </li>
    <li>
      Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum
      Platz
    </li>
    <li>
      Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind erlaubt
    </li>
  </ul>
  <p>
    <span class="yellowtext">
      <strong><span class="yellowtext"><span class="darkbluetext">
            <span class="yellowtext">Gelb -</span>&nbsp;</span></span></strong><span
        class="darkbluetext"
      ><strong> <span class="yellowtext">Inzidenz</span></strong></span></span><b
      style="background-color: initial;"
    ><span class="darkbluetext"><span class="yellowtext"><span class="darkbluetext">&nbsp;</span>35
          bis 50</span></span></b>
  </p>
  <ul>
    <li>
      Maskenpflicht wird ausgeweitet.&nbsp;
      <ul>
        <li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li>
        <li>Maskenpflicht an Hochschulen&nbsp;</li>
        <li>in öffentlichen Gebäuden</li>
        <li>
          am Arbeitsplatz, wenn der Abstand von 1,5m&nbsp;nicht eingehalten werden kann. Im Betrieb,
          sobald man den Platz verlässt.
        </li>
        <li>Öffentlichen Plätzen, die stark frequentiert sind.</li>
      </ul>
    </li>
    <li>Allgemeine Sperrstunde ab 23 Uhr&nbsp;</li>
    <li>Generelles Alkoholverkaufsverbot&nbsp;an Tankstellen ab 23 Uhr&nbsp;</li>
    <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li>
    <li>
      private Feiern und Treffen&nbsp;sind auf zwei Haushalte oder maximal 10 Personen beschränkt.
      Egal ob draußen, daheim oder im Lokal.
    </li>
  </ul>
  <p>
    <span class="redtext"><strong>Rot - Inzidenz&nbsp;</strong></span><span class="redtext"><strong
      >50 bis 100</strong></span>
  </p>
  <ul>
    <li>
      Maskenpflicht wie bei 35-50 und zusätzlich&nbsp;Maskenpflicht auch in der
      Grundschule&nbsp;&nbsp;
    </li>
    <li>Allgemeine Sperrstunde ab 22 Uhr</li>
    <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr&nbsp;</li>
    <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li>
    <li>
      private Feiern und Treffen&nbsp;sind auf 5 Personen oder zwei Haushalte&nbsp;beschränkt. Egal
      ob draußen, daheim oder im Lokal.
    </li>
  </ul>
  <p>
    <span class="redtext"><strong>Dunkel-Rot - Inzidenz&nbsp;</strong></span><span
      class="redtext"
    ><strong>ab 100</strong></span>
  </p>
  <ul>
    <li>Es gelten die gleichen Regeln der Stufe Rot und nis auf ...</li>
    <li>Allgemeine Sperrstunde ab 21 Uhr</li>
    <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 21 Uhr&nbsp;</li>
    <li>Auf öffentlichen Plätzen besteht ab 21 Uhr ein Alkoholverbot.</li>
  </ul>
</div>
