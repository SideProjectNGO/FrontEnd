<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from '#imports';

const { t } = useI18n();

interface Message {
  id: number;
  message: string;
  image: string;
  title: string;
}

const messages: Message[] = [
  {
    id: 1,
    title: t("messages.supportingChildren"),
    message: t("messages.message1"),
    image: "images/child.jpeg",
  },
  {
    id: 2,
    title: t("messages.empathyAndAction"),
    message: t("messages.message2"),
    image: "images/child.jpeg",
  },
  {
    id: 3,
    title: t("messages.powerOfEducation"),
    message: t("messages.message3"),
    image: "images/child.jpeg",
  },
  {
    id: 4,
    title: t("messages.protectingInnocence"),
    message: t("messages.message4"),
    image: "images/child.jpeg",
  },
  {
    id: 5,
    title: t("messages.investingInChildren"),
    message: t("messages.message5"),
    image: "images/child.jpeg",
  },
  {
    id: 6,
    title: t("messages.hopeForEveryChild"),
    message: t("messages.message6"),
    image: "images/child.jpeg",
  },
  {
    id: 7,
    title: t("messages.rightToCare"),
    message: t("messages.message7"),
    image: "images/child.jpeg",
  },
  {
    id: 8,
    title: t("messages.togetherWeCan"),
    message: t("messages.message8"),
    image: "images/child.jpeg",
  },
  {
    id: 9,
    title: t("messages.raisingLeaders"),
    message: t("messages.message9"),
    image: "images/child.jpeg",
  },
  {
    id: 10,
    title: t("messages.noChildLeftBehind"),
    message: t("messages.message10"),
    image: "images/child.jpeg",
  }
];

const currentIndex = ref(0);
const itemsPerPage = 1;

const visibleMessages = computed(() =>
    messages.slice(currentIndex.value, currentIndex.value + itemsPerPage)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % messages.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + messages.length) % messages.length;
}
</script>

<template>
  <div class="messages-section">
    <div class="content-wrapper">
      <button @click="prevPage" aria-label="Previous message" class="nav-btn">
        <UIcon name="mdi-arrow-left"/>
      </button>
      <div
          class="message-card"
          v-for="message in visibleMessages"
          :key="message.id"
          :style="{ animation: 'fadeIn 1s ease-out' }"
      >
        <div class="message-image" v-if="message.image">
          <img :src="message.image" alt="Message Image"/>
        </div>
        <div class="message-text">
          <h3 class="message-title">{{ message.title }}</h3>
          <p class="message-description">{{ message.message }}</p>
        </div>
      </div>
      <button @click="nextPage" aria-label="Next message" class="nav-btn">
        <UIcon name="mdi-arrow-right"/>
      </button>
    </div>
    <div class="navigation-buttons">
      <button @click="prevPage" aria-label="Previous message" class="nav-btn">
        <UIcon name="mdi-arrow-left"/>
      </button>
      <button @click="nextPage" aria-label="Next message" class="nav-btn">
        <UIcon name="mdi-arrow-right"/>
      </button>
    </div>
  </div>
</template>

<style scoped>
.messages-section {
  height: 100vh;
  margin: auto;
  background-image: url("../public/images/message-bg.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.messages-section .content-wrapper {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.messages-section .message-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color);
  width: 75%;
  margin: 20px auto;
  padding: 20px;
  animation: fadeIn 1s ease-out;
  box-shadow: rgba(149, 157, 165, 0.5) 0 8px 24px;
  border-radius: 50px 0;
}

.messages-section .message-image {
  width: 150px;
  height: 150px;
  min-height: 170px;
  overflow: hidden;
  margin-bottom: 20px;
}

.messages-section .message-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.message-text {
  text-align: center;
  min-height: 180px;
}

.message-title {
  font-size: 1.5rem;
  color: var(--text-color);
}

.message-description {
  font-size: 1.2rem;
  color: var(--text-color);
}

.nav-btn {
  background-color: transparent;
  cursor: pointer;
  font-size: 2rem;
  transition: transform 0.3s ease, color 0.3s ease;
  color: var(--primary-color);
  width: 50px;
  height: 50px;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
}

.nav-btn:hover {
  color: var(--primary-hover);
  transform: scale(1.2);
}

.navigation-buttons {
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .messages-section .content-wrapper {
    flex-direction: column;
    padding: 20px;
  }

  .messages-section .content-wrapper button {
    display: none;
  }

  .message-text {
    min-height: 280px;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
  }

  .navigation-buttons button {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    font-size: 1.5rem;
  }

  .messages-section .message-card {
    width: 100%;
  }
}
</style>
















