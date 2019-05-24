<template>
<div>
  <v-layout
    column
   justify-center
    align-center
    class="searchy"
  > 
  <!-- :style="{ backgroundImage: 'url(' + require('@/assets/pics/two.jpg') + ')' }"
  class="layout-wrapper" -->
<v-form @submit.prevent="submit">
 <v-text-field
            label="Enter Artist Name"
            outline
            v-model="searchMe"
          ></v-text-field>
          </v-form>
   </v-layout> 
   </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      searchMe: ''
    }
},
methods: {
  submit(event){
    this.$router.push('results/'+ this.searchMe);
  }
}
}
</script>
<style scoped>
.layout-wrapper{
width: 100vw;
height: 70vh;
background-size:cover;
background-position: 0 -125px;
}

.bottom-half{
  width: 100vw;
height: 30vh;
  /* align-content: center; */
}
.searchy{
  height: 70vh;
}
</style>
