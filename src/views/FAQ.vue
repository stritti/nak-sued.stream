<template>
  <div class="about">
    <h1>Fragen und Antworten</h1>

    <section
      v-for="faq in faqList"
      :key="faq.id"
      class="my-3"
    >
      <h5>
        <a
          :name="faq.id"
          :href="'#'+faq.id"
          class="text-muted secondary "
        >#</a>
        {{ faq.Frage }}
      </h5>
      <vue-simple-markdown :source="faq.Antwort.replaceAll('\\', '')" />
    </section>
    <div
      v-if="isLoading"
      style="max-width: 20rem;"
      class="mx-auto my-5 align-items-center"
    >
      <b-spinner /> Lade Daten &hellip;
    </div>
  </div>
</template>

<script>
import faqService from '@/services/faq.service'

export default {
  name: 'FAQ',
  metaInfo: {
    title: 'FAQ'
  },
  data () {
    return {
      isLoading: true,
      faqList: []
    }
  },
  mounted () {
    this.isLoading = true
    faqService.getList()
      .then(result => {
        this.faqList = result
        this.isLoading = false
      })
  }
}
</script>
<style scoped>

</style>
