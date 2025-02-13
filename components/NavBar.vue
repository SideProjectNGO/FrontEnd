<script setup>
import {ref, onMounted} from "vue";
import {useI18n} from "#imports";

const {t} = useI18n();
const isLinksVisible = ref(false);
const isMobile = ref(false);

function toggleLinksVisibility() {
  isLinksVisible.value = !isLinksVisible.value;
  console.log("Links visibility toggled:", isLinksVisible.value);
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 1200;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 1200;
  });
});
</script>

<template>
  <div class="header">
    <div class="header-content">
      <div class="logo-and-social">
        <div class="social-icons">
          <div class="logo-box">
            <a href="" target="_blank" class="social-link">
              <img src="../public/images/MyChild%20logo.png" alt="logo" class="logo">
            </a>
          </div>
        </div>
        <button v-if="isMobile" @click="toggleLinksVisibility" class="menu-toggle">
          <UIcon name="uil-bars"/>
        </button>
      </div>

      <div class="header-heading">
        <h2>{{ t("header.tagline") }}</h2>
      </div>

      <nav v-if="isLinksVisible || !isMobile" class="nav-menu">
        <ul class="nav-links">
          <li>
            <NuxtLink to="/home">{{ t("header.nav.home") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">{{ t("header.nav.about") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/articles">{{ t("header.nav.articles") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/activities">{{ t("header.nav.activities") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/stories">{{ t("header.nav.stories") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/volunteer-form">{{ t("header.nav.volunteer") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/donate">{{ t("header.nav.donate") }}</NuxtLink>
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

.logo-box {
  display: block;
  gap: 15px;
  min-height: 20px;
}

.logo-box .logo {
  width: 50px;
  height: 40px;
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
  margin-right: 0.2rem;
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

  .logo-box {
    display: block;
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

