<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="white">
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} - Atjhoendz
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
