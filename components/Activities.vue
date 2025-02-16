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
  main_photo: string;
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
    main_photo: "images/MyChild%20logo.png",
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
    main_photo: "images/MyChild%20logo.png",
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
    main_photo: "images/MyChild%20logo.png",
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
              <img :src="activity.main_photo" :alt="activity.title"/>
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
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.activities-wrapper {
  display: block;
  padding: 20px;
  background-color: var(--background);
  max-width: 1200px;
  margin: 0 auto;
}

.activities-title {
  text-align: center;
  font-weight: 700;
  font-size: clamp(1.5rem, 5vw, 2rem);
  color: var(--primary-hover);
  margin-bottom: 30px;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
}

.activity-item {
  animation: fadeIn 0.8s var(--transition);
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
}

.activity-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.activity-card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.activity-image-wrapper img {
  width: 100%;
  height: 250px;
  border-radius: 0 45px;
  object-fit: cover;
}

.activity-details h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 15px 0;
  color: var(--primary-color);
}

.activity-details p {
  font-size: 0.9rem;
  color: var(--primary-color);
  margin: 25px 0;
  line-height: 1.5;
}

.activity-link {
  padding: 10px;
  color: var(--text-color);
  border-radius: 10px;
  background: var(--primary-color);
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition), color var(--transition);
}


.pagination-wrapper {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.pagination-button {
  padding: 8px 16px;
  width: 150px;
  border: 2px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  animation: fadeIn 0.5s var(--transition);
  transition: background-color var(--transition), color var(--transition), border var(--transition);
}

.pagination-button:hover {
  background: var(--primary-hover);
  color: var(--text-hover);
  border: 2px solid var(--primary-hover);

}

@media (max-width: 768px) {
  .activities-title {
    font-size: clamp(1.2rem, 5vw, 1.5rem);
  }

  .activities-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .activity-card-body {
    padding: 15px;
  }

  .activity-image-wrapper img {
    height: 200px;
  }

  .activity-details h3 {
    font-size: 1rem;
  }

  .activity-details p {
    font-size: 0.8rem;
    margin: 15px 0;
  }

  .activity-link {
    padding: 8px;
    font-size: 0.8rem;
  }

  .pagination-button {
    width: 100%;
    max-width: 120px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .activities-title {
    font-size: clamp(1rem, 5vw, 1.2rem);
  }

  .activities-grid {
    grid-template-columns: 1fr;
  }

  .activity-card-body {
    padding: 10px;
  }

  .activity-image-wrapper img {
    height: 150px;
  }

  .activity-details h3 {
    font-size: 0.9rem;
  }

  .activity-details p {
    font-size: 0.7rem;
    margin: 10px 0;
  }

  .activity-link {
    padding: 6px;
    font-size: 0.7rem;
  }

  .pagination-button {
    font-size: 0.8rem;
  }
}
</style>

