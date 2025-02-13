<script setup lang="ts">
import {ref, watch} from "vue";
import {z} from "zod";

const loginSchema = z.object({
  username: z.string().min(4, "Username is required").max(20, "Username must be under 20 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type Field = {
  id: string;
  icon: string,
  label: string;
  type: string;
  placeholder: string;
  validationKey: keyof typeof loginSchema.shape;
};

const fields: Field[] = [
  {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    validationKey: "username",
    icon: "mdi-user"
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    validationKey: "password",
    icon: "mdi-password"
  },
];

const formData = ref<Record<keyof typeof loginSchema.shape, string>>({
  username: "",
  password: "",
});

const errors = ref<Record<keyof typeof loginSchema.shape, string[] | undefined>>({
  password: undefined,
  username: undefined
});

function validateField(fieldName: keyof typeof loginSchema.shape, value: string) {
  try {
    loginSchema.shape[fieldName].parse(value);
    errors.value[fieldName] = undefined;
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors.value[fieldName] = err.issues.map((issue) => issue.message);
    }
  }
}

fields.forEach((field) => {
  watch(
      () => formData.value[field.id as keyof typeof loginSchema.shape],
      (newValue) => {
        validateField(field.validationKey, newValue || "");
      }
  );
});

const handleFormSubmit = () => {
  fields.forEach((field) => {
    validateField(
        field.validationKey,
        formData.value[field.id as keyof typeof loginSchema.shape] || ""
    );
  });

  if (Object.values(errors.value).some((error) => error)) {
    console.log("Validation errors:", errors.value);
  } else {
    console.log("Valid data:", formData.value);

    useCookie('token').value = "your_fake_access_token";

    alert("Login successfully!");
    navigateTo('/admin');
  }
};

</script>

<template>
  <div class="login-page">
    <div class="login-wrapper">

      <div class="form-container">
        <form @submit.prevent="handleFormSubmit">
          <h2 class="form-title">Welcome Back</h2>
          <div v-for="field in fields" :key="field.id" class="form-field">
            <label :for="field.id">
              <span class="icon">
                <UIcon
                    :name="field.icon"
                />
              </span>
              {{ field.label }}
            </label>
            <input
                v-if="field.type !== 'textarea'"
                :id="field.id"
                :type="field.type"
                :placeholder="field.placeholder"
                v-model="formData[field.validationKey]"
                required
            />
            <textarea
                v-else
                :id="field.id"
                :placeholder="field.placeholder"
                v-model="formData[field.validationKey]"
                required
            ></textarea>
            <p v-if="errors[field.validationKey]?.[0]" class="error-text">{{ errors[field.validationKey]?.[0] }}</p>
          </div>
          <div class="form-actions">
            <button type="submit" class="submit-btn">Submit</button>
          </div>
        </form>
        <div class="social-links">
          <ul>
            <li><a>
              <UIcon name="mdi-facebook" class="icon facebook"/>
            </a></li>
            <li><a>
              <UIcon name="mdi-instagram" class="icon instagram"/>
            </a></li>
            <li><a>
              <UIcon name="mdi-whatsapp" class="icon whatsapp"/>
            </a></li>
            <li><a>
              <UIcon name="mdi-youtube" class="icon youtube"/>
            </a></li>
          </ul>
        </div>

        <div class="form-footer">
          <hr />
          <router-link to="/signup" class="signup-link">Sign Up</router-link>
          <hr />
        </div>
      </div>

      <div class="info-container">
        <h2 class="info-title">Every Child is My Child</h2>
        <img src="../public/images/login.png" alt="Login illustration" class="info-image" />
      </div>
    </div>

    <div class="decorative-circle top-circle"></div>
    <div class="decorative-circle bottom-circle"></div>
  </div>
</template>

<style scoped>
.login-page {
  background: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.login-wrapper {
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 90vh;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
  z-index: 1001;
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #eeeeee;
  min-height: 600px;
}

.form-title {
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center;
}

.form-container form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.form-field {
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 8px;
  font-size: 1rem;
  color: var(--primary-color);
}

.form-field input,
.form-field textarea {
  padding: 10px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--primary-color, #007bff);
}

.form-actions {
  margin-top: 20px;
  text-align: center;
}

.submit-btn {
  width: 100%;
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: var(--primary-hover);
}

.error-text {
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
}

.social-links {
  margin-top: 20px;
  text-align: center;
}

.social-links ul {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 0;
}

.social-links ul li {
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;
}

.social-links ul li:hover {
  color: var(--primary-hover);
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}

.info-container {
  flex: 1;
  background-color: var(--primary-color);
  color: var(--text-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.info-title {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
}

.info-image {
  max-width: 80%;
  height: auto;
  border-radius: 10px;
}

.decorative-circle {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
}

.top-circle {
  width: 300px;
  height: 300px;
  background: var(--primary-color);
  top: -150px;
  left: -150px;
}

.bottom-circle {
  width: 250px;
  height: 250px;
  background: #eeeeee;
  bottom: -125px;
  right: -125px;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
}

.form-footer hr {
  flex: 1;
  border: none;
  border-top: 2px solid var(--primary-hover);
}

.signup-link {
  font-size: 1.2rem;
  color: var(--primary-color);
  padding: 0 10px;
}

@media (max-width: 1200px) {
  .login-wrapper {
    width: 90%;
    flex-direction: column;
    height: auto;
  }

  .form-container,
  .info-container {
    padding: 20px;
    min-height: auto;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .info-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .login-page {
    padding: 10px;
  }

  .submit-btn {
    font-size: 0.9rem;
    padding: 8px;
  }

  .social-links ul {
    gap: 10px;
  }

  .info-image {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .form-title {
    font-size: 1.2rem;
  }

  .submit-btn {
    font-size: 0.8rem;
  }

  .info-title {
    font-size: 1.2rem;
  }
}
</style>

