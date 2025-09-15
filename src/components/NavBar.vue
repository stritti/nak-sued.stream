<template>
  <BNavbar
    v-b-color-mode="'dark'"
    variant="dark"
    toggleable="md"
  >
    <BContainer>
      <BNavbarBrand
        to="/"
        title="Nak-Sued.stream"
      >
        <BImg
          class="d-inline-block align-top"
          src="/assets/logo.png"
          height="30"
          alt="nak-sued.stream Logo"
        />
      </BNavbarBrand>

      <BNavbarToggle target="nav-collapse" />

      <BCollapse
        id="nav-collapse"
        is-nav
      >
        <BNavbarNav>
          <BNavItem to="/verzeichnis">
            Verzeichnis
          </BNavItem>
          <BNavItem to="/anfrage">
            Anfrage
          </BNavItem>
          <BNavItem to="/about">
            Über
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BContainer>
  </BNavbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
