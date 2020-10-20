<template>
  <div>
    <v-text-field
      v-model="searchQuery"
      class="mx-4"
      label="Search Blog"
      color="blue"
      outlined
      rounded
      dense
    >
    </v-text-field>
    <v-list v-if="articles.length">
      <v-list-item
        v-for="(article, i) in articles"
        :key="i"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        nuxt
        >{{ article.title }}
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchQuery: '',
    articles: [],
  }),
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('blog')
        .limit(4)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>

<style></style>
