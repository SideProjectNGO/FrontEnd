<template>
  <div class="popup-overlay" @click.self="$emit('close')">
    <div class="popup">
      <div class="container">
        <div class="popup-header">
          <span>Annual Year Popup</span>
          <span class="close-button" @click="$emit('close')">X</span>
        </div>
        <div class="popup-content">
          <div class="item-box">
            <h2 class="title">Our Annual Report: A Year of Impact</h2>
            <p class="description">
              Discover the incredible progress we’ve made at MyChild over the past year. Our annual report highlights the achievements, challenges, and milestones that have shaped our mission to empower children. From the success stories of the children we serve to the dedication of our team and supporters, this report offers a comprehensive look at the impact we’ve had together.
            </p>
            <button class="download-btn">Download</button>
          </div>
          <div class="image-box">
            <img src="../public/images/landing-image.jpeg" alt="annual-report" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeInOverlay 0.3s ease-in-out;
}

.popup {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  max-width: 700px;
  width: 90%;
  animation: slideUp 0.3s ease-in-out;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.close-button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
}

.popup-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  gap: 20px;
}

.item-box {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.description {
  font-size: 0.9rem;
  text-align: justify;
  color: #333;
}

.download-btn {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
}

.image-box img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .popup-content {
    grid-template-columns: 1fr;
  }

  .item-box {
    margin-bottom: 20px;
  }

  .popup-header {
    font-size: 16px;
  }

  .description {
    font-size: 0.85rem;
  }

  .download-btn {
    width: 100%;
  }

  .image-box img {
    max-width: 100%;
  }
}
</style>
