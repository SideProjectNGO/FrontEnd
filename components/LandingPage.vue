<script lang="ts">
</script>

<template>
  <div class="landing-section">
    <div class="content-wrapper">
      <div class="image-container">
        <img src="../public/images/child.jpeg" alt="landing-image" class="landing-image"/>
      </div>
      <div class="text-container">
        <h2 class="headline">Every Child is My Child</h2>
        <p class="subtext">
          Millions of children around the world face devastating losses and an uncertain future due to escalating armed
          conflicts, inequalities, and the impact of climate change on their lives and health.
        </p>
        <router-link to="/about" class="cta-link">MORE ABOUT MYCHILD</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-section {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #f5f5f5, #809D3C, #5D8736);
  opacity: 0;
  animation: fadeIn 2s forwards;
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
  animation: slideIn 1.5s ease-in-out 0.5s forwards;
}

.landing-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 50% 50% 0 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  animation: fadeInDetails 2s ease-in-out 1s forwards;
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
  background: var(--text-color);
  border-radius: 8px;
  width: fit-content;
  margin: auto;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
  opacity: 0;
  animation: fadeInButton 2s ease-in-out 1.5s forwards;
}

.cta-link:hover {
  background: var(--background);
  transition: background 0.3s ease;
}

@media screen and (max-width: 1200px) {
  .landing-section {
    min-height: 100vh;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .landing-image {
    max-width: 70%;
    height: auto;
  }

  .headline {
    font-size: 2rem;
  }

  .subtext {
    font-size: 0.9rem;
  }

  .cta-link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 768px) {
  .landing-section {
    min-height: 100vh;
  }

  .landing-image {
    max-width: 200px;
    height: auto;
  }

  .headline {
    font-size: 1.7rem;
    text-align: center;
  }

  .subtext {
    font-size: 1rem;
    text-align: center;
  }

  .cta-link {
    width: 100%;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .landing-image {
    max-width: 180px;
    height: auto;
  }

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
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInDetails {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInButton {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

