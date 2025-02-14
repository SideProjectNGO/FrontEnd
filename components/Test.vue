
<script lang="ts">
interface Step {
  step: number;
  content: string;
  icon: string;
}

const steps: Step[] = [
  {
    step: 1,
    content: "Fill out the volunteer form with your details and interests.",
    icon: "form",
  },
  {
    step: 2,
    content: "Our team will review your application within 3 days.",
    icon: "clock",
  },
  {
    step: 3,
    content: "If accepted, you will receive a confirmation email.",
    icon: "mail",
  },
  {
    step: 4,
    content: "Start volunteering and contribute to our mission!",
    icon: "hands-helping",
  },
  {
    step: 5,
    content: "Stay connected with our volunteer community.",
    icon: "users",
  },
];

</script>

<template>
  <section class="volunteer">
    <div class="container">
      <h2>How to Be a Volunteer with Us</h2>
      <ul>
        <li v-for="step in steps" :key="step.step">
          <UIcon
              :name="step.icon"
              class="volunteer-icon"
          />
          {{ step.content }}
        </li>
      </ul>
    </div>
  </section>
</template>


<style scoped>
.volunteer {
  width: 100%;
  background-color: var(--background);
  max-width: 1200px;
  margin: 5rem auto;
}

.volunteer .container {
  padding: 0 1rem;
}

.volunteer h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--primary-hover);
}

.volunteer ul {
  list-style: none;
  padding: 0;
}

.volunteer li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: var(--primary-hover);
}

.volunteer-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .volunteer .container {
    padding: 0 0.5rem;
  }

  .volunteer li {
    font-size: 1rem;
  }
}
</style>