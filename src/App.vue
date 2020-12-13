<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>