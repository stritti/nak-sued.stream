<template>
  <div
    v-once
    class="about"
  >
    <h1>Über NAK-Sued.stream</h1>
    <b-alert show>
      Für die Angaben in den Übersichten der Livestreams übernehmen die angegebenen
      Ansprechpartner:innen die Verantwortung.
    </b-alert>
    <p>
      Diese Webseite unterstützt die Kirchengemeinden bei der Bereitstellung der Livestreams
      für die Zuschauer: Die teils kryptischen Links der Livestreams können im Terminkalender
      der Gemeinden hinterlegt werden und erscheinen dann automatisch auf einer gemeindeeigenen
      Übersicht, welche mit einem Zugangs-Pin geschützt ist.
    </p>
    <p>
      Ein Gemeinde-Link führt immer zum aktuellen Livestream.
    </p>
    <p>
      Die Livestreams können schon im Vorfeld eingerichtet und den Terminen zugeordnet
      werden. Sie stehen den Zuschauer:innen automatisch zur Verfügung.
    </p>
    <hr>
    <p>
      Diese Webseite wird ehrenamtlich betreut und privat betrieben.
    </p>
    <p>
      Falls Sie den Betrieb dieser Webseite unterstützen möchten, dürfen Sie mir
      einen Kaffee spendieren:
      <a
        href="https://ko-fi.com/J3J33A8DT"
        target="_blank"
      ><img
        height="36"
        style="border:0px;height:36px;"
        src="https://cdn.ko-fi.com/cdn/kofi2.png?v=2"
        border="0"
        alt="Kaufe mir einen Kaffee auf ko-fi.com"
      ></a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'Über NAK-Sued.stream'
  }
}
</script>
