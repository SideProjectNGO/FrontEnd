<script setup lang="ts">
interface Activity {
  activity_id: number;
  title: string;
  content: string;
  summary: string;
  author_id: number;
  date: string;
  author_name: string;
  author_country: string;
  main_photo_url: string;
}

const activities: Activity[] = [
  {
    activity_id: 1,
    title: "The Impact of Early Childhood Education",
    content: `...`, // content truncated for brevity
    summary: "...",
    author_id: 101,
    date: "2025-01-15",
    author_name: "Jane Smith",
    author_country: "Canada",
    main_photo_url: "/images/landing-image-1.jpeg",
  },
  {
    activity_id: 2,
    title: "The Role of Play in Child Development",
    content: `...`,
    summary: "...",
    author_id: 102,
    date: "2025-01-18",
    author_name: "Michael Lee",
    author_country: "Australia",
    main_photo_url: "/images/landing-image-1.jpeg",
  },
  {
    activity_id: 3,
    title: "The Challenges of Childhood Nutrition",
    content: `...`,
    summary: "...",
    author_id: 103,
    date: "2025-01-20",
    author_name: "Sarah Khan",
    author_country: "India",
    main_photo_url: "/images/landing-image-1.jpeg",
  },
];

const currentIndex = ref(0);
const itemsPerPage = 2;

const visibleActivities = computed(() =>
    activities.slice(currentIndex.value, currentIndex.value + itemsPerPage)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % activities.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + activities.length) % activities.length;
}

function viewActivity(id: number) {
  useRouter().push(`/activities/${id}`);
}

console.log(activities);
</script>

<template>
  <div class="activities-wrapper">
    <h1 class="activities-title">Our Activities</h1>

    <div class="activities-grid">
      <div
          class="activity-item"
          v-for="(activity, index) in visibleActivities"
          :key="activity.activity_id"
          v-bind="{ 'data-aos': 'fade-up' }"
      >
        <div class="activity-card">
          <div class="activity-card-body">
            <div class="activity-image-wrapper">
              <img :src="activity.main_photo_url" :alt="activity.title"/>
            </div>
            <div class="activity-details">
              <h3 class="activity-title">{{ activity.title }}</h3>
              <p class="activity-summary">{{ activity.summary || "Learn more about this activity." }}</p>
              <a
                  @click="viewActivity(activity.activity_id)"
                  class="activity-link">Read More About it</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination-wrapper">
      <button class="pagination-button prev-button" @click="prevPage" v-bind="{ 'data-aos': 'fade-right' }">
        Previous
      </button>

      <button class="pagination-button next-button" @click="nextPage" v-bind="{ 'data-aos': 'fade-left' }">
        Next
      </button>
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

.activities-wrapper {
  display: block;
  padding: 20px;
  background-color: #f9f9f9;
}

.activities-title {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: var(--primary-hover);
  margin-bottom: 30px;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.activity-item {
  animation: fadeIn 0.8s ease-in-out;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.activity-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.activity-card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.activity-image-wrapper img {
  width: 100%;
  height: 250px;
  border-radius: 0 50% 50% 0;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}

.activity-details h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 15px 0;
  color: var(--primary-hover);
}

.activity-details p {
  font-size: 0.9rem;
  color: var(--primary-hover);
  margin: 25px 0;
}

.activity-link {
  padding: 10px;
  color: var(--text-color);
  border-radius: 10px;
  background: var(--primary-hover);
  cursor: pointer;
}

.pagination-wrapper {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.pagination-button {
  padding: 10px 20px;
  border: 2px solid var(--primary-hover);
  background: transparent;
  color: var(--primary-hover);
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  animation: fadeIn 0.5s ease-in-out;
  transition: background-color 0.3s, color 0.3s;
}

.pagination-button:hover {
  background: var(--primary-hover);
  color: white;
}

@media (max-width: 768px) {
  .pagination-wrapper {
    flex-direction: column;
    gap: 10px;
  }

  .pagination-button {
    width: 100%;
    max-width: 200px;
  }
}
</style>


