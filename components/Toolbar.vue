<template>
    <v-toolbar
      app
      class="tooly"
      color="accent"
     height="90%%"
    >
     
       <div class="TITle">
      <v-toolbar-title class="app-title">   <v-icon large primary class="search-icon">search</v-icon>   MusicSearch</v-toolbar-title>
        </div>
        
      <v-btn dark fab class="refresh" to="/">
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
  font-size: 325% !important;
  /* text-decoration: underline; */
  
 }
.refresh{
    /* border: 2px solid #11c3b2; */
     margin: 8px !important;
      
}
.TITle{
    width: 60%;
    /* border-bottom: 5px dotted #ccc; */
  border-bottom-color:#11c3b2;
}
.search-icon{
    color: #11c3b2 !important;
    margin-bottom: 10px;
    /* padding-right: 2px; */
    
   
}
.tooly{
text-align: center;
}
</style>