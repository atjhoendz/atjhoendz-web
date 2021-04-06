<template>
  <div>
    <section class="bg-darkBlue">
      <div
        class="container flex flex-row items-center justify-center mx-auto pt-5 md:pt-16 px-3 md:px-0"
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

        <div class="ml-5 md:ml-28">
          <img
            src="../assets/img/dummy/man-removebg-preview.png"
            alt="avatar"
            class="object-contain imgHeight hidden md:block"
          />
        </div>
      </div>
    </section>
    <section class="bg-lightBlue">
      <div class="container">halo</div>
    </section>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: 'Home',
  }),
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  /* margin: 0 auto; */
  min-height: 100vh;

  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.imgHeight {
  height: 80vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
