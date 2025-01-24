<template>
  <div class="sidebar">

    <div v-for="(button, index) in buttons" :key="index" class="button-group">
      <button @click="toggleLinks(index)" class="btn-sidebar">
        <UIcon
            :name="button.icon"
            class="icon"
        />
        {{ button.name }}
      </button>

      <div v-if="activeButton === index" class="links-container">
        <ul>
          <li v-for="(link, i) in button.links" :key="i">
            <UIcon
                :name="link.icon"
                class="icon"
            />
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const buttons = [
  {
    name: 'Dashboard',
    type: 'admin',
    icon: 'uil-dashboard',
    links: [
      { name: 'Overview', url: '/dashboard/overview', icon: 'uil-eye' },
      { name: 'Analytics', url: '/dashboard/analytics', icon: 'uil-chart' },
      { name: 'Admin Dashboard', url: '/dashboard/admin', icon: 'uil-user' } // For Admin Dashboard
    ]
  },
  {
    name: 'Articles',
    type: 'admin',
    icon: 'uil-file-alt',
    links: [
      { name: 'All Articles', url: '/articles', icon: 'uil-list-ul' },
      { name: 'Add New Article', url: '/articles/add', icon: 'uil-plus-circle' }
    ]
  },
  {
    name: 'Stories',
    type: 'admin',
    icon: 'uil-book-open',
    links: [
      { name: 'All Stories', url: '/stories', icon: 'uil-list-ul' },
      { name: 'Add New Story', url: '/stories/add', icon: 'uil-plus-circle' }
    ]
  },
  {
    name: 'Users',
    type: 'admin',
    icon: 'uil-users-alt',
    links: [
      { name: 'User Management', url: '/users/manage', icon: 'uil-user-check' },
      { name: 'Add New User', url: '/users/add', icon: 'uil-user-plus' }
    ]
  },
  {
    name: 'Volunteers',
    type: 'admin',
    icon: 'uil-hands',
    links: [
      { name: 'All Volunteers', url: '/volunteers', icon: 'uil-list-ul' },
      { name: 'Add New Volunteer', url: '/volunteers/add', icon: 'uil-user-plus' }
    ]
  },
  {
    name: 'Activities',
    type: 'admin',
    icon: 'uil-calendar',
    links: [
      { name: 'All Activities', url: '/activities', icon: 'uil-calendar-alt' },
      { name: 'Add New Activity', url: '/activities/add', icon: 'uil-plus-circle' }
    ]
  }
];

const activeButton = ref(null);

function toggleLinks(index) {
  if (activeButton.value === index) {
    activeButton.value = null;
  } else {
    activeButton.value = index;
  }
}
</script>

<style scoped>
.sidebar {
  background-color: var(--primary-hover);
  padding: 20px;
  width: 100%;
  height: 100vh;
  max-width: 400px;
}

.button-group {
  margin-bottom: 20px;
}

.btn-sidebar {
  width: 100%;
  padding: 10px;
  text-align: left;
  background-color: var(--background);
  color: var(--primary-hover);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-sidebar:hover {
  background-color: var(--text-hover);
}

.links-container {
  margin-top: 10px;
}

.links-container ul {
  list-style-type: none;
  padding-left: 20px;
}

.links-container li {
  margin: 5px 0;
}

.links-container a {
  text-decoration: none;
  color: var(--text-hover);
}

.btn-sidebar .icon {
  margin-right: 10px;
  color: var(--primary-hover);
}

.links-container .icon {
  margin-right: 10px;
  color: var(--text-hover);
}

</style>
