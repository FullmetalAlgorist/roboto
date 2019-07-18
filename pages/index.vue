<template>
<div>
  <v-layout
    column
   justify-center
    align-center
    class="searchy"  
  >
<v-form @submit.prevent="submit"
          class="formMe">
 <v-text-field
            label="Enter Artist Name..."
            outline
            v-model="searchMe"
            class="newClass"
          ></v-text-field>
          <v-btn @click="submit"
                  color="primary" 
                  class="findMePlease"
                  outline
                  >Find Albums!</v-btn>
          </v-form>
   </v-layout> 
   </div>
</template>

<script>
export default {
  components: {
    // Logo,
    // VuetifyLogo
  },
  data() {
    return {
      searchMe: '',
      findMe: '            Find Album!'
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

.bottom-half{
  width: 100vw;
height: 30vh;
  /* align-content: center; */
}
.searchy{
  height: 70vh;
}
.go{
  width: 180px;
}
.findMePlease{
  text-align: center;
  align-content: center;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-weight: 700 !important;
  color: blue;
  
}
.newClass{
  font-family: 'Cabin', sans-serif;
}
.formMe{
  text-align: center;
  align-content: center;
}
</style>
