<script setup lang="ts">
import {ref, computed} from "vue";
import {useI18n} from "vue-i18n";

interface TeamMember {
  member_id: number;
  name: string;
  countries: string;
  flag_icon_name: string;
  position: string;
  photo_url: string;
}

const {t} = useI18n();
const team: TeamMember[] = [
  {
    member_id: 1,
    name: "HJ. MOHD AZMI B. ABDUL HAMID",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.Chairman",
    photo_url: "images/team/HJ. MOHD AZMI B. ABDUL HAMID.png",
  },
  {
    member_id: 2,
    name: "PN. AINI HAZRIN AHMAD ANUAR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.VICE_CHAIRMAN",
    photo_url: "images/team/PN. AINI HAZRIN AHMAD ANUAR.png",
  },
  {
    member_id: 3,
    name: "DR. SITI MUYASSARAH ABD NASIR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.SECRETARY",
    photo_url: "images/team/DR. SITI MUYASSARAH ABD NASIR.png",
  },
  {
    member_id: 4,
    name: "PN. WAN NOR SHEILA MIOR SHARIFFUDIN",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.socmed_instagram",
    photo_url: "images/team/PN. WAN NOR SHEILA MIOR SHARIFFUDIN.png",
  },
  {
    member_id: 5,
    name: "PN. AZZAMURNI MOHTAR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.ADVOCACY",
    photo_url: "images/team/PN. AZZAMURNI MOHTAR.png",
  },
  {
    member_id: 6,
    name: "PN. NORHAZALIANA AFFENDI",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.PUBLICITY_PROMOTION",
    photo_url: "images/team/PN. NORHAZALIANA AFFENDI.png",
  },
  {
    member_id: 7,
    name: "DR. SHARIFAH NADIYA BT SYED YAHYA",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.SPONSORSHIP",
    photo_url: "images/team/DR. SHARIFAH NADIYA BT SYED YAHYA.png",
  },
  {
    member_id: 8,
    name: "PN. AZIZAH SIRON",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.INTERNATIONAL_LIASON",
    photo_url: "images/team/PN. AZIZAH SIRON.png",
  },
  {
    member_id: 9,
    name: "CIK NUR AKHTAR AMIN",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.PROTOCOL",
    photo_url: "images/team/CIK NUR AKHTAR AMIN.png",
  },
  {
    member_id: 10,
    name: "PN. SITI KHAIRUL BARIYAH MOHAMOOD",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.socmed_facebook",
    photo_url: "images/team/PN. SITI KHAIRUL BARIYAH MOHAMOOD.png",
  },
  {
    member_id: 11,
    name: "PN. ZURINA ABDUL KADIR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.MULTIMEDIA",
    photo_url: "images/team/PN. ZURINA ABDUL KADIR.png",
  },
  {
    member_id: 12,
    name: "PN. QUQRIAH AQYNIZA BINTI ZAKARIA",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.DOCUMENTATION_REPORT",
    photo_url: "images/team/PN. QUQRIAH AQYNIZA BINTI ZAKARIA.png",
  },
  {
    member_id: 13,
    name: "PN. MAHANI ZAKARIA",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.LOGISTIC",
    photo_url: "images/team/PN. MAHANI ZAKARIA.png",
  },
  {
    member_id: 14,
    name: "EN. MOHD LUTFI B. MOHD KHIDIR",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.SOCMED_TIKTOK",
    photo_url: "images/team/EN. MOHD LUTFI B. MOHD KHIDIR.png",
  },
  {
    member_id: 15,
    name: "DR. SITI FARIZA BINTI MOHAMAD ISA",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.Public_Relation_Officer",
    photo_url: "images/team/DR. SITI FARIZA BINTI MOHAMAD ISA.png",
  },
  {
    member_id: 16,
    name: "MOHD REDZUAN BIN ZULKIFLEE",
    countries: "Malaysia",
    flag_icon_name: "twemoji-flag-malaysia",
    position: "team_member_position.LOGISTIC",
    photo_url: "images/team/MOHD REDZUAN BIN ZULKIFLEE.png",
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
    <h2 class="team-title">{{ t('team.team_title') }}</h2>

    <div class="team-president-info">
      <div class="image-container">
        <img
            src="../public/images/team/HJ.%20MOHD%20AZMI%20B.%20ABDUL%20HAMID.png"
            :alt="t('president.altText')"
            class="president-image"
            loading="lazy"
        />
      </div>

      <div class="description-container">
        <h3 class="president-name">{{ t('team.president.name') }}</h3>
        <p class="president-description">{{ t('team.president.description') }}</p>
      </div>
    </div>

    <div class="team-grid">
      <div v-for="member in visibleTeam" :key="member.member_id" class="team-card">
        <div class="team-photo">
          <img :src="member.photo_url" :alt="`Photo of ${member.name}`"/>
        </div>
        <div class="team-details">
          <div class="box">
            <h2>{{ member.name }}</h2>
            <p>
              <UIcon name="twemoji-flag-malaysia" class="flag-icon"/>
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

.team-president-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 20px;
}

.image-container {
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.president-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description-container {
  text-align: center;
}

.president-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.president-description {
  font-size: 1rem;
  color: var(--primary-color);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  text-align: justify;
}

@media (max-width: 768px) {
  .team-president-info {
    flex-direction: column;
    text-align: center;
  }

  .image-container {
    width: 150px;
    height: 150px;
  }

  .president-name {
    font-size: 1.2rem;
  }

  .president-description {
    font-size: 0.9rem;
  }
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

