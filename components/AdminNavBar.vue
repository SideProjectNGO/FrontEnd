<script setup>
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';

const isLinksVisible = ref(false);
const isMobile = ref(false);
const router = useRouter();

function toggleLinksVisibility() {
  isLinksVisible.value = !isLinksVisible.value;
}

function logout() {
  useCookie('token').value = null;
  router.push('/login');
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
      <div class="logo-section">
        <div class="logo-wrapper">
          <a href="">
            <img src="/images/logo.webp" alt="Logo" />
          </a>
        </div>
        <button v-if="isMobile" @click="toggleLinksVisibility" class="menu-toggle">
          <UIcon name="uil-bars" />
        </button>
      </div>

      <nav v-if="isLinksVisible || !isMobile" class="navigation">
        <ul class="nav-links">
          <li>
            <router-link to="/">Setting</router-link>
          </li>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <button @click="logout">Logout</button>
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
  max-height: 500px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.logo-wrapper img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
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

.nav-links a,
.nav-links button {
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

  .logo-section {
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

