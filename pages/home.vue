<script setup lang="ts">
import MediaGallery from "~/components/MediaGallery.vue";
import Landing from "~/components/Landing.vue";

const showPopup = ref(false)
</script>

<template>
  <TranslateNavbar/>
  <NavBar/>
  <Landing/>
  <AnnualYearPopup v-if="showPopup" @close="showPopup = false"/>
  <MediaGallery type="image"/>
  <MessagesSection/>
  <Activities/>
  <Stories/>
  <Articles/>
  <Volunteer/>
  <Footer/>
</template>

<style scoped>

</style>