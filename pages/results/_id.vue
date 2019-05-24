<template>
<div class="results">
    <div v-for="album in this.$store.state.albums" class="eachAlbum">
        <h1 >{{ album.collectionName }}</h1>
        <!-- <v-img :src="require(album.collectionViewUrl)"></v-img> -->
    </div>
    </div>
</template>
<script>
export default {
    middleware: 'search',
    methods: {
       
    }
}
</script>
