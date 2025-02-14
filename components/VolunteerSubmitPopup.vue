<script setup>
import {defineEmits, defineProps} from 'vue'
import {useI18n} from "#imports";

const {t} = useI18n();
const props = defineProps({
  show: Boolean
})
const emit = defineEmits(['update:show'])

const closePopup = () => {
  emit('update:show', false)
}
const today = new Date();
const fullDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
</script>

<template>
  <div v-if="show" class="popup-overlay" @click="closePopup">
    <div class="popup-container" @click.stop>
      <div class="notification">
        <div class="logo-box">
          <img src="/images/MyChild%20logo.png" alt="MyChild-logo">
        </div>
        <div class="thank-info">
          <p>
            {{ t("volunteer.thank_you_message") }}
            <br><br>
            <strong>{{ t("volunteer.submission_date") }}</strong> {{ fullDate }}
          </p>
          <h2>{{ t("volunteer.appreciation") }}</h2>
        </div>
      </div>
      <hr class="divider">
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 50%;
  width: 80%;
  position: relative;
  text-align: center;
  z-index: 1001;
}

@media (max-width: 1200px) {
  .popup-container {
    border-radius: 0;
    max-width: 100%;
    width: 100%;
  }
}


.logo-box {
  width: 200px;
  margin: 0 auto 5rem auto;
}
span {
  margin: 0 5px;
}

.thank-info {
  margin-top: -5rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
  line-height: 2.5rem;
}

p {
  font-size: 1.2rem;
  line-height: 2rem;
  color: var(--primary-color);
  text-align: justify;
  margin: 5% 3%;

}

.divider {
  margin: 5% 3%;
  border: 1px solid var(--primary-color);;
}

</style>
