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
                        
                      <v-col
                        :class="`headline font-weight-bold ${year.color}--text`"
                        v-text="year.job"
                        center
                      >
                      </v-col>
                                </v-row>

                    </template>
                    <div class="py-4">
                      <h1 :class="`headline font-weight-light mb-4 ${year.color}--text`">      
                        {{year.year}} </h1>

                        <v-row>{{year.text1}} </v-row>
                        <v-row>{{year.text2}}</v-row>
                        <v-row><i><b>Références: </b>{{year.reference1}}</i></v-row>
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
        text1: "Projet 1 - Product Owner de la Solution « Le Hab »: pilotage de la roadmap produit, animation des rituels agile, rédaction des spécifications et des tests, gestion du staffing, gestion du product backlog, gestion du planning, gestion du budget et suivi de la facturation, accompagnement et mise en oeuvre de la solution chez les bailleurs ",
        text2: "Projet 2 - Responsable de comptes ISI FOR YOU: Suivi de l’exploitation des clients de la solution, Valorisation des portefeuilles clients, Réalisation du suivi administratif et financier des clients",
        reference1: "Engie, BNPP REPM, Allianz, BPCE, Habitat en Région, Terre d'Opale Habitat, Ekidom, Ophéa",
      },
      {
        color: 'red',
        job: 'ZENTO',
        logo: 'assets/logo_zento.png',
        year: '2011 - 2016',
        text1: "Accompagnement des clients et mise en oeuvre des solutions environnementales CarbonTrack et GreenFee, Rédaction des supports documentaires, Assurer la qualité des logiciels, les tests et le support client, Réalisation des sessions de formations",
        text2: "Participation à l’élaboration du guide sectoriel sur les TNIC",
        reference1: "DHL Supply Chain, Carrefour Supply Chain, Heppner, Mory Ducros, Transalliance, LouisVuittonMalletier, Total, ADEME/CIGREF, Ecoprod, Ville de Roubaix, Ville de Paris, Heppner"
      },
      {
        color: 'green',
        job: 'FONDATERRA',
        logo: 'assets/logo_fondaterra.jpg',
        year: '2009 - 2011',
        text1: "Animation des ateliers dans le cadre de la réalisation d’un Référentiel Développement Durable, Plan Vert pour les établissements d’enseignements supérieurs. Administration et spécification du site d’évaluation. Réalisation des bilans carbones",
        reference1: "CPU, CGE, REFEDD, CGDD, CASQY, UVSQ"
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