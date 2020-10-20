<template>
  <v-app>
    <Navdraw />
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="white">
      <div class="d-flex justify-center align-center mx-auto">
        &copy; {{ new Date().getFullYear() }} - Built with
        <v-tooltip v-for="(tech, i) in techs" :key="i" top :color="tech.color">
          <template v-slot:activator="{ on, attrs }">
            <v-img
              :src="tech.img"
              height="15"
              width="15"
              contain
              class="ml-2"
              v-bind="attrs"
              v-on="on"
            ></v-img>
          </template>
          <span>{{ tech.name }}</span>
        </v-tooltip>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Navdraw from '../components/Navdraw'

export default {
  components: {
    Navdraw,
  },
  data() {
    return {
      techs: [
        {
          name: 'Nuxt.js',
          img: require('../assets/social/nuxt-dot-js.svg'),
          color: '#00C58E',
        },
        {
          name: 'Vuetify',
          img: require('../assets/social/vuetify.svg'),
          color: '#1867C0',
        },
      ],
    }
  },
}
</script>
