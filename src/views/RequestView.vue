<template>
  <div class="request">
    <h1>Anfrage stellen</h1>

    <b-alert show variant="danger">
      <IBiInfoCircle
        class="h2 mr-1"
      />
      <h4>Da die Neuapostolische Kirche Süddeutschland flächendeckend auf den Streamingdienst
      <a href="https://iptv.nak.org/">IPTV</a> der NAK International umstellt, können leider keine neuen Anfragen mehr
      gestellt werden.</h4>
    </b-alert>

    <div v-if="false">
      <b-alert show>
        <IBiInfoCircle
          class="h2 mr-1"
        />
        Dieser Service ist für die Gemeinden und Kirchenbezirke der Neuapostolischen Kirche kostenlos.
      </b-alert>

      <p>
        Hier kann die Anfrage zur Aufnahme gestellt werden.
      </p>
      <h2>Inhalt</h2>
      <ol>
        <li><a href="#requirements">Voraussetzungen</a></li>
        <li><a href="#preparation">Vorbereitung</a></li>
        <li><a href="#request">Testen und Aufnahme beantragen</a></li>
      </ol>
      <hr>
      <requirements-section />
      <hr>
      <preparation-section />
      <hr>
      <request-form />

    </div>
  </div>
</template>

<script>
import RequirementsSection from '@/components/request/RequirementsSection.vue'
import PreparationSection from '@/components/request/PreparationSection.vue'
import RequestForm from '@/components/request/RequestForm.vue'

export default {
  name: 'Request',
  components: { RequirementsSection, PreparationSection, RequestForm },
  metaInfo: {
    title: 'Anfrage'
  }
}
</script>
