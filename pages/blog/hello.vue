<template>
  <v-container>
    <h1 class="text-center">Blog</h1>
    <h2 class="text-center mt-10">{{ page.title }}</h2>
    <nuxt-content :document="page"></nuxt-content>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
}
</script>

<style></style>
