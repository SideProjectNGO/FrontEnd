<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";

interface Article {
  article_id: number;
  title: string;
  content: string;
  summary: string;
  author_id: number;
  date: string;
  author_name: string;
  author_country: string;
  main_photo: string;
  sub_photo: string[];
  author_photo: string;
}

const articles: Article[] = [
  {
    article_id: 1,
    title: "The Impact of Early Childhood Education",
    content: `
      Early childhood education lays the foundation for lifelong learning and development. During these formative years, children develop essential cognitive, social, and emotional skills that influence their future success. Research shows that children who attend quality early education programs are more likely to perform well academically and socially.

      The importance of fostering creativity and curiosity cannot be overstated. Activities like storytelling, play-based learning, and hands-on exploration help children build critical thinking and problem-solving skills. Moreover, these experiences boost their confidence and independence, shaping a positive attitude toward learning.

      Equitable access to early education remains a challenge in many regions. Economic barriers, lack of trained educators, and inadequate facilities can limit opportunities for children, especially in marginalized communities. Addressing these issues is key to ensuring that every child gets a strong start in life.
    `,
    summary: "Explores the importance of early childhood education and its role in shaping a child’s future success.",
    author_id: 101,
    date: "2025-01-15",
    author_name: "Jane Smith",
    author_country: "Canada",
    main_photo: "https://example.com/images/web-development-2025.jpg",
    author_photo: "https://example.com/images/web-development-2025.jpg",
    sub_photo: [
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
    ],
  },
  {
    article_id: 2,
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
    sub_photo: [
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
    ],
  },
  {
    article_id: 3,
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
    sub_photo: [
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
      "~/public/images/children.jpg",
    ],
  },
];


const route = useRoute();
const router = useRouter();
const articleId = parseInt(route.params.id as string);
const article = computed(() => articles.find((a) => a.article_id === articleId));

function goBack() {
  router.push("/articles");
}
</script>

<template>
  <AdminNavBar/>
  <div class="admin-dashboard">
    <div class="admin-container">
      <div class="side-bar">
        <AdminSidebar/>
      </div>
      <div class="content-dashboard">
        <transition name="fade">
          <div v-if="article" class="article-details">
            <div class="article-details-container">
              <h1 class="article-title">{{ article.title }}</h1>

              <img src="~/public/images/children.jpg" :alt="article.title" class="article-image"/>

              <hr class="divider"/>

              <div class="author-info">
                <div class="author-photo">
                  <img src="~/public/images/children.jpg" :alt="'Photo of ' + article.author_name"/>
                </div>
                <div class="author-details">
                  <p><strong>Author:</strong> {{ article.author_name }} ({{ article.author_country }})</p>
                  <p><strong>Date:</strong> {{ article.date }}</p>
                </div>
              </div>

              <hr class="divider"/>


              <div class="article-content"> {{ article.content }}</div>

              <div class="sub-photos">
                <h3 class="title">Photos</h3>
                <div class="sub-photos-grid">
                  <img
                      v-for="photo in article.sub_photo"
                      :key="photo"
                      src="~/public/images/children.jpg"
                      :alt="'Additional photo for ' + article.title"
                      class="sub-photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<style scoped>

.admin-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
}

.admin-container .side-bar {
  height: 100%;
}

@media (max-width: 768px) {
  .admin-container {
    grid-template-columns: 1fr;
  }
}

.article-details-container {
  max-width: 1200px;
  margin: auto;
  animation: fade-in 0.8s ease-in-out;
}

.article-details {
  padding: 20px;
}

.article-title {
  font-weight: bold;
  font-size: 2rem;
  color: var(--primary-hover);
  text-align: center;
  margin-bottom: 20px;
}

.article-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin: 30px 0;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.article-image:hover {
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

.article-content {
  text-align: justify;;
}

.title {
  font-size: 1.8rem;
  color: var(--primary-hover);
  margin: 1rem auto;
}

.sub-photos {
  margin-top: 20px;
}

.sub-photos-grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 40px 0;
}

.sub-photo {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.sub-photo:hover {
  transform: scale(1.1);
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