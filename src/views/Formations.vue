<template>
    <v-app id="inspire">
              <div class="container">
                </div>
        <div class="container">
            <v-card
             max-width="370"
             class="cards"
             >
             
            <v-toolbar
            dark
            color='rgb(65, 178, 154)'>
                   <v-toolbar-title class="cards">
                     FORMATIONS
                    </v-toolbar-title>
            </v-toolbar
            >
               
                <div                 
                v-for="(university, i) in universities"
                :key="i">

                <v-card-title>
                {{university.year}}   
                </v-card-title>   

                <v-card-text>
                    <h1 class="titles">{{university.job}}</h1>
                    <div>{{university.text}}</div>
                    <v-chip color="rgb(65, 178, 154)" text-color="white">{{university.level}}</v-chip>
                </v-card-text>

                </div>
                                <v-img
                height=auto
                src="../assets/logo_uvsq.jpg"
                contains
                ></v-img>
            </v-card>

            
        </div>
        
    </v-app>
</template>

<script>


export default {
    name: 'Formations',
    

  data: () => ({
universities: [
      {
        job: 'Université Versailles Saint-Quentin-en-Yvelines',
        year: '2007 - 2009',
        text: "Master Développement Durable",
        level: 'BAC +5'
      },
      {
        job: 'Université Versailles Saint-Quentin-en-Yvelines',
        year: '2004 - 2007',
        text: "Licence Economie internationale",
        level: 'BAC +3'
      },
      ],
  }),
}
</script>

<style scoped>

.container {
  display:flex;
  flex-direction: row;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: center;
}

.titles {
  font-size:16px;
  text-align: center;
}

.class {
    text-align: center;

}

</style>