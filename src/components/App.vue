<template>
  <div id="app">
    <Gallery/>
  </div>
</template>

<script>
import Gallery from './Gallery'

export default {
  name: 'App',
  components: {
    Gallery
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f1da36+0,fefcea+100 */
  background: rgb(241,218,54); /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, rgba(241,218,54,1) 0%, rgba(254,252,234,1) 100%); /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, rgba(241,218,54,1) 0%,rgba(254,252,234,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, rgba(241,218,54,1) 0%,rgba(254,252,234,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1da36', endColorstr='#fefcea',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>
