<template>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-btn to="/">
        <v-icon>refresh</v-icon>
      </v-btn> 
      <v-spacer />
       <v-icon>search</v-icon>
      <v-toolbar-title class="app-title">searchMe</v-toolbar-title>
   
     
    
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
.app-title{
  font-family: 'Caveat', cursive;
  font-size: 200% !important;
}
</style>