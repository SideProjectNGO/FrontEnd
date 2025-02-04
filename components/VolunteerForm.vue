<script setup lang="ts">
import {ref, watch} from "vue";
import {z} from "zod";
import {nationalities} from "~/utils/dropdownOptions.js";
import {useI18n} from "#imports";

const {t} = useI18n();

const formSchema = z.object({
  form_id: z.string().min(1, t('volunteer_form.validation.required')),
  name: z.string().min(1, t('volunteer_form.validation.required')),
  email: z.string().email(t('volunteer_form.validation.email')),
  phone: z.string().regex(/^\+?\d{10,15}$/, t('volunteer_form.validation.phone')),
  address: z.string().min(10, t('volunteer_form.validation.required')),
  message: z.string().optional(),
  cv: z.string()
      .refine((value) => /\.(png|jpe?g|pdf|docx?)$/i.test(value), t('volunteer_form.validation.cv')),
  status: z.enum(["pending"]),
  gender: z.string().optional(),
  created_at: z.string().optional(),
  dob: z.string().optional(),
  nationality: z.string().optional(),
  days: z.string().optional(),
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
    id: "name", label: t('volunteer_form.form_fields.name'),
    type: "text",
    placeholder: t('volunteer_form.placeholders.name'),
    icon: "mdi-account"
  },
  {
    id: "email",
    label: t('volunteer_form.form_fields.email'),
    type: "email",
    placeholder: t('volunteer_form.placeholders.email'),
    icon: "mdi-email"
  },
  {
    id: "phone",
    label: t('volunteer_form.form_fields.phone'),
    type: "tel",
    placeholder: t('volunteer_form.placeholders.phone'),
    icon: "mdi-phone"
  },
  {
    id: "dob",
    label: t('volunteer_form.form_fields.dob'),
    type: "date",
    placeholder: t('volunteer_form.placeholders.dob'),
    icon: "mdi-calendar"
  },
  {
    id: "gender",
    label: t('volunteer_form.form_fields.gender'),
    type: "select",
    placeholder: t('volunteer_form.placeholders.gender'),
    icon: "mdi-account-circle",
    options: [
      {value: "male", label: t('volunteer_form.list.1')},
      {value: "female", label: t('volunteer_form.list.2')},
    ],
  },
  {
    id: "nationality",
    label: t('volunteer_form.form_fields.nationality'),
    type: "select",
    placeholder: t('volunteer_form.placeholders.nationality'),
    icon: "mdi-account-circle",
    options: nationalities,
  },
  {
    id: "days",
    label: t('volunteer_form.form_fields.days'),
    type: "select",
    placeholder: t('volunteer_form.placeholders.days'),
    icon: "mdi-calendar",
    options: [
      {value: "weekdays", label: t('volunteer_form.list.3')},
      {value: "weekends", label: t('volunteer_form.list.4')},
      {value: "evenings", label: t('volunteer_form.list.5')},
    ],
  },
  {
    id: "address",
    label: t('volunteer_form.form_fields.address'),
    type: "text",
    placeholder: t('volunteer_form.placeholders.address'),
    icon: "mdi-message"
  },
  {
    id: "message",
    label: t('volunteer_form.form_fields.message'),
    type: "textarea",
    placeholder: t('volunteer_form.placeholders.message'),
    icon: "mdi-message"
  },
  {
    id: "cv",
    label: t('volunteer_form.form_fields.cv'),
    type: "file",
    placeholder: t('volunteer_form.placeholders.cv'),
    icon: "mdi-file"
  },
];

const formData = ref<Record<keyof typeof formSchema.shape, string | null>>({
  form_id: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  cv: null,
  status: "pending",
  created_at: "",
  dob: "",
  address: "",
  days: null,
  gender: null,
  nationality: null
});

