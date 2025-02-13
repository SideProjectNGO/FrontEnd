<script setup>
import {computed} from "vue";
import {useI18n} from "#imports";

const {t} = useI18n();
const images = [
  {id: 1, title: "MAPIM", image: "images/partnership-logo-1.webp"},
  {id: 2, title: "UN", image: "images/partnership-logo-2.webp"},
  {id: 3, title: "MALAYSIA", image: "images/partnership-logo-3.webp"},
  {id: 4, title: "MALAYSIA", image: "images/partnership-logo-4.webp"},
];
const rowPattern = [5, 4];
const groupedImages = computed(() => {
  const rows = [];
  let start = 0;
  let patternIndex = 0;

  while (start < images.length) {
    const rowSize = rowPattern[patternIndex];
    rows.push(images.slice(start, start + rowSize));
    start += rowSize;
    patternIndex = (patternIndex + 1) % rowPattern.length;
  }

  return rows;
});
</script>

<template>
  <section class="partnerships-section">
    <h1 class="title">{{ t("partnerships.title") }}</h1>
    <div class="container">
      <div
          v-for="(row, rowIndex) in groupedImages"
          :key="`row-${rowIndex}`"
          class="content-container"
      >
        <div
            v-for="image in row"
            :key="image.id"
            class="image-container"
        >
          <img
              :src="image.image"
              :alt="t(image.title)"
              :title="t(image.title)"
              class="image"
              loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partnerships-section {
  padding: 2rem;
  background-color: var(--background);
  margin: 5rem auto;
}

.title {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-hover);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.content-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.image-container {
  flex: 1 1 calc(15% - 1.5rem);
  max-width: calc(15% - 1.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  max-width: 70px;
  max-height: 70px;
  height: auto;
  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .image-container {
    flex: 1 1 calc(20% - 1.5rem);
    max-width: calc(20% - 1.5rem);
  }
}

@media (max-width: 768px) {
  .image-container {
    flex: 1 1 calc(33.333% - 1.5rem);
    max-width: calc(33.333% - 1.5rem);
  }
}

@media (max-width: 480px) {
  .image-container {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
