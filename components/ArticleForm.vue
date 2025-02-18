<script setup lang="ts">
import {ref, watch,} from "vue";
import {z} from "zod";

type ArticleQuestionsField = {
  icon: string;
  label: string;
  type: string;
  placeholder: string;
  id: keyof typeof formSchema.shape;
  options?: { value: string; label: string }[];
};
const formSchema = z.object({
  title_en: z.string().min(5, "Title is required"),
  content_en: z.string().min(50, "Content is required"),
  summary_en: z.string().min(50, "Summary is required"),
  title_ms: z.string().min(5, "Tajuk diperlukan"),
  content_ms: z.string().min(50, "Kandungan diperlukan"),
  summary_ms: z.string().min(50, "Ringkasan diperlukan"),
  author_name: z.string().min(5, "Author Name is required"),
  author_country: z.string().min(5, "Author Country is required"),
  main_photo: z.instanceof(File).refine((file) => /\.(png|jpe?g)$/i.test(file.name), "Main photo must be PNG or JPG"),
  sub_photo: z.array(z.instanceof(File).refine((file) => /\.(png|jpe?g)$/i.test(file.name), "Sub photos must be PNG or JPG")),
  author_photo: z.instanceof(File).refine((file) => /\.(png|jpe?g)$/i.test(file.name), "Author photo must be PNG or JPG")
});
const articleQuestions: ArticleQuestionsField[] = [
  {
    id: "title_en",
    label: "Title (English)",
    type: "text",
    placeholder: "Enter the article title in English",
    icon: "mdi-book-open"
  },
  {
    id: "content_en",
    label: "Content (English)",
    type: "textarea",
    placeholder: "Enter the article content in English",
    icon: "mdi-file-document"
  },
  {
    id: "summary_en",
    label: "Summary (English)",
    type: "text",
    placeholder: "Enter a short summary in English",
    icon: "mdi-note-outline"
  },
  {
    id: "title_ms",
    label: "Tajuk (Bahasa Melayu)",
    type: "text",
    placeholder: "Masukkan tajuk artikel dalam Bahasa Melayu",
    icon: "mdi-book-open"
  },
  {
    id: "content_ms",
    label: "Kandungan (Bahasa Melayu)",
    type: "textarea",
    placeholder: "Masukkan kandungan artikel dalam Bahasa Melayu",
    icon: "mdi-file-document"
  },
  {
    id: "summary_ms",
    label: "Ringkasan (Bahasa Melayu)",
    type: "text",
    placeholder: "Masukkan ringkasan pendek dalam Bahasa Melayu",
    icon: "mdi-note-outline"
  },
  {
    id: "main_photo",
    label: "Main Photo",
    type: "file",
    placeholder: "",
    icon: "mdi-camera"
  },
  {
    id: "sub_photo",
    label: "Sub Photos",
    type: "file",
    placeholder: "",
    icon: "mdi-folder-multiple-image"
  },
  {
    id: "author_name",
    label: "Author Name",
    type: "text",
    placeholder: "Enter the author's name",
    icon: "mdi-account"
  },
  {
    id: "author_country",
    label: "Author Country",
    type: "select",
    placeholder: "Select the author's country",
    icon: "mdi-earth",
    options: nationalities
  },
  {
    id: "author_photo",
    label: "Author Photo",
    type: "file",
    placeholder: "",
    icon: "mdi-account-box"
  }
];


const formData = ref<Record<keyof typeof formSchema.shape, any>>({
  title_en: "",
  content_en: "",
  summary_en: "",
  title_ms: "",
  content_ms: "",
  summary_ms: "",
  author_name: "",
  author_country: "",
  main_photo: null,
  sub_photo: [],
  author_photo: null
});

const errors = ref<Record<keyof typeof formSchema.shape, string[] | undefined>>({
  title_en: undefined,
  content_en: undefined,
  summary_en: undefined,
  title_ms: undefined,
  content_ms: undefined,
  summary_ms: undefined,
  author_name: undefined,
  author_country: undefined,
  main_photo: undefined,
  sub_photo: undefined,
  author_photo: undefined
});

function validateField(fieldName: keyof typeof formSchema.shape, value: any) {
  try {
    formSchema.shape[fieldName].parse(value);
    errors.value[fieldName] = undefined;
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors.value[fieldName] = err.issues.map((issue) => issue.message);
    }
  }
}

articleQuestions.forEach((field) => {
  watch(
      () => formData.value[field.id as keyof typeof formSchema.shape],
      (newValue) => {
        validateField(field.id, newValue);
      }
  );
});


const handleFileInput = (event: Event, fieldName: keyof typeof formSchema.shape) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (files && files.length > 0) {
    const file = files[0];
    const allowedTypes = ["image/png", "image/jpeg"];
    if (allowedTypes.includes(file.type)) {
      if (fieldName === "sub_photo") {
        formData.value[fieldName].push(file);
      } else {
        formData.value[fieldName] = file;
      }
    } else {
      alert("Invalid file type. Please upload a PNG or JPG file.");
    }
  }
};

const currentPage = ref(1);
const questionsPerPage = 5;

const paginatedQuestions = computed(() => {
  const startIndex = (currentPage.value - 1) * questionsPerPage;
  return articleQuestions.slice(startIndex, startIndex + questionsPerPage);
});

const handleFormSubmit = () => {
  articleQuestions.forEach((field) => {
    validateField(field.id, formData.value[field.id as keyof typeof formSchema.shape]);
  });
  if (Object.values(errors.value).some((error) => error)) {
    console.log("Validation errors:", errors.value);
  } else {
    console.log("Valid data:", formData.value);
    alert("Form submitted successfully");
  }
};
</script>

<template>
  <div class="admin-dashboard">
    <div class="admin-container">

      <div class="side-bar">
        <AdminSidebar/>
      </div>

      <div class="new-article-form">
        <div class="container">
          <h2 class="form-heading">Add new article</h2>
          <form @submit.prevent="handleFormSubmit">
            <div v-for="articleQuestion in paginatedQuestions" :key="articleQuestion.id" class="form-group">
              <label :for="articleQuestion.id">
                <span class="icon">
                  <UIcon :name="articleQuestion.icon"/>
                </span>
                {{ articleQuestion.label }}
              </label>
              <select
                  v-if="articleQuestion.type === 'select'"
                  :id="articleQuestion.id"
                  v-model="formData[articleQuestion.id]"
                  class="select-input"
              >
                <option value="" disabled>{{ articleQuestion.placeholder }}</option>
                <option v-for="option in articleQuestion.options" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
              <input
                  v-else-if="articleQuestion.type !== 'textarea' && articleQuestion.type !== 'select' && articleQuestion.type !== 'file'"
                  :id="articleQuestion.id"
                  :type="articleQuestion.type"
                  :placeholder="articleQuestion.placeholder"
                  v-model="formData[articleQuestion.id]"
                  class="text-input"
              />
              <textarea
                  v-else-if="articleQuestion.type === 'textarea'"
                  :id="articleQuestion.id"
                  :placeholder="articleQuestion.placeholder"
                  v-model="formData[articleQuestion.id]"
                  class="textarea-input"
              ></textarea>
              <input
                  v-else-if="articleQuestion.type === 'file'"
                  :id="articleQuestion.id"
                  type="file"
                  class="file-input"
                  @change="handleFileInput($event, articleQuestion.id)"
              />
              <p v-if="errors[articleQuestion.id]?.[0]" class="error-message">{{ errors[articleQuestion.id]?.[0] }}</p>
            </div>
            <div class="pagination-controls">
              <button
                  @click="currentPage = Math.max(1, currentPage - 1)"
                  :disabled="currentPage === 1"
                  class="btn-nav"
              >
                ← Previous
              </button>

              <button
                  v-if="currentPage < Math.ceil(articleQuestions.length / questionsPerPage)"
                  @click="currentPage = Math.min(Math.ceil(articleQuestions.length / questionsPerPage), currentPage + 1)"
                  class="btn-nav"
              >
                Next →
              </button>

              <button
                  v-if="currentPage === Math.ceil(articleQuestions.length / questionsPerPage)"
                  type="submit"
                  class="btn-submit"
              >
                Submit
              </button>
            </div>
          </form>
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

.new-article-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 10px 40px;
  border-radius: 10px;
}

.form-heading {
  font-size: 1.5rem;
  text-align: start;
  color: var(--primary-color);
  padding: 10px 0;
}

.form-group {
  margin-bottom: 5px;
}

.form-group label {
  display: block;
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 600;
  padding: 5px;
  margin: 0;
}

.icon {
  margin-right: 10px;
  vertical-align: middle;
}

.text-input,
.select-input,
.textarea-input,
.file-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  margin: 0;
}

.text-input:focus,
.textarea-input:focus,
.select-input:focus,
.file-input:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
}

textarea {
  resize: vertical;
}

.error-message {
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-top: 5px;
}

.file-input::-webkit-file-upload-button {
  align-items: center;
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}

.file-input::-webkit-file-upload-button:hover {
  background-color: var(--btn-submit-color);
}

.file-input::-webkit-file-upload-button:active {
  background-color: var(--btn-submit-color);
}

.btn-nav {
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  outline: none;
  transition: background 0.3s ease;
}

.btn-nav:disabled {
  background-color: var(--primary-hover);
  color: var(--text-hover);
  cursor: not-allowed;
  outline: none;
}

.btn-nav:hover:not(:disabled) {
  background-color: var(--primary-hover);
}

.btn-submit {
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  outline: none;
  transition: background 0.3s ease;
}

.btn-submit:hover {
  background-color: #218838;
}

.select-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 30px;
  color: var(--primary-color);
  background-color: var(--background);
}

@media (max-width: 768px) {
  .admin-container {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 20px;
  }

  .form-heading {
    font-size: 1.5rem;
  }
}
</style>

