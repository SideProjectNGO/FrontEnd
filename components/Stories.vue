<script setup lang="ts">
interface Story {
  story_id: number;
  title: string;
  content: string;
  summary: string;
  author_id: number;
  date: string;
  author_name: string;
  author_country: string;
  main_photo_url: string;
}

const stories: Story[] = [
  {
    story_id: 1,
    title: "The Impact of Early Childhood Education",
    content: `...`, // content truncated for brevity
    summary: "...",
    author_id: 101,
    date: "2025-01-15",
    author_name: "Jane Smith",
    author_country: "Canada",
    main_photo_url: "https://example.com/images/early-education.jpg",
  },
  {
    story_id: 2,
    title: "The Role of Play in Child Development",
    content: `...`,
    summary: "...",
    author_id: 102,
    date: "2025-01-18",
    author_name: "Michael Lee",
    author_country: "Australia",
    main_photo_url: "https://example.com/images/children-playing.jpg",
  },
  {
    story_id: 3,
    title: "The Challenges of Childhood Nutrition",
    content: `...`,
    summary: "...",
    author_id: 103,
    date: "2025-01-20",
    author_name: "Sarah Khan",
    author_country: "India",
    main_photo_url: "https://example.com/images/child-nutrition.jpg",
  },
];

const currentIndex = ref(0);
const itemsPerPage = 3;

const visibleStories = computed(() =>
    stories.slice(currentIndex.value, currentIndex.value + itemsPerPage)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % stories.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + stories.length) % stories.length;
}

function viewStory(id: number) {
  useRouter().push(`/stories/${id}`);
}

console.log(stories);
</script>

<template>
  <div class="stories-container">
    <h1 class="title">Stories around world</h1>
    <div class="container">
      <div
          class="story-cards"
          v-for="(story, index) in visibleStories"
          :key="story.story_id"
          v-bind="{ 'data-aos': 'fade-up' }"
      >
        <div class="card">
          <div class="story-main-photo">
            <img
                src="../public/images/landing-image-1.jpeg"
                :alt="story.title"
                class="story-image"
            />
          </div>
          <div class="story-body">
            <span
                class="story-title"
                @click="viewStory(story.story_id)"
                v-bind="{ 'data-aos': 'fade-left' }"
            >
              {{ story.title }}
            </span>
          </div>
          <div class="author-details">
            <h2>{{ story.author_name }}</h2>
            <h2>{{ story.author_country }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="btn-container">
        <button @click="prevPage" v-bind="{ 'data-aos': 'fade-right' }">
          Previous
        </button>

        <button @click="nextPage" v-bind="{ 'data-aos': 'fade-left' }">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.stories-container {
  display: block;
  padding: 20px;
}

.title{
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: var(--primary-hover);
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: 5rem auto;
}

.story-cards {
  animation: fadeIn 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card {
  width: 350px;
  border: 2px solid var(--border-color);
  overflow: hidden;
  background-color: var(--background);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: rgba(149, 157, 165, 0.4) 0 8px 24px;
  animation: fadeIn 0.8s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: rgba(149, 157, 165, 0.6) 0 12px 32px;
}

.story-main-photo {
  width: 100%;
  height: 350px;
  min-height: 200px;
  border-radius: 50% 50% 0 0;
  border: 2px solid var(--primary-hover);
}

.story-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 50% 50% 0 0;
  box-shadow: rgba(149, 157, 165, 0.5) 0 8px 24px;
}

.story-body {
  padding: 15px 0;
  min-height: 80px;
}

.story-title {
  font-weight: 600;
  font-size: 1rem;
  color: var(--primary-hover);
  min-height: 50px;
}

.author-details {
  display: flex;
  justify-content: space-between;
  color: var(--black-text-hover);
}

.container .btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
}

.container .btn-container button {
  margin-right: 50px;
  padding: 10px;
  border: 2px solid var(--primary-hover);
  min-width: 120px;
  cursor: pointer;
  animation: fadeIn 0.5s ease-in-out;
}

.container .btn-container button:hover {
  background: var(--primary-hover);
  color: var(--text-hover);
  transition: background-color 0.3s ease-in-out;
}
</style>
