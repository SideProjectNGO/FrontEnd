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
  <div class="admin-dashboard">
    <div class="admin-container">
      <div class="side-bar">
        <AdminSidebar/>
      </div>
      <div class="content-dashboard">
        <!-- Your content here -->
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

.admin-container .content-dashboard {
}

@media (max-width: 768px) {
  .admin-container {
    grid-template-columns: 1fr;
  }
}
</style>
