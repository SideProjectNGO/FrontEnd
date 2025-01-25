<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

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
];

const route = useRoute();
const router = useRouter();
const articleId = parseInt(route.params.id as string);

const article = articles.find((a) => a.article_id === articleId);

function goBack() {
  router.push("/articles");
}
</script>


<template>
  <div v-if="article" class="article-details">
    <h1>{{ article.title }}</h1>
    <img :src="article.main_photo_url" :alt="article.title" class="article-image" />
    <p><strong>Author:</strong> {{ article.author_name }} ({{ article.author_country }})</p>
    <p><strong>Date:</strong> {{ article.date }}</p>
    <p>{{ article.content }}</p>
    <div class="sub-photos">
      <h3>Additional Photos</h3>
      <img
          v-for="photo in article.sub_photo_urls"
          :key="photo"
          :src="photo"
          :alt="'Additional photo for ' + article.title"
          class="sub-photo"
      />
    </div>
    <button @click="goBack">Back to Articles</button>
  </div>
</template>

<style scoped>
.article-details {
  padding: 20px;
}
.article-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
}
.sub-photos {
  margin-top: 20px;
}
.sub-photo {
  width: 100px;
  height: 100px;
  margin: 5px;
  object-fit: cover;
}
</style>
