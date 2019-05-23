<template>
  <v-layout
    column
    justify-center
    align-center
    :style="{ backgroundImage: 'url(' + require('@/assets/pics/one.jpg') + ')' }"
  class="layout-wrapper"
  >
    <v-flex
      xs12
      sm8
      md6
    >
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
.layout-wrapper{
width: 100vw;
height: 50vh;
background-size:cover;
background-position: 0 -125px;
}
</style>
