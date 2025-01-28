<script setup lang="ts">
import AdminSidebar from '~/components/AdminSidebar.vue';
import { useRoute, useRouter } from 'vue-router';
import { reactive, computed } from 'vue';

definePageMeta({
  middleware: 'auth',
});

interface Activity {
  activity_id: number;
  title: string;
  content: string;
  summary: string;
  author_id: number;
  date: string;
  author_name: string;
  author_country: string;
  main_photo: File | string | null;
  sub_photo: (File | string)[];
  author_photo: File | string | null;
}

const activities: Activity[] = [
  {
    activity_id: 1,
    title: 'The Impact of Early Childhood Education',
    content: `
      Early childhood education lays the foundation for lifelong learning and development...
    `,
    summary: 'Explores the importance of early childhood education and its role in shaping a child’s future success.',
    date: '2025-01-15',
    author_name: 'Jane Smith',
    author_country: 'Canada',
    author_id: 1,
    main_photo: null,
    author_photo: null,
    sub_photo: [],
  },
  {
    activity_id: 2,
    title: 'The Impact of Early Childhood Education',
    content: `
      Early childhood education lays the foundation for lifelong learning and development...
    `,
    summary: 'Explores the importance of early childhood education and its role in shaping a child’s future success.',
    date: '2025-01-15',
    author_name: 'Jane Smith',
    author_country: 'Canada',
    author_id: 1,
    main_photo: null,
    author_photo: null,
    sub_photo: [],
  },
  {
    activity_id: 3,
    title: 'The Impact of Early Childhood Education',
    content: `
      Early childhood education lays the foundation for lifelong learning and development...
    `,
    summary: 'Explores the importance of early childhood education and its role in shaping a child’s future success.',
    date: '2025-01-15',
    author_name: 'Jane Smith',
    author_country: 'Canada',
    author_id: 1,
    main_photo: null,
    author_photo: null,
    sub_photo: [],
  },
];

const route = useRoute();
const router = useRouter();
const activityId = parseInt(route.params.id as string);

const activity = computed(() => activities.find((a) => a.activity_id === activityId));

const editedActivity = reactive<Activity>({
  activity_id: activity.value?.activity_id || 0,
  title: activity.value?.title || '',
  content: activity.value?.content || '',
  summary: activity.value?.summary || '',
  author_id: activity.value?.author_id || 0,
  date: activity.value?.date || '',
  author_name: activity.value?.author_name || '',
  author_country: activity.value?.author_country || '',
  main_photo: activity.value?.main_photo || null,
  sub_photo: activity.value?.sub_photo || [],
  author_photo: activity.value?.author_photo || null,
});

const updateActivity = () => {
  const index = activities.findIndex((a) => a.activity_id === activityId);
  if (index !== -1) {
    if (editedActivity.main_photo instanceof File) {
      editedActivity.main_photo = URL.createObjectURL(editedActivity.main_photo);
    }
    if (editedActivity.author_photo instanceof File) {
      editedActivity.author_photo = URL.createObjectURL(editedActivity.author_photo);
    }
    editedActivity.sub_photo = editedActivity.sub_photo.filter(file => file instanceof File);
    activities[index] = { ...editedActivity };
    alert('Activity updated successfully!');
    router.push(`/activities/admin/${activityId}`);
  }
};

const deleteActivity = () => {
  const index = activities.findIndex((a) => a.activity_id === activityId);
  if (index !== -1) {
    activities.splice(index, 1);
    alert('Activity deleted successfully!');
    router.push('/activities/admin');
  }
};
</script>

<template>
  <AdminNavBar />
  <div class="dashboard-wrapper">
    <div class="dashboard-container">
      <div class="sidebar-wrapper">
        <AdminSidebar />
      </div>
      <div class="dashboard-content">
        <div class="activity-section">
          <div>
            <h1>{{ activity?.title }}</h1>
            <form @submit.prevent="updateActivity" class="activity-form">
              <div v-for="(value, key) in editedActivity" :key="key" class="form-group">
                <label :for="key" class="form-label">{{ key.charAt(0).toUpperCase() + key.slice(1) }}:</label>

                <input
                    v-if="key === 'main_photo' || key === 'author_photo'"
                    @change="event => {
                    const target = event.target as HTMLInputElement;
                    if (target?.files) {
                      editedActivity[key] = target.files[0];
                    }
                  }"
                    type="file"
                    :id="key"
                    class="input-field"
                />
                <input
                    v-if="key === 'sub_photo'"
                    @change="event => {
                    const target = event.target as HTMLInputElement;
                    if (target?.files) {
                      editedActivity[key] = Array.from(target.files);
                    }
                  }"
                    type="file"
                    multiple
                    :id="key"
                    class="input-field"
                />
                <input
                    v-if="key !== 'content' && key !== 'main_photo' && key !== 'sub_photo' && key !== 'author_photo'"
                    v-model="editedActivity[key]"
                    type="text"
                    :id="key"
                    class="input-field"
                />
                <textarea
                    v-if="key === 'content'"
                    v-model="editedActivity[key]"
                    :id="key"
                    class="textarea-field"
                ></textarea>
              </div>
              <button type="submit" class="button-save">Save Activity</button>
            </form>

            <button @click="deleteActivity" class="button-delete">Delete Activity</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AdminFooter />
</template>

<style scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
}

.sidebar-wrapper {
  height: 100%;
}

.activity-section {
  width: 95%;
  margin: 1rem auto;
}

@media (max-width: 1200px) {
  .dashboard-container {
    display: block;
    width: 90%;
    margin: 1rem auto;
  }
}

.activity-form {
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-field:focus,
.textarea-field:focus {
  border-color: #4CAF50;
  outline: none;
}

.textarea-field {
  height: 150px;
  resize: vertical;
}

.button-save {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-save:hover {
  background-color: #45a049;
}

.button-delete {
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.button-delete:hover {
  background-color: darkred;
}
</style>


