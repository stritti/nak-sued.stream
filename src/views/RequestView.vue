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
    <requirements-section />
    <hr>
    <preparation-section />
    <hr>
    <request-form />
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
