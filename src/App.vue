<template>
  <div id="app">
    <web-header></web-header>
     <router-view/>
    <web-footer></web-footer>
  </div>
</template>

<script>
import WebHeader from './components/common/web-header.vue'
import WebFooter from './components/common/web-footer.vue'
export default {
  name: 'App',
  components: {
    'web-header': WebHeader,
    'web-footer': WebFooter
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  width: 100%;
}
</style>
