<template>
  <section id="bookmarks" class="bg-darkBlue">
    <div
      class="
        container
        sectionHeight
        w-full
        md:w-3/4
        px-3
        py-10
        md:py-0
        flex
        items-center
        justify-center
        mx-auto
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
              >TECH NOTES</span
            >
            <span class="block font-playFair text-3xl md:text-4xl font-semibold"
              >Bookmarks</span
            >
          </div>
          <div class="flex">
            <span
              class="
                hidden
                md:block
                text-base
                md:text-xl
                hover:cursor-pointer
                bg-tuna
                border-1 border-lightYellow
                hover:bg-lightYellow hover:text-darkBlue
                rounded-md
                p-1
                px-2
                transform
                active:scale-90
              "
              >Show More</span
            >
          </div>
        </div>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
          <div
            v-for="(bookmark, i) in bookmarks"
            :key="i"
            class="
              bg-tuna
              border-1 border-lightYellow
              p-3
              px-5
              rounded-lg
              hover:cursor-pointer hover:border-2
              transform
              active:scale-95
            "
            @click="openURL(bookmark.url)"
          >
            <span
              class="block text-lg md:text-2xl font-playFair font-semibold mb-2"
              >{{ bookmark.title }}</span
            >
            <span class="block text-xs md:text-sm text-lightYellow truncate">{{
              bookmark.url
            }}</span>
          </div>
        </div>
        <div class="flex min-w-full justify-center mt-10">
          <span
            class="
              block
              md:hidden
              text-base
              md:text-xl
              hover:cursor-pointer
              bg-tuna
              border-1 border-lightYellow
              hover:bg-lightYellow hover:text-darkBlue
              rounded-md
              p-1
              px-2
              transform
              active:scale-90
            "
            >Show More</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { bookmarks } from '../data/bookmarks'

export default {
  data: () => ({
    bookmarks,
  }),
  computed: {},
  methods: {
    openURL(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
