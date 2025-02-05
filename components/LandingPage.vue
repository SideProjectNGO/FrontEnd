<script lang="ts" setup>
import {useI18n} from "#imports";

const {t} = useI18n();
</script>

<template>
  <div class="landing-section">
    <div class="content-wrapper">
      <div class="text-container">
        <h2 class="headline">{{ t("landing.headline") }}</h2>
        <p class="subtext">{{ t("landing.description") }}</p>
        <NuxtLink to="/about" class="cta-link">{{ t("landing.more_about") }}</NuxtLink>
      </div>
      <div class="image-container">
        <img src="/images/landing-image-1.jpeg" alt="landing-image" class="landing-image"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-section {
  height: 81vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #003366 30%, #004983 60%, #00aeef);
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: slideIn 1.2s ease-out forwards;
}

.landing-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
}

.headline {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.subtext {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.cta-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--primary-color);
  background: var(--background);
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
  opacity: 0;
  animation: fadeIn 1.8s ease-in-out forwards;
}

.cta-link:hover {
  background: var(--primary-hover);
  transition: background 0.3s ease;
}


@media (max-width: 1200px) {
  .landing-section {
    min-height: 100vh;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .landing-image {
    max-width: 80%;
  }

  .headline {
    font-size: 2rem;
  }

  .subtext {
    font-size: 0.9rem;
  }

  .cta-link {
    padding: 0.6rem 1.2rem;
  }
}

@media (max-width: 768px) {
  .landing-image {
    max-width: 100%;
    height: auto;
  }

  .headline {
    font-size: 1.8rem;
  }

  .subtext {
    font-size: 1rem;
  }

  .cta-link {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .headline {
    font-size: 1.5rem;
  }

  .subtext {
    font-size: 0.9rem;
  }

  .cta-link {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
