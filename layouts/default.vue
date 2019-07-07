<template>
  <v-app dark>
    <toolbar/>
    <v-content>
      <v-container px-0>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span class="twothousand">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
export default {
  components:{
    Toolbar
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
.twothousand{
  padding-left: 20px;
}
</style>