<script setup>
import {useI18n} from "#imports";

const {t} = useI18n();

</script>

<template>

  <section class="donate-section">
    <div class="donate-manual-container">
      <h2 class="title">{{ t("donate_title") }}</h2>
      <h3 class="sub-title">{{ t("donate_subtitle") }}</h3>
      <ul aria-label="Bank transfer instructions">
        <li>
          <UIcon name="mdi-bank" class="icon"/>
          <strong>{{ t("donate_bank_transfer" ) }}</strong>
          {{ t("donate_bank_details") }}
        </li>
        <li>
          <UIcon name="mdi-email" class="icon"/>
          <span
              v-html="t('donate_email', { email: '<a href=\'mailto:donate@mychild.org\'>mychild2021is@gmail.com</a>' })"></span>
        </li>
        <li>
          <UIcon name="mdi-receipt" class="icon"/>
          {{ t("donate_receipt") }}
        </li>
        <li class="thank-you">
          <UIcon name="mdi-heart" class="icon text-red-500"/>
          {{ t("donate_thank_you") }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.donate-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.donate-manual-container {
  background: var(--background);
  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.4) 0 10px 20px;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.sub-title {
  text-align: center;
  font-size: 1.1rem;
  color: var(--primary-hover);
  margin-bottom: 1.5rem;
}

.donate-manual-container ul {
  list-style: none;
  font-size: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.donate-manual-container ul li {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.donate-manual-container ul li .icon {
  margin-right: 1rem;
  color: var(--primary-color);
}

.donate-manual-container a {
  color: var(--primary-color);
  text-decoration: underline;
  margin: 0 .5rem;
}

.donate-manual-container a:hover {
  text-decoration: none;
  transition: ease-in 0.3s;
}

@media (max-width: 768px) {
  .donate-section {
    padding: 0 0.5rem;
  }

  .donate-manual-container {
    padding: 1rem;
  }

  .title {
    font-size: 1.25rem;
  }

  .sub-title {
    font-size: 1rem;
  }
}
</style>