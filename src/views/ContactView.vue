<template>
  <div class="contact">
    <h1>Kontakt</h1>
    <p>
      Bitte beachten sie, dass dies ein allgemeines Kontaktformular für die Webseite ist.
      Wenn sie Fragen zu einem konkreten Stream aus einer Gemeinde haben, nutzen sie bitte die
      auf der entsprechenden Seite aufgeführten Kontaktinformationen.
    </p>
    <contact-form />
  </div>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm.vue'

export default {
  components: { ContactForm },
  metaInfo: {
    title: 'Kontakt'
  }
}
</script>
