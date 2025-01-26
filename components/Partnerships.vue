<script>
import { ref, computed } from "vue";

const images = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Image ${i + 1}`,
  image: `path/to/image${i + 1}.jpg`,
}));

const rowPattern = [6, 5];
const currentIndex = ref(0);

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

export default {
  setup() {
    return {
      groupedImages,
    };
  },
};
</script>

<template>
  <div class="partnerships-section">
    <div class="container">
      <div v-for="(row, rowIndex) in groupedImages" :key="'row-' + rowIndex" class="row">
        <div v-for="image in row" :key="image.id" class="image-container">
          <img src="../public/images/un-logo-1.avif" :alt="image.title" class="image" />
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
.container {
  max-width: 1200px;
  margin: auto;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 70%;
  margin: 1rem auto;
}

.image-container {
  flex: 1;
  max-width: calc(20% - 1.5rem);
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
