<template>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-spacer />
       <v-icon large primary class="search-icon">search</v-icon>
       <div class="TITle">
      <v-toolbar-title class="app-title">MusicSearch</v-toolbar-title>
        </div>
        <v-spacer />
      <v-btn small dark fab class="refresh" to="/">
        <v-icon>refresh</v-icon>
      </v-btn> 
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
  },
  methods:{
      
  }
}
</script>

<style>
.app-title{
  font-family: 'Caveat', cursive;
  font-size: 200% !important;
  /* text-decoration: underline; */
  
   
 }
.refresh{
    border: 2px solid #11c3b2;
}
.TITle{
    width: 60%;
    border-bottom: 5px dotted #ccc;
  border-bottom-color:#11c3b2;
}
.search-icon{
    color: #11c3b2 !important;
    margin-top: 5px;
    padding-right: 5px;
}
</style>