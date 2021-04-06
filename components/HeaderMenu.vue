<template>
  <div class="bg-darkBlue">
    <div
      class="flex flex-row justify-between space-x-0 md:space-x-4 py-6 mx-auto w-3/4 align-middle"
    >
      <header>
        <a href="/" class="block">
          <span class="text-xl font-bold my-auto">M. A. Armando</span></a
        >
      </header>
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
        class="transition duration-700 ease-out absolute md:relative top-16 md:top-0 left-11 md:flex flex-col md:flex-row md:space-x-6 font-semibold text-md md:text-lg shadow-lg md:shadow-none bg-lightBlue md:bg-darkBlue w-3/4 md:w-auto text-center"
        :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
      >
        <a href="#" class="text-lightYellow transform hover:scale-110 my-auto"
          >About</a
        >
        <a href="#" class="transform hover:scale-110 my-auto">Projects</a>
        <a href="#" class="transform hover:scale-110 my-auto">Blogs</a>
        <a href="#" class="transform hover:scale-110 my-auto">Contacts</a>
        <button
          class="border-lightYellow border-2 bg-darkBlue hover:bg-lightYellow hover:text-darkBlue hover:font-semibold p-2.5"
        >
          LET'S CHAT
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data: () => ({
    mobileMenuOpen: false,
  }),
}
</script>
