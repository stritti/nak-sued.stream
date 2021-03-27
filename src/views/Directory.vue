<template>
  <div class="directory">
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
          limit="8"
          :number-of-pages="register.length"
        />
      </div>
      <div class="directory-list">
        <div
          v-for="stream in streamList"
          :key="stream.id"
          class="item"
        >
          <span v-if="stream.index">
            <a :name="stream.label" />
            <h4
              class="mt-3"
              v-text="stream.label"
            />
          </span>
          <stream-item
            v-else
            class="stream"
            :stream="stream"
          />
        </div>
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
    title: 'Verzeichnis der Streams'
  },
  data () {
    return {
      isLoading: true,
      streamList: [],
      register: []
    }
  },
  mounted () {
    congregationService.getList()
      .then((result) => {
        this.streamList = []
        let index = null
        result.forEach(item => {
          if (index !== item.Kurzname.charAt(0)) {
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
  column-count: 2;
  column-gap: 10px;

  .item {
    break-inside: avoid;
  }

  h4 {
    break-before: auto;
    break-after: avoid;
  }
  .stream {
    break-before: avoid;
  }

}
</style>
