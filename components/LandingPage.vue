<script lang="ts">
</script>

<template>
  <div class="landing-page">
    <div class="container">
      <div class="landing-image-container">
        <img src="../public/images/child.jpeg" alt="landing-image" class="landing-image"/>
      </div>
      <div class="landing-details-container">
        <h2 class="title">Every Child is My Child</h2>
        <p class="description">
          Millions of children around the world face devastating losses and an uncertain future due to escalating armed
          conflicts, inequalities, and the impact of climate change on their lives and health.
        </p>
        <router-link to="/about" class="cta-button">More About MyChild</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

.landing-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.landing-image {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 50% 50% 0 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.landing-details-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--primary-hover);
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: var(--primary-hover);
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background: var(--primary-color);
}
</style>
