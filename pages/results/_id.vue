<template>
<div class="albums">
<div v-if="!alert" class="results">
    <cardy-b v-for="(album, index) in this.$store.state.albums" 
    :key="album.id" 
    :title="album.collectionName" 
    :art="album.artworkUrl100" 
    :artistName="album.artistName" 
    :releaseDate="album.releaseDate.substring(0,4)"
    :albumLink="album.collectionViewUrl"
    :cardNum="index"
    />
    </div>
     <v-alert
      v-model="alert"
      color="error"
      icon="warning"
      outline
      class="oopsError"
    >
      No artists were found matching that name <br>(or something else went wrong) <br>Please hit refresh and try again!
    </v-alert>
    </div>
</template>
<script>
import CardyB from '~/components/CardyB.vue'
import axios from 'axios';

export default {
    asyncData(context){
    console.log('hi from async');
    return axios.get(`https://itunes.apple.com/search?term=${context.params.id}&entity=album`).then((response) => {
        context.store.commit('setAlbums', response.data.results);
    })
    },
    //  middleware: 'search',
    components: {
        'cardy-b': CardyB
    },
    methods: {
    },
    computed: {
        alert(){
            return !this.$store.state.albums.length>0;
        }
    },
    created(){
        
    }
}
</script>
<style scoped>
.oopsError{
    margin: 0 16px;
    font-size: 120%;
    text-align: center;
}
</style>

