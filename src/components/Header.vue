<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-container>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active-class = "active"  to="/" exact>Home</b-nav-item>
          <b-nav-item  active-class = "active" to="/new" exact>New</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</div>
</template>


<script>
export default {
  name: 'Navbar',
}
</script>