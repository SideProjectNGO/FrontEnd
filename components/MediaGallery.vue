<script setup lang="ts">
import {ref, computed, defineProps} from 'vue';
import {mediaData} from '~/data/mediaData';

interface MediaItem {
  id: number;
  sub_title: string;
  media: string;
}

const props = defineProps<{ type: 'image' | 'video' }>();
const mediaList = computed<MediaItem[]>(() => {
  return props.type === 'image'
      ? mediaData.images.map((item) => ({id: item.id, sub_title: item.sub_title, media: item.media}))
      : mediaData.videos;
});
const currentPage = ref(1);
const pageSize = 8;
const selectedMedia = ref<MediaItem | null>(null);
const isPopupVisible = ref(false);
const paginatedMedia = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return mediaList.value.slice(start, end);
});
const totalPages = computed(() => Math.ceil(mediaList.value.length / pageSize));
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const openPopup = (media: MediaItem) => {
  selectedMedia.value = media;
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
  selectedMedia.value = null;
};
</script>

<template>
  <div class="media-gallery">
    <h1 class="media-title">{{ type === 'image' ? 'General Photos' : 'General Videos' }}</h1>

    <div class="container">
      <div class="media-grid">
        <div class="media-card" v-for="media in paginatedMedia" :key="media.id" @click="openPopup(media)">
          <img v-if="type === 'image'" :src="media.media" :alt="media.sub_title" class="media-img"/>
          <video v-else class="media-video" :src="media.media" controls/>
        </div>
      </div>

      <div class="pagination-btn">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>

    <div v-if="isPopupVisible" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <span class="close-btn" @click="closePopup">&times;</span>
        <img v-if="type === 'image'" :src="selectedMedia?.media" class="popup-img" :alt="selectedMedia?.sub_title"/>
        <video v-else class="popup-video" :src="selectedMedia?.media" controls autoplay/>
        <p class="popup-title">{{ selectedMedia?.sub_title }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.media-gallery {
  display: block;
}

.media-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin: 20px 0;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
}

.media-card {
  cursor: pointer;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  transition: transform 0.2s;
}

.media-card:hover {
  transform: scale(1.05);
}

.media-img, .media-video {
  width: 100%;
  max-width: 250px;
  min-width: 250px;
  min-height: 200px;
  max-height: 200px;
  border-radius: 8px;
}

.pagination-btn {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.pagination-btn button {
  padding: 5px 10px;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--text-color);
  min-width: 90px;
  border: none;
  border-radius: 10px;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 80%;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-img, .popup-video {
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-width: 500px;
  max-height: 70vh;
  border-radius: 8px;
  object-fit: cover;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}

.popup-title {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>