const errors = ref<Record<keyof typeof formSchema.shape, string[] | undefined>>({
  form_id: undefined,
  name: undefined,
  email: undefined,
  phone: undefined,
  message: undefined,
  gender: undefined,
  cv: undefined,
  status: undefined,
  created_at: undefined,
  dob: undefined,
  address: undefined,
  nationality: undefined,
  days: undefined,
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
    formData.value.cv = files[0];
  } else {
    formData.value.cv = "";
  }
};

const handleFormSubmit = () => {
  fields.forEach((field) => {
    validateField(field.id, formData.value[field.id as keyof typeof formSchema.shape] || "");
  });

  if (Object.values(errors.value).some((error) => error?.length)) {
    console.log("Validation errors:", errors.value);
  } else {
    console.log("Valid data:", formData.value);
    alert("Form submitted successfully");
  }
};

</script>

<template>
  <div class="volunteer-form">
    <div class="container">

      <div class="description-wrapper">
        <h2 class="description-title">{{ t('volunteer_form.title') }}</h2>
        <div class="description-text">
          <p class="description">{{ t('volunteer_form.description') }}</p>
          <h3 class="sub-title">{{ t('volunteer_form.why_volunteer') }}</h3>
          <ul>
            <li>
              <UIcon
                  name="mdi-user"
                  class="icons"
              />
              {{ t('volunteer_form.list.1') }}
            </li>
            <li>
              <UIcon
                  name="mdi-user"
                  class="icons"
              />
              {{ t('volunteer_form.list.2') }}
            </li>
            <li>
              <UIcon
                  name="mdi-user"
                  class="icons"
              />
              {{ t('volunteer_form.list.3') }}
            </li>
            <li>
              <UIcon
                  name="mdi-user"
                  class="icons"
              />
              {{ t('volunteer_form.list.4') }}
            </li>
          </ul>
        </div>
      </div>

      <div class="form-wrapper">
        <h2 class="form-heading">{{ t('volunteer_form.title') }}</h2>
        <form @submit.prevent="handleFormSubmit" class="volunteer-form-grid">
          <div
              v-for="field in fields"
              :key="field.id"
              class="volunteer-form-group"
              :class="{ 'full-width': field.type === 'textarea' || field.type === 'file'}"
          >
            <label :for="field.id">
              <span class="icon">
                <UIcon :name="field.icon"/>
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
          </div>
          <button type="submit" class="btn-submit  full-width">{{ t('volunteer_form.submit') }}</button>
        </form>

      </div>
    </div>
  </div>
</template>

<style scoped>
.volunteer-form {
  background-color: #f9f9f9;
  margin: 0 auto;
  padding: 20px;
}

.container {
  display: grid;
  grid-template-columns: 2fr 5fr;
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  background: var(--background);
  gap: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


@media (max-width: 1200px) {
  .volunteer-form {
    background-color: #f9f9f9;
    margin: 0 auto;
    padding: 0;
  }

  .container {
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0;
  }
}

.container .description-wrapper {
  background-color: var(--primary-color);
  padding: 20px;
}

.container .description-text {
  margin: 3rem auto;
}

.container .description-wrapper h2,
.container .description-wrapper h3 {
  text-align: start;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--text-hover);
  margin-bottom: 20px;
}

.container .description-wrapper ul li {
  list-style: none;
  font-size: 1rem;
  color: var(--text-hover);
  text-align: justify;
}

.container .description-wrapper ul li .icons {
  margin-right: 10px;
}

.container .description-wrapper p {
  font-size: .9rem;
  text-align: justify;
  color: var(--text-color);
  margin-bottom: 20px;
}

.container .form-wrapper {
  margin: 20px;
}

.form-heading {
  font-size: 1.5rem;
  text-align: start;
  color: var(--primary-color);
  padding: 20px 0;
}

.volunteer-form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 15px ;
  margin: 0;
}

.volunteer-form-group {
  display: flex;
  flex-direction: column;
}

.full-width {
  grid-column: span 2;
}

.volunteer-form-group label {
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
  width: 100%;
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  outline: none;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 20px 0;
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
  .container {
    padding: 20px;
  }

  .form-heading {
    font-size: 1.5rem;
  }

}
</style>
