<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-hover>
          <template v-slot="{ hover }">
            <v-img
              :src="imgProfile"
              class="mx-auto"
              :class="`elevation-${hover ? 10 : 1}`"
              :style="{ 'border-radius': '50%', 'margin-bottom': '15px' }"
              max-width="250"
              contain
            >
            </v-img>
          </template>
        </v-hover>
        <div class="text-center">
          <h1>Mohamad Achun Armando</h1>
          <span>Full Stack Web Developer</span>
        </div>
        <div class="d-flex justify-center mt-4">
          <div v-for="(social, i) in socials" :key="i" class="mx-4">
            <v-tooltip bottom :color="social.color">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :href="social.link"
                  target="_blank"
                  height="15"
                  icon
                  x-small
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-img :src="social.icon" width="15" contain> </v-img>
                </v-btn>
              </template>
              <span>{{ social.link }}</span>
            </v-tooltip>
          </div>
        </div>
        <div class="d-flex justify-center mt-7">
          <div
            v-for="(page, i) in pages"
            :key="i"
            class="mx-2 mx-sm-6 mx-md-10"
          >
            <nuxt-link class="menu" :to="page.url">{{ page.title }}</nuxt-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    imgProfile: require('../assets/image/imgProfile.jpeg'),
    pages: [
      {
        title: 'About',
        url: '/about',
      },
      {
        title: 'Blog',
        url: '/blog',
      },
      {
        title: 'Projects',
        url: '/projects',
      },
      {
        title: 'Contact Me',
        url: '/comingsoon',
      },
    ],
    socials: [
      {
        name: 'Facebook',
        link: 'https://facebook.com/atjhoendz789',
        icon: require('../assets/social/facebook.svg'),
        color: '#1877F2',
      },
      {
        name: 'Dev.to',
        link: 'https://dev.to/atjhoendz',
        icon: require('../assets/social/dev-dot-to.svg'),
        color: '#0A0A0A',
      },
      {
        name: 'Github',
        link: 'https://github.com/atjhoendz',
        icon: require('../assets/social/github.svg'),
        color: '#181717',
      },
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/in/moh-achun-armando',
        icon: require('../assets/social/linkedin.svg'),
        color: '#0077B5',
      },
      {
        name: 'Email',
        link: 'mailto:achunarmando@gmail.com',
        icon: require('../assets/social/gmail.svg'),
        color: '#D14836',
      },
    ],
  }),
  head: () => ({
    title: 'Home',
  }),
}
</script>
<style scoped>
.menu {
  text-transform: uppercase;
  text-decoration: none;
}
.menu:hover {
  cursor: pointer;
  font-weight: bold;
}
</style>
