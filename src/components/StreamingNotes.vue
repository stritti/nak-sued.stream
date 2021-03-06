<template>
  <div v-if="notes">
    <h4>Hinweis</h4>
    <div v-text="notes" />
  </div>
</template>

<script>
export default {
  name: 'Streamingnotes',
  props: {
    notes: {
      type: String,
      required: false,
      default: null
    }
  }

}
</script>

<style>

</style>
