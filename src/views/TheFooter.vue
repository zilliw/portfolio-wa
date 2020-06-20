<template>
  <v-footer 
    padless
    app
  >
    <v-card
      class="flex"
      flat
      tile
      background-color="#41b29a"  
      color="#41b29a"
      dark
    >
    
      <v-card-title 
      app
>
        <p>&copy; Copyright {{ new Date().getFullYear() }}</p>
              <div class="flex">

                <a class="icons" href="https://www.linkedin.com/in/william-azis-09601127/"><v-icon >mdi-linkedin</v-icon> </a>
                <a class="icons" href="mailto:azis.william@gmail.com"><v-icon >mdi-mail</v-icon></a>

              </div>
      </v-card-title>


    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>
<style scoped>
.icons {
  float:right;
  margin-right: 1%;
  margin-left: 1%;
  text-decoration: none;;
}
</style>