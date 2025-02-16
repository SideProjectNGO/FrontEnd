<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

interface TeamMember {
  member_id: number;
  name: string;
  countries: string;
  flag_icon_name: string;
  position: string;
  photo_url: string;
}

const { t } = useI18n();
const team: TeamMember[] = [
  {
    member_id: 1,
    name: "PN. AINI HAZRIN AHMAD ANUAR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "VICE_CHAIRMAN",
    photo_url: "images/team/PN. AINI HAZRIN AHMAD ANUAR.jpg",
  },
  {
    member_id: 2,
    name: "DR. SITI MUYASSARAH ABD NASIR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "SECRETARY",
    photo_url: "images/team/DR. SITI MUYASSARAH ABD NASIR.jpg",
  },
  {
    member_id: 3,
    name: "HJ. MOHD AZMI B. ABDUL HAMID",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "Chairman",
    photo_url: "images/team/HJ. MOHD AZMI B. ABDUL HAMID.avif",
  },
  {
    member_id: 4,
    name: "PN. WAN NOR SHEILA MIOR SHARIFFUDIN",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "SOCMED- INSTAGRAM",
    photo_url: "images/team/PN. WAN NOR SHEILA MIOR SHARIFFUDIN.jpg",
  },
  {
    member_id: 5,
    name: "PN. AZZAMURNI MOHTAR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "ADVOCACY",
    photo_url: "images/team/PN. AZZAMURNI MOHTAR.jpg",
  },
  {
    member_id: 6,
    name: "PN. NORHAZALIANA AFFENDI",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "PUBLICITY & PROMOTION",
    photo_url: "images/team/PN. NORHAZALIANA AFFENDI.jpg",
  },
  {
    member_id: 7,
    name: "DR. SHARIFAH NADIYA BT SYED YAHYA",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "SPONSORSHIP",
    photo_url: "images/team/DR. SHARIFAH NADIYA BT SYED YAHYA.jpg",
  },
  {
    member_id: 8,
    name: "PN. AZIZAH SIRON",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "INTERNATIONAL LIASON",
    photo_url: "images/team/PN. AZIZAH SIRON.jpg",
  },
  {
    member_id: 9,
    name: "CIK NUR AKHTAR AMIN",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "PROTOCOL",
    photo_url: "images/team/CIK NUR AKHTAR AMIN.jpg",
  },
  {
    member_id: 10,
    name: "PN. SITI KHAIRUL BARIYAH MOHAMOOD",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "SOCMED (FACEBOOK)",
    photo_url: "images/team/PN. SITI KHAIRUL BARIYAH MOHAMOOD.jpg",
  },
  {
    member_id: 11,
    name: "PN. ZURINA ABDUL KADIR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "MULTIMEDIA",
    photo_url: "images/team/PN. ZURINA ABDUL KADIR.jpg",
  },
  {
    member_id: 12,
    name: "PN. QUQRIAH AQYNIZA BINTI ZAKARIA",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "DOCUMENTATION & REPORT",
    photo_url: "images/team/PN. QUQRIAH AQYNIZA BINTI ZAKARIA.jpg",
  },
  {
    member_id: 13,
    name: "PN. MAHANI ZAKARIA",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "LOGISTIC",
    photo_url: "images/team/PN. MAHANI ZAKARIA.jpg",
  },
  {
    member_id: 14,
    name: "EN. MOHD LUTFI B. MOHD KHIDIR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "SOCMED- TIKTOK",
    photo_url: "images/team/EN. MOHD LUTFI B. MOHD KHIDIR.jpg",
  },
  {
    member_id: 15,
    name: "DR. SITI FARIZA BINTI MOHAMAD ISA",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "Public Relation Officer",
    photo_url: "images/team/DR. SITI FARIZA BINTI MOHAMAD ISA.jpg",
  },
  {
    member_id: 16,
    name: "MOHD REDZUAN BIN ZULKIFLEE",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "LOGISTIC",
    photo_url: "images/team/MOHD REDZUAN BIN ZULKIFLEE.jpg",
  }
];
const currentIndex = ref(0);
const teamPerPage = 5;
const visibleTeam = computed(() => team.slice(currentIndex.value, currentIndex.value + teamPerPage));

function nextPage() {
  currentIndex.value = (currentIndex.value + teamPerPage) % team.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - teamPerPage + team.length) % team.length;
}

</script>

<template>
  <div class="team-section">
    <h2 class="team-title">{{ t('team.meet_our_team') }}</h2>
    <div class="team-grid">
      <div v-for="member in visibleTeam" :key="member.member_id" class="team-card">
        <div class="team-photo">
          <img :src="member.photo_url" :alt="`Photo of ${member.name}`"/>
        </div>
        <div class="team-details">
          <div class="box">
            <h2>{{ member.name }}</h2>
            <p>
              <UIcon name="twemoji-flag-malaysia" class="flag-icon" />
              {{ member.countries }}
            </p>
          </div>
          <h3>{{ t(`team.${member.position.toLowerCase().replace(/[\s&-]/g, "_")}`) }}</h3>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="btn-container">
        <button @click="prevPage">
          {{ t('team.previous') }}
        </button>
        <button @click="nextPage">
          {{ t('team.next') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-section {
  padding: 40px 20px;
  background-color: var(--background);
}

.team-title {
  text-align: center;
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 40px 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  background: var(--background);
  border: 3px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: var(--primary-color);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.team-photo {
  min-height: 150px;
}

.team-photo img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 15px auto;
}

.team-details .box {
  min-height: 90px;
}

.team-details h2 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.team-details p {
  font-size: 1rem;
}

.team-details .flag-icon {
  margin-right: 10px;
}

.team-details h3 {
  font-size: .8rem;
  font-weight: 800;
}

.container .btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  gap: 40px;
}

.container .btn-container button {
  padding: 10px;
  border: 2px solid var(--primary-color);
  min-width: 120px;
  border-radius: 15px;
  color: var(--primary-color);
}

.container .btn-container button:hover {
  background: var(--primary-color);
  color: var(--text-color);
  transition: background-color 0.3s ease-in-out;
}
</style>

