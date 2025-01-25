<script setup lang="ts">
import {ref, watch} from "vue";
import {z} from "zod";

const formSchema = z.object({
  form_id: z.string().min(1, "Form ID is required"),
  name: z.string().min(1, "Name is required"),
  cv: z.string()
      .refine((value) => /\.(png|jpe?g|pdf|docx?)$/i.test(value), "CV must be a PNG, JPG, PDF, or Word file"),

});

type Field = {
  icon: string;
  label: string;
  type: string;
  placeholder: string;
  id: keyof typeof formSchema.shape;
  options?: { value: string; label: string }[];
};

const fields: Field[] = [
  {
    id: "name", label: "Name",
    type: "text",
    placeholder: "Enter your name",
    icon: "mdi-account"
  },
];

const formData = ref<Record<keyof typeof formSchema.shape, string>>({
  form_id: "",
  name: "",
  cv: "",
});

const errors = ref<Record<keyof typeof formSchema.shape, string[] | undefined>>({
  form_id: undefined,
  name: undefined,
  cv: undefined,

});

function validateField(fieldName: keyof typeof formSchema.shape, value: string) {
  try {
    formSchema.shape[fieldName].parse(value);
    errors.value[fieldName] = undefined;
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors.value[fieldName] = err.issues.map((issue) => issue.message);
    }
  }
}

fields.forEach((field) => {
  watch(
      () => formData.value[field.id as keyof typeof formSchema.shape],
      (newValue) => {
        validateField(field.id, newValue || "");
      }
  );
});

const handleFileInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (files && files.length > 0) {
    const file = files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
    const fileType = file.type;

    if (allowedTypes.includes(fileType)) {
      console.log("Selected valid file:", file);
      formData.value.cv = file.name;
    } else {
      console.log("Invalid file type. Please upload a PNG, JPG, or PDF file.");
      alert("Invalid file type. Please upload a PNG, JPG, or PDF file.");
    }
  } else {
    console.log("No file selected");
  }
};

const handleFormSubmit = () => {
  fields.forEach((field) => {
    validateField(field.id, formData.value[field.id as keyof typeof formSchema.shape] || "");
  });

  if (Object.values(errors.value).some((error) => error)) {
    console.log("Validation errors:", errors.value);
  } else {
    console.log("Valid data:", formData.value);
    alert("Form submitted successfully");
    location.reload();
  }
};
</script>

<template>
  <div class="admin-dashboard">
    <div class="admin-container">
      <div class="side-bar">
        <AdminSidebar />
      </div>
      <div class="new-article-form">
        <div class="container">
          <h2 class="form-heading">Please fill this form</h2>
          <form @submit.prevent="handleFormSubmit">
            <div v-for="field in fields" :key="field.id" class="form-group">
              <label :for="field.id">
                <span class="icon">
                  <UIcon :name="field.icon" />
                </span>
                {{ field.label }}
              </label>
              <select
                  v-if="field.type === 'select'"
                  :id="field.id"
                  v-model="formData[field.id]"
                  class="select-input"
              >
                <option value="" disabled>{{ field.placeholder }}</option>
                <option v-for="option in field.options" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
              <input
                  v-else-if="field.type !== 'textarea' && field.type !== 'select' && field.type !== 'file'"
                  :id="field.id"
                  :type="field.type"
                  :placeholder="field.placeholder"
                  v-model="formData[field.id]"
                  class="text-input"
              />
              <textarea
                  v-else-if="field.type === 'textarea'"
                  :id="field.id"
                  :placeholder="field.placeholder"
                  v-model="formData[field.id]"
                  class="textarea-input"
              ></textarea>
              <input
                  v-else-if="field.type === 'file'"
                  :id="field.id"
                  type="file"
                  class="file-input"
                  @change="handleFileInput"
              />
              <p v-if="errors[field.id]?.[0]" class="error-message">{{ errors[field.id]?.[0] }}</p>
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

.new-article-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 30px auto;
  background: var(--background);
  padding: 10px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-heading {
  font-size: 1.5rem;
  text-align: start;
  color: var(--primary-color);
  padding: 20px 0;
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

