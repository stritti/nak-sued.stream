<template>
  <div class="iptv-component">
    <h3>IPTV-Zugang</h3>

    <BCard class="mb-4">
      <BCardText>
        <p>
          Mit IPTV können Sie Gottesdienste live verfolgen.
        </p>

        <div class="mt-4">
          <h4>Bereits registriert?</h4>
          <p>
            Melden Sie sich bei IPTV an, um auf die Inhalte zuzugreifen:
          </p>
          <BButton
            variant="success"
            href="https://iptv.nak.org"
            target="_blank"
          >
            Anmelden
          </BButton>
        </div>

        <div v-if="registerUrl" class="my-4">
          <h4>Noch kein Konto?</h4>
          <p>
            Um IPTV nutzen zu können, benötigen Sie ein Konto. Registrieren Sie sich hier:
          </p>
          <BButton
            variant="primary"
            :href="registerUrl"
            target="_blank"
          >
            Registrieren
          </BButton>
        </div>

      </BCardText>
    </BCard>

    <BCard>
      <BCardText>
        <h4>Hinweise zur Nutzung</h4>
        <ul>
          <li>IPTV ist auf verschiedenen Geräten verfügbar: Computer, Smartphone, Tablet und Smart-TV</li>
          <li>Sie erhalten mit ihrem Zugang immer eine E-Mail für den kommenden Gottesdienst</li>
          <li>Für die beste Qualität empfehlen wir eine stabile Internetverbindung</li>
          <li>Bei Problemen wenden Sie sich bitte an den Ansprechpartner Ihrer Gemeinde</li>
        </ul>
      </BCardText>
    </BCard>
  </div>
</template>

<script>
export default {
  name: 'IPTVComponent',
  props: {
    registerUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.iptv-component {
  margin-bottom: 2rem;
}
</style>
