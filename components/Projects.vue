<template>
  <section id="projects" class="bg-ebonyClay">
    <div
      class="
        container
        min-h-screen
        w-full
        px-3
        md:px-0 md:w-3/4
        mx-auto
        flex
        justify-center
        items-center
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
              >MY EXPERIENCE</span
            >
            <span class="block font-playFair text-3xl md:text-4xl"
              >Projects</span
            >
          </div>
          <div class="flex items-center">
            <div
              class="
                transform
                hover:scale-110 hover:z-10
                bg-transparent
                hover:bg-white
                border-2 border-r-0 border-lightYellow
                p-2
                md:p-3
                hover:cursor-pointer
                rounded rounded-r-none
              "
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
              class="
                transform
                hover:scale-110
                bg-lightYellow
                hover:bg-white
                border-2 border-l-0 border-lightYellow
                p-2
                md:p-3
                hover:cursor-pointer
                rounded rounded-l-none
              "
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
            v-for="(project, i) in projects"
            :key="i"
            class="
              card
              bg-lightBlue
              border-b-2
              hover:border-b-4
              rounded-t-md
              border-lightYellow
              mx-4
              ml-0
              md:mx-6 md:ml-0
            "
          >
            <img
              :src="require(`~/assets/img/projects/${project.img}`)"
              alt=""
              class="h-60 md:h-72 rounded-md object-cover w-full"
            />
            <div class="p-6 md:p-6 lg:p-6 xl:p-10">
              <div
                class="
                  flex
                  justify-between
                  text-xs
                  md:text-sm
                  text-lightYellow
                  font-semibold
                "
              >
                <span class="block">{{ project.role }}</span>
                <span class="block">{{ project.year }}</span>
              </div>
              <span
                class="block font-playFair text-xl md:text-2xl my-2 md:my-4"
                >{{ project.title }}</span
              >
              <span class="block text-base md:text-lg">{{
                project.description
              }}</span>
              <span class="block text-base mt-2"
                >Built with: {{ project.techStack }}</span
              >
              <button
                v-if="project.isPrivate"
                class="
                  hover:cursor-pointer
                  text-xs
                  border-lightYellow border-2
                  bg-transparent
                  p-1
                  px-2
                  mt-2
                  rounded-md
                "
              >
                Private
              </button>
              <div class="flex justify-between">
                <button
                  v-if="project.urlRepo"
                  class="
                    transition
                    hover:ease-in-out hover:duration-500
                    bg-transparent
                    flex
                    items-center
                    border-2 border-lightYellow
                    p-1
                    px-5
                    md:px-3
                    rounded-md
                    mt-3
                    hover:bg-lightYellow hover:text-lightBlue
                    text-xs
                    hover:font-bold
                  "
                  @mouseover="
                    showArrowRepo = true
                    tempShowArrowRepoID = i
                  "
                  @mouseleave="
                    showArrowRepo = false
                    tempShowArrowRepoID = ''
                  "
                  @click="openURL(project.urlRepo)"
                >
                  <span>See Code</span>
                  <span
                    v-show="showArrowRepo && tempShowArrowRepoID == i"
                    class="ml-5 transition ease-in-out duration-500"
                  >
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      class="
                        fill-current
                        text-lightBlue
                        transform
                        animate-arrow-right
                      "
                    >
                      <path
                        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  v-if="project.urlDemo"
                  class="
                    transition
                    hover:ease-in-out hover:duration-500
                    bg-transparent
                    flex
                    items-center
                    border-2 border-lightYellow
                    p-1
                    px-5
                    md:px-3
                    rounded-md
                    mt-3
                    hover:bg-lightYellow hover:text-lightBlue
                    text-xs
                    hover:font-bold
                  "
                  @mouseover="
                    showArrowDemo = true
                    tempShowArrowDemoID = i
                  "
                  @mouseleave="
                    showArrowDemo = false
                    tempShowArrowDemoID = ''
                  "
                  @click="openURL(project.urlDemo)"
                >
                  <span>See Project</span>
                  <span
                    v-show="showArrowDemo && tempShowArrowDemoID == i"
                    class="ml-5 transition ease-in-out duration-500"
                  >
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      class="
                        fill-current
                        text-lightBlue
                        transform
                        animate-arrow-right
                      "
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
    </div>
  </section>
</template>

<script>
import { projects } from '../data/projects'

export default {
  data: () => ({
    divider: 0.3,
    isMobile: false,
    showArrowRepo: false,
    tempShowArrowRepoID: '',
    showArrowDemo: false,
    tempShowArrowDemoID: '',
    projects,
  }),
  mounted() {
    this.checkMobile()
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
    checkMobile() {
      if (window.innerWidth < 768) {
        this.divider = 0.93
        this.isMobile = true
      } else {
        this.divider = 0.3
        this.isMobile = false
      }
    },
    openURL(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
