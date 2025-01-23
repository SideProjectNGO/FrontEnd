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
      {name: 'Overview', url: '/dashboard/overview', icon: 'uil-eye'},
      {name: 'Analytics', url: '/dashboard/analytics', icon: 'uil-chart'}
    ]
  },
  {
    name: 'Users',
    type: 'admin',
    icon: 'uil-users-alt',
    links: [
      {name: 'User List', url: '/users/list', icon: 'uil-list-ul'},
      {name: 'Add User', url: '/users/add', icon: 'uil-user-plus'}
    ]
  },
  {
    name: 'Settings',
    type: 'admin',
    icon: 'uil-setting',
    links: [
      {name: 'General Settings', url: '/settings/general', icon: 'uil-cog'},
      {name: 'Security Settings', url: '/settings/security', icon: 'uil-lock'}
    ]
  },
  {
    name: 'Articles',
    type: 'admin',
    icon: 'uil-file-alt',
    links: [
      {name: 'Manage Articles', url: '/articles/manage', icon: 'uil-edit'},
      {name: 'Add New Article', url: '/articles/add', icon: 'uil-plus-circle'}
    ]
  },
  {
    name: 'Stories',
    type: 'admin',
    icon: 'uil-book',
    links: [
      {name: 'Manage Stories', url: '/stories/manage', icon: 'uil-folder'},
      {name: 'Add New Story', url: '/stories/add', icon: 'uil-plus'}
    ]
  },
  {
    name: 'Activities',
    type: 'admin',
    icon: 'uil-calendar-alt',
    links: [
      {name: 'Manage Activities', url: '/activities/manage', icon: 'uil-calendar'},
      {name: 'Add New Activity', url: '/activities/add', icon: 'uil-calendar-plus'}
    ]
  },
  {
    name: 'Volunteer',
    type: 'admin',
    icon: 'uil-heart',
    links: [
      {name: 'Manage Volunteer', url: '/volunteer/manage', icon: 'uil-hands-helping'},
      {name: 'Add New Volunteer', url: '/volunteer/add', icon: 'uil-user-check'}
    ]
  },
  {
    name: 'Team',
    type: 'admin',
    icon: 'mdi-users',
    links: [
      {name: 'Manage Team', url: '/team/manage', icon: 'uil-users-alt'},
      {name: 'Add New Team', url: '/team/add', icon: 'uil-user-plus'}
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
