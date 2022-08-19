<template>
  <b-navbar
    type="dark"
    variant="dark"
    toggleable="md"
  >
    <b-container>
      <b-navbar-brand
        to="/"
        title="Nak-Sued.stream"
      >
        <b-img
          class="d-inline-block align-top"
          src="@/assets/logo.png"
          height="30"
          alt="nak-sued.stream Logo"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item to="/verzeichnis">
            Verzeichnis
          </b-nav-item>
          <b-nav-item to="/anfrage">
            Anfrage
          </b-nav-item>
          <b-nav-item to="/about">
            Über
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
