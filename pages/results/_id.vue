<template>
<div class="results">
    <cardy-b v-for="album in this.$store.state.albums"  :title="album.collectionName" :art="album.artworkUrl100" :artistName="album.artistName":releaseDate="album.releaseDate.substring(0,4)"/>
    </div>
</template>
<script>
import CardyB from '~/components/CardyB.vue'
export default {
    // middleware: 'search',
    components: {
        'cardy-b': CardyB
    },
    methods: {
    },
    created(){
        
    }
}
</script>
