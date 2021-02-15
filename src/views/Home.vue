<template>
  <div class="home">
    <b-jumbotron
      header="NAK-Sued.stream"
      lead="Ein privater Service für die Gemeinden der Neuapostolischen Kirche Süddeutschlands"
    >
      <b-row>
        <b-col md="4">
          <b-img
            class="logo"
            src="@/assets/logo.png"
            fluid
          />
        </b-col>
        <b-col>
          <div class="description">
            <p>
              Link-Support für die Live-Streams der Gottesdienste der
              Neuapostolischen Kirche Süddeutschland.
            </p>
            <p>
              Ein privates Projekt zur Unterstützung der Gemeinden.
            </p>
            <b-button
              variant="primary"
              to="/anfrage"
            >
              Anfrage stellen &hellip;
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-jumbotron>
    <section>
      <b-row>
        <b-col md="6">
          <h2>Live-Streams für die Gemeinden</h2>
          <p>
            Plattformen, wie YouTube, legen für jedes Live-Stream-Event
            umständliche Links an, die man sich nicht merken kann.
            Dieser Service soll den Gemeinden helfen dies zu vereinfachen.
          </p>
          <p>
            Voraussetzung ist der Zugang zum Content Management System,
            das für alle Gemeinden und Kirchenbezirke in Süddeutschland
            zur Verfügung steht. Weiteres folgt in der
            <router-link
              to="/documentation"
              v-text="'Dokumentation'"
            />.
          </p>
        </b-col>
        <b-col>
          <div class="bible-text">
            <p>
              Und er sprach zu ihnen: Gehet hin in alle Welt
              und predigt das Evangelium aller Kreatur.
            </p>
            <p>
              &dash; Markus 16,15
            </p>
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';

.bible-text {
  text-decoration:none;
  color:#000;
  background:#ffc;
  display:block;
  --height:10em;
  --width:10em;
  padding:1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transition: transform .15s linear;
  transform: rotate(-5deg);
}
</style>
