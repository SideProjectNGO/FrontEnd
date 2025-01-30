<script setup>
</script>


<template>
  <div class="footer-admin-section">
    <ul class="translate-navbar">
      <li><button @click="switchLanguage('en')">English</button></li>
      <li><button @click="switchLanguage('ar')">عربي</button></li>
      <li><button @click="switchLanguage('ms')">Bahasa Melayu</button></li>
    </ul>
  </div>
</template>




<style scoped>
.footer-admin-section {
  margin: auto;
  background-color: var(--primary-color);
  height: 50px;
}

.translate-navbar {
  display: flex;
  margin: 0  auto;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  padding: .5rem;
  color: var(--text-color);
  max-width: 1200px;
  background-color: var(--primary-color);
}
.footer-container .translate-navbar li {
  display: block;
  margin-right: 20px;
}
</style>
