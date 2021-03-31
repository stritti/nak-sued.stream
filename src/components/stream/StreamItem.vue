<template>
  <div>
    <a
      :href="href"
      v-text="stream.Name"
    />
  </div>
</template>

<script>
export default {
  props: {
    stream: {
      type: Object,
      require: true,
      default: null
    }
  },
  computed: {
    href () {
      return location.protocol + '//' + location.host + '/' + this.stream.slug
    }
  }

}
</script>

<style>

</style>
