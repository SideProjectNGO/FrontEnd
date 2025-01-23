<script setup lang="ts">

</script>

<template>
  <div class="admin-dashboard">

    <div class="admin-container">
      <div class="side-bar">
        <AdminSidebar/>
      </div>
      <div class="content-dashboard">

      </div>
    </div>
  </div>
</template>

<style scoped>

.admin-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.admin-container .side-bar {
  flex: 1;
}

.admin-container .content-dashboard {
  flex: 4;
}


</style>