<script setup lang="ts">
import MediaGallery from "~/components/MediaGallery.vue";
import Landing from "~/components/Landing.vue";
</script>

<template>
  <TranslateNavbar/>
  <NavBar/>
  <Landing/>
  <MediaGallery type="image" />
  <MessagesSection/>
  <Activities/>
  <Stories/>
  <Articles/>
  <Volunteer/>
  <Footer/>
</template>

<style scoped>

</style>