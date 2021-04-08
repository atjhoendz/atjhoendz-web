<template>
  <footer
    class="bg-darkBlue flex flex-col justify-center items-center footerHeight pt-4 md:pt-0"
  >
    <div class="font-playFair font-bold text-xl md:text-3xl mb-6 md:mb-12">
      Thank You!
    </div>
    <div class="flex flex-row items-center">
      <span class="text-sm md:text-base"
        >&copy; {{ new Date().getFullYear() }} Built with</span
      >
      <span class="mx-3"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="red"
        >
          <path
            d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
          /></svg
      ></span>
      <span>by Moh Achun Armando</span>
    </div>
    <div class="flex mt-2 items-center text-sm md:text-base">
      <span>Tech stack: </span>
      <div
        class="ml-3 mr-2 flex items-center hover:bg-lightBlue hover:rounded-md hover:p-1 hover:cursor-pointer"
        @mouseenter="showTooltip('nuxtTooltip')"
        @mouseleave="showTooltip('nuxtTooltip')"
      >
        <svg
          fill="green"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.724 20.272l.023-.045a.74.74 0 0 0 .053-.117l.002-.005a1.16 1.16 0 0 0 .054-.607l.001.007a1.795 1.795 0 0 0-.235-.623l.005.008-5.317-9.353-.812-1.42-.807 1.42-5.314 9.353a1.85 1.85 0 0 0-.204.604l-.001.011a1.257 1.257 0 0 0 .08.713l-.003-.008a.809.809 0 0 0 .05.102l-.002-.004c.16.275.5.602 1.25.602h9.898c.157 0 .925-.032 1.28-.637zm-6.227-9.316l4.859 8.548H8.64zm10.249 7.934L16.73 6.53c-.072-.13-.477-.787-1.182-.787-.317 0-.772.135-1.142.785l-.907 1.59.807 1.42 1.25-2.212 6.941 12.18h-2.64a1.187 1.187 0 0 1-.058.608l.003-.008a.772.772 0 0 1-.057.126l.002-.004-.023.045c-.355.605-1.122.637-1.272.637h4.129c.152 0 .917-.032 1.272-.637.157-.275.27-.737-.107-1.382zM7.304 20.307a.989.989 0 0 1-.045-.092l-.002-.006a1.228 1.228 0 0 1-.084-.712l-.001.007H1.501L9.93 4.672l2.767 4.864.802-1.42-2.412-4.249c-.067-.122-.475-.777-1.177-.777-.317 0-.772.137-1.142.787L.23 18.889c-.072.13-.425.812-.075 1.417.16.275.5.602 1.25.602h7.151c-.745 0-1.09-.322-1.25-.602z"
          />
        </svg>
        <span
          v-if="nuxtTooltip"
          class="ml-2 bg-green-300 text-black rounded-md p-1"
          >Nuxt.js</span
        >
      </div>
      <div
        class="flex items-center hover:bg-lightBlue hover:rounded-md hover:p-1 hover:cursor-pointer"
        @mouseenter="showTooltip('tailwindTooltip')"
        @mouseleave="showTooltip('tailwindTooltip')"
      >
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="cyan"
            d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z"
          />
        </svg>
        <span
          v-if="tailwindTooltip"
          class="ml-2 bg-cyan text-black rounded-md p-1"
        >
          Tailwindcss
        </span>
      </div>
    </div>
    <div class="mt-2 text-center text-sm md:text-base">
      <span class="block"
        >Icons by
        <a href="https://iconmonstr.com/"><strong>iconmonstr</strong></a> &
        <a href="https://materialdesignicons.com/"
          ><strong>Material Design Icons</strong></a
        ></span
      >
      <span class="block"
        >Design inspiration from
        <a
          href="https://dribbble.com/shots/7662998-Growth-Personal-Portfolio-Theme"
          ><strong>Growth by Subash Chandra</strong></a
        ></span
      >
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    nuxtTooltip: false,
    tailwindTooltip: false,
  }),
  methods: {
    showTooltip(type) {
      this[type] = !this[type]
    },
  },
}
</script>

<style>
.footerHeight {
  min-height: 30vh;
}
</style>
