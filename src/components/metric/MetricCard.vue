<template>
  <b-card class="metric text-center">
    <div class="metric__value">
      {{ value }}
    </div>
    <div class="metric__desc">
      {{ description }}
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'MetricCard',
  props: {
    value: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/custom-vars.scss";

.metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
  height: 100%;
  &__value {
    font-size: 1.75rem;
    font-weight: bold;
  }
  &__desc {
    font-size: 0.75rem;
  }
}
</style>
