<script setup lang="ts">

definePageMeta({
  middleware: 'auth',
});

</script>

<template>
  <AdminNavBar/>
  <Admin/>
  <AdminFooter/>
</template>

<style scoped>

</style>