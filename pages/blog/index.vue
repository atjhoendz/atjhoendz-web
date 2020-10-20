<template>
  <v-container>
    <h1 class="text-center">List Blog</h1>
    <v-list>
      <v-list-item
        v-for="(blog, i) in blogs"
        :key="i"
        :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
        nuxt
      >
        <v-list-item-content>
          <v-list-item-title
            class="headline"
            v-text="blog.title"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-text="blog.description"
          ></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text v-text="formatDate(blog.createdAt)">
          </v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      blogs,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', options)
    },
  },
  head: () => ({
    title: 'Blog',
  }),
  loading: true,
}
</script>

<style></style>
