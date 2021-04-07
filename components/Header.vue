<template>
  <header class="bg-transparent fixed w-full z-50">
    <div
      class="flex flex-row justify-between space-x-0 md:space-x-4 py-6 mx-auto w-3/4 align-middle"
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
        class="transition duration-700 ease-out absolute md:relative top-16 md:top-0 left-11 md:flex flex-col md:flex-row md:space-x-6 font-semibold text-md md:text-base shadow-lg md:shadow-none bg-lightBlue md:bg-transparent w-3/4 md:w-auto text-center"
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
          class="border-lightYellow border-2 bg-transparent hover:bg-lightYellow hover:text-darkBlue hover:font-semibold p-2.5"
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
  }),
}
</script>
