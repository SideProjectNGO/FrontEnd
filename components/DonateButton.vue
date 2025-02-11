<script setup>
import {onMounted, ref} from 'vue';

// Reusable composable for loading external scripts
function useScriptLoader(src) {
  const scriptLoaded = ref(false);
  const scriptError = ref(false);

  onMounted(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => (scriptLoaded.value = true);
    script.onerror = () => (scriptError.value = true);
    document.head.appendChild(script);
  });

  return {scriptLoaded, scriptError};
}

// Load Stripe script
const {scriptLoaded, scriptError} = useScriptLoader('https://js.stripe.com/v3/buy-button.js');
</script>

<template>
  <!-- Stripe Donation Button Section -->
  <section class="donate-section">
    <div class="donate-button-container">
      <div class="donate-container">
        <h2 class="donate-title">Every child is my Child.</h2>

        <template v-if="scriptLoaded">
          <stripe-buy-button
              buy-button-id="buy_btn_1Qr6kfF93uFrXNdBU0jboBwj"
              publishable-key="pk_test_51OWMXaF93uFrXNdBFR2cEFylLKZW4VTUmNZA1qpjjQzZMn98hNCn6pDf7n0016R1XxKvSSi8P5FIDmNGrcs9hykw009EhJ0OmO"
          ></stripe-buy-button>
        </template>
        <template v-else-if="scriptError">
          <p class="error-message">Failed to load the payment button. Please try again later.</p>
        </template>
        <template v-else>
          <p class="loading-message">Loading payment button...</p>
        </template>
      </div>
    </div>

    <div class="donate-manual-container">
      <h2 class="title">Empower a Child’s Future, Change the World</h2>
      <h3 class="sub-title">
        Your support can transform lives. Every donation helps provide education, care, and a brighter future for
        children in need.
      </h3>
      <ul aria-label="Bank transfer instructions">
        <li>
          <UIcon name="mdi-bank" class="icon"/>
          <strong>Donate via bank transfer:</strong>
          Liberty to Learn Berhad, RHB Bank – Account Number: 214234324234230
        </li>
        <li>
          <UIcon name="mdi-email" class="icon"/>
          Kindly email us at <a href="mailto:donate@mychild.org">donate@mychild.org</a> with your name and transfer
          slips so we can track your contribution.
        </li>
        <li>
          <UIcon name="mdi-receipt" class="icon"/>
          Donations to MyChild are not tax-deductible, but we will issue a receipt to acknowledge your generosity.
        </li>
        <li class="thank-you">
          <UIcon name="mdi-heart" class="icon text-red-500"/>
          Thank you for being a part of our mission to care for children wherever they are. Your kindness makes a
          difference!
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

.donate-button-container,
.donate-manual-container {
  background: var(--background);
  padding: 2rem;
  border-radius: 8px;
}

.donate-title,
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

.donate-container {
  background: transparent;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.error-message,
.loading-message {
  text-align: center;
  color: red;
  font-size: 1rem;
  margin: 2rem auto;
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

  .donate-button-container,
  .donate-manual-container {
    padding: 1rem;
  }

  .donate-title,
  .title {
    font-size: 1.25rem;
  }

  .sub-title {
    font-size: 1rem;
  }
}
</style>