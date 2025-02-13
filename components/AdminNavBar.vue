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
  <div class="header-bar">
    <div class="header-inner">
      <div class="logo-area">
        <div class="logo-container">
          <a href="">
            <img src="/images/logo%20mychild.png" alt="MyChild_Logo" />
          </a>
        </div>
        <button v-if="isMobile" @click="toggleLinksVisibility" class="menu-button">
          <UIcon name="uil-bars" />
        </button>
      </div>

      <nav v-if="isLinksVisible || !isMobile" class="nav-bar">
        <ul class="nav-items">
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
.header-bar {
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  max-height: 500px;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.logo-container img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.nav-items {
  display: inline-flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-items li {
  display: inline-block;
  padding: 0.3rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: transparent;
}

.nav-items li:hover {
  border: 1px solid var(--primary-color);
  background-color: var(--primary-hover);
}

.nav-items a,
.nav-items button {
  color: var(--text-color);
  padding: 0 0.5rem;
  font-size: 1rem;
  text-decoration: none;
}

.nav-items a:hover {
  color: var(--text-hover);
  transition: 0.3s ease-in-out;
}

@media (max-width: 1200px) {
  .header-inner {
    display: block;
  }

  .logo-area {
    display: flex;
    justify-content: space-between;
  }

  .menu-button {
    font-size: 2rem;
    margin: 0 1rem;
    color: var(--text-hover);
  }

  .nav-items {
    display: block;
    margin: 1rem 0;
  }

  .nav-items li {
    display: block;
    margin-left: 0.5rem;
  }
}
</style>


