<script setup lang="ts">
import {ref, onMounted} from 'vue';
import AdminSidebar from '~/components/AdminSidebar.vue';

definePageMeta({
  middleware: 'auth',
});

const articlesCount = ref(0);
const storiesCount = ref(0);
const volunteerRequestsCount = ref(0);
const activitiesCount = ref(0);
const fetchDashboardData = () => {
  setTimeout(() => {
    articlesCount.value = 10;
    storiesCount.value = 5;
    activitiesCount.value = 15;
    volunteerRequestsCount.value = 3;
  }, 500);
};
const items = [
  {
    title: 'Total Articles',
    icon: 'uil-book',
    count: articlesCount.value,
    color: '#6A8E91',
  },
  {
    title: 'Total Stories',
    icon: 'uil-book-open',
    count: storiesCount.value,
    color: '#98A9B1',
  },
  {
    title: 'Total Requests',
    icon: 'uil-users-alt',
    count: volunteerRequestsCount.value,
    color: '#4F6A7B',
  },
  {
    title: 'Total Activities',
    icon: 'mdi-user',
    count: 12,
    color: '#A0B1C3',
  },
];

onMounted(() => {
  fetchDashboardData();
});


</script>

<template>
  <div class="dashboard">
    <div class="dashboard-wrapper">
      <div class="sidebar">
        <AdminSidebar />
      </div>
      <div class="dashboard-main-content">
        <div class="content-wrapper">
          <div class="card-container">
            <div
                class="dashboard-card"
                v-for="item in items"
                :key="item.title"
                :style="{ background: item.color }"
            >
              <h3>{{ item.title }}</h3>
              <UIcon :name="item.icon" />
              <p>{{ item.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 20px;
}

.dashboard-main-content {
  padding: 20px;
  border-radius: 10px;
}

.card-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.dashboard-card {
  padding: 20px;
  color: white;
  border-radius: 8px;
  text-align: center;
  width: 30%;
}

.dashboard-card h3 {
  margin: 0;
  font-size: 1.5rem;
}

.dashboard-card p {
  font-size: 2rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .dashboard-wrapper {
    grid-template-columns: 1fr;
  }

  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .dashboard-card {
    width: 80%;
    margin: 10px 0;
  }
}

@media (max-width: 768px) {
  .dashboard-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>


