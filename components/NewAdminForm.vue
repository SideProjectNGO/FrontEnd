<script setup lang="ts">
import { ref, watch } from 'vue';
import { z } from 'zod';

const formSchema = z.object({
  admin_name: z.string().min(5, 'Name is required'),
  admin_photo: z.instanceof(File).refine((file) => /\.(png|jpe?g)$/i.test(file.name), 'Author photo must be PNG or JPG'),
  admin_type: z.string().optional(),
  nationality: z.string().optional(),
  position: z.string().min(5, 'Position is required'),
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
    id: 'admin_name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter admin name',
    icon: 'mdi-user'
  },
  {
    id: 'admin_photo',
    label: 'Admin Photo',
    type: 'file',
    placeholder: 'Upload admin photo',
    icon: 'mdi-account-circle'
  },
  {
    id: 'admin_type',
    label: 'Admin Type',
    type: 'select',
    placeholder: 'Admin type',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'super-admin', label: 'Super admin' },
    ],
    icon: 'mdi-account-circle'
  },
  {
    id: 'nationality',
    label: 'Admin Nationality',
    type: 'select',
    placeholder: 'Nationality',
    options: nationalities,
    icon: 'mdi-account-circle'
  },
  {
    id: 'position',
    label: 'Admin Position',
    type: 'text',
    placeholder: 'Enter position',
    icon: 'mdi-user'
  },
];

const formData = ref<Record<keyof typeof formSchema.shape, any>>({
  admin_name: '',
  admin_type: '',
  position: '',
  nationality: '',
  admin_photo: null,
});

const errors = ref<Record<keyof typeof formSchema.shape, string | undefined>>({
  admin_name: undefined,
  admin_type: undefined,
  position: undefined,
  nationality: undefined,
  admin_photo: undefined,
});

function validateField(fieldName: keyof typeof formSchema.shape, value: any) {
  try {
    formSchema.shape[fieldName].parse(value);
    errors.value[fieldName] = undefined;
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors.value[fieldName] = err.issues.map((issue) => issue.message).join(', ');
    }
  }
}

fields.forEach((field) => {
  watch(() => formData.value[field.id], (newValue) => {
    validateField(field.id, newValue);
  });
});

const handleFileInput = (event: Event, fieldName: keyof typeof formSchema.shape) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (files && files.length > 0) {
    const file = files[0];
    const allowedTypes = ['image/png', 'image/jpeg'];
    if (allowedTypes.includes(file.type)) {
      console.log('Selected valid file:', file);
      formData.value[fieldName] = file;
    } else {
      console.log('Invalid file type. Please upload a PNG or JPG file.');
      alert('Invalid file type. Please upload a PNG or JPG file.');
    }
  }
};

const handleFormSubmit = (event: Event) => {
  event.preventDefault();

  fields.forEach((field) => {
    validateField(field.id, formData.value[field.id]);
  });

  console.log('Form Data:', formData.value);
  console.log('Validation Errors:', errors.value);

  if (Object.values(errors.value).some((error) => error)) {
    alert('Please correct validation errors.');
  } else {
    alert('Form submitted successfully!');
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
          <h2 class="form-heading">Add New Admin</h2>
          <form @submit="handleFormSubmit">
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
                  v-else-if="field.type === 'text'"
                  :id="field.id"
                  :type="field.type"
                  :placeholder="field.placeholder"
                  v-model="formData[field.id]"
                  class="text-input"
              />
              <input
                  v-else-if="field.type === 'file'"
                  :id="field.id"
                  type="file"
                  class="file-input"
                  @change="handleFileInput($event, field.id)"
              />
              <p v-if="errors[field.id]" class="error-message">{{ errors[field.id] }}</p>
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

