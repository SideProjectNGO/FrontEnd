<script setup lang="ts">
import {useRoute, } from "vue-router";
import {computed} from "vue";

interface Activity {
  activity_id: number;
  title: string;
  content: string;
  summary: string;
  author_id: number;
  date: string;
  author_name: string;
  author_country: string;
  main_photo: string;
  author_photo: string;
}

const activities: Activity[] = [
  {
    activity_id: 1,
    title: "The Impact of Early Childhood Education",
    content: `
      Early childhood education lays the foundation for lifelong learning and development. During these formative years, children develop essential cognitive, social, and emotional skills that influence their future success. Research shows that children who attend quality early education programs are more likely to perform well academically and socially.

      The importance of fostering creativity and curiosity cannot be overstated. Activities like activitytelling, play-based learning, and hands-on exploration help children build critical thinking and problem-solving skills. Moreover, these experiences boost their confidence and independence, shaping a positive attitude toward learning.

      Equitable access to early education remains a challenge in many regions. Economic barriers, lack of trained educators, and inadequate facilities can limit opportunities for children, especially in marginalized communities. Addressing these issues is key to ensuring that every child gets a strong start in life.
    `,
    summary: "Explores the importance of early childhood education and its role in shaping a child’s future success.",
    author_id: 101,
    date: "2025-01-15",
    author_name: "Jane Smith",
    author_country: "Canada",
    main_photo: "https://example.com/images/web-development-2025.jpg",
    author_photo: "https://example.com/images/web-development-2025.jpg",
  },
  {
    activity_id: 2,
    title: "The Role of Play in Child Development",
    content: `
      Play is a fundamental aspect of childhood that supports a child's physical, emotional, and cognitive development. Through play, children explore their environment, develop problem-solving skills, and learn to interact with others. It is a natural way for them to express their creativity and emotions.

      Physical play, such as running, climbing, or playing sports, enhances motor skills and overall health. Social play, like role-playing or group games, teaches children cooperation, empathy, and conflict resolution. Each type of play offers unique benefits, helping children grow holistically.

      Unfortunately, modern challenges such as screen addiction and lack of safe outdoor spaces have reduced opportunities for children to play. Parents and communities need to prioritize playtime to ensure that children can fully benefit from its developmental advantages.
    `,
    summary: "Highlights the critical role of play in fostering a child’s holistic growth and development.",
    author_id: 102,
    date: "2025-01-18",
    author_name: "Michael Lee",
    author_country: "Australia",
    main_photo: "https://example.com/images/web-development-2025.jpg",
    author_photo: "https://example.com/images/web-development-2025.jpg",
  },
  {
    activity_id: 3,
    title: "The Challenges of Childhood Nutrition",
    content: `
      Childhood nutrition is a cornerstone of healthy development, yet it remains a challenge in many parts of the world. Proper nutrition during the early years is essential for physical growth, brain development, and immune function. Malnutrition, whether from lack of food or poor dietary choices, can have long-lasting effects.

      Overnutrition and obesity are growing concerns in developed nations. Many children consume diets high in sugar, fat, and processed foods, leading to health issues like diabetes and heart problems. On the other hand, undernutrition is still a critical issue in many developing countries, where children suffer from stunted growth and poor health due to food insecurity.

      Educating parents and caregivers about balanced diets and healthy eating habits is vital. Schools can also play a significant role by providing nutritious meals and incorporating food education into their curricula. Addressing these challenges requires a collaborative effort from families, educators, and policymakers.
    `,
    summary: "Explores the importance of proper childhood nutrition and the challenges faced worldwide.",
    author_id: 103,
    date: "2025-01-20",
    author_name: "Sarah Khan",
    author_country: "India",
    main_photo: "https://example.com/images/web-development-2025.jpg",
    author_photo: "https://example.com/images/web-development-2025.jpg",
  },
];

const route = useRoute();
const activityId = parseInt(route.params.id as string);
const activity = computed(() => activities.find((a) => a.activity_id === activityId));

</script>

<template>
  <NavBar/>
  <transition name="fade">
    <div v-if="activity" class="activity-details">
      <div class="activity-details-container">
        <h1 class="activity-title">{{ activity.title }}</h1>

        <img src="~/public/images/children.jpg" :alt="activity.title" class="activity-image"/>

        <hr class="divider"/>

        <div class="author-info">
          <div class="author-photo">
            <img src="~/public/images/children.jpg" :alt="'Photo of ' + activity.author_name"/>
          </div>
          <div class="author-details">
            <p><strong>Author:</strong> {{ activity.author_name }} ({{ activity.author_country }})</p>
            <p><strong>Date:</strong> {{ activity.date }}</p>
          </div>
        </div>

        <hr class="divider"/>


        <div class="activity-content"> {{ activity.content }}</div>

      </div>
    </div>
  </transition>
  <Activities/>
  <Footer/>
</template>

<style scoped>
.activity-details-container {
  max-width: 1200px;
  margin: auto;
  animation: fade-in 0.8s ease-in-out;
}

.activity-details {
  padding: 20px;
}

.activity-title {
  font-weight: bold;
  font-size: 2rem;
  color: var(--primary-hover);
  text-align: center;
  margin-bottom: 20px;
}

.activity-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin: 30px 0;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.activity-image:hover {
  transform: scale(1.03);
}

.author-info {
  display: flex;
  gap: 50px;
  margin-bottom: 20px;
}

.divider {
  border: 2px solid var(--text-hover);
  margin: 20px 0;
}

.author-info .author-photo img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.activity-content {
  text-align: justify;;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>