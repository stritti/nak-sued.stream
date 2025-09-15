<template>
  <div
    v-once
    class="home"
  >
    <BJumbotron
      header="NAK-Sued.stream"
      lead="Ein privater Service für die Gemeinden der Neuapostolischen Kirche Süddeutschlands"
    >
      <BRow>
        <BCol md="3">
          <BImg
            class="logo"
            src="@/assets/logo.png"
            fluid
          />
        </BCol>
        <BCol>
          <div class="description">
            <p>
              Link-Support für die Livestreams der Gottesdienste der
              Neuapostolischen Kirche Süddeutschland.
            </p>
            <p>
              Ein privates Projekt zur Unterstützung der Gemeinden und
              Kirchenbezirke - seit Februar 2021.
            </p>
            <BRow>
              <BCol  md="6">
                <h4>Übersicht der Streams</h4>
                <p>Übersicht der aktuell registrierten Streams:</p>
                <BButton
                  variant="primary"
                  to="/verzeichnis"
                >
                  Stream-Verzeichnis
                </BButton>
              </BCol>
              <BCol>
                <h4>Neuen Stream anmelden</h4>
                <p>Einen Stream für eine Gemeinde oder Bezirk anmelden:</p>
                <BButton
                  to="/anfrage"
                >
                  Aufnahmeantrag stellen &hellip;
                </BButton>
              </BCol>
            </BRow>
          </div>
        </BCol>
      </BRow>
    </BJumbotron>
    <section>
      <BRow>
        <BCol md="6">
          <section>
            <h2>Livestreams für die Gemeinden</h2>
            <p>
              Plattformen, wie YouTube, legen für jedes Livestream-Event
              umständliche Links an, die man sich nicht merken kann. Dieser
              Service soll den Gemeinden helfen über einen eindeutigen Link die
              Livestreams Pin-geschützt anbieten zu können.
            </p>
          </section>
        </BCol>
        <BCol>
          <div class="bible-text my-5">
            <p>
              Und er sprach zu ihnen: Gehet hin in alle Welt und predigt das
              Evangelium aller Kreatur.
            </p>
            <p>&mdash; Markus 16,15</p>
          </div>
        </BCol>
      </BRow>
      <BRow>
        <BCol>
          <MetricCard
            value="20"
            description="aktive Streams"
          />
        </BCol>
        <BCol>
          <MetricCard
            value="~12.000"
            description="wiederkehrende Nutzer (seit 03.2021)"
          />
        </BCol>
        <BCol>
          <MetricCard
            value=">78.000"
            description="erfolgreiche Weiterleitungen (seit 03.2021)"
          />
        </BCol>
      </BRow>
      <BRow class="mt-5">
        <BCol>
          <section>
            <h3>Voraussetzungen</h3>
            <p>
              Voraussetzung ist der Zugang zum Content Management System, das z.
              B. für alle Gemeinden und Kirchenbezirke in Süddeutschland zur
              Verfügung steht. <br>
              Weitere Details in der Hilfe zur
              <router-link
                to="/anfrage"
                v-text="'Anfrage'"
              />.
            </p>
            <p>
              Der Dienst ist für die Gemeinden und Kirchenbezirke der
              Neuapostolischen Kirche gratis.
            </p>
          </section>
          <hr>
        </BCol>
      </BRow>
      <BRow>
        <BCol
          md="12"
          lg="6"
        >
          <section>
            <h2>Angebot der Gebietskirche Süddeutschland</h2>
            <p>
              Die
              <a
                href="https://www.nak-sued.de"
                target="_blank"
              >
                Gebietskirche Süddeutschland
              </a>
              der Neuapostolischen Kirche überträgt immer wieder Gottesdienste
              live:
            </p>
            <ul>
              <li>
                <a href="https://iptv.nak.org/">IPTV der Neuapostolischen Kirche</a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/NAKSueddeutschland"
                >YouTube</a>
              </li>
            </ul>
          </section>
        </BCol>
        <BCol>
          <section>
            <h2>Video-Archiv der Neuapostolischen Kirche</h2>
            <p>
              Eine umfangreiche Mediathek mit Ausschnitten aus Gottesdiensten
              von Stammapostel Jean-Luc Schneider und Musikveranstaltungen der
              vergangenen Jahre bietet die Neuapostolische Kirche International
              auf <a href="https://nac.today">nac.today</a> und auf ihren
              YouTube-Kanälen in den Sprachen Deutsch, Englisch, Französisch und
              Spanisch:
            </p>
            <ul>
              <li>
                Neuapostolische Kirche International, Deutsch,
                <a href="https://bit.ly/naci_de">https://bit.ly/naci_de</a>
              </li>
              <li>
                New Apostolic Church International, English,
                <a href="https://bit.ly/naci_en">https://bit.ly/naci_en</a>
              </li>
              <li>
                Iglesia Nueva Apostólica Internacional, Español,
                <a href="https://bit.ly/naci_es">https://bit.ly/naci_es</a>
              </li>
              <li>
                Eglise néo-apostolique Internationale, Français,
                <a href="https://bit.ly/naci_fr">https://bit.ly/naci_fr</a>
              </li>
            </ul>
          </section>
        </BCol>
      </BRow>
    </section>
  </div>
</template>

<script>
import FeatureList from '@/components/FeatureList.vue'
import MetricCard from '@/components/metric/MetricCard.vue'

export default {
  name: 'HomeView',
  components: {
    FeatureList,
    MetricCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/custom-vars.scss";

.bible-text {
  text-decoration: none;
  font-size: 1.2rem;
  color: #000;
  background: #ffc;
  display: block;
  --height: 10em;
  --width: 10em;
  padding: 1em;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transition: transform 0.15s linear;
  transform: rotate(-5deg);
  border-color: rgba(128, 127, 127, 0.5);
  border-width: 1px;
  border-style: solid;
}
</style>
