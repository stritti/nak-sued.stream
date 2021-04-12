<template>
  <div
    v-once
    class="home"
  >
    <b-jumbotron
      header="NAK-Sued.stream"
      lead="Ein privater Service für die Gemeinden der Neuapostolischen Kirche Süddeutschlands"
    >
      <b-row>
        <b-col md="3">
          <b-img
            class="logo"
            src="@/assets/logo.png"
            fluid
          />
        </b-col>
        <b-col>
          <div class="description">
            <p>
              Link-Support für die Livestreams der Gottesdienste der
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
          <section>
            <h2>Livestreams für die Gemeinden</h2>
            <p>
              Plattformen, wie YouTube, legen für jedes Livestream-Event
              umständliche Links an, die man sich nicht merken kann.
              Dieser Service soll den Gemeinden helfen über einen eindeutigen
              Link die Livestreams Pin-geschützt anbieten zu können.
            </p>
            <h3>Voraussetzungen</h3>
            <p>
              Voraussetzung ist der Zugang zum Content Management System,
              das für alle Gemeinden und Kirchenbezirke in Süddeutschland
              zur Verfügung steht. <br>
              Weitere Details in der Hilfe zur
              <router-link
                to="/anfrage"
                v-text="'Anfrage'"
              />.
            </p>
            <p>
              Der Dienst ist für die Gemeinden und Kirchenbezirke der
              Neuapostolischen Kirche Süddeutschland gratis.
            </p>
          </section>
        </b-col>
        <b-col>
          <div class="bible-text my-5">
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
      <b-row>
        <b-col>
          <a name="compare" />
          <h3>Vergleich</h3>
          <p>
            Zu diesem Dienst gibt es Alternativen, welche die Funktionalitäten auch - oder zumindest teilweise - erfüllen:
          </p>
          <feature-list
            class="my-5"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <section>
            <h2>Livestream-Angebot der Gebietskirche Süddeutschland</h2>
            <p>
              Die
              <a
                href="https://www.nak-sued.de"
                target="_blank"
              >
                Gebietskirche Süddeutschland
              </a>
              der Neuapostolischen Kirche
              hat einen öffentlichen
              <a
                href="https://www.youtube.com/c/NAKSueddeutschland"
                target="_blank"
              >YouTube-Kanal</a> auf welchem auch immer wieder
              Gottesdienste live übertragen werden.
            </p>
          </section>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import FeatureList from '@/components/FeatureList.vue'

export default {
  name: 'Home',
  components: {
    FeatureList
  },
  metaInfo: {

    title: 'Home'
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';

.bible-text {
  text-decoration:none;
  font-size: 1.2rem;
  color:#000;
  background:#ffc;
  display:block;
  --height:10em;
  --width:10em;
  padding:1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transition: transform .15s linear;
  transform: rotate(-5deg);
  border-color: rgba(128, 127, 127, .5);
  border-width: 1px;
  border-style: solid;
}
</style>
