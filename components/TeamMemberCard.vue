
<script setup>
import {ref} from 'vue';

const buttons = [
  {
    name: 'Dashboard',
    type: 'admin',
    icon: 'uil-dashboard',
    links: [
      {name: 'Overview', url: '/dashboard/overview'},
      {name: 'Analytics', url: '/dashboard/analytics'}
    ]
  },
  {
    name: 'Users',
    type: 'admin',
    icon: 'uil-users-alt',
    links: [
      {name: 'User List', url: '/users/list'},
      {name: 'Add User', url: '/users/add'}
    ]
  },
  {
    name: 'Settings',
    type: 'admin',
    icon: 'uil-setting',
    links: [
      {name: 'General Settings', url: '/settings/general'},
      {name: 'Security Settings', url: '/settings/security'}
    ]
  },
  {
    name: 'Articles',
    type: 'admin',
    icon: 'uil-file-alt',
    links: [
      {name: 'Manage Articles', url: '/articles/manage'},
      {name: 'Add New Article', url: '/articles/add'}
    ]
  },
  {
    name: 'Stories',
    type: 'admin',
    icon: 'uil-book',
    links: [
      {name: 'Manage Stories', url: '/stories/manage'},
      {name: 'Add New Story', url: '/stories/add'}
    ]
  },
  {
    name: 'Activities',
    type: 'admin',
    icon: 'uil-calendar-alt',
    links: [
      {name: 'Manage Activities', url: '/activities/manage'},
      {name: 'Add New Activity', url: '/activities/add'}
    ]
  },
  {
    name: 'Volunteer',
    type: 'admin',
    icon: 'uil-heart',
    links: [
      {name: 'Manage Volunteer', url: '/volunteer/manage'},
      {name: 'Add New Volunteer', url: '/volunteer/add'}
    ]
  },
  {
    name: 'Team',
    type: 'admin',
    icon: 'mdi-users',
    links: [
      {name: 'Manage Team', url: '/team/manage'},
      {name: 'Add New Team', url: '/team/add'}
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

<template>
  <div class="sidebar">

    <div v-for="(button, index) in buttons" :key="index" class="button-group">
      <button @click="toggleLinks(index)" class="btn-sidebar">
        {{ button.name }}
      </button>

      <div v-if="activeButton === index" class="links-container">
        <ul>
          <li v-for="(link, i) in button.links" :key="i">
            <UIcon
                :name="link.icon"
            />
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--primary-hover);
  padding: 20px;
  height: 100vh;
}

.button-group {
  margin-bottom: 20px;
}

.btn-sidebar {
  width: 100%;
  padding: 10px;
  text-align: left;
  background-color: transparent;
  color: var(--text-hover);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-sidebar:hover {
  background: var(--background);
  color: var(--primary-hover);
  transition: 0.2s ease-in-out;
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

.links-container a:hover {
  text-decoration: underline;
}
</style>
