<script setup lang="ts">
import {ref,} from 'vue';
import AdminSidebar from '~/components/AdminSidebar.vue';

definePageMeta({
  middleware: 'auth',
});

interface Article {
  article_id: number;
  title: string;
  content: string;
  summary: string;
  author_id: number;
  date: string;
  author_name: string;
  author_country: string;
  main_photo_url: string;
}

const articles: Article[] = [
  {
    article_id: 1,
    title: "The Impact of Early Childhood Education",
    content: `
      Early childhood education lays the foundation for lifelong learning and development. During these formative years, children develop essential cognitive, social, and emotional skills that influence their future success. Research shows that children who attend quality early education programs are more likely to perform well academically and socially.

      The importance of fostering creativity and curiosity cannot be overstated. Activities like articletelling, play-based learning, and hands-on exploration help children build critical thinking and problem-solving skills. Moreover, these experiences boost their confidence and independence, shaping a positive attitude toward learning.

      Equitable access to early education remains a challenge in many regions. Economic barriers, lack of trained educators, and inadequate facilities can limit opportunities for children, especially in marginalized communities. Addressing these issues is key to ensuring that every child gets a strong start in life.
    `,
    summary: "Explores the importance of early childhood education and its role in shaping a child’s future success.",
    author_id: 101,
    date: "2025-01-15",
    author_name: "Jane Smith",
    author_country: "Canada",
    main_photo_url: "https://example.com/images/early-education.jpg",
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
    main_photo_url: "https://example.com/images/children-playing.jpg",
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
    main_photo_url: "https://example.com/images/child-nutrition.jpg",
  }
];

const currentIndex = ref(0);
const itemsPerPage = 3;

const visibleArticles = computed(() =>
    articles.slice(currentIndex.value, currentIndex.value + itemsPerPage)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % articles.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + articles.length) % articles.length;
}


function viewArticle(id: number) {
  useRouter().push(`/articles/admin/${id}`);
}

console.log(articles);
</script>

<template>
  <div class="admin-dashboard">
    <div class="admin-container">
      <div class="side-bar">
        <AdminSidebar/>
      </div>
      <div class="admin-content-dashboard">
        <h2 class="title">Management Articles</h2>
        <div class="articles-container">
          <div class="container">
            <div class="article-cards" v-for="(article, index) in visibleArticles" :key="article.article_id">
              <div class="card">
                <div class="article-header">
                  <h4 class="article-date">{{ article.date }}</h4>
                </div>
                <div class="article-body">
                  <h3 class="article-title" @click="viewArticle(article.article_id)">{{ article.title }}</h3>
                  <div class="author-details">
                    <h2>{{ article.author_name }}</h2>
                    <h2>{{ article.author_country }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="btn-container">
              <button @click="prevPage">
                Previous
              </button>

              <button @click="nextPage">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 20px;
}

.admin-content-dashboard {
  padding: 20px;
  border-radius: 10px;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
}

.articles-container {
  display: block;
  padding: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: 5rem auto;
}

.article-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card {
  width: 260px;
  border: 2px solid var(--border-color);
  overflow: hidden;
  background-color: var(--background);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: rgba(149, 157, 165, 0.4) 0 8px 24px;
}

.article-header {
  display: flex;
  justify-content: space-between;
  min-height: 60px;
}

.article-header button {
  border: 2px solid var(--border-color);
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 15px;
}

.card .article-header .article-date {
  font-weight: 600;
  font-size: .9rem;
  color: var(--black-text-hover);
  margin: 10px 0;
}

.article-body {
  padding: 15px;
}

.article-title {
  font-weight: 600;
  font-size: 1rem;
  color: var(--primary-hover);
  min-height: 50px;
}

.author-details {
  display: flex;
  justify-content: space-between;
  color: var(--black-text-hover);
}

.container .btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
}

.container .btn-container button {
  margin-right: 50px;
  padding: 10px;
  border: 2px solid var(--primary-hover);
  min-width: 120px;
}

.container .btn-container button:hover {
  background: var(--primary-hover);
  color: var(--text-hover);
  transition: background-color 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .admin-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .admin-container {
    grid-template-columns: 1fr;
  }

}
</style>

