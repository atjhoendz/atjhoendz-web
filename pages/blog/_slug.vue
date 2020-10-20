<template>
  <v-container>
    <article class="mt-10">
      <h1 class="text-h4 text-md-h3 mb-3">{{ article.title }}</h1>
      <p class="mb-3">{{ article.description }}</p>
      <p class="mb-3 text-caption">
        <v-icon color="blue" dense>mdi-clock-outline</v-icon>
        {{ formatDate(article.createdAt) }} |
        <v-icon color="blue" dense>mdi-account-circle-outline</v-icon>
        {{ article.author.name }}
      </p>
      <div class="mb-5">
        <v-chip
          v-for="(tag, i) in formatTags(article.tags)"
          :key="i"
          class="mr-2"
          small
          ripple
          >{{ tag }}
        </v-chip>
      </div>

      <nuxt-content :document="article" />
      <v-divider class="mt-5"></v-divider>
      <p class="mt-3 text-caption">
        Updated at {{ formatDate(article.updatedAt) }}
      </p>
      <v-divider class="mb-3"></v-divider>
      <PrevNext :prev="prev" :next="next" />
    </article>
  </v-container>
</template>

<script>
export default {
  components: {
    PrevNext: () => import('../../components/PrevNext'),
  },
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', options)
    },
    formatTags(tags) {
      return tags.split(',')
    },
  },
}
</script>

<style>
.v-application code {
  all: unset;
}
.nuxt-content-highlight {
  position: relative;
}
.nuxt-content-highlight .filename {
  position: absolute;
  right: 0;
  color: rgba(203, 213, 224, 1);
  font-weight: 300;
  z-index: 10;
  margin-top: 0.25rem;
  margin-right: 0.5rem;
  font-size: 0.875rem;
}
.nuxt-content h1 {
  font-weight: bold;
  font-size: 34px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
@media screen and (max-width: 480px) {
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 25px;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 19px;
  }
}
</style>
