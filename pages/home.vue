<script setup lang="ts">
import MediaGallery from "~/components/MediaGallery.vue";
</script>

<template>
  <TranslateNavbar/>
  <NavBar/>
  <LandingPage/>
  <MediaGallery type="image" />
  <MessagesSection/>
  <MediaGallery type="video" />
  <Activities/>
  <Stories/>
  <Articles/>
  <Footer/>
</template>

<style scoped>

</style>