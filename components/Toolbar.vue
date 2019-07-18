<template>
<div class="outer">
    <v-toolbar
      app
      class="tooly"
      color="accent"
     height="90%"
    >
      <v-spacer></v-spacer>
       <div class="TITle">
      <v-toolbar-title class="app-title">   <v-icon large primary class="search-icon">search</v-icon>   MusicSearch</v-toolbar-title>
        </div>
        <v-spacer></v-spacer>
      <v-btn color="secondary" fab class="refresh" to="/">
        <v-icon>refresh</v-icon>
      </v-btn> 
    </v-toolbar>
    </div>
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
     background-color:'#424444' !important; 
      /* #424444 */
}
.v-btn{
   background-color:'#424444' !important;
}
.TITle{
    width: 60%;
    /* text-align: center; */
    /* border-bottom: 5px dotted #ccc; */
  border-bottom-color:#11c3b2;
}
.search-icon{
    color: #11c3b2 !important;
    margin-bottom: 10px;
    /* padding-right: 2px; */
    
   
}
.outer{
text-align: center;
}

</style>