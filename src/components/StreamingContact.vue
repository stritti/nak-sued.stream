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
        <a
          :href="'tel:' + congregation.Fon"
          rel="nofollow"
        >
          <IBiTelephoneFill class="mr-2" /> {{ congregation.Fon }}</a><br>
      </span>
      <span v-if="congregation.Mail">
        <a
          :href="'mailto:' + congregation.Mail"
          rel="nofollow"
        >
          <IBiEnvelopeFill class="mr-2" /> {{ congregation.Mail }}</a>
      </span>
    </p>
    <p>
      <span v-if="congregation.Website">
        <a
          :href="congregation.Website"
          rel="nofollow"
        >
          <IBiGlobe2 class="mr-2" /> {{ congregation.Website }}</a><br>
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
