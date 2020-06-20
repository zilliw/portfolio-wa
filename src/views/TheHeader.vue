<template>
  <v-layout >

    <v-navigation-drawer
      v-model="drawer"
      app
    >
            <v-img src="../assets/photo.png" 
            >
            </v-img>
            <div class="name">
                <p> <strong> William AZIS</strong></p>
                <p> 3 rue du bocage</p>
                <p> 92310 Sèvres</p>
                        </div>  
              <v-expansion-panels
              :multiple="false">
                      <v-expansion-panel
                        v-for="(skill,i) in skills.data"
                        :key="i"
                      >
                        <v-expansion-panel-header><div> <v-icon> {{ skill.icon }}</v-icon> {{ skill.name }}</div></v-expansion-panel-header>
                        <v-expansion-panel-content >
                          <ul>
                        <div v-for="(category, i) in skill.categories"
                        :key="i">   {{ category.item}} 
                           <v-rating
                              readonly="true"
                              v-model="category.rating"
                              background-color="#41b29a"  
                              color="#41b29a"
                              small > 
                            </v-rating>  </div>
                        </ul>

                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-expansion-panels>
    </v-navigation-drawer>



    <v-app-bar
      color="#41b29a"
      dark
      short
      padless
      
    >
    
    <v-col cols="1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-col >


              <v-toolbar-title
              padless>
              <div>
              <v-col>

              </v-col>
              </div>



              </v-toolbar-title>
        <v-tabs
      centered
      grow>
        <v-tab class="nav"> 
            <router-link to="/">Experiences Professionnelles</router-link></v-tab>
        <v-tab class="nav"> 
            <router-link to="/About">About</router-link></v-tab>
            
        <v-tab>Formations</v-tab>
        <v-tab>Intérêts</v-tab>
    </v-tabs>

    </v-app-bar>


  </v-layout>
</template>

<script> 
export default {
  components: {
  },
  data: () => ({
    skills: {
      currentIndex: 0,
      data: [
        {
          name: 'Compétences',
          icon: 'mdi-account',
            categories: [
              {item: 'Gestion de projet MOA', rating: 5 },
              {item: 'Méthodologie Agile - PO', rating: 4.5},
              {item: 'Spécifications', rating: 5},
              {item: 'Suivi de la facturation', rating: 3.5},
              {item: 'Test et assurance qualité', rating: 4},
              {item: 'Relation Clients', rating: 4},
              {item: 'Support', rating: 5},            
          ],   
        },     
        {
          name: 'Outils',
          icon: 'mdi-tools',
            categories: [
              {item: 'Microsoft Office', rating: 5},
              {item: 'Jira/Redmine', rating: 4},
              {item: 'Slack', rating: 4},
              {item: 'Git', rating: 2},
              {item: 'Salesforce', rating: 1}
            ],
        },
                {
          name: 'Langues',
          icon: 'mdi-flag',
          categories: [
            {item: 'Français', rating: 4},
            {item: 'Anglais', rating: 5},
            {item: 'Espagnol', rating: 2.5},
            {item: 'Indonésien', rating: 1.5}
          ],   
        },
        
      ]  
    },
    drawer: null,
  }),
};
</script>

<style scoped>
.name {
  font-size: 16px;
  padding-left: 0%;
  padding-right: 0%;  
  padding-top: 0%;
  padding-bottom: 0%;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
}
.tab {
  color: white;
}
</style>