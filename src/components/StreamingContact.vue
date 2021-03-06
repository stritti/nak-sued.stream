import congregationService from '@/services/congregation.service';
<template>
  <div>
    <h4>Ansprechpartner:in</h4>
    <p>
      Bei Problemen oder Fragen wenden Sie sich bitte an:
    </p>
    <p>
      <strong v-text="congregation.Firstname" />&nbsp;
      <strong v-text="congregation.Lastname" />
    </p>
    <p>
      <span v-if="congregation.Fon">
        <a :href="'mailto:' + congregation.Fon">
          <b-icon-telephone-fill class="mr-2" />{{ congregation.Fon }}</a><br>
      </span>
      <span v-if="congregation.Mail">
        <a :href="'mailto:' + congregation.Mail">
          <b-icon-envelope-fill class="mr-2" />{{ congregation.Mail }}</a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Streamingcontact',
  props: {
    congregation: {
      type: Object,
      required: true
    }
  }

}
</script>

<style>

</style>

        v-text="
        congregation.Mail"
