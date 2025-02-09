<script setup>
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-public-key-here");

const donate = async () => {
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_id_here", quantity: 1 }],
    mode: "payment",
    successUrl: "https://yourwebsite.com/success",
    cancelUrl: "https://yourwebsite.com/cancel",
  });

  if (error) console.error(error);
};
</script>

<template>
  <button @click="donate">Donate Now</button>
</template>
