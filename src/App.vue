<template>
  <div id="app">

      <v-content>
          <TheHeader/>
      </v-content>


    <router-view/>

      <v-content>
          <TheFooter/>
      </v-content>

  </div>
</template>

<script>

import TheFooter from './views/TheFooter.vue'
import TheHeader from './views/TheHeader.vue'

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
