<script setup lang="ts">
</script>

<template>
  <div class="admin-dashboard">
    <div class="admin-container">
      <div class="side-bar">
        <AdminSidebar />
      </div>
      <div class="content-dashboard">
        <!-- Your content here -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
}

.admin-container .side-bar {
}

.admin-container .content-dashboard {
}

@media (max-width: 768px) {
  .admin-container {
    grid-template-columns: 1fr;
  }
}
</style>
