<template>
      <v-app id="inspire">
          <div class="container">
              <div id="app">
                    <v-app id="inspire">
                      <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="374"
                      >
                        <v-img
                          height="200"
                          src="../assets/logo_uvsq.jpg"
                          contains
                        ></v-img>
                                      <v-card-title >2007 - 2009 </v-card-title>             
                        <v-card-text>
                          <v-row
                            align="center"
                            class="mx-0"
                          >              
                          </v-row>
      
                    
                          <div>Master Développement Durable – Université de Versailles (BAC + 5)</div>
                        </v-card-text>
                    
                        <v-divider class="mx-4"></v-divider>
                    
                        <v-card-title>2004 - 2007 </v-card-title>
                                                    <div>Licence Economie internationale – Université de Versailles (BAC + 3)</div>
                        <v-card-text>
                          <v-chip-group
                            v-model="selection"
                            active-class="deep-purple accent-4 white--text"
                            column
                          >
                            <v-chip>5:30PM</v-chip>
                    
                            <v-chip>7:30PM</v-chip>
                    
                            <v-chip>8:00PM</v-chip>
                    
                            <v-chip>9:00PM</v-chip>
                          </v-chip-group>
                        </v-card-text>
                    
                        <v-card-actions>
                          <v-btn
                            color="deep-purple lighten-2"
                            text
                            @click="reserve"
                          >
                            Reserve
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-app>
              </div>
          </div>
      </v-app>
</template>

<script>
  export default {
    name: 'Formations',

  data: () => ({
years: [
      {
        color: 'cyan',
        job: 'Université Versailles-Saint-Quentin-en-Yvelines',
        logo: '../assets/logo_ocea.jpg',
        year: '2007 - 2009',
        text: "Master Développement Durable – Université de Versailles (BAC + 5)",
      },
      {
        color: 'cyan',
        job: 'Université Versailles-Saint-Quentin-en-Yvelines',
        logo: 'assets/logo_zento.png',
        year: '2004 - 2007',
        text: "Licence Economie internationale – Université de Versailles (BAC + 3)",
      },
      ],
  }),
}
</script>

<style scoped>

.container {
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 0;
}

</style>