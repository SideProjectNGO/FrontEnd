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
      { name: 'Overview', url: '/admin', icon: 'uil-eye' },
    ]
  },
  {
    name: 'Articles',
    type: 'admin',
    icon: 'uil-file-alt',
    links: [
      { name: 'All Articles', url: '/articles/admin/', icon: 'uil-list-ul' },
      { name: 'Add New Article', url: '/articles/admin/new-article', icon: 'uil-plus-circle' }
    ]
  },
  {
    name: 'Stories',
    type: 'admin',
    icon: 'uil-book-open',
    links: [
      { name: 'All Stories', url: '/stories/admin/', icon: 'uil-list-ul' },
      { name: 'Add New Story', url: '/stories/admin/new-story', icon: 'uil-plus-circle' }
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
    icon: 'uil-users-alt',
    links: [
      { name: 'All Volunteers', url: '/', icon: 'uil-list-ul' },
      { name: 'Add New Volunteer', url: '/volunteer-form', icon: 'uil-user-plus' }
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
  background-color: var(--background);
  padding: 20px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 400px;
}

.button-group {
  margin-bottom: 20px;
}

.btn-sidebar {
  width: 100%;
  padding: 10px;
  text-align: left;
  background-color: transparent;
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
  color: var(--primary-hover);
}

.btn-sidebar .icon {
  margin-right: 10px;
  color: var(--primary-hover);
}

.links-container .icon {
  margin-right: 10px;
  color: var(--primary-hover);
}

</style>
