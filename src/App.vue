<template>
  <div class="wrapper">
    <navbar></navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/shared/Navbar';
import AppFooter from './components/shared/Footer';
export default {
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style>
*{
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
body {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 1, 3 */
  background-color: rgba(250, 255, 26, 0.10);
}
.wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>