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

  /* strike > * {
    color: rgba(255, 255, 255, 0.2);
  }
  
  i {
    font-weight: 100;
    opacity: 0.8;
  } */
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
  <span class="green text"> Grün: &lt; 35</span><br /><br />
  <span class="yellow text"> Gelb: 35 &lt; 50</span><br /><br />
  <span class="red text"> Rot: 50 &lt; 100</span><br /><br />
  <span class="darkred text"> Dunkelrot: &gt; 100</span><br /><br />
</div>
