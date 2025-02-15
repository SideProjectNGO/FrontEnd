<script setup lang="ts">

import AdminOverview from "~/components/AdminOverview.vue";

definePageMeta({
  middleware: 'auth',
});

</script>

<template>
  <AdminNavBar/>
  <AdminOverview/>
  <AdminFooter/>
</template>

<style scoped>

</style>