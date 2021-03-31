<template>
  <div class="directory">
    <b-alert
      v-if="notFound"
      show
      variant="warning"
      class="my-5"
    >
      <b-icon icon="link45deg" />
      Der angegebene Link konnte nicht gefunden werden.
      Folgende Streams sind registriert:
    </b-alert>
    <h1>Verzeichnis</h1>
    <template v-if="isLoading">
      <div
        style="max-width: 20rem;"
        class="my-5 mx-auto align-items-center loading"
      >
        <b-spinner /> Lade Daten &hellip;
      </div>
    </template>
    <template v-else>
      <div class="overflow-auto">
        <b-pagination-nav
          :link-gen="linkGen"
          :page-gen="pageGen"
          base-url="#"
          limit="20"
          hide-goto-end-buttons
          pills
          :number-of-pages="pageLength"
        />
      </div>
      <div class="directory-list">
        <template
          v-for="stream in streamList"
        >
          <h4
            v-if="stream.index"
            :key="stream.id"
            class="mt-3"
          >
            <a :name="stream.label" />
            {{ stream.label }}
          </h4>
          <stream-item
            v-else
            :key="stream.id"
            class="stream-item"
            :stream="stream"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import congregationService from '@/services/congregation.service'
import StreamItem from '@/components/stream/StreamItem.vue'

export default {
  name: 'Stream',
  components: { StreamItem },
  metaInfo: {
    title: 'Verzeichnis'
  },
  props: {
    notFound: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      isLoading: null,
      streamList: [],
      register: []
    }
  },
  computed: {
    pageLength () {
      if (this.register && this.register.length > 0) {
        return this.register.length
      }
      return 1
    }
  },
  mounted () {
    this.isLoading = true
    congregationService.getList()
      .then((result) => {
        this.streamList = []
        let index = null
        result.forEach(item => {
          if (item.Kurzname.charAt(0) && index !== item.Kurzname.charAt(0)) {
            index = item.Kurzname.charAt(0)
            this.register.push(index)
            this.streamList.push({ index: true, label: index })
          }
          this.streamList.push(item)
        })
        this.isLoading = false
      })
  },
  methods: {
    linkGen (pageNum) {
      return '#' + this.register[pageNum - 1]
    },
    pageGen (pageNum) {
      return this.register[pageNum - 1]
    }
  }
}
</script>

<style lang="scss">
.directory-list {
  column-count: 1;
  column-gap: 10px;

  h4 {
    break-before: auto;
    break-after: avoid;
  }
  .stream-item {
    break-before: avoid;
  }

}
</style>
