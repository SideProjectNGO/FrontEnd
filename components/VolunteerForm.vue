<script setup lang="ts">
import {reactive, ref} from 'vue';
import {z} from 'zod';
import {nationalities} from "~/utils/dropdownOptions.js";
import {useI18n} from "#imports";
import Popup from "~/components/VolunteerSubmitPopup.vue"

const {t} = useI18n();

const volunteerQuestions = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
    id: "name"
  },
  {
    label: "Phone Number",
    type: "text",
    placeholder: "Enter your phone number (e.g., +601160073491)",
    required: true,
    id: "phone"
  },
  {
    label: "Email Address",
    type: "text",
    placeholder: "Enter your email address",
    required: true,
    id: "email"
  },
  {
    label: "Date of Birth",
    type: "date",
    placeholder: "Select your date of birth",
    required: true,
    id: "dob"
  },
  {
    label: "Gender",
    type: "select",
    options: [
      {value: "male", label: "Male"},
      {value: "female", label: "Female"}
    ],
    required: true,
    placeholder: "Select your gender",
    id: "gender"
  },
  {
    label: "Address",
    type: "text",
    placeholder: "Enter your full address (street, city, state)",
    required: true,
    id: "address"
  },
  {
    label: "Preferred Days and Times",
    type: "select",
    options: [
      {value: "weekdays", label: "Weekdays"},
      {value: "weekends", label: "Weekends"},
      {value: "other", label: "Other"}
    ],
    required: true,
    placeholder: "Select your preferred days and times",
    id: "working_hours"
  },
  {
    label: "Nationality",
    type: "select",
    options: nationalities,
    placeholder: "Select your nationality",
    id: "nationality"
  },
  {
    label: "Supporting Documents",
    type: "file",
    required: true,
    placeholder: "Upload your supporting documents (e.g., resume, certificates)",
    id: "resume"
  },
  {
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Write a brief message about yourself",
    id: "message"
  }
];

const formSchema = z.object({
  name: z.string().min(8, "Name must be at least 8 characters long"),
  phone: z.string().regex(/^\d{8,15}$/, "Invalid phone number"),
  email: z.string().email("Invalid email format"),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date format"),
  gender: z.string().min(1, "Gender is required"),
  address: z.string().min(8, "Address must be at least 8 characters long"),
  nationality: z.string().optional(),
  working_hours: z.string().optional(),
  resume: z.any().refine(file => file instanceof File, {message: "Supporting document is required"}),
  message: z.string().min(20, "Reason must be at least 20 characters long")
});

const form = reactive(
    Object.fromEntries(volunteerQuestions.map(q => [q.id, q.type === "file" ? null : ""]))
);

const errors = reactive(
    Object.keys(form).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {} as Record<string, string>)
);

const isPopupVisible = ref(false);

const validateField = (field: string) => {
  const singleSchema = z.object({[field]: formSchema.shape[field]});
  const validationResult = singleSchema.safeParse({[field]: form[field]});

  if (!validationResult.success) {
    errors[field] = validationResult.error.errors[0]?.message || "Invalid input";
  } else {
    errors[field] = "";
  }
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    form.resume = target.files[0]; // Store the file object
    errors.resume = ""; // Clear any error message
  } else {
    errors.resume = "Supporting document is required";
  }
};

const handleSubmit = () => {
  const validationResults = formSchema.safeParse(form);

  if (!validationResults.success) {
    validationResults.error.errors.forEach(err => {
      errors[err.path[0]] = err.message;
    });

    alert("Please correct the errors in the form.");
    return;
  }

  console.log("Form submitted successfully!");
  console.log("Form Data:", form);
  console.log("Uploaded File:", form.resume);
  alert("Form submitted successfully!");
  isPopupVisible.value = true;
  location.reload();
};
</script>

<template>
  <div class="volunteer-form">
    <div class="container">
      <div class="description-wrapper">
        <h2 class="description-title">{{ t('volunteer.volunteer_form_title') }}</h2>
        <div class="description-text">
          <p class="description">{{ t('volunteer.description') }}</p>
          <h3 class="sub-title">{{ t('volunteer.why_volunteer') }}</h3>
          <ul>
            <li v-for="i in 4" :key="i">
              <UIcon name="mdi-user" class="icons"/>
              {{ t(`volunteer.list.${i}`) }}
            </li>
          </ul>
        </div>
      </div>

      <div class="form-wrapper">
        <form @submit.prevent="handleSubmit">
          <div class="volunteer-form-grid">
            <div class="volunteer-form-group" v-for="question in volunteerQuestions" :key="question.id">
              <label class="question-title" :for="question.id">{{ question.label }}</label>

              <input
                  v-if="question.type === 'text' || question.type === 'date'"
                  v-model="form[question.id]"
                  :type="question.type"
                  :placeholder="question.placeholder"
                  :id="question.id"
                  class="text-input"
                  @blur="validateField(question.id)"
              />

              <select
                  v-if="question.type === 'select'"
                  v-model="form[question.id]"
                  :id="question.id"
                  class="select-input"
                  @change="validateField(question.id)"
              >
                <option value="" disabled>{{ question.placeholder }}</option>
                <option v-for="option in question.options" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>

              <textarea
                  v-if="question.type === 'textarea'"
                  v-model="form[question.id]"
                  :id="question.id"
                  :placeholder="question.placeholder"
                  class="textarea-input"
                  @blur="validateField(question.id)"
              />

              <input
                  v-if="question.type === 'file'"
                  :type="question.type"
                  :id="question.id"
                  class="file-input"
                  @change="handleFileUpload"
              />

              <span v-if="errors[question.id]" class="error">{{ errors[question.id] }}</span>
            </div>
          </div>

          <button class="btn-submit" type="submit">Submit</button>
          <Popup :show="isPopupVisible" @update:show="isPopupVisible = $event"/>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.volunteer-form {
  background-color: #f9f9f9;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 90%;
  max-width: 1200px;
  background: var(--background);
  gap: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
}

@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    width: 100%;
  }
}

.description-wrapper {
  background-color: var(--primary-color);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}

.description-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-hover);
  margin-bottom: 15px;
}

.description-text {
  font-size: 1rem;
  color: var(--text-color);
  text-align: justify;
}

.description-wrapper ul li {
  list-style: none;
  font-size: 1rem;
  display: flex;
  align-items: start;
  margin: 10px 0;
  color: var(--text-hover);
}

.icons {
  margin-right: 1rem;
  font-size: 1rem;
}

.form-wrapper {
  padding: 20px;
  border-radius: 10px;
}

.volunteer-form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .volunteer-form-grid {
    grid-template-columns: 1fr;
  }
}

.volunteer-form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.text-input,
.select-input,
.textarea-input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  background: #fff;
  transition: 0.3s;
}

.text-input:focus,
.select-input:focus,
.textarea-input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  outline: none;
}

.textarea-input {
  resize: vertical;
  min-height: 40px;
}

.file-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
  cursor: pointer;
}

.file-input:hover {
  border-color: var(--primary-color);
}

.btn-submit {
  display: block;
  width: 100%;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 1.1rem;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  text-transform: uppercase;
  transition: 0.3s;
}

.btn-submit:hover {
  background-color: var(--primary-hover);
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}

@media (max-width: 600px) {
  .container {
    padding: 20px;
  }

  .btn-submit {
    font-size: 1rem;
    padding: 10px;
  }
}

</style>
