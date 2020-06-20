<template>
  <v-app id="inspire">
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        large
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">Lorem ipsum</h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
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
        year: '2016 - Poste actuel',
        text1: "Projet 1 - Product Owner de la Solution « Le Hab »: pilotage de la roadmap produit, animation des rituels agile, rédaction des spécifications et des tests, gestion du staffing, gestion du product backlog, gestion du planning, gestion du budget et suivi de la facturation, accompagnement et mise en oeuvre de la solution chez les bailleurs ",
        text2: "Projet 2 - Responsable de comptes ISI FOR YOU: Suivi de l’exploitation des clients de la solution, Valorisation des portefeuilles clients, Réalisation du suivi administratif et financier des clients",
        reference1: "Engie, BNPP REPM, Allianz, BPCE, Habitat en Région, Terre d'Opale Habitat, Ekidom, Ophéa",
      },
      {
        color: 'red',
        job: 'ZENTO',
        year: '2011 - 2016',
        text1: "Accompagnement des clients et mise en oeuvre des solutions environnementales CarbonTrack et GreenFee, Rédaction des supports documentaires, Assurer la qualité des logiciels, les tests et le support client, Réalisation des sessions de formations",
        text2: "Participation à l’élaboration du guide sectoriel sur les TNIC",
        reference1: "DHL Supply Chain, Carrefour Supply Chain, Heppner, Mory Ducros, Transalliance, LouisVuittonMalletier, Total, ADEME/CIGREF, Ecoprod, Ville de Roubaix, Ville de Paris, Heppner"
      },
      {
        color: 'green',
        job: 'FONDATERRA',
        year: '2009 - 2011',
        text1: "Animation des ateliers dans le cadre de la réalisation d’un Référentiel Développement Durable, Plan Vert pour les établissements d’enseignements supérieurs. Administration et spécification du site d’évaluation. Réalisation des bilans carbones",
        reference1: "CPU, CGE, REFEDD, CGDD, CASQY, UVSQ"
      },
      ],
  }),
}
</script>
