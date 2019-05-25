<template>
    <div >
        <v-flex xs12 mb-2>
            <v-card color="primary" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{ title }}</div>
                      <div>{{ artistName }}</div>
                      <div>({{ releaseDate }})</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    :src="art"
                    height="125px"
                    contain
                  >
                  </v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>
    </div>
</template>
<script>
export default {
  data(){
    return {
       
    }
  },
   props: {title : String,
            art: String,
            artistName: String,
            releaseDate: String
    }
}
</script>