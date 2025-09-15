<template>
  <div class="jumbotron">
    <h1 v-if="header" class="display-4">{{ header }}</h1>
    <p v-if="lead" class="lead">{{ lead }}</p>
    <hr v-if="$slots.default" class="my-4">
    <slot></slot>
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

<style scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}
</style>
