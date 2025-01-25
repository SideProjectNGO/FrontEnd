<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";

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
  author_photo: string;
}

const articles: Article[] = [
  {
    article_id: 1,
    title: "The Importance of Web Development in 2025",
    content: "Web development is an ever-evolving field. In 2025, it's crucial for businesses to have an online presence that engages users and provides seamless experiences. This article explores current trends and technologies in web development.",
    summary: "This article discusses the significance of web development in 2025, focusing on emerging trends and technologies that are reshaping the digital landscape.",
    author_id: 101,
    date: "2022-06-12",
    author_name: "John Doe",
    author_country: "United States",
    main_photo_url: "https://example.com/images/web-development-2025.jpg",
    author_photo: "https://example.com/images/web-development-2025.jpg",
    sub_photo_urls: [
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
  <NavBar />
  <transition name="fade">
    <div v-if="article" class="article-details">
      <div class="article-details-container">
        <h1 class="article-title">{{ article.title }}</h1>

        <img src="~/public/images/children.jpg" :alt="article.title" class="article-image" />

        <hr class="divider" />

        <div class="author-info">
          <div class="author-photo">
            <img src="~/public/images/children.jpg" :alt="'Photo of ' + article.author_name" />
          </div>
          <div class="author-details">
            <p><strong>Author:</strong> {{ article.author_name }} ({{ article.author_country }})</p>
            <p><strong>Date:</strong> {{ article.date }}</p>
          </div>
        </div>

        <hr class="divider" />


        <p>{{ article.content }}</p>

        <div class="sub-photos">
          <h3 class="title">Photos</h3>
          <div class="sub-photos-grid">
            <img
                v-for="photo in article.sub_photo_urls"
                :key="photo"
                src="~/public/images/children.jpg"
                :alt="'Additional photo for ' + article.title"
                class="sub-photo"
            />
          </div>
        </div>

        <button class="back-btn" @click="goBack">Back to Articles</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
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
  gap: 20px;
  margin-bottom: 20px;
}

.divider{
  border: 2px solid var(--text-hover);
  margin: 20px 0;
}

.author-info .author-photo img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

.back-btn {
  padding: 10px 20px;
  border: 2px solid var(--primary-hover);
  border-radius: 15px;
  background-color: var(--background);
  color: var(--primary-hover);
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.back-btn:hover {
  background-color: var(--primary-hover);
  color: white;
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
