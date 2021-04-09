<template>
  <header
    class="bg-transpared fixed w-full z-50"
    :class="{ scrolled: !atTopOfPage || mobileMenuOpen }"
  >
    <div
      class="flex flex-row justify-between py-4 md:py-6 mx-auto px-3 md:px-0 w-full md:w-3/4 items-center"
    >
      <div>
        <a href="/" class="block">
          <span class="text-xl font-bold my-auto">M. A. ARMANDO</span></a
        >
      </div>
      <button
        class="inline-block w-8 h-8 md:hidden hover:bg-lightBlue p-1"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg
          fill="#FFC276"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <nav
        class="transition duration-700 ease-out absolute md:relative top-16 md:top-0 left-0 md:left-0 md:flex flex-col md:flex-row space-y-1 md:space-y-0 pb-4 md:pb-0 md:space-x-6 font-semibold text-md md:text-base shadow-lg md:shadow-none bg-darkBlue md:bg-transparent w-full md:w-auto text-center items-center"
        :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
      >
        <nuxt-link
          class="transform hover:scale-110 hover:cursor-pointer my-auto"
          to="/#about"
          exact
          active-class="text-lightYellow"
          >ABOUT</nuxt-link
        >
        <nuxt-link
          class="transform hover:scale-110 hover:cursor-pointer my-auto"
          to="/#projects"
          exact
          active-class="text-lightYellow"
          >PROJECTS</nuxt-link
        >
        <nuxt-link
          class="transform hover:scale-110 hover:cursor-pointer my-auto"
          to="/#blog"
          exact
          active-class="text-lightYellow"
          >BLOG</nuxt-link
        >
        <nuxt-link
          class="transform hover:scale-110 hover:cursor-pointer my-auto"
          to="/#bookmarks"
          exact
          active-class="text-lightYellow"
          >BOOKMARKS</nuxt-link
        >
        <nuxt-link
          class="transform hover:scale-110 hover:cursor-pointer my-auto"
          to="/#contact"
          exact
          active-class="text-lightYellow"
          >CONTACT</nuxt-link
        >
        <button
          class="border-lightYellow border-2 bg-transparent hover:bg-lightYellow hover:text-darkBlue hover:font-semibold p-1 md:p-2.5 rounded w-32 md:w-auto mx-auto md:mx-0 transform active:scale-90"
        >
          LET'S CHAT
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    mobileMenuOpen: false,
    atTopOfPage: true,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 100) {
        this.atTopOfPage = false
      } else {
        this.atTopOfPage = true
      }
    },
  },
}
</script>
<style>
.scrolled {
  @apply shadow-2xl bg-darkBlue;
}
</style>
