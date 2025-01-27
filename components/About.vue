<script setup lang="ts">

</script>

<template>
  <div class="about">
    <h1 class="title">More about Mychild</h1>
    <div class="container">
      <div class="box">
        <h2 class="sub-title">Vision</h2>
        <p class="description">
          A world where every child, regardless of their background, enjoys equal access to
          opportunities for growth, education, and happiness. We envision a future where no child is left behind, where
          they are protected from harm, empowered to dream, and nurtured to become compassionate, confident leaders of
          tomorrow.
        </p>
        <h2 class="sub-title">Mission</h2>
        <p class="description">
          Our mission is to provide holistic care, education, and support to children in need.
          Through community-driven programs, advocacy, and sustainable solutions, we aim to ensure every child has
          access to a safe, nurturing environment and the resources they need to unlock their full potential.
        </p>
      </div>
      <div>
        <img src="../public/images/vision.jpeg" alt="vision">
      </div>
    </div>
  </div>
</template>

<style scoped>

.about {
  margin: 5rem auto;
  max-width: 1200px;
}

.title {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.about .container {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.about .container .sub-title {
  text-align: start;
  font-size: 1.5rem;
  color: var(--primary-hover);
  border-bottom: 2px solid var(--primary-hover);
  margin-bottom: 1rem;
}

.about .container .description {
  text-align: justify;
}

</style>