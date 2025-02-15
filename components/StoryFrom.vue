<script setup lang="ts">
import {ref, watch, watchEffect} from "vue";
import {z} from "zod";
import {useI18n} from "vue-i18n";


const {t, locale} = useI18n();
const switchLanguage = () => {
  locale.value = locale.value === "en" ? "ms" : "en";
};

const formSchema = z.object({
  title: z.string().min(5, "Title is required"),
  content: z.string().min(50, "Content is required"),
  summary: z.string().min(50, "Summary is required"),
  author_id: z.number().min(1, "Author ID is required"),
  date: z.string().min(1, "Date is required"),
  author_name: z.string().min(5, "Author Name is required"),
  author_country: z.string().min(5, "Author Country is required"),
  main_photo: z.instanceof(File).refine((file) => /\.(png|jpe?g)$/i.test(file.name), "Main photo must be PNG or JPG"),
  sub_photo: z.array(z.instanceof(File).refine((file) => /\.(png|jpe?g)$/i.test(file.name), "Sub photos must be PNG or JPG")),
  author_photo: z.instanceof(File).refine((file) => /\.(png|jpe?g)$/i.test(file.name), "Author photo must be PNG or JPG"),
});

type StoryQuestionsField = {
  icon: string;
  label: string;
  type: string;
  placeholder: string;
  id: keyof typeof formSchema.shape;
  options?: { value: string; label: string }[];
};

const storyQuestions: StoryQuestionsField[] = [
  {
    id: "title",
    label: t("stories.new_story.form.title"),
    type: "text",
    placeholder: t("stories.new_story.placeholder.title"),
    icon: "mdi-book-open"
  },
  {
    id: "content",
    label: t("stories.new_story.form.content"),
    type: "textarea",
    placeholder: t("stories.new_story.placeholder.content"),
    icon: "mdi-file-document"
  },
  {
    id: "summary",
    label: t("stories.new_story.form.summary"),
    type: "text",
    placeholder: t("stories.new_story.placeholder.summary"),
    icon: "mdi-note-outline"
  },
  {
    id: "author_name",
    label: t("stories.new_story.form.author_name"),
    type: "text",
    placeholder: t("stories.new_story.placeholder.author_name"),
    icon: "mdi-account"
  },
  {
    id: "author_country",
    label: t("stories.new_story.form.author_country"),
    type: "select",
    placeholder: t("stories.new_story.placeholder.author_country"),
    icon: "mdi-earth",
    options: nationalities
  },
  {
    id: "main_photo",
    label: t("stories.new_story.form.main_photo"),
    type: "file",
    placeholder: "",
    icon: "mdi-camera"
  },
  {
    id: "sub_photo",
    label: t("stories.new_story.form.sub_photo"),
    type: "file",
    placeholder: "",
    icon: "mdi-folder-multiple-image"
  },
  {
    id: "author_photo",
    label: t("stories.new_story.form.author_photo"),
    type: "file",
    placeholder: "",
    icon: "mdi-account-box"
  },
];

const formData = ref<Record<keyof typeof formSchema.shape, any>>({
  title: "",
  content: "",
  summary: "",
  author_id: 0,
  date: "",
  author_name: "",
  author_country: "",
  main_photo: null,
  sub_photo: [],
  author_photo: null,
});

const errors = ref<Record<keyof typeof formSchema.shape, string[] | undefined>>({});

const validateField = (fieldName: keyof typeof formSchema.shape, value: any) => {
  try {
    formSchema.shape[fieldName].parse(value);
    errors.value[fieldName] = undefined;
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors.value[fieldName] = err.issues.map((issue) => issue.message);
    }
  }
};

storyQuestions.forEach((field) => {
  watch(
      () => formData.value[field.id as keyof typeof formSchema.shape],
      (newValue) => validateField(field.id, newValue)
  );
});

const handleFileInput = (event: Event, fieldName: keyof typeof formSchema.shape) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (files && files.length > 0) {
    const file = files[0];
    const allowedTypes = ['image/png', 'image/jpeg'];

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

const handleFormSubmit = () => {
  storyQuestions.forEach((field) => {
    validateField(field.id, formData.value[field.id as keyof typeof formSchema.shape]);
  });

  if (Object.values(errors.value).some((error) => error)) {
    console.log("Validation errors:", errors.value);
  } else {
    console.log("Valid data:", formData.value);
    alert("Form submitted successfully");
  }
};

watchEffect(() => {
  storyQuestions.forEach((field) => {
    field.label = t(`stories.new_story.form.${field.id}`);
    field.placeholder = t(`stories.new_story.placeholder.${field.id}`);
  });
});

</script>

<template>
  <div class="admin-dashboard">
    <div class="admin-container">
      <div class="side-bar">
        <AdminSidebar/>
      </div>
      <div class="new-story-form">
        <div class="container">
          <h2 class="form-heading">{{ t('stories.new_story.main_title') }}</h2>
          <button @click="switchLanguage" class="lang-switch-btn">
            {{ locale === "en" ? "🇲🇾 Switch to Malay" : "🇬🇧 Switch to English" }}
          </button>
          <form @submit.prevent="handleFormSubmit">
            <div v-for="storyQuestion in storyQuestions" :key="storyQuestion.id" class="form-group">
              <label :for="storyQuestion.id">
                <span class="icon">
                  <UIcon :name="storyQuestion.icon"/>
                </span>
                {{ storyQuestion.label }}
              </label>
              <select
                  v-if="storyQuestion.type === 'select'"
                  :id="storyQuestion.id"
                  v-model="formData[storyQuestion.id]"
                  class="select-input"
              >
                <option value="" disabled>{{ storyQuestion.placeholder }}</option>
                <option v-for="option in storyQuestion.options" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
              <input
                  v-else-if="storyQuestion.type !== 'textarea' && storyQuestion.type !== 'select' && storyQuestion.type !== 'file'"
                  :id="storyQuestion.id"
                  :type="storyQuestion.type"
                  :placeholder="storyQuestion.placeholder"
                  v-model="formData[storyQuestion.id]"
                  class="text-input"
              />
              <textarea
                  v-else-if="storyQuestion.type === 'textarea'"
                  :id="storyQuestion.id"
                  :placeholder="storyQuestion.placeholder"
                  v-model="formData[storyQuestion.id]"
                  class="textarea-input"
              ></textarea>
              <input
                  v-else-if="storyQuestion.type === 'file'"
                  :id="storyQuestion.id"
                  type="file"
                  class="file-input"
                  @change="handleFileInput($event, storyQuestion.id)"
              />
              <p v-if="errors[storyQuestion.id]?.[0]" class="error-message">{{ errors[storyQuestion.id]?.[0] }}</p>
            </div>
            <button type="submit" class="btn-submit">Submit</button>
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

.new-story-form {
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

.lang-switch-btn {
  margin-bottom: 1rem;
  padding: 8px 12px;
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.lang-switch-btn:hover {
  background-color: var(--primary-hover);
  color: var(--text-hover);
  transition: background-color ease-in-out 0.3s, color ease-in-out 0.15s;
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

.btn-submit {
  display: flex;
  justify-content: center;
  width: 90%;
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  outline: none;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem auto;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: var(--primary-hover);
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

