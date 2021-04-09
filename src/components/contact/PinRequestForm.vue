<template>
  <b-modal
    id="bv-modal-pinrequest"
    hide-footer
  >
    <template #modal-title>
      Anfrage Pin
    </template>
    <p>Bitte senden Sie mir den Pin für <b v-text="request.streamName" /> zu:</p>
    <b-form
      v-if="showForm"
      @submit="onSubmit"
    >
      <b-form-group
        label="Name"
      >
        <b-form-input
          v-model="request.from_name"
          type="text"
          placeholder="Vorname Nachname"
          autocomplete="name"
          required
        />
      </b-form-group>
      <b-form-group
        label="E-Mail"
      >
        <b-form-input
          v-model="request.from_mail"
          type="email"
          placeholder="E-Mail"
          autocomplete="email"
          required
        />
      </b-form-group>
      <b-alert
        variant="warning"
        show
      >
        Bitte haben Sie Verständnis, dass diese Anfragen nicht immer kurzfristig beantwortet werden können.
      </b-alert>
      <b-button
        type="submit"
        variant="primary"
      >
        Senden
      </b-button>
    </b-form>
    <template v-else>
      <div
        v-if="!success"
        style="max-width: 20rem;"
        class="my-5 mx-auto align-items-center loading"
      >
        <b-spinner /> Sende Daten &hellip;
      </div>
    </template>
    <template v-if="success">
      <b-alert
        v-if="success"
        variant="success"
        class="my-5"
        show
      >
        Ihre Anfrage wurde erfolgreich an die/den Verantwortliche:n des Livestreams versendet.
      </b-alert>
      <b-button
        @click="$bvModal.hide('bv-modal-pinrequest')"
      >
        Schließen
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import emailjsService from '@/services/emailjs.service'
import congregationService from '@/services/congregation.service'

export default {
  name: 'PinRequestForm',
  props: {
    slug: {
      type: String,
      require: true,
      default: null
    }
  },
  data () {
    return {
      request: {
        streamName: ''
      },
      showForm: true,
      success: false
    }
  },
  created () {
    congregationService.getContactBySlug(this.slug)
      .then(response => {
        this.request.stream_name = response.Name
        this.request.to_mail = response.Mail
        this.request.to_name = `${response.Firstname} ${response.Lastname}`
      })
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.showForm = false

      emailjsService.sendPinRequest(
        this.request,
        this.submitSuccess,
        this.submitFailed
      )
    },
    submitSuccess (response) {
      console.log(response)
      this.success = true
    },
    submitFailed (error) {
      console.err(error)
      this.success = false
    }
  }
}
</script>
