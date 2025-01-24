<script setup lang="ts">

const articles = [
  {
    article_id: 1,
    title: "The Importance of Web Development in 2025",
    content: "Web development is an ever-evolving field. In 2025, it's crucial for businesses to have an online presence that engages users and provides seamless experiences. This article explores current trends and technologies in web development.",
    summary: "This article discusses the significance of web development in 2025, focusing on emerging trends and technologies that are reshaping the digital landscape.",
    author_id: 101,
    author_name: "John Doe",
    author_bio: "John Doe is a seasoned web developer with over 10 years of experience in building dynamic and responsive websites. He specializes in JavaScript, HTML5, and CSS3.",
    main_photo_url: "~/public/images/logo.webp",
    sub_photo_urls: [
      "https://example.com/images/technologies.jpg",
      "https://example.com/images/trends.jpg"
    ],
    publication_date: "2025-01-20T14:00:00Z",
    social_share_links: {
      facebook: "https://facebook.com/share?url=https://example.com/articles/1",
      whatsapp: "https://api.whatsapp.com/send?text=https://example.com/articles/1",
      instagram: "https://instagram.com/share?url=https://example.com/articles/1",
      youtube: "https://youtube.com/share?url=https://example.com/articles/1"
    }
  },
  {
    article_id: 2,
    title: "AI in Education: Shaping the Future",
    content: "Artificial Intelligence is revolutionizing education by providing personalized learning experiences and improving student engagement. This article examines the role of AI in modern education systems.",
    summary: "The article explores how AI is transforming education, providing personalized learning experiences and enhancing student engagement across classrooms.",
    author_id: 102,
    author_name: "Jane Smith",
    author_bio: "Jane Smith is an AI researcher and educator with a passion for integrating technology into classrooms. She works at the intersection of AI and pedagogy to enhance learning experiences.",
    main_photo_url: "https://example.com/images/ai-education.jpg",
    sub_photo_urls: [
      "https://example.com/images/classroom-ai.jpg",
      "https://example.com/images/ai-tools.jpg"
    ],
    publication_date: "2025-01-22T10:30:00Z",
    social_share_links: {
      facebook: "https://facebook.com/share?url=https://example.com/articles/2",
      whatsapp: "https://api.whatsapp.com/send?text=https://example.com/articles/2",
      instagram: "https://instagram.com/share?url=https://example.com/articles/2",
      youtube: "https://youtube.com/share?url=https://example.com/articles/2"
    }
  },
  {
    article_id: 3,
    title: "Sustainable Living: Tips for a Greener Future",
    content: "Sustainability is more important than ever as we face climate change and environmental degradation. This article offers practical tips for adopting a more sustainable lifestyle and reducing your carbon footprint.",
    summary: "This article provides actionable tips for living a more sustainable life and reducing your environmental impact, especially in the face of climate change.",
    author_id: 103,
    author_name: "Michael Green",
    author_bio: "Michael Green is an environmental activist and writer dedicated to promoting sustainable living practices. He has written extensively on eco-friendly habits and their global impact.",
    main_photo_url: "https://example.com/images/sustainable-living.jpg",
    sub_photo_urls: [
      "https://example.com/images/green-energy.jpg",
      "https://example.com/images/recycling-tips.jpg"
    ],
    publication_date: "2025-01-23T08:00:00Z",
    social_share_links: {
      facebook: "https://facebook.com/share?url=https://example.com/articles/3",
      whatsapp: "https://api.whatsapp.com/send?text=https://example.com/articles/3",
      instagram: "https://instagram.com/share?url=https://example.com/articles/3",
      youtube: "https://youtube.com/share?url=https://example.com/articles/3"
    }
  }
];

console.log(articles);
</script>

<template>
  <div class="articles-container">
    <div class="container">
      <div class="article-cards" v-for="(article, index) in articles" :key="index">
        <div class="card">
          <div class="article-header">
            <img src="../public/images/logo.webp" alt="Article Image" class="article-image"/>
          </div>
          <div class="article-body">
            <h3>{{ article.title }}</h3>
            <p>{{ article.summary }}</p>
          </div>
          <div class="article-footer">
            <div class="social-links">
              <a :href="article.social_share_links.facebook" target="_blank" class="social-icon">
                <UIcon name="facebook" size="24"/>
              </a>
              <a :href="article.social_share_links.whatsapp" target="_blank" class="social-icon">
                <UIcon name="whatsapp" size="24"/>
              </a>
              <a :href="article.social_share_links.instagram" target="_blank" class="social-icon">
                <UIcon name="instagram" size="24"/>
              </a>
              <a :href="article.social_share_links.youtube" target="_blank" class="social-icon">
                <UIcon name="youtube" size="24"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.articles-container {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.article-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card {
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.article-header {
  width: 100%;
  height: 200px;
}

.article-image {
  width: 100%;
  max-width: 300px;
  height: 100%;
  margin: 20px auto;
  object-fit: cover;
}

.article-body {
  padding: 15px;
}

.article-footer {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-icon {
  font-size: 1.5rem;
  color: #555;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #007bff;
}
</style>
