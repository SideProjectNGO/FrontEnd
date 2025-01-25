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
    title: "The Importance of Web Development in 2025",
    content: "Web development is an ever-evolving field. In 2025, it's crucial for businesses to have an online presence that engages users and provides seamless experiences. This articles explores current trends and technologies in web development.",
    summary: "This articles discusses the significance of web development in 2025, focusing on emerging trends and technologies that are reshaping the digital landscape.",
    author_id: 101,
    date: "2022-06-12",
    author_name: "John Doe",
    author_country: "United States",
    main_photo_url: "https://example.com/images/web-development-2025.jpg",
    sub_photo_urls: [
      "https://example.com/images/technologies.jpg",
      "https://example.com/images/trends.jpg"
    ],
  },
  {
    article_id: 2,
    title: "The Importance of Web Development in 2025",
    content: "Web development is an ever-evolving field. In 2025, it's crucial for businesses to have an online presence that engages users and provides seamless experiences. This articles explores current trends and technologies in web development.",
    summary: "This articles discusses the significance of web development in 2025, focusing on emerging trends and technologies that are reshaping the digital landscape.",
    author_id: 101,
    date: "2022-06-12",
    author_name: "John Doe",
    author_country: "United States",
    main_photo_url: "https://example.com/images/web-development-2025.jpg",
    sub_photo_urls: [
      "https://example.com/images/technologies.jpg",
      "https://example.com/images/trends.jpg"
    ],
  },
  {
    article_id: 3,
    title: "The Importance of Web Development in 2025",
    content: "Web development is an ever-evolving field. In 2025, it's crucial for businesses to have an online presence that engages users and provides seamless experiences. This articles explores current trends and technologies in web development.",
    summary: "This articles discusses the significance of web development in 2025, focusing on emerging trends and technologies that are reshaping the digital landscape.",
    author_id: 101,
    date: "2022-06-12",
    author_name: "John Doe",
    author_country: "United States",
    main_photo_url: "https://example.com/images/web-development-2025.jpg",
    sub_photo_urls: [
      "https://example.com/images/technologies.jpg",
      "https://example.com/images/trends.jpg"
    ],
  },
  {
    article_id: 1,
    title: "The Importance of Web Development in 2025",
    content: "Web development is an ever-evolving field. In 2025, it's crucial for businesses to have an online presence that engages users and provides seamless experiences. This articles explores current trends and technologies in web development.",
    summary: "This articles discusses the significance of web development in 2025, focusing on emerging trends and technologies that are reshaping the digital landscape.",
    author_id: 101,
    date: "2022-06-12",
    author_name: "John Doe",
    author_country: "United States",
    main_photo_url: "https://example.com/images/web-development-2025.jpg",
    sub_photo_urls: [
      "https://example.com/images/technologies.jpg",
      "https://example.com/images/trends.jpg"
    ],
  },
  {
    article_id: 3,
    title: "The Importance of Web Development in 2025",
    content: "Web development is an ever-evolving field. In 2025, it's crucial for businesses to have an online presence that engages users and provides seamless experiences. This articles explores current trends and technologies in web development.",
    summary: "This articles discusses the significance of web development in 2025, focusing on emerging trends and technologies that are reshaping the digital landscape.",
    author_id: 101,
    date: "2022-06-12",
    author_name: "John Doe",
    author_country: "United States",
    main_photo_url: "https://example.com/images/web-development-2025.jpg",
    sub_photo_urls: [
      "https://example.com/images/technologies.jpg",
      "https://example.com/images/trends.jpg"
    ],
  },
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
  <div class="articles-container">
    <div class="container">
      <div class="article-cards" v-for="(article, index) in visibleArticles" :key="article.article_id">
        <div class="card">
          <div class="article-header">
            <h4 class="article-date">{{ article.date }}</h4>
            <button @click="viewArticle(article.article_id)">Learn More</button>
          </div>
          <div class="article-main-photo">
            <img src="../public/images/logo.webp" alt="Article Image" class="article-image"/>
          </div>
          <div class="article-body">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-summary">{{ article.summary }}</p>
            <div class="author-details">
              <h2>{{ article.author_name }}</h2>
              <h2>{{ article.author_country }}</h2>
            </div>
          </div>
          <div class="article-footer">
            <div class="social-links">
              <a href="" target="_blank" class="social-icon">
                <UIcon name="mdi-facebook" size="24"/>
              </a>
              <a href="" target="_blank" class="social-icon">
                <UIcon name="mdi-whatsapp" size="24"/>
              </a>
              <a href="" target="_blank" class="social-icon">
                <UIcon name="mdi-instagram" size="24"/>
              </a>
              <a href="" target="_blank" class="social-icon">
                <UIcon name="mdi-youtube" size="24"/>
              </a>
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
</template>

<style scoped>
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

.article-main-photo {
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

.article-body {
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

.author-details {
  display: flex;
  justify-content: space-between;
  color: var(--black-text-hover);
}

.article-footer {
  display: inline-flex;
  padding: 10px;
  justify-content: center;
}

.social-links {
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

</style>

