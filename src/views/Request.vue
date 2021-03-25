<template>
  <div class="request">
    <h1>Anfrage stellen</h1>

    <b-alert show>
      <b-icon-info-circle
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
    <requirements />
    <hr>
    <preparation />
    <hr>
    <request-form />
  </div>
</template>

<script>
import Requirements from '@/components/request/Requirements.vue'
import Preparation from '@/components/request/Preparation.vue'
import RequestForm from '@/components/request/RequestForm.vue'

export default {
  name: 'Request',
  components: { Requirements, Preparation, RequestForm },
  metaInfo: {
    title: 'Anfrage'
  }
}
</script>
