<template>
  <v-container>
    <h1 class="text-center">List Blog</h1>
    <v-list>
      <v-list-item v-for="(blog, i) in blogs" :key="i" :to="blog.path">{{
        blog.title
      }}</v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blog').fetch()

    return {
      blogs,
    }
  },
}
</script>

<style></style>
