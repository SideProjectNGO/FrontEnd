<script lang="ts">
import {defineComponent} from "vue";
import Landing from "~/components/Landing.vue";

export default defineComponent({
  components: {Landing}
})
</script>

<template>
  <NavBar/>
  <Landing/>
  <DonateButton/>
  <DonateManual/>
  <Footer/>
</template>

<style scoped>

</style>