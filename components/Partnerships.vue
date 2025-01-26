<script lang="ts">
import { ref, computed } from "vue";

const images = [
  { id: 1, title: "Image 1", image: "path/to/image1.jpg" },
  { id: 2, title: "Image 2", image: "path/to/image2.jpg" },
  { id: 3, title: "Image 3", image: "path/to/image3.jpg" },
  { id: 4, title: "Image 4", image: "path/to/image4.jpg" },
  { id: 5, title: "Image 5", image: "path/to/image5.jpg" },
  { id: 6, title: "Image 6", image: "path/to/image6.jpg" },
  { id: 7, title: "Image 7", image: "path/to/image7.jpg" },
  { id: 8, title: "Image 8", image: "path/to/image8.jpg" },
];

const currentIndex = ref(0);
const itemsPerPage = 3;

const visibleImages = computed(() => {
  return images.slice(currentIndex.value, currentIndex.value + itemsPerPage);
});

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % images.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + images.length) % images.length;
}
</script>

<template>
  <div class="partnerships-section">
    <div class="container">
      <transition-group name="fade-slide" tag="div">
        <div
            v-for="image in visibleImages"
            :key="image.id"
            class="image-container"
        >
          <img src="../public/images/logo.webp" :alt="image.title" class="image" />
          <img src="~/public/images/team-member.jpeg" :alt="image.title" class="image" />
        </div>
      </transition-group>
    </div>
    <div class="btn-container">
      <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<style scoped>
.partnerships-section {
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.image-container {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--primary-hover);
}

</style>
