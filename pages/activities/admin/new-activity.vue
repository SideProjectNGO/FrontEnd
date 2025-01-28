<script lang="ts">
import {defineComponent} from 'vue'
import NewActivityFrom from "~/components/NewActivityFrom.vue";

export default defineComponent({
  name: "new-story",
  components: {NewActivityFrom}
})
</script>

<template>
  <AdminNavBar/>
  <NewActivityFrom/>
  <AdminFooter/>
</template>

<style scoped>

</style>