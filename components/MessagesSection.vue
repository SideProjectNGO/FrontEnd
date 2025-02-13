<script setup lang="ts">
import {ref, computed} from 'vue';
import {useI18n} from '#imports';

const {t} = useI18n();

interface Message {
  id: number;
  message: string;
  image: string;
  name: string;
}

const messages: Message[] = [
  {
    id: 1,
    message: t("messages.ainiHazrin"),
    image: "images/team/PN. AINI HAZRIN AHMAD ANUAR.jpg",
    name: "PN. AINI HAZRIN AHMAD ANUAR",
  },
  {
    id: 2,
    message: t("messages.sitiMuyassarah"),
    image: "/images/team/DR. SITI MUYASSARAH ABD NASIR.jpg",
    name: "DR. SITI MUYASSARAH ABD NASIR",
  },
  {
    id: 3,
    message: t("messages.mohdAzmi"),
    image: "/images/team/HJ. MOHD AZMI B. ABDUL HAMID.avif",
    name: "HJ. MOHD AZMI B. ABDUL HAMID",
  },
  {
    id: 4,
    message: t("messages.wanNorSheila"),
    image: "/images/team/PN. WAN NOR SHEILA MIOR SHARIFFUDIN.jpg",
    name: "PN. WAN NOR SHEILA MIOR SHARIFFUDIN",
  },
  {
    id: 5,
    message: t("messages.azzamurni"),
    image: "/images/team/PN. AZZAMURNI MOHTAR.jpg",
    name: "PN. AZZAMURNI MOHTAR",
  },
  {
    id: 6,
    message: t("messages.norhazaliana"),
    image: "/images/team/PN. NORHAZALIANA AFFENDI.jpg",
    name: "PN. NORHAZALIANA AFFENDI",
  },
  {
    id: 7,
    message: t("messages.sharifahNadiya"),
    image: "/images/team/DR. SHARIFAH NADIYA BT SYED YAHYA.jpg",
    name: "DR. SHARIFAH NADIYA BT SYED YAHYA",
  },
  {
    id: 8,
    message: t("messages.azizahSiron"),
    image: "/images/team/PN. AZIZAH SIRON.jpg",
    name: "PN. AZIZAH SIRON",
  },
  {
    id: 9,
    message: t("messages.nurAkhtar"),
    image: "/images/team/CIK NUR AKHTAR AMIN.jpg",
    name: "CIK NUR AKHTAR AMIN",
  },
  {
    id: 10,
    message: t("messages.sitiKhairul"),
    image: "/images/team/PN. SITI KHAIRUL BARIYAH MOHAMOOD.jpg",
    name: "PN. SITI KHAIRUL BARIYAH MOHAMOOD",
  },
  {
    id: 11,
    message: t("messages.zurina"),
    image: "/images/team/PN. ZURINA ABDUL KADIR.jpg",
    name: "PN. ZURINA ABDUL KADIR",
  },
  {
    id: 12,
    message: t("messages.quqriah"),
    image: "/images/team/PN. QUQRIAH AQYNIZA BINTI ZAKARIA.jpg",
    name: "PN. QUQRIAH AQYNIZA BINTI ZAKARIA",
  },
  {
    id: 13,
    message: t("messages.mahani"),
    image: "/images/team/PN. MAHANI ZAKARIA.jpg",
    name: "PN. MAHANI ZAKARIA",
  },
  {
    id: 14,
    message: t("messages.mohdLutfi"),
    image: "/images/team/EN. MOHD LUTFI B. MOHD KHIDIR.jpg",
    name: "EN. MOHD LUTFI B. MOHD KHIDIR",
  },
  {
    id: 15,
    message: t("messages.sitiFariza"),
    image: "/images/team/DR. SITI FARIZA BINTI MOHAMAD ISA.jpg",
    name: "DR. SITI FARIZA BINTI MOHAMAD ISA",
  },
  {
    id: 16,
    message: t("messages.mohdRedzuan"),
    image: "/images/team/MOHD REDZUAN BIN ZULKIFLEE.jpg",
    name: "MOHD REDZUAN BIN ZULKIFLEE",
  },
];
const currentIndex = ref(0);
const itemsPerPage = 1;
const visibleMessages = computed(() =>
    messages.slice(currentIndex.value, currentIndex.value + itemsPerPage)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % messages.length;
}
function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + messages.length) % messages.length;
}
</script>

<template>
  <section class="messages-section">
    <div class="content-wrapper">
      <button @click="prevPage" aria-label="Previous message" class="nav-btn">
        <UIcon name="mdi-arrow-left" />
      </button>

      <div
          v-for="message in visibleMessages"
          :key="message.id"
          class="message-card"
          :style="{ animation: 'fadeIn 1s ease-out' }"
      >
        <div v-if="message.image" class="message-image">
          <img :src="message.image" alt="Message Image" loading="lazy" />
        </div>
        <div class="message-text">
          <p class="message-description">{{ message.message }}</p>
        </div>
      </div>

      <button @click="nextPage" aria-label="Next message" class="nav-btn">
        <UIcon name="mdi-arrow-right" />
      </button>
    </div>

    <div class="navigation-buttons">
      <button @click="prevPage" aria-label="Previous message" class="nav-btn">
        <UIcon name="mdi-arrow-left" />
      </button>
      <button @click="nextPage" aria-label="Next message" class="nav-btn">
        <UIcon name="mdi-arrow-right" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.messages-section {
  height: 100vh;
  margin: auto;
  background-image: url("../public/images/message-bg.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.message-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color);
  width: 70%;
  min-width: 600px;
  margin: 20px auto;
  padding: 20px;
  animation: fadeIn 1s ease-out;
  box-shadow: rgba(149, 157, 165, 0.5) 0 8px 24px;
  border-radius: 50px 0;
}

.message-image {
  width: 150px;
  height: 150px;
  min-height: 170px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  align-content: center;
}

.message-text {
  text-align: center;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-description {
  font-size: 1.2rem;
  color: var(--text-color);
}

.nav-btn {
  background-color: transparent;
  cursor: pointer;
  font-size: 2rem;
  transition: transform 0.3s ease, color 0.3s ease;
  color: var(--primary-color);
  width: 50px;
  height: 50px;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-btn:hover {
  color: var(--primary-hover);
  transform: scale(1.2);
}

.navigation-buttons {
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    padding: 20px;
  }

  .content-wrapper .nav-btn {
    display: none;
  }

  .message-card {
    width: 100%;
    min-width: unset;
  }

  .message-text {
    min-height: 280px;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
  }

  .navigation-buttons .nav-btn {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    font-size: 1.5rem;
  }
}
</style>
