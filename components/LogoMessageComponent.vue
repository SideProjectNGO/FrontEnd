<script setup lang="ts">
</script>

<template>
  <div class="logo-message">
    <div class="content-wrapper">
      <div class="logo-box">
        <img src="../public/images/mychild%20logo.jpg" alt="Logo" class="logo-image">
      </div>
      <div class="message-box">
        <p class="message-text">Every child deserves love, care, and a future. Together, we can make it happen.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-message {
  width: 60%;
  margin: 2rem auto ;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.logo-box {
  flex: 1;
}

.message-box {
  flex: 3;
}

.logo-image {
  width: 100%;
  max-height: 100px;
  max-width: 100px;
  height: auto;
  display: block;
}

.message-text {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  justify-content: center;
}

@media (max-width: 1200px) {
  .logo-message {
    width: 90%;
    margin: 1rem auto ;
  }

  .message-text {
    font-size: 1rem;
  }
}
</style>
