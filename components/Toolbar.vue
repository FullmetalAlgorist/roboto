<template>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-btn to="/">
        <v-icon>house</v-icon>
      </v-btn>
      <v-toolbar-title v-text="searchMe" />
      <v-spacer />
      <v-text-field v-model="searchMe"></v-text-field>
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
        searchMe: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'iTunes Search'
    }
  }
}
</script>

<style>

</style>