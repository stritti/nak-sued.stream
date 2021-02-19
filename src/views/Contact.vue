<template>
  <div class="contact">
    <h1>Kontakt</h1>
    <contact-form />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: { ContactForm },
  metaInfo: {
    title: 'Kontakt'
  }
}
</script>
