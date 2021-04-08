<template>
  <div>
    <section
      id="home"
      class="bg-gradient-to-br from-darkBlue via-lightBlue to-darkBlue"
    >
      <div
        class="container min-h-screen flex items-center justify-center mx-auto pt-5 md:pt-16 px-3 md:px-0"
      >
        <div class="">
          <span class="block text-2xl md:text-4xl text-lightYellow mb-3"
            >Hello, I'm</span
          >
          <div
            class="space-y-2 text-5xl md:text-8xl font-playFair font-extrabold"
          >
            <span class="block">Moh. Achun</span>
            <span class="block">Armando</span>
          </div>
          <span class="block text-2xl md:text-3xl font-medium mt-8"
            >Full Stack Web Developer</span
          >
        </div>

        <div class="ml-5 md:ml-24">
          <img
            src="../assets/img/imgProfile.png"
            alt="avatar"
            class="object-contain imgHeight hidden md:block imgFilter"
          />
        </div>
      </div>
    </section>
    <section id="about" class="bg-lightBlue">
      <div
        class="container min-h-screen flex items-center justify-center mx-auto"
      >
        ABOUT
      </div>
    </section>
    <section id="projects" class="bg-ebonyClay">
      <div
        class="container min-h-screen w-full px-3 md:px-0 md:w-3/4 mx-auto flex justify-center items-center"
      >
        <div class="w-full">
          <div class="flex justify-between w-full items-center">
            <div class="flex flex-col">
              <span
                class="block miniTitle text-xs md:text-sm text-lightYellow font-semibold mb-1 md:mb-2"
                >MY EXPERIENCE</span
              >
              <span class="block font-playFair text-3xl md:text-4xl"
                >Projects</span
              >
            </div>
            <div class="flex items-center">
              <div
                class="transform hover:scale-110 hover:z-10 bg-transparent hover:bg-white border-2 border-r-0 border-lightYellow p-2 md:p-3 hover:cursor-pointer rounded rounded-r-none"
                @click="scrollLeft"
              >
                <svg
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  class="fill-current text-lightYellow h-4 w-4 md:h-6 md:w-6"
                >
                  <path
                    d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
                  />
                </svg>
              </div>
              <div
                class="transform hover:scale-110 bg-lightYellow hover:bg-white border-2 border-l-0 border-lightYellow p-2 md:p-3 hover:cursor-pointer rounded rounded-l-none"
                @click="scrollRight"
              >
                <svg
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  class="fill-current text-ebonyClay h-4 w-4 md:h-6 md:w-6"
                >
                  <path
                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            id="cardContainer"
            v-dragscroll
            class="mt-10 flex justify-between overflow-x-hidden hover:cursor-move"
          >
            <div
              v-for="i in 5"
              :key="i"
              class="card bg-lightBlue border-b-2 hover:border-b-4 rounded-t-md border-lightYellow mx-4 ml-0 md:mx-6 md:ml-0"
            >
              <div class="h-1/2 bg-white rounded-md"></div>
              <div class="p-6 md:p-6 lg:p-6 xl:p-10">
                <span
                  class="block text-xs md:text-sm text-lightYellow font-semibold"
                  >WEBSITE</span
                >
                <span
                  class="block font-playFair text-xl md:text-2xl my-2 md:my-4"
                  >PRABU Official Website {{ i }}</span
                >
                <span class="block text-base md:text-lg"
                  >Lorem, ipsum dolor sit amet.</span
                >
                <button
                  class="transition hover:ease-in-out hover:duration-500 bg-transparent flex items-center border-2 border-lightYellow p-1 md:p-3 px-5 md:px-8 rounded-md mt-4 md:mt-8 hover:bg-lightYellow hover:text-lightBlue text-base md:text-lg hover:font-bold"
                  @mouseover="
                    showArrowReadMore = true
                    tempShowArrowID = i
                  "
                  @mouseleave="
                    showArrowReadMore = false
                    tempShowArrowID = ''
                  "
                >
                  <span>READ MORE</span>
                  <span
                    v-show="showArrowReadMore && tempShowArrowID == i"
                    class="ml-5 transition ease-in-out duration-500"
                  >
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      class="fill-current text-lightBlue transform animate-arrow-right"
                    >
                      <path
                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" class="bg-gradient-to-t from-lightBlue to-darkBlue">
      <div
        class="container min-h-screen flex items-center justify-center mx-auto"
      >
        BLOG
      </div>
    </section>
    <section id="bookmarks" class="bg-gradient-to-b from-lightBlue to-darkBlue">
      <div
        class="container min-h-screen flex items-center justify-center mx-auto"
      >
        BOOKMARKS
      </div>
    </section>
    <section id="contact" class="bg-gradient-to-t from-lightBlue to-darkBlue">
      <div class="container h-70vh flex items-center justify-center mx-auto">
        CONTACT
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    showArrowReadMore: false,
    tempShowArrowID: '',
    divider: 0.3,
  }),
  head: () => ({
    title: 'Home',
  }),
  mounted() {
    this.setDivider()
  },
  methods: {
    scrollRight() {
      const element = document.getElementById('cardContainer')
      const cardWidth = element.offsetWidth * this.divider
      element.scrollLeft += cardWidth
    },
    scrollLeft() {
      const element = document.getElementById('cardContainer')
      const cardWidth = element.offsetWidth * this.divider
      element.scrollLeft -= cardWidth
    },
    setDivider() {
      if (window.innerWidth < 768) {
        this.divider = 0.93
      } else {
        this.divider = 0.3
      }
    },
  },
}
</script>

<style>
.sectionHeight {
  min-height: 80vh;
}

.h-70vh {
  min-height: 70vh;
}

.imgHeight {
  height: 65vh;
  width: 65vh;
}

.imgFilter {
  filter: brightness(0.87) drop-shadow(0.5rem 0.6rem 0.4rem rgba(0, 0, 0, 0.2));
}

.card {
  min-height: 65vh;
  min-width: 90%;
}

@media (min-width: 768px) {
  .card {
    min-height: 60vh;
    min-width: 30%;
  }
}
</style>
