<script setup>
import {onMounted} from 'vue'
import {useI18n} from "#imports";

const {t} = useI18n();
onMounted(() => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = "https://js.stripe.com/v3/buy-button.js"
    script.async = true
    document.body.appendChild(script)
  }
})
</script>

<template>
  <section class="donate-section">
    <div class="donate-container">
      <div class="donate-container-content">
        <stripe-buy-button
            buy-button-id="buy_btn_1QrMkMF93uFrXNdBYMbnMlMC"
            publishable-key="pk_test_51OWMXaF93uFrXNdBFR2cEFylLKZW4VTUmNZA1qpjjQzZMn98hNCn6pDf7n0016R1XxKvSSi8P5FIDmNGrcs9hykw009EhJ0OmO"
        >
        </stripe-buy-button>
      </div>

      <div class="donate-message-container">
        <h2 class="donate-title">{{ t("donate_message_title") }}</h2>
        <p class="message">
          {{ t("donate_message_text") }}
        </p>
        <ul class="donation-benefits">
          <li>
            <UIcon name="mdi-check-circle" class="icon"/>
            {{ t("donate_benefit_1") }}
          </li>
          <li>
            <UIcon name="mdi-check-circle" class="icon"/>
            {{ t("donate_benefit_2") }}
          </li>
          <li>
            <UIcon name="mdi-check-circle" class="icon"/>
            {{ t("donate_benefit_3") }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donate-section {
  display: block;
  flex-direction: column;
  max-width: 1000px;
  margin: 5rem auto;
  padding: 0;
  background: var(--background);
  box-shadow: rgba(149, 157, 165, 0.4) 0 10px 20px;
}

.donate-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: transparent;
  margin: 0 auto;
  gap: 1rem;
}

.donate-container-content {
  display: flex;
  justify-content: center;
  background: var(--primary-color);
  padding: 1.5rem;
  align-content: center;
  align-items: center;
}

.donate-message-container {
  width: 90%;
  margin: 0 auto;
}

.donate-title {
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 2rem auto;
  color: var(--primary-color);
}

.message {
  font-size: 1rem;
  align-content: center;
  margin-top: 2rem;
  color: var(--primary-color);
  text-align: justify;
}

.donation-benefits {
  list-style: none;
  font-size: 1rem;
  color: var(--primary-color);
  margin: 2rem 0;
}

.donation-benefits li {
  margin: 0 0.5rem;
}

.donation-benefits li .icon {
  margin-right: .5rem;
}

@media (max-width: 768px) {
  .donate-section {
    padding: 0 0.5rem;
  }

  .donate-title {
    font-size: 1.25rem;
  }

  .donate-container {
    display: block;
    margin: 3rem auto;
    gap: 3rem;
  }
}
</style>