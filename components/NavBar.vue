<script setup>
import {ref, onMounted} from 'vue';

const isLinksVisible = ref(false);
const isMobile = ref(false);

function toggleLinksVisibility() {
  isLinksVisible.value = !isLinksVisible.value;
  console.log('Links visibility toggled:', isLinksVisible.value);
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 1200;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 1200;
  });
});
</script>

<template>
  <div class="header">
    <div class="header-content">
      <div class="logo-and-social">
        <div class="social-icons">
          <div class="social-links">
            <a href="" target="_blank" class="social-link">
              <UIcon name="mdi-facebook" size="24"/>
            </a>
            <a href="" target="_blank" class="social-link">
              <UIcon name="mdi-whatsapp" size="24"/>
            </a>
            <a href="" target="_blank" class="social-link">
              <UIcon name="mdi-instagram" size="24"/>
            </a>
            <a href="" target="_blank" class="social-link">
              <UIcon name="mdi-youtube" size="24"/>
            </a>
          </div>
        </div>
        <button v-if="isMobile" @click="toggleLinksVisibility" class="menu-toggle">
          <UIcon name="uil-bars"/>
        </button>
      </div>

      <div class="header-heading">
        <h2>Every Child is My Child</h2>
      </div>

      <nav v-if="isLinksVisible || !isMobile" class="nav-menu">
        <ul class="nav-links">
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/articles">Articles</router-link>
          </li>
          <li>
            <router-link to="/activities">Activities</router-link>
          </li>
          <li>
            <router-link to="/stories">Stories</router-link>
          </li>
          <li>
            <router-link to="/volunteer-form">Volunteer</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  min-height: 50px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  display: flex;
  gap: 15px;
  min-height: 20px;
}

.social-link {
  font-size: 1.5rem;
  color: var(--text-color);
  transition: color 0.3s;
}

.social-link:hover {
  color: var(--text-hover);
}

.header-heading h2 {
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  color: var(--text-color);
}

.nav-links {
  display: inline-flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: inline-block;
  padding: 0.3rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: transparent;
}

.nav-links li:hover {
  border: 1px solid var(--primary-color);
  background-color: var(--primary-hover);
}

.nav-links a {
  color: var(--text-color);
  padding: 0 0.5rem;
  font-size: 1rem;
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--text-hover);
  transition: 0.3s ease-in-out;
}

@media (max-width: 1200px) {
  .header-content {
    display: block;
  }

  .header-heading h2 {
    display: none;
  }

  .social-icons {
    display: none;
  }

  .logo-and-social {
    display: flex;
    justify-content: space-between;
  }

  .menu-toggle {
    font-size: 2rem;
    margin: 0 1rem;
    color: var(--text-hover);
  }

  .nav-links {
    display: block;
    margin: 1rem 0;
  }

  .nav-links li {
    display: block;
    margin-left: 0.5rem;
  }
}
</style>

