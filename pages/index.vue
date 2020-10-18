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
        <v-row justify="center">
          <v-col cols="12" md="5">
            <v-row class="text-center">
              <v-col v-for="i in menu" :key="i" cols="2" md="3" class="menu">
                {{ i }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    imgProfile: require('../assets/image/imgProfile.jpeg'),
    menu: ['About', 'Blog', 'Projects', 'Contact Me'],
  }),
}
</script>
<style scoped>
.menu {
  text-transform: uppercase;
}
.menu:hover {
  cursor: pointer;
  font-weight: bold;
}
</style>
