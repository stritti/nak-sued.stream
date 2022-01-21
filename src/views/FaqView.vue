<template>
  <div class="about">
    <h1>Fragen und Antworten</h1>

    <section
      v-for="faq in faqList"
      :key="faq.id"
      class="my-4"
      :class="isSelectedStyle(faq.id)"
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
  },
  methods: {
    isSelectedStyle (id) {
      if (this.$route.hash && (this.$route.hash === `#${id}`)) {
        return 'faq-selected'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/custom-vars.scss';

.faq-selected {
  h5 {
    color: $primary
  }
  border-style: solid;
  border-width: 1px;
  border-color: rgba(128, 127, 127, .5);
  border-radius: 5px;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  padding: 10px;
}
</style>
