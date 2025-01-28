<script setup lang="ts">
import {ref, computed} from 'vue';

interface Message {
  id: number;
  message: string;
  image: string;
  title: string;
}

const messages: Message[] = [
  {
    id: 1,
    title: "Supporting Children for a Better Future",
    message: "Every child deserves a chance to thrive. NGOs like ours play a pivotal role in providing care, education, and a brighter future for children in need.",
    image: "images/child.jpeg",
  },
  {
    id: 2,
    title: "Empathy and Action: A Lifeline for Children",
    message: "It’s not just about providing basic needs. It’s about offering a safe space where children can feel loved and supported, enabling them to flourish and reach their full potential.",
    image: "images/child.jpeg",
  },
  {
    id: 3,
    title: "The Power of Education",
    message: "When we educate a child, we open doors to endless possibilities. NGOs like ours provide critical educational resources that break the cycle of poverty and build a better tomorrow.",
    image: "images/child.jpeg",
  },
  {
    id: 4,
    title: "Protecting Innocence",
    message: "Children are the future, and it’s our responsibility to protect them. By supporting organizations that care for vulnerable children, we can help safeguard their innocence and provide opportunities for growth.",
    image: "images/child.jpeg",
  },
  {
    id: 5,
    title: "Investing in Children, Investing in Tomorrow",
    message: "Supporting children today is an investment in a better, more compassionate world. Through our efforts, we help shape resilient, empowered future leaders.",
    image: "images/child.jpeg",
  },
  {
    id: 6,
    title: "Hope for Every Child",
    message: "In many parts of the world, children face unimaginable challenges. NGOs are working tirelessly to bring hope and change through education, healthcare, and essential resources.",
    image: "images/child.jpeg",
  },
  {
    id: 7,
    title: "A Right to Care and Education",
    message: "Every child has a right to grow in a safe environment and receive the education they deserve. Our NGO works to ensure that no child is left behind due to their circumstances.",
    image: "images/child.jpeg",
  },
  {
    id: 8,
    title: "Together We Can Make a Difference",
    message: "Through collective action, we can ensure that vulnerable children receive the care, support, and education they need to succeed in life. Join us in making a lasting impact!",
    image: "images/child.jpeg",
  },
  {
    id: 9,
    title: "Raising a Generation of Leaders",
    message: "When children are nurtured, cared for, and given opportunities, they grow into confident leaders who can shape the world for the better. Let’s be part of that transformation.",
    image: "images/child.jpeg",
  },
  {
    id: 10,
    title: "No Child Should Be Left Behind",
    message: "Every child deserves an opportunity to dream and achieve. Through NGOs, we are ensuring that every child, regardless of their background, gets the support they need to build a bright future.",
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
















