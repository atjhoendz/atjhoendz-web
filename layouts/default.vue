<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <div
      class="transition duration-1000 ease-in fixed z-50 bottom-5 right-5"
      :class="{ block: showBtnScrollTop, hidden: !showBtnScrollTop }"
    >
      <nuxt-link to="/">
        <button class="bg-lightYellow p-3 rounded-md" @click="scrollToTop()">
          <svg
            fill="#1F2235"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
            />
          </svg>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showBtnScrollTop: false,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    handleScroll() {
      const scrollPosition = window.scrollY
      if (scrollPosition > 400) return (this.showBtnScrollTop = true)
      return (this.showBtnScrollTop = false)
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Playfair+Display:wght@900&display=swap');

html {
  @apply font-nunito;

  font-size: 16px;

  /* word-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: white;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
