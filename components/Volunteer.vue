<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

interface Step {
  step: number;
  content: string;
  icon: string;
}

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const steps: Step[] = [
      {
        step: 1,
        content: t("volunteer.steps[0]"),
        icon: "mdi-form",
      },
      {
        step: 2,
        content: t("volunteer.steps[1]"),
        icon: "mdi-clock",
      },
      {
        step: 3,
        content: t("volunteer.steps[2]"),
        icon: "mdi-mail",
      },
      {
        step: 4,
        content: t("volunteer.steps[3]"),
        icon: "mdi-users",
      },
      {
        step: 5,
        content: t("volunteer.steps[4]"),
        icon: "mdi-users",
      },
    ];

    return {
      steps,
      t,
    };
  },
});
</script>

<template>
  <section class="volunteer">
    <h2 class="volunteer-title">{{ t("volunteer.volunteer_title") }}</h2>
    <div class="container">
      <div class="steps-volunteer-container">
        <ul class="volunteer-list">
          <li v-for="(step, index) in steps" :key="index">
            <UIcon :name="step.icon" class="volunteer-icon" />
            {{ step.content }}
          </li>
        </ul>
      </div>
      <div class="image-volunteer-container">
        <img src="../public/images/volunteer-image.png" alt="volunteer-image" class="volunteer-image">
      </div>
    </div>
  </section>
</template>

<style scoped>
.volunteer {
  width: 100%;
  background-color: var(--background);
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 1rem;
}

.volunteer .container {
  display: grid;
  grid-template-columns:2fr 1fr;
  gap: 2rem;
}

.volunteer h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  padding-top: 2rem;
  color: var(--primary-hover);
}

.volunteer .volunteer-list {
  list-style: none;
  padding: 2rem 0;
  margin: 0;
}

.volunteer li {
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--primary-hover);
}

.volunteer-icon {
  color: var(--primary-hover);
  margin-right: 1rem;
}

.volunteer-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 auto ;
}

@media (max-width: 768px) {
  .volunteer .container {
    display: block;
  }
}

@media (max-width: 768px) {
  .volunteer .container {
    padding: 0 0.5rem;
  }

  .volunteer li {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .volunteer .container {
    display: block;
  }
  .volunteer h2 {
    font-size: 1.5rem;
  }

  .volunteer li {
    font-size: 0.9rem;
  }
}
</style>