<template>
  <v-navigation-drawer
    v-model="drawer"
    :permanent="drawer"
    fixed
    floating
    app
    disable-resize-watcher
    disable-route-watcher
    :mini-variant="this.$vuetify.breakpoint.mobile ? true : false"
    :mini-variant-width="40"
    style="top: 50%; transform: translate(0, -50%); height: fit-content"
  >
    <v-list rounded :flat="this.$vuetify.breakpoint.mobile ? true : false">
      <v-list-item
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.url"
        color="blue"
        route
        exact
        nuxt
        ripple
      >
        <v-list-item-avatar>
          <v-icon v-text="menu.icon"></v-icon>
        </v-list-item-avatar>
        <v-list-item-title v-text="menu.nama"></v-list-item-title>
      </v-list-item>
      <v-list-item color="blue" route exact nuxt ripple @click="$router.go(-1)">
        <v-list-item-avatar>
          <v-icon>mdi-arrow-left</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>Back</v-list-item-title>
      </v-list-item>
    </v-list>
    <SearchBlogInput v-if="!this.$vuetify.breakpoint.mobile" />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navdraw',
  components: {
    SearchBlogInput: () => import('../components/SearchBlogInput'),
  },
  data: () => ({
    drawer: false,
    menus: [
      {
        nama: 'Home',
        url: '/',
        icon: 'mdi-home-outline',
      },
      {
        nama: 'About',
        url: '/about',
        icon: 'mdi-information-outline',
      },
      {
        nama: 'Blog',
        url: '/blog',
        icon: 'mdi-post-outline',
      },
      {
        nama: 'Projects',
        url: '/projects',
        icon: 'mdi-file-code-outline',
      },
    ],
  }),
  watch: {
    $route() {
      if (this.$route.path === '/') {
        this.drawer = false
      } else {
        this.drawer = true
      }
    },
  },
  created() {
    if (this.$route.path === '/') {
      this.drawer = false
    } else {
      this.drawer = true
    }
  },
}
</script>
