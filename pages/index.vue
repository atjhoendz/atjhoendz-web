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
          <span class="block text-2xl md:text-3xl font-medium mt-5"
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
        class="container min-h-screen w-full md:w-3/4 flex flex-col justify-center mx-auto pb-10 md:pb-0"
      >
        <div class="block w-full md:w-2/3 p-3 pt-16 md:p-0 md:pt-0 mx-auto">
          <div class="flex flex-col">
            <span
              class="block text-lightYellow text-xs md:text-sm font-semibold mb-1 md:mb-2"
              >ABOUT</span
            >
            <span class="block font-playFair text-3xl md:text-4xl"
              >Summary</span
            >
          </div>
          <div class="mt-1 md:mt-3 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae cupiditate soluta quae. Quae praesentium porro nisi
            asperiores doloribus dolorum tempore voluptates. Dicta nam vel at
            veritatis, sapiente dignissimos labore facilis. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Nulla quo hic laudantium
            temporibus iste, necessitatibus, expedita, pariatur veniam corporis
            dolore suscipit placeat consequuntur sint repellendus. Nisi sed
            similique est sequi.
          </div>
        </div>
        <div class="block mt-5 md:mt-10 w-full md:w-2/3 px-3 md:px-0 mx-auto">
          <div class="flex flex-col">
            <span
              class="block text-lightYellow text-xs md:text-sm font-semibold mb-1 md:mb-2"
            >
              MY SKILL
            </span>
            <span class="block font-playFair text-3xl md:text-4xl"
              >Tech Stack Experience</span
            >
          </div>
          <div class="mt-5">
            <div
              v-for="(item, i) in techStackList"
              :key="i"
              class="bg-darkBlue p-3 md:p-4 flex flex-col rounded-lg"
              :class="{ 'mt-4 md:mt-5': i > 0 }"
            >
              <span
                class="mb-2 text-base md:text-lg block text-center font-semibold"
                >{{ item.type }}</span
              >
              <div class="flex justify-center">
                <div
                  v-for="(tech, j) in item.list"
                  :key="j"
                  class="flex items-center mx-3 md:mx-6 ml-0 hover:bg-lightBlue hover:rounded-lg hover:p-1.5 hover:cursor-pointer"
                  @mouseenter="showTooltip(item.type, tech.name)"
                  @mouseleave="showTooltip(item.type, tech.name)"
                >
                  <img
                    v-if="!tech.svg"
                    :src="tech.src"
                    class="object-contain"
                    :class="
                      [
                        'Express.js',
                        'Apache',
                        'Nginx',
                        'MongoDB',
                        'MySQL',
                      ].includes(tech.name)
                        ? 'h-7 w-14 md:h-10 md:w-20'
                        : 'h-7 w-7 md:h-10 md:w-10'
                    "
                    alt="logo"
                  />
                  <svg
                    v-else
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current h-7 w-7 md:h-10 md:w-10"
                    :class="tech.logoColor"
                  >
                    <path :d="tech.svg" />
                  </svg>
                  <span
                    v-show="tech.show"
                    class="ml-3 p-2 rounded-lg text-darkBlue font-semibold text-base"
                    :class="tech.bgColor"
                    >{{ tech.name }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
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
                class="block text-xs md:text-sm text-lightYellow font-semibold mb-1 md:mb-2"
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
    <section id="blog" class="bg-charade">
      <div
        class="container sectionHeight w-full px-3 py-10 md:py-0 md:w-3/4 mx-auto flex items-center justify-center"
      >
        <div class="w-full">
          <div class="flex justify-between w-full items-center">
            <div class="flex flex-col">
              <span
                class="block text-xs md:text-sm text-lightYellow font-semibold mb-1 md:mb-2"
              >
                TECH NOTES
              </span>
              <span class="block font-playFair text-3xl md:text-4xl">Blog</span>
            </div>
            <div class="flex">
              <span
                class="hidden md:block text-base md:text-xl hover:cursor-pointer bg-tuna border-1 border-lightYellow hover:bg-lightYellow hover:text-charade rounded-md p-1 px-2 transform active:scale-90"
                >Show More</span
              >
            </div>
          </div>
          <div
            class="flex items-center w-full space-x-0 md:space-x-4 flex-wrap md:flex-nowrap"
          >
            <div
              v-for="i in 3"
              :key="i"
              class="blogCard bg-tuna mt-5 md:mt-10 rounded-md p-5 border-1 border-lightYellow hover:shadow-xl hover:border-2 hover:cursor-pointer transform hover:scale-105"
            >
              <span class="block text-2xl font-semibold font-playFair">
                This is Blog Title {{ i }}
              </span>
              <span class="block text-lightYellow text-xs mt-1 font-semibold"
                >08 April 2021</span
              >
              <div class="mt-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                libero soluta assumenda nihil voluptatum cumque? Odit quas
                expedita fuga reprehenderit quo, magnam maiores consequuntur
                culpa quod est, deleniti ullam alias. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. aAliquid perspiciatis
                perferendis dolorum assumenda....
              </div>
            </div>
            <div class="flex justify-center min-w-full">
              <span
                class="block mt-10 md:hidden text-base hover:cursor-pointer bg-tuna border-1 border-lightYellow hover:bg-lightYellow hover:text-charade rounded-md p-1 px-2 transform active:scale-90"
                >Show More</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="bookmarks" class="bg-darkBlue">
      <div
        class="container sectionHeight w-full md:w-3/4 px-3 py-10 md:py-0 flex items-center justify-center mx-auto"
      >
        <div class="w-full">
          <div class="flex justify-between w-full items-center">
            <div class="flex flex-col">
              <span
                class="block text-xs md:text-sm text-lightYellow font-semibold mb-1 md:mb-2"
                >TECH NOTES</span
              >
              <span
                class="block font-playFair text-3xl md:text-4xl font-semibold"
                >Bookmarks</span
              >
            </div>
            <div class="flex">
              <span
                class="hidden md:block text-base md:text-xl hover:cursor-pointer bg-tuna border-1 border-lightYellow hover:bg-lightYellow hover:text-darkBlue rounded-md p-1 px-2 transform active:scale-90"
                >Show More</span
              >
            </div>
          </div>
          <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
            <div
              v-for="i in bookmarkData"
              :key="i"
              class="bg-tuna border-1 border-lightYellow p-3 px-5 rounded-lg hover:cursor-pointer hover:border-2 transform active:scale-95"
            >
              <span
                class="block text-xl md:text-2xl font-playFair font-semibold mb-2"
                >This is title of Bookmark from a website {{ i }}</span
              >
              <span
                class="block text-xs md:text-sm text-lightYellow font-semibold"
                >https://www.thisisthelink.com/page/1</span
              >
            </div>
          </div>
          <div class="flex min-w-full justify-center mt-10">
            <span
              class="block md:hidden text-base md:text-xl hover:cursor-pointer bg-tuna border-1 border-lightYellow hover:bg-lightYellow hover:text-darkBlue rounded-md p-1 px-2 transform active:scale-90"
              >Show More</span
            >
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="bg-charade">
      <div
        class="container h-70vh w-full md:w-3/4 px-3 flex items-center justify-center mx-auto"
      >
        <div class="w-full">
          <div class="flex flex-col">
            <span
              class="block text-xs md:text-sm text-lightYellow font-semibold mb-1 md:mb-2"
            >
              SOCIAL MEDIA
            </span>
            <span class="block font-playFair text-3xl md:text-4xl font-semibold"
              >Let's Get In Touch</span
            >
          </div>
          <div class="grid gap-4 grid-cols-3 mt-10">
            <a
              v-for="(item, i) in socialMedia"
              :key="i"
              class="rounded-lg p-3 md:p-8 border-1 border-lightYellow flex items-center justify-center md:justify-between hover:border-2 hover:cursor-pointer transform active:scale-90"
              :class="i == 5 ? 'bg-lightYellow' : 'bg-tuna'"
              :href="item.link"
              target="_blank"
              @mouseenter="
                showIconHighlight = true
                idIconHighlighted = i
              "
              @mouseleave="
                showIconHighlight = false
                idIconHighlighted = ''
              "
            >
              <div class="hidden md:flex flex-col">
                <span
                  class="font-playFair text-3xl"
                  :class="i == 5 ? 'text-darkBlue' : ''"
                  >{{ item.name }}</span
                >
                <span
                  class="text-lightYellow text-xs"
                  :class="i == 5 ? 'text-darkBlue' : ''"
                  >{{ item.desc }}</span
                >
              </div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current h-8 md:h-16 w-8 md:w-16"
                  :class="highlightSocmed(i)"
                >
                  <path :d="item.svg" />
                </svg>
              </div>
            </a>
          </div>
        </div>
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
    isMobile: false,
    showIconHighlight: false,
    idIconHighlighted: '',
    techStackList: [
      {
        type: 'Frontend',
        list: [
          {
            name: 'Vue.js',
            show: false,
            svg:
              'M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z',
            bgColor: 'bg-vuejs',
            logoColor: 'text-vuejs',
          },
          {
            name: 'Nuxt.js',
            show: false,
            svg:
              'M19.724 20.272l.023-.045a.74.74 0 0 0 .053-.117l.002-.005a1.16 1.16 0 0 0 .054-.607l.001.007a1.795 1.795 0 0 0-.235-.623l.005.008-5.317-9.353-.812-1.42-.807 1.42-5.314 9.353a1.85 1.85 0 0 0-.204.604l-.001.011a1.257 1.257 0 0 0 .08.713l-.003-.008a.809.809 0 0 0 .05.102l-.002-.004c.16.275.5.602 1.25.602h9.898c.157 0 .925-.032 1.28-.637zm-6.227-9.316l4.859 8.548H8.64zm10.249 7.934L16.73 6.53c-.072-.13-.477-.787-1.182-.787-.317 0-.772.135-1.142.785l-.907 1.59.807 1.42 1.25-2.212 6.941 12.18h-2.64a1.187 1.187 0 0 1-.058.608l.003-.008a.772.772 0 0 1-.057.126l.002-.004-.023.045c-.355.605-1.122.637-1.272.637h4.129c.152 0 .917-.032 1.272-.637.157-.275.27-.737-.107-1.382zM7.304 20.307a.989.989 0 0 1-.045-.092l-.002-.006a1.228 1.228 0 0 1-.084-.712l-.001.007H1.501L9.93 4.672l2.767 4.864.802-1.42-2.412-4.249c-.067-.122-.475-.777-1.177-.777-.317 0-.772.137-1.142.787L.23 18.889c-.072.13-.425.812-.075 1.417.16.275.5.602 1.25.602h7.151c-.745 0-1.09-.322-1.25-.602z',
            bgColor: 'bg-green-500',
            logoColor: 'text-green-500',
          },
          {
            name: 'Vuetify',
            show: false,
            svg:
              'M12,11.64L7.92,2H16.08L12,11.64M12,21.95L3.27,4.91H7.84L12,14.47L16.16,4.91H20.73L12,21.95Z',
            bgColor: 'bg-cyan',
            logoColor: 'text-cyan',
          },
          {
            name: 'MaterializeCSS',
            show: false,
            svg: '',
            bgColor: 'bg-materialize',
            src: require('../assets/img/icons/materializecss.svg'),
          },
          {
            name: 'Bootstrap',
            show: false,
            svg:
              'M11.79 11.5H9.72V8.19H12.19C13.45 8.19 14.15 8.75 14.15 9.78C14.15 10.9 13.32 11.5 11.79 11.5M12.16 12.63H9.72V16.27L12.28 16.27C13.84 16.27 14.66 15.64 14.66 14.44S13.81 12.63 12.16 12.63M22 5.31V18.69C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2H18.69C20.5 2 22 3.5 22 5.31M16 14.5C16 13.12 15.08 12.13 13.67 11.95V11.89C14.67 11.71 15.46 10.71 15.46 9.63C15.46 8.08 14.26 7.05 12.5 7.05H8.43V17.41H12.47C14.68 17.41 16 16.32 16 14.5Z',
            bgColor: 'bg-bootstrap',
            logoColor: 'text-bootstrap',
          },
          {
            name: 'Tailwindcss',
            show: false,
            svg:
              'M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z',
            bgColor: 'bg-cyan',
            logoColor: 'text-cyan',
          },
        ],
      },
      {
        type: 'Backend',
        list: [
          {
            name: 'Express.js',
            show: false,
            svg: '',
            bgColor: 'bg-white',
            src: require('../assets/img/icons/express-js.svg'),
          },
          {
            name: 'Nestjs',
            show: false,
            svg: '',
            bgColor: 'bg-nestjs',
            src: require('../assets/img/icons/nestjs.svg'),
          },
          {
            name: 'Laravel',
            show: false,
            svg:
              'M21.7 6.53C21.71 6.55 21.71 6.58 21.71 6.61V10.9C21.71 11 21.65 11.12 21.56 11.17L17.95 13.25V17.36C17.95 17.47 17.9 17.57 17.8 17.63L10.28 21.96C10.26 21.97 10.24 22 10.22 22L10.2 22C10.15 22 10.09 22 10.04 22C10.03 22 10 22 10 22C10 22 10 21.97 9.96 21.96L2.44 17.63C2.35 17.58 2.29 17.47 2.29 17.36V4.5C2.29 4.45 2.29 4.42 2.3 4.4C2.3 4.39 2.31 4.38 2.31 4.37C2.31 4.35 2.32 4.34 2.33 4.32C2.33 4.31 2.34 4.3 2.35 4.29C2.36 4.28 2.37 4.27 2.38 4.26C2.39 4.25 2.4 4.24 2.41 4.23C2.42 4.22 2.43 4.21 2.44 4.21L6.2 2.04C6.3 2 6.42 2 6.5 2.04L10.28 4.21H10.28C10.29 4.22 10.3 4.22 10.31 4.23C10.32 4.24 10.33 4.25 10.34 4.26C10.35 4.27 10.36 4.28 10.37 4.29C10.38 4.3 10.39 4.31 10.39 4.32C10.4 4.34 10.41 4.35 10.41 4.37C10.41 4.38 10.42 4.39 10.42 4.4C10.43 4.43 10.43 4.45 10.43 4.5V12.5L13.57 10.72V6.61C13.57 6.58 13.57 6.55 13.58 6.53L13.59 6.5C13.59 6.5 13.6 6.47 13.61 6.45C13.61 6.44 13.62 6.43 13.63 6.42C13.64 6.41 13.65 6.4 13.66 6.39C13.67 6.38 13.68 6.37 13.69 6.36C13.7 6.35 13.71 6.34 13.72 6.34L17.5 4.17C17.58 4.11 17.7 4.11 17.8 4.17L21.56 6.34C21.57 6.34 21.58 6.35 21.59 6.36L21.62 6.39C21.63 6.4 21.64 6.41 21.65 6.42C21.66 6.43 21.66 6.44 21.67 6.45C21.68 6.47 21.68 6.5 21.69 6.5C21.7 6.5 21.7 6.5 21.7 6.53M21.09 10.72V7.15L17.95 8.95V12.5L21.09 10.72M17.33 17.18V13.6L10.43 17.54V21.15L17.33 17.18M2.91 5V17.18L9.81 21.15V17.54L6.21 15.5L6.2 15.5L6.2 15.5C6.19 15.5 6.18 15.5 6.17 15.47C6.16 15.47 6.15 15.46 6.14 15.45V15.45C6.13 15.44 6.12 15.43 6.11 15.42C6.1 15.41 6.1 15.4 6.09 15.39V15.39C6.08 15.37 6.08 15.36 6.07 15.35C6.07 15.33 6.06 15.32 6.06 15.31C6.05 15.3 6.05 15.28 6.05 15.27C6.05 15.25 6.05 15.24 6.05 15.23V6.82L2.91 5M6.36 2.68L3.23 4.5L6.36 6.28L9.5 4.5L6.36 2.68M9.81 12.88V5L6.67 6.82V14.69L9.81 12.88M17.64 4.8L14.5 6.61L17.64 8.41L20.77 6.61L17.64 4.8M17.33 8.95L14.19 7.15V10.72L17.33 12.5V8.95M10.12 17L17 13.06L13.88 11.26L7 15.23L10.12 17Z',
            bgColor: 'bg-laravel',
            logoColor: 'text-laravel',
          },
          {
            name: 'Lumen',
            show: false,
            svg: '',
            bgColor: 'bg-lumen',
            src: require('../assets/img/icons/lumen.svg'),
          },
          {
            name: 'MongoDB',
            show: false,
            svg: '',
            bgColor: 'bg-mongodb text-white',
            src: require('../assets/img/icons/mongodb.svg'),
          },
          {
            name: 'MySQL',
            show: false,
            svg: '',
            bgColor: 'bg-mysql',
            src: require('../assets/img/icons/mysql.svg'),
          },
        ],
      },
      {
        type: 'DevOps',
        list: [
          {
            name: 'Docker',
            show: false,
            svg:
              'M21.81 10.25C21.75 10.21 21.25 9.82 20.17 9.82C19.89 9.82 19.61 9.85 19.33 9.9C19.12 8.5 17.95 7.79 17.9 7.76L17.61 7.59L17.43 7.86C17.19 8.22 17 8.63 16.92 9.05C16.72 9.85 16.84 10.61 17.25 11.26C16.76 11.54 15.96 11.61 15.79 11.61H2.62C2.28 11.61 2 11.89 2 12.24C2 13.39 2.18 14.54 2.58 15.62C3.03 16.81 3.71 17.69 4.58 18.23C5.56 18.83 7.17 19.17 9 19.17C9.79 19.17 10.61 19.1 11.42 18.95C12.54 18.75 13.62 18.36 14.61 17.79C15.43 17.32 16.16 16.72 16.78 16C17.83 14.83 18.45 13.5 18.9 12.35H19.09C20.23 12.35 20.94 11.89 21.33 11.5C21.59 11.26 21.78 10.97 21.92 10.63L22 10.39L21.81 10.25M3.85 11.24H5.61C5.69 11.24 5.77 11.17 5.77 11.08V9.5C5.77 9.42 5.7 9.34 5.61 9.34H3.85C3.76 9.34 3.69 9.41 3.69 9.5V11.08C3.7 11.17 3.76 11.24 3.85 11.24M6.28 11.24H8.04C8.12 11.24 8.2 11.17 8.2 11.08V9.5C8.2 9.42 8.13 9.34 8.04 9.34H6.28C6.19 9.34 6.12 9.41 6.12 9.5V11.08C6.13 11.17 6.19 11.24 6.28 11.24M8.75 11.24H10.5C10.6 11.24 10.67 11.17 10.67 11.08V9.5C10.67 9.42 10.61 9.34 10.5 9.34H8.75C8.67 9.34 8.6 9.41 8.6 9.5V11.08C8.6 11.17 8.66 11.24 8.75 11.24M11.19 11.24H12.96C13.04 11.24 13.11 11.17 13.11 11.08V9.5C13.11 9.42 13.05 9.34 12.96 9.34H11.19C11.11 9.34 11.04 9.41 11.04 9.5V11.08C11.04 11.17 11.11 11.24 11.19 11.24M6.28 9H8.04C8.12 9 8.2 8.91 8.2 8.82V7.25C8.2 7.16 8.13 7.09 8.04 7.09H6.28C6.19 7.09 6.12 7.15 6.12 7.25V8.82C6.13 8.91 6.19 9 6.28 9M8.75 9H10.5C10.6 9 10.67 8.91 10.67 8.82V7.25C10.67 7.16 10.61 7.09 10.5 7.09H8.75C8.67 7.09 8.6 7.15 8.6 7.25V8.82C8.6 8.91 8.66 9 8.75 9M11.19 9H12.96C13.04 9 13.11 8.91 13.11 8.82V7.25C13.11 7.16 13.04 7.09 12.96 7.09H11.19C11.11 7.09 11.04 7.15 11.04 7.25V8.82C11.04 8.91 11.11 9 11.19 9M11.19 6.72H12.96C13.04 6.72 13.11 6.65 13.11 6.56V5C13.11 4.9 13.04 4.83 12.96 4.83H11.19C11.11 4.83 11.04 4.89 11.04 5V6.56C11.04 6.64 11.11 6.72 11.19 6.72M13.65 11.24H15.41C15.5 11.24 15.57 11.17 15.57 11.08V9.5C15.57 9.42 15.5 9.34 15.41 9.34H13.65C13.57 9.34 13.5 9.41 13.5 9.5V11.08C13.5 11.17 13.57 11.24 13.65 11.24',
            bgColor: 'bg-docker',
            logoColor: 'text-docker',
          },
          {
            name: 'TravisCI',
            show: false,
            svg: '',
            bgColor: 'bg-travisci',
            src: require('../assets/img/icons/travis-ci.svg'),
          },
          {
            name: 'Apache',
            show: false,
            svg: '',
            bgColor: 'bg-apache',
            src: require('../assets/img/icons/httpd.svg'),
          },
          {
            name: 'Nginx',
            show: false,
            svg: '',
            bgColor: 'bg-nginx',
            src: require('../assets/img/icons/nginx.svg'),
          },
        ],
      },
      {
        type: 'Environment & Utility',
        list: [
          {
            name: 'Ubuntu 20.04',
            show: false,
            svg:
              'M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14.34,7.74C14.92,8.07 15.65,7.87 16,7.3C16.31,6.73 16.12,6 15.54,5.66C14.97,5.33 14.23,5.5 13.9,6.1C13.57,6.67 13.77,7.41 14.34,7.74M11.88,15.5C11.35,15.5 10.85,15.39 10.41,15.18L9.57,16.68C10.27,17 11.05,17.22 11.88,17.22C12.37,17.22 12.83,17.15 13.28,17.03C13.36,16.54 13.64,16.1 14.1,15.84C14.56,15.57 15.08,15.55 15.54,15.72C16.43,14.85 17,13.66 17.09,12.33L15.38,12.31C15.22,14.1 13.72,15.5 11.88,15.5M11.88,8.5C13.72,8.5 15.22,9.89 15.38,11.69L17.09,11.66C17,10.34 16.43,9.15 15.54,8.28C15.08,8.45 14.55,8.42 14.1,8.16C13.64,7.9 13.36,7.45 13.28,6.97C12.83,6.85 12.37,6.78 11.88,6.78C11.05,6.78 10.27,6.97 9.57,7.32L10.41,8.82C10.85,8.61 11.35,8.5 11.88,8.5M8.37,12C8.37,10.81 8.96,9.76 9.86,9.13L9,7.65C7.94,8.36 7.15,9.43 6.83,10.69C7.21,11 7.45,11.47 7.45,12C7.45,12.53 7.21,13 6.83,13.31C7.15,14.56 7.94,15.64 9,16.34L9.86,14.87C8.96,14.24 8.37,13.19 8.37,12M14.34,16.26C13.77,16.59 13.57,17.32 13.9,17.9C14.23,18.47 14.97,18.67 15.54,18.34C16.12,18 16.31,17.27 16,16.7C15.65,16.12 14.92,15.93 14.34,16.26M5.76,10.8C5.1,10.8 4.56,11.34 4.56,12C4.56,12.66 5.1,13.2 5.76,13.2C6.43,13.2 6.96,12.66 6.96,12C6.96,11.34 6.43,10.8 5.76,10.8Z',
            bgColor: 'bg-ubuntu',
            logoColor: 'text-ubuntu',
          },
          {
            name: 'Git',
            show: false,
            svg:
              'M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z',
            bgColor: 'bg-git',
            logoColor: 'text-git',
          },
          {
            name: 'VSCode',
            show: false,
            svg:
              'M17,16.47V7.39L11,11.93M2.22,9.19C1.92,8.87 1.91,8.37 2.2,8.04L3.4,6.93C3.6,6.75 4.09,6.67 4.45,6.93L7.87,9.54L15.8,2.29C16.12,1.97 16.67,1.84 17.3,2.17L21.3,4.08C21.66,4.29 22,4.62 22,5.23V18.73C22,19.13 21.71,19.56 21.4,19.73L17,21.83C16.68,21.96 16.08,21.84 15.87,21.63L7.85,14.33L4.45,16.93C4.07,17.19 3.6,17.12 3.4,16.93L2.2,15.83C1.88,15.5 1.92,14.96 2.25,14.63L5.25,11.93',
            bgColor: 'bg-vscode',
            logoColor: 'text-vscode',
          },
        ],
      },
    ],
    socialMedia: [
      {
        name: 'LinkedIn',
        desc: 'Professional social profile',
        svg:
          'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
        link: 'https://www.linkedin.com/in/moh-achun-armando/',
      },
      {
        name: 'Github',
        desc: 'Code repository',
        svg:
          'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
        link: 'https://github.com/atjhoendz',
      },
      {
        name: 'Dev.to',
        desc: 'Another place for tech notes',
        svg:
          'M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z',
        link: 'https://dev.to/atjhoendz',
      },
      {
        name: 'Facebook',
        desc: 'Social media for tech community',
        svg:
          'M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z',
        link: 'https://facebook.com/atjhoendz789',
      },
      {
        name: 'Empty',
        desc: 'soon',
        svg:
          'M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z',
        link: '',
      },
      {
        name: 'Email',
        desc: 'achunarmando@gmail.com',
        svg:
          'M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z',
        bgColor: 'bg-lightYellow',
        textColor: 'text-darkBlue',
        link: 'mailto:achunarmando@gmail.com',
      },
    ],
  }),
  head: () => ({}),
  computed: {
    bookmarkData() {
      if (this.isMobile) return 3
      return 6
    },
  },
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
    showTooltip(type, name) {
      if (this.isMobile) return
      const indexType = this.techStackList.findIndex((item) => {
        return item.type === type
      })
      const indexList = this.techStackList[indexType].list.findIndex((item) => {
        return item.name === name
      })
      this.techStackList[indexType].list[indexList].show = !this.techStackList[
        indexType
      ].list[indexList].show
    },
    highlightSocmed(i) {
      if (i === 5) {
        return 'text-darkBlue'
      } else {
        if (this.showIconHighlight && i === this.idIconHighlighted)
          return 'text-lightYellow'
        return 'text-lightYellow md:text-darkBlue'
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
  min-height: 60vh;
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

.border-1 {
  border-width: 1px;
}

.blogCard {
  min-height: 10rem;
  min-width: 100%;
}

@media (min-width: 768px) {
  .card {
    min-height: 60vh;
    min-width: 30%;
  }

  .blogCard {
    min-height: 16rem;
    min-width: 32.5%;
  }

  .h-70vh {
    min-height: 70vh;
  }
}
</style>
