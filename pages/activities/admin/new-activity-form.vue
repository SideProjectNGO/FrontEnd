<script lang="ts">
import {defineComponent} from 'vue'
import ActivityFrom from "~/components/ActivityFrom.vue";

export default defineComponent({
  name: "new-story",
  components: {NewActivityFrom: ActivityFrom}
})
</script>

<template>
  <AdminNavBar/>
  <NewActivityFrom/>
  <AdminFooter/>
</template>

<style scoped>

</style>