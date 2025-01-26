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

    const fakeToken = "your_fake_access_token";

    useCookie('token').value = fakeToken;

    alert("Login successfully!");
    navigateTo('/admin');
  }
};

</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">

      <div class="form-section">
        <form @submit.prevent="handleFormSubmit">
          <h2 class="form-heading">Welcome Back </h2>
          <div v-for="field in fields" :key="field.id" class="form-group">
            <label :for="field.id">
              <span class="icon">
                <UIcon
                    :name="field.icon"
                />
              </span>
              {{ field.label }}</label>
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
            >
            </textarea>
            <p v-if="errors[field.validationKey]?.[0]" class="error-message">{{ errors[field.validationKey]?.[0] }}</p>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn-submit">Submit</button>
          </div>
        </form>
        <div class="social-media-links">
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

        <div class="form-divider">
          <hr/>
          <router-link to="/signup" class="divider-text">Sign Up</router-link>
          <hr/>
        </div>
      </div>

      <div class="info-section">
        <h2 class="info-heading">Every Child is My Child</h2>
        <img src="../public/images/logo.webp" alt="Login illustration" class="info-image"/>
      </div>
    </div>

    <div class="decorative-shape top-shape"></div>
    <div class="decorative-shape bottom-shape"></div>
  </div>
</template>

<style scoped>
.login-wrapper {
  background: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.login-container {
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

.form-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #eeeeee;
  min-height: 600px;
}

.form-heading {
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center;
}

.form-section form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;
  font-size: 1rem;
  color: var(--primary-color);
}

.form-group input,
.form-group textarea {
  padding: 10px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary-color, #007bff);
}

.form-actions {
  margin-top: 20px;
  text-align: center;
}

.btn-submit {
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

.btn-submit:hover {
  background: var(--primary-hover);
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
}

.social-media-links {
  margin-top: 20px;
  text-align: center;
}

.social-media-links ul {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 0;
}

.social-media-links ul li {
  font-size: 1.5rem;
  color: var(--primary-hover);
  cursor: pointer;
}

.info-section {
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

.info-heading {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
}

.info-image {
  max-width: 80%;
  height: auto;
  border-radius: 10px;
}

.decorative-shape {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
}

.top-shape {
  width: 300px;
  height: 300px;
  background: var(--primary-color);
  top: -150px;
  left: -150px;
}

.bottom-shape {
  width: 250px;
  height: 250px;
  background: #eeeeee;
  bottom: -125px;
  right: -125px;
}

.form-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
}

.form-divider hr {
  flex: 1;
  border: none;
  border-top: 2px solid var(--primary-hover);
}

.divider-text {
  font-size: 1.2rem;
  color: var(--primary-color);
  padding: 0 10px;
}


@media (max-width: 1200px) {
  .login-container {
    width: 90%;
    flex-direction: column;
    height: auto;
  }

  .form-section,
  .info-section {
    padding: 20px;
    min-height: auto;
  }

  .form-heading {
    font-size: 1.5rem;
  }

  .info-heading {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .login-wrapper {
    padding: 10px;
  }

  .btn-submit {
    font-size: 0.9rem;
    padding: 8px;
  }

  .social-media-links ul {
    gap: 10px;
  }

  .info-image {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .form-heading {
    font-size: 1.2rem;
  }

  .btn-submit {
    font-size: 0.8rem;
  }

  .info-heading {
    font-size: 1.2rem;
  }
}
</style>
