<template>
  <v-layout
    column
    justify-center
    align-center
    
  >
 
    <v-flex
      xs12
      sm8
      md6
      
    >
     <v-img :src="require('assets/pics/one.jpg')"></v-img>
    <v-form >
      
      <v-btn to="/inhance">ocean</v-btn>
    
    
    </v-form>
      <!-- <v-card>
        <v-card-title class="headline">Welcome to your very own iTunes search!</v-card-title>
        <v-card-text>
      <p>oh hi</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inhance"
          >Continue</v-btn>
        </v-card-actions>
      </v-card> -->
    </v-flex>
  </v-layout>
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
      

    }
}
}
</script>
<style scoped>
.layout{
  

}
</style>
