<script setup>
import {ref} from 'vue';
import Popup from '../components/AnnualYearPopup.vue';


const annualYearPopup = ref(false);

const openPopup = () => {
  annualYearPopup.value = true;
};

const closePopup = () => {
  annualYearPopup.value = false;
};
</script>

<template>
  <div class="annual-report">
    <div class="content-wrapper">
      <div class="text-box">
        <h2 class="report-title">Our Annual Report: A Year of Impact</h2>
        <p class="report-description">
          Discover the incredible progress we’ve made at MyChild over the past year. Our annual report highlights the
          achievements, challenges, and milestones that have shaped our mission to empower children. From the success
          stories of the children we serve to the dedication of our team and supporters, this report offers a
          comprehensive look at the impact we’ve had together.
        </p>
        <button @click="openPopup" class="open-popup-btn">Open Popup</button>
      </div>
      <div class="image-box">
        <img src="../public/images/partnership-logo-4.jpeg" alt="annual year report" />
      </div>
    </div>
    <Popup v-if="annualYearPopup" @close="closePopup"></Popup>
  </div>
</template>

<style scoped>

.annual-report {
  max-width: 1200px;
  margin: 0 auto;
}

.content-wrapper {
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem auto;
  align-items: center;
}

.text-box {
  display: flex;
  flex-direction: column;
}

.report-title {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.report-description {
  font-size: 0.9rem;
  text-align: justify;
  color: #333;
}

.open-popup-btn {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
}
</style>
