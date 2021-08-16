<template>
  <section id="blog" class="bg-charade">
    <div
      class="
        container
        sectionHeight
        w-full
        px-3
        py-10
        md:py-0 md:w-3/4
        mx-auto
        flex
        items-center
        justify-center
      "
    >
      <div class="w-full">
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col">
            <span
              class="
                block
                text-xs
                md:text-sm
                text-lightYellow
                font-semibold
                mb-1
                md:mb-2
              "
            >
              TECH NOTES
            </span>
            <span class="block font-playFair text-3xl md:text-4xl">Blog</span>
          </div>
          <div class="flex">
            <a
              class="
                hidden
                md:block
                text-base
                md:text-xl
                hover:cursor-pointer
                bg-tuna
                border-1 border-lightYellow
                hover:bg-lightYellow hover:text-charade
                rounded-md
                p-1
                px-2
                transform
                active:scale-90
              "
              href="https://dev.to/atjhoendz"
              target="_blank"
              >Show More</a
            >
          </div>
        </div>
        <div
          class="
            flex
            items-center
            w-full
            space-x-0
            md:space-x-4
            flex-wrap
            md:flex-nowrap
          "
        >
          <div
            v-for="(blog, i) in blogs"
            :key="i"
            class="
              blogCard
              bg-tuna
              mt-5
              md:mt-10
              rounded-md
              p-5
              border-1 border-lightYellow
              hover:shadow-xl hover:border-2 hover:cursor-pointer
              transform
              hover:scale-105
            "
            @click="openURL(blog.url)"
          >
            <span class="block text-lg md:text-2xl font-semibold font-playFair">
              {{ blog.title }}
            </span>
            <span class="block text-lightYellow text-xs mt-1 font-semibold">{{
              convertDate(blog.created_at)
            }}</span>
            <!-- <div class="mt-3 text-justify">
            </div> -->
          </div>
          <div class="flex justify-center min-w-full">
            <a
              class="
                block
                mt-10
                md:hidden
                text-base
                hover:cursor-pointer
                bg-tuna
                border-1 border-lightYellow
                hover:bg-lightYellow hover:text-charade
                rounded-md
                p-1
                px-2
                transform
                active:scale-90
              "
              href="https://dev.to/atjhoendz"
              target="_blank"
              >Show More</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    blogs: [],
  }),
  async fetch() {
    this.blogs = await fetch(
      'https://dev.to/api/articles?username=atjhoendz&page=1&per_page=3'
    ).then((res) => res.json())
  },
  methods: {
    convertDate(date) {
      return new Date(date).toLocaleString('id')
    },
    openURL(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style>
.blogCard {
  min-height: 5rem;
  min-width: 100%;
}

@media (min-width: 768px) {
  .blogCard {
    min-height: 8rem;
    min-width: 32.5%;
  }
}
</style>
