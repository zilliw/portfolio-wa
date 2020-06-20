<template>
  <div id="app">

      <v-content>
          <TheHeader/>
      </v-content>

          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
