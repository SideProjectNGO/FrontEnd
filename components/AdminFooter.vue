<script setup lang="ts">

const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="footer-admin-section">
    <div class="footer-container">
      <p>&copy; Copyright <a href="">My Child {{ currentYear }}</a></p>
    </div>
  </div>
</template>


<style scoped>
.footer-admin-section {
  margin: auto;
  background-color: var(--primary-color);
  height: 50px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0  auto;
  text-align: center;
  font-size: 1.2rem;
  padding: .5rem;
  color: var(--text-color);
  max-width: 1200px;
  background-color: var(--primary-color);
}

a:hover {
  color: var(--text-hover);
}
</style>