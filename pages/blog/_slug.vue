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
.blog-list-link {
  text-decoration: none;
  color: #000 !important;
}

.blog-list-link:hover {
  color: rgb(92, 148, 252) !important;
}

.blog-title {
  font-size: 48px;
  font-weight: 400;
}

@media only screen and (max-width: 600px) {
  .blog-title {
    font-size: 36px;
  }
}

.blog-description {
  font-weight: 400;
  font-style: italic;
}

.blog-details {
  margin-top: 30px;
  margin-bottom: 40px;
}

.blog-time {
  font-size: 15px;
  font-weight: 300;
}
.nuxt-content h2 {
  font-weight: 500;
  font-size: 30px;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
  margin-bottom: 1rem;
}

.nuxt-content h3 {
  font-weight: 400;
  font-size: 22px;
}

.nuxt-content p {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
}

.nuxt-content p code,
.nuxt-content h2 code,
.nuxt-content h3 code {
  color: #476582;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-family: Consolas, Roboto Mono, monospace;
}

.nuxt-content ul {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.nuxt-content ol {
  font-size: 16px;
  margin-bottom: 30px;
  word-spacing: 2px;
  line-height: 32px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.v-application code {
  all: initial;
  all: unset;
}

.v-application a {
  text-decoration: none;
}

.nuxt-content-highlight {
  font-family: Consolas;
  font-size: 16px;
  position: relative;
  z-index: 1;
  border-radius: 6px;
}

.nuxt-content-highlight > .filename {
  font-family: Roboto;
  right: 0;
  top: 0;
  position: absolute;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  color: rgba(203, 213, 224, 1);
  font-weight: 300;
  z-index: 10;
  margin-top: 0.5rem;
}

.nuxt-content pre {
  position: static;
  border-radius: 6px;
  font-family: Consolas;
  font-size: 16px;
  padding: 20px;
}

code[class*='language-'],
pre[class*='language-'] {
  font-size: 16px;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  color: #c3cee3;
  font-family: Consolas, Roboto Mono, monospace;
  font-size: 1em;
  line-height: 1.5em;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  margin-bottom: 15px;
}
</style>
