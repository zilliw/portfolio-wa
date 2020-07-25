<template>
    <v-app id="inspire">
        <div class="container">
            <v-card
             max-width="374">

                <v-img
                height="200 "
                src="../assets/logo_uvsq.jpg"
                contains
                ></v-img>
                
                <div                 
                v-for="(graduate, i) in graduates"
                :key="i">

                <v-card-title>
                {{graduate.year}}   
                </v-card-title>   

                <v-card-text>
                    <h1 class="titles">{{graduate.job}}</h1>
                    <div>{{graduate.text}}</div>
                    <v-chip color="rgb(65, 178, 154)" text-color="white">{{graduate.level}}</v-chip>
                </v-card-text>

                </div>
            </v-card>
        </div>
    </v-app>
</template>

<script>


export default {
    name: 'Formations',

  data: () => ({
graduates: [
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
  padding-left: 1%;
  padding-right: 1%;  
  justify-content: center;
}

.titles {
  font-size:16px;
}

</style>