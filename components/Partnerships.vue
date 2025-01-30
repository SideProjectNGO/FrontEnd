<script setup>
import { computed } from "vue";
import { useI18n } from "#imports";

const { t } = useI18n();

const images = [
  { id: 1, title: "names.john", image: "/images/mychild logo.jpg" },
  { id: 2, title: "names.jane", image: "/images/mychild logo.jpg" },
  { id: 3, title: "names.alex", image: "/images/mychild logo.jpg" },
  { id: 4, title: "names.emma", image: "/images/mychild logo.jpg" },
  { id: 5, title: "names.chris", image: "/images/mychild logo.jpg" },
  { id: 6, title: "names.sophia", image: "/images/mychild logo.jpg" },
  { id: 7, title: "names.daniel", image: "/images/mychild logo.jpg" },
  { id: 8, title: "names.olivia", image: "/images/mychild logo.jpg" },
  { id: 9, title: "names.michael", image: "/images/mychild logo.jpg" },
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
  <div class="partnerships-section">
    <h1 class="title">{{ t("partnerships.title") }}</h1>
    <div class="container">
      <div v-for="(row, rowIndex) in groupedImages" :key="'row-' + rowIndex" class="row">
        <div v-for="image in row" :key="image.id" class="image-container">
          <img src="../public/images/un-logo-1.avif" :alt="t(image.title)" class="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partnerships-section {
  padding: 2rem;
  background-color: #f9f9f9;
}

.partnerships-section .title {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-hover);
}

.container {
  max-width: 1200px;
  margin: auto;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  margin: 1rem auto;
}

.image-container {
  flex: 1;
  max-width: calc(16.666% - 1.5rem);
}

.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .image-container {
    max-width: calc(20% - 1.5rem);
  }
}

@media (max-width: 768px) {
  .image-container {
    max-width: calc(33.333% - 1.5rem);
  }
}

@media (max-width: 480px) {
  .image-container {
    max-width: 100%;
  }
}
</style>
