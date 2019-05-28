<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        :src="require('@/assets/pics/two.jpg')"
        class="mb-5 layout-wrapper"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>
<style scoped>
.layout-wrapper{
width: 100vw;
height: 70vh;
background-size:cover;
background-position: 0 -125px;
border: none !important;
padding: none !important;
}
</style>
