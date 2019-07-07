<template>
<v-hover>
  <v-card
    :color="chosenColor" 
    class="white--text cardy mx-auto"
    dark
    slot-scope="{ hover }"
  >
    <v-layout justify-space-between>
      <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            <v-img :src="iTune.srrc"></v-img>
          </div>
        </v-expand-transition>
      <v-flex xs8>
        <v-card-title primary-title>
          <div>
           <a  class="linkStyling" :href="albumLink"> <div  class="headline">{{ title }}</div></a>
            <div class="">{{ artistName }}</div>
            <div class="">({{ releaseDate }})</div>
          </div>
        </v-card-title>
      </v-flex>
      <v-img
        class="shrink ma-2"
        contain
        height="125px"
        :src="art"
        style="flex-basis: 125px"
       :href="albumLink"
      ></v-img>
    </v-layout>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-2">
      Rate this album
      <v-spacer></v-spacer>
      <span class="caption mr-2">
        ({{ rating }})
      </span>
      <v-rating
        v-model="rating"
        background-color="white"
        color="white"
        dense
        half-increments
        hover
      ></v-rating>
    </v-card-actions>
  </v-card>
  </v-hover>
</template>
<script>
export default {
  data(){
    return {
       rating: 0,
       iTune: {srrc: require('@/assets/pics/iTunes.png')},
    }
  },
   props: {title : String,
            art: String,
            artistName: String,
            releaseDate: String,
            cardNum: Number,
            albumLink: String
    },
    computed: {
      chosenColor(){
        if (this.cardNum % 2 == 0){
          return 'primary';
        }
        else{
          return 'accent';
        }
      }
    },
    methods:{
     
    }
    
}
</script>
<style scoped>
.stars{
  color: black;
}
.cardy{
  margin-bottom: 16px;
  margin-right: 16px;
  width: 91vw;
  max-width: 550px;
}
.linkStyling{
  color: white;
  text-decoration: none;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
