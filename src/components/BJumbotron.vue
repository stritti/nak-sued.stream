<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-3">
      <h1 v-if="header" class="display-4">{{ header }}</h1>
      <p v-if="lead" class="lead">{{ lead }}</p>
      <hr v-if="$slots.default" class="my-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BJumbotron',
  props: {
    header: {
      type: String,
      default: ''
    },
    lead: {
      type: String,
      default: ''
    }
  }
}
</script>
