<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";

interface Article {
  article_id: number;
  title: string;
  content: string;
  summary: string;
  author_id: number;
  date: string;
  author_name: string;
  author_country: string;
  main_photo: File | string; // Accepts both File and string
  sub_photo: (File | string)[]; // Accepts an array of File or string
  author_photo: File | string; // Accepts both File and string
}

const articles: Article[] = [
  {
    article_id: 1,
    title: "The Impact of Early Childhood Education",
    content: `
      Early childhood education lays the foundation for lifelong learning and development...
    `,
    summary: "Explores the importance of early childhood education and its role in shaping a child’s future success.",
    author_id: 101,
    date: "2025-01-15",
    author_name: "Jane Smith",
    author_country: "Canada",
    main_photo: null,
    author_photo: null,
    sub_photo: [],
  },
];

const route = useRoute();
const router = useRouter();
const articleId = parseInt(route.params.id as string);

const article = computed(() => articles.find((a) => a.article_id === articleId));

const editedArticle = ref({ ...article.value });

const updateArticle = () => {
  const index = articles.findIndex((a) => a.article_id === articleId);
  if (index !== -1) {
    // Process main photo and author photo files
    if (editedArticle.value.main_photo instanceof File) {
      editedArticle.value.main_photo = URL.createObjectURL(editedArticle.value.main_photo);
    }
    if (editedArticle.value.author_photo instanceof File) {
      editedArticle.value.author_photo = URL.createObjectURL(editedArticle.value.author_photo);
    }
    // Process sub-photos
    editedArticle.value.sub_photo = editedArticle.value.sub_photo.filter(file => file instanceof File);

    articles[index] = { ...editedArticle.value };
    router.push(`/articles/admin/${articleId}`);
  }
};

const deleteArticle = () => {
  const index = articles.findIndex((a) => a.article_id === articleId);
  if (index !== -1) {
    articles.splice(index, 1);
    router.push('/articles/admin');
  }
};
</script>

<template>
  <div class="admin-dashboard">
    <div class="admin-container">
      <div class="side-bar">
        <AdminSidebar />
      </div>
      <div class="article-details">
        <div>
          <h1>{{ article?.title }}</h1>
          <p>{{ article?.content }}</p>
          <form @submit.prevent="updateArticle" class="article-form">
            <div v-for="(value, key) in editedArticle" :key="key" class="form-group">
              <label :for="key" class="form-label">{{ key.charAt(0).toUpperCase() + key.slice(1) }}:</label>

              <input
                  v-if="key === 'main_photo' || key === 'author_photo'"
                  @change="event => editedArticle[key] = event.target.files[0]"
                  :type="'file'"
                  :id="key"
                  class="form-input"
              />
              <input
                  v-if="key === 'sub_photo'"
                  @change="event => editedArticle[key] = Array.from(event.target.files)"
                  :type="'file'"
                  multiple
                  :id="key"
                  class="form-input"
              />
              <input
                  v-if="key !== 'content' && key !== 'main_photo' && key !== 'sub_photo' && key !== 'author_photo'"
                  v-model="editedArticle[key]"
                  :type="'text'"
                  :id="key"
                  class="form-input"
              />
              <textarea
                  v-if="key === 'content'"
                  v-model="editedArticle[key]"
                  :id="key"
                  class="form-textarea"
              ></textarea>
            </div>
            <button type="submit" class="submit-button">Save Article</button>
          </form>

          <button @click="deleteArticle" style="background-color: red;">Delete Article</button>
        </div>
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

.article-details {
  width: 95%;
  margin: 1rem auto;
}

.article-form {
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #4CAF50;
  outline: none;
}

.form-textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #45a049;
}

button[style="background-color: red;"] {
  background-color: red;
}

button[style="background-color: red;"]:hover {
  background-color: darkred;
}
</style>


<style scoped>
.admin-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
}

.admin-container .side-bar {
  height: 100%;
}

.article-details {
  width: 95%;
  margin: 1rem auto;
}

.article-form {
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #4CAF50;
  outline: none;
}

.form-textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #45a049;
}

button[style="background-color: red;"] {
  background-color: red;
}

button[style="background-color: red;"]:hover {
  background-color: darkred;
}
</style>
