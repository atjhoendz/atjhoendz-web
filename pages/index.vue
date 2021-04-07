<template>
  <div>
    <section
      id="home"
      class="bg-gradient-to-br from-darkBlue via-lightBlue to-darkBlue"
    >
      <div class="container min-h-screen pt-5 md:pt-16 px-3 md:px-0">
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
      <div class="container sectionHeight">ABOUT</div>
    </section>
    <section id="projects" class="bg-gradient-to-b from-lightBlue to-darkBlue">
      <div class="container min-h-screen">PROJECTS</div>
    </section>
    <section id="blog" class="bg-gradient-to-t from-lightBlue to-darkBlue">
      <div class="container min-h-screen">BLOG</div>
    </section>
    <section id="bookmarks" class="bg-gradient-to-b from-lightBlue to-darkBlue">
      <div class="container min-h-screen">BOOKMARKS</div>
    </section>
    <section id="contact" class="bg-gradient-to-t from-lightBlue to-darkBlue">
      <div class="container h-70vh">CONTACT</div>
    </section>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: 'Home',
  }),
  transitions: {
    mode: 'out-in',
    duration: '1s',
  },
}
</script>

<style>
.container {
  @apply flex items-center justify-center mx-auto;
}

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
</style>
