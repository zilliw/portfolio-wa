<template>
  <v-app id="inspire">
      <div class="container">
          <v-timeline >
              <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :color="year.color"
                large
                right
              >
                    <template v-slot:opposite>
                      <v-row>

            <v-img src="../assets/logo_ocea.jpg"
            width="10">
            </v-img>

                      <v-col
                      
                        :class="`headline font-weight-bold ${year.color}--text`"
                        v-text="year.job"
                        align-self="center"
                
                      >
                      
                      </v-col>
                                </v-row>

                    </template>
                    <div class="py-4">
                      <h1 :class="`headline font-weight-light mb-4 ${year.color}--text`">      
                        {{year.year}} </h1>

                        <v-row>{{year.text}} </v-row>
                        <v-row><i><b>Références: </b>{{year.reference}}</i></v-row>
                    </div>
              </v-timeline-item>
          </v-timeline>
      </div>
  </v-app>
</template>

<script>
  export default {
    name: 'Experience',

  data: () => ({
years: [
      {
        color: 'cyan',
        job: 'OCEA SMART BUILDING',
        logo: '../assets/logo_ocea.jpg',
        year: '2016 - Aujourd\'hui',
        text: "Projet 1 - Product Owner de la Solution « Le Hab »: pilotage de la roadmap produit, animation des rituels agile, rédaction des spécifications et des tests, gestion du staffing, gestion du product backlog, gestion du planning, gestion du budget et suivi de la facturation, accompagnement et mise en oeuvre de la solution chez les bailleurs ",
        reference: "Engie, BNPP REPM, Allianz, BPCE, Habitat en Région, Terre d'Opale Habitat, Ekidom, Ophéa",
      },
      {
        color: 'red',
        job: 'ZENTO',
        logo: 'assets/logo_zento.png',
        year: '2011 - 2016',
        text: "Accompagnement des clients et mise en oeuvre des solutions environnementales CarbonTrack et GreenFee, Rédaction des supports documentaires, Assurer la qualité des logiciels, les tests et le support client, Réalisation des sessions de formations",
        reference: "DHL Supply Chain, Carrefour Supply Chain, Heppner, Mory Ducros, Transalliance, LouisVuittonMalletier, Total, ADEME/CIGREF, Ecoprod, Ville de Roubaix, Ville de Paris, Heppner"
      },
      {
        color: 'green',
        job: 'FONDATERRA',
        logo: 'assets/logo_fondaterra.jpg',
        year: '2009 - 2011',
        text: "Animation des ateliers dans le cadre de la réalisation d’un Référentiel Développement Durable, Plan Vert pour les établissements d’enseignements supérieurs. Administration et spécification du site d’évaluation. Réalisation des bilans carbones",
        reference: "CPU, CGE, REFEDD, CGDD, CASQY, UVSQ"
      },
      ],
  }),
}
</script>

<style scoped>

.container {
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  padding-top: 0%;
}

</style>