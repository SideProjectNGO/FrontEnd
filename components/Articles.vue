<script setup lang="ts">
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
  sub_photo_urls: string[];
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
    main_photo_url: "https://example.com/images/early-education.jpg",
    sub_photo_urls: [
      "https://example.com/images/kindergarten.jpg",
      "https://example.com/images/learning-tools.jpg",
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
    main_photo_url: "https://example.com/images/children-playing.jpg",
    sub_photo_urls: [
      "https://example.com/images/outdoor-play.jpg",
      "https://example.com/images/group-games.jpg",
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
    main_photo_url: "https://example.com/images/child-nutrition.jpg",
    sub_photo_urls: [
      "https://example.com/images/healthy-meals.jpg",
      "https://example.com/images/growth-chart.jpg",
    ],
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
  useRouter().push(`/articles/${id}`);
}

console.log(articles);

</script>


<template>
  <div class="articles-section">
    <h2 class="section-title">Articles Around the World</h2>
    <div class="articles-wrapper">
      <div class="article-card" v-for="(article, index) in visibleArticles" :key="article.article_id">
        <div class="article-content">
          <div class="article-header">
            <h4 class="article-date">{{ article.date }}</h4>
            <button @click="viewArticle(article.article_id)" class="learn-more-btn">Learn More</button>
          </div>
          <div class="article-image-container">
            <img src="../public/images/logo.webp" alt="Article Image" class="article-image" />
          </div>
          <div class="article-details">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-summary">{{ article.summary }}</p>
            <div class="author-info">
              <h2>{{ article.author_name }}</h2>
              <h2>{{ article.author_country }}</h2>
            </div>
          </div>
          <div class="article-footer">
            <div class="social-icons">
              <a href="" target="_blank" class="social-icon">
                <UIcon name="mdi-facebook" size="24" />
              </a>
              <a href="" target="_blank" class="social-icon">
                <UIcon name="mdi-whatsapp" size="24" />
              </a>
              <a href="" target="_blank" class="social-icon">
                <UIcon name="mdi-instagram" size="24" />
              </a>
              <a href="" target="_blank" class="social-icon">
                <UIcon name="mdi-youtube" size="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-container">
      <div class="pagination-btns">
        <button @click="prevPage" class="pagination-btn">
          Previous
        </button>
        <button @click="nextPage" class="pagination-btn">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.articles-section {
  display: block;
  padding: 20px;
}

.section-title {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: var(--primary-color);
}

.articles-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: 1rem auto;
}

.article-card {
  width: 350px;
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

.learn-more-btn {
  border: 2px solid var(--border-color);
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 15px;
}

.article-date {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--black-text-hover);
  margin: 10px 0;
}

.article-image-container {
  width: 100%;
  height: 200px;
  min-height: 200px;
  border: 2px solid var(--primary-hover);
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
}

.article-details {
  padding: 15px;
}

.article-title {
  font-weight: 600;
  font-size: 1rem;
  color: var(--primary-hover);
  min-height: 50px;
}

.article-summary {
  text-align: justify;
  margin: 15px 0;
  color: var(--black-text-hover);
  min-height: 120px;
}

.author-info {
  display: flex;
  justify-content: space-between;
  color: var(--black-text-hover);
}

.article-footer {
  display: inline-flex;
  padding: 10px;
  justify-content: center;
}

.social-icons {
  display: flex;
  gap: 15px;
  min-height: 20px;
}

.social-icon {
  font-size: 1.5rem;
  color: var(--primary-hover);
  transition: color 0.3s;
}

.social-icon:hover {
  color: var(--primary-hover);
}

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
}

.pagination-btns {
  display: flex;
  gap: 20px;
}

.pagination-btn {
  padding: 10px;
  border: 2px solid var(--primary-hover);
  min-width: 120px;
}

.pagination-btn:hover {
  background: var(--primary-hover);
  color: var(--text-hover);
  transition: background-color 0.3s ease-in-out;
}
</style>


