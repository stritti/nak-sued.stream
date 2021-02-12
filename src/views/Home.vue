<template>
  <div class="home">
    <b-jumbotron
      header="NAK-Sued.stream"
      lead="Ein privater Service für die Gemeinden der Neuapostolischen Kirche Süddeutschland"
    >
      <b-row>
        <b-col md="6">
          <b-img
            class="logo"
            src="@/assets/logo.png"
            fluid
          />
        </b-col>
        <b-col>
          <div class="description">
            <p>Du kaufst ein Produkt?</p>
          </div>
        </b-col>
      </b-row>
    </b-jumbotron>
    <section>
      <b-row>
        <b-col md="6">
          <h2>xxx</h2>
          <p>
            xxx
          </p>
        </b-col>
        <b-col>
          <div class="bible-text">
            <p>
              xxx
            </p>
            <p>
              &dash; xxx
            </p>
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';
.jumbotron {

  .description {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
}

.bible-text {
  text-decoration:none;
  color:#000;
  background:#ffc;
  display:block;
  --height:10em;
  --width:10em;
  padding:1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transition: transform .15s linear;
  transform: rotate(-5deg);
}
</style>
