<script setup lang="ts">

const aboutItem = [
  {
    id: 1,
    title: "About Us",
    content: "At MyChild, we are a dedicated team of local and international individuals passionate about nurturing and empowering children. Our diverse team includes core members and educators who share a unified goal: ensuring that every child has the opportunity to thrive.",
    image: "/images/about-us.webp",
  },
  {
    id: 2,
    title: "Our Vision",
    content: "A world where every child, regardless of their background, enjoys equal access to opportunities for growth, education, and happiness. We envision a future where no child is left behind, where they are protected from harm, empowered to dream, and nurtured to become compassionate, confident leaders of tomorrow.",
    image: "/images/vision.jpeg",
  },
  {
    id: 3,
    title: "Our Mission",
    content: "Our mission is to provide holistic care, education, and support to children in need. Through community-driven programs, advocacy, and sustainable solutions, we aim to ensure every child has access to a safe, nurturing environment and the resources they need to unlock their full potential.",
    image: "/images/mission.webp",
  }
];

</script>

<template>
  <div class="about-section">
    <h1 class="about-title">More about MyChild</h1>
    <div class="about-grid" v-for="item in aboutItem" :key="item.id">
      <template v-if="item.id % 2 !== 0">
        <div class="text-content">
          <h2 class="item-title">{{ item.title }}</h2>
          <p class="item-description">{{ item.content }}</p>
        </div>
        <div class="image-content">
          <img :src="item.image" :alt="item.title" />
        </div>
      </template>
      <template v-else>
        <div class="image-content">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="text-content">
          <h2 class="item-title">{{ item.title }}</h2>
          <p class="item-description">{{ item.content }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

.about-section {
  margin: 5rem auto;
  max-width: 1200px;
  padding: 0 1rem;
}

.about-title {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.about-grid {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.item-title {
  text-align: start;
  font-size: 1.5rem;
  color: var(--primary-hover);
  border-bottom: 2px solid var(--primary-hover);
  margin-bottom: 1rem;
}

.item-description {
  text-align: justify;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1rem auto;
  }

  .about-section {
    margin: 3rem auto;
  }

  .about-title {
    font-size: 1.8rem;
  }

  .item-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .about-grid {
    gap: 1rem;
    margin: 1rem auto;
  }

  .about-title {
    font-size: 1.5rem;
  }

  .item-title {
    font-size: 1.2rem;
  }

  .about-section {
    margin: 2rem auto;
  }
}

</style>


