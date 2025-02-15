<script setup lang="ts">
import AdminSidebar from '~/components/AdminSidebar.vue';
import {ref} from 'vue';


definePageMeta({
  middleware: 'auth',
});

const users = ref([
  {id: 1, name: 'John Doe', phone: '+123456789', email: 'john@example.com', country: 'USA', age: 30},
  {id: 2, name: 'Jane Smith', phone: '+987654321', email: 'jane@example.com', country: 'UK', age: 28},
  {id: 3, name: 'Ali Khan', phone: '+1122334455', email: 'ali@example.com', country: 'Pakistan', age: 32}
]);

const selectedUser = ref<Record<string, any> | null>(null);
const showUserPopup = ref(false);

const viewUser = (user: any) => {
  selectedUser.value = user;
  showUserPopup.value = true;
};

const closeUserPopup = () => {
  showUserPopup.value = false;
};
</script>

<template>
  <div class="admin-dashboard">
    <div class="admin-wrapper">

      <div class="sidebar">
        <AdminSidebar/>
      </div>

      <div class="dashboard-content">
        <h2 class="dashboard-title">User Dashboard</h2>

        <div class="table-container">
          <table class="user-table">
            <thead>
            <tr class="table-header">
              <th>User Name</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id" class="table-row">
              <td>{{ user.name }}</td>
              <td>{{ user.phone }}</td>
              <td>
                <button @click="viewUser(user)" class="view-button">
                  View
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div v-if="showUserPopup" class="user-popup-overlay">
          <div class="user-popup-content">
            <h3 class="user-popup-title">User Details</h3>

            <table class="details-table">
              <tbody>
              <tr v-for="(value, key) in selectedUser" :key="key" class="details-row">
                <td class="details-key">{{ key }}</td>
                <td class="details-value">{{ value }}</td>
              </tr>
              </tbody>
            </table>

            <button @click="closeUserPopup" class="close-button">
              Close
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

.admin-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 20px;
}

.dashboard-content {
  padding: 20px;
  border-radius: 10px;
}

.dashboard-content {
  padding: 1.5rem;
  background-color: #f9fafb;
  min-height: 100vh;
}

.dashboard-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.table-container {
  overflow-x: auto;
  background-color: var(--background);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  background-color: var(--primary-color);
}

.table-header th {
  padding: 0.75rem;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color) !important;
  text-transform: uppercase;
  border-bottom: 1px solid var(--primary-color);
}

.table-row {
  transition: background-color 0.2s;
}

.table-row td {
  padding: 1rem;
  font-size: 1rem;
  color: var(--primary-color);
  border-bottom: 1px solid var(--background);
}

.view-button {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.view-button:hover {
  background-color: var(--primary-hover);
  color: var(--text-hover);
  cursor: pointer;
  transition: background-color ease-in-out 0.2s, color ease-in-out 0.2s;
  outline: none;
}

.user-popup-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}

.user-popup-content {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  max-width: 24rem;
  width: 100%;
  min-width: 700px;
}

.user-popup-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
}

.details-row {
  transition: background-color 0.2s;
}

.details-row:hover {
  background-color: #f9fafb;
}

.details-key {
  padding: 0.75rem;
  font-weight: 500;
  color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
  text-transform: capitalize;
}

.details-value {
  padding: 0.75rem;
  color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
}

.close-button {
  width: 100%;
  background-color: red;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  margin-top: 1.5rem;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: #dc2626;
  transition: background-color ease-in-out 0.2s, color ease-in-out 0.2s;
}

@media (max-width: 768px) {
  .admin-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>

