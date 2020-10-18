<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="white">
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} - Built with
        <v-tooltip top color="#00C58E">
          <template v-slot:activator="{ on, attrs }">
            <a
              href="https://nuxtjs.org"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="attrs"
              v-on="on"
              ><img
                src="~/assets/social/nuxt-dot-js.svg"
                alt="Nuxt.js"
                height="15"
            /></a>
          </template>
          <span>Nuxt.js</span>
        </v-tooltip>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
