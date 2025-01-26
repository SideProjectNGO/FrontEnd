<script setup lang="ts">
import {ref, computed} from "vue";

interface TeamMember {
  member_id: number;
  name: string;
  countries: string[];
  bio: string;
  position: string;
  photo_url: string;
}

const team: TeamMember[] = [
  {
    member_id: 1,
    name: "Alice Johnson",
    countries: ["United States"],
    bio: `
      Alice is a highly skilled Software Engineer with 8 years of experience in building scalable and efficient software systems. She specializes in back-end development and has worked across various industries, developing robust solutions for complex challenges.
    `,
    position: "Software Engineer",
    photo_url: "https://example.com/images/alice-johnson.jpg",
  },
  {
    member_id: 2,
    name: "Bob Carter",
    countries: ["United Kingdom"],
    bio: `
      Bob is a Senior Developer with expertise in both front-end and back-end technologies. With over 12 years in the software development industry, Bob excels in leading teams and ensuring best practices in software design.
    `,
    position: "Lead Software Engineer",
    photo_url: "https://example.com/images/bob-carter.jpg",
  },
  {
    member_id: 3,
    name: "Charles Williams",
    countries: ["Canada"],
    bio: `
      Charles is an experienced Software Architect, skilled in designing scalable and maintainable software systems. He has a deep understanding of cloud infrastructure and microservices architecture, which he applies to optimize performance and user experience.
    `,
    position: "Software Architect",
    photo_url: "https://example.com/images/charles-williams.jpg",
  },
  {
    member_id: 4,
    name: "Diana Harris",
    countries: ["Australia"],
    bio: `
      Diana is a Product Manager with a background in both engineering and business. She works closely with stakeholders to ensure that the product aligns with the company’s goals while meeting market demands.
    `,
    position: "Product Manager",
    photo_url: "https://example.com/images/diana-harris.jpg",
  },
  {
    member_id: 5,
    name: "Eve Scott",
    countries: ["Germany"],
    bio: `
      Eve is a DevOps Engineer with experience in automating deployment pipelines and managing cloud infrastructure. She ensures continuous integration and delivery, optimizing operations for maximum efficiency.
    `,
    position: "DevOps Engineer",
    photo_url: "https://example.com/images/eve-scott.jpg",
  },
  {
    member_id: 6,
    name: "Frank Taylor",
    countries: ["France"],
    bio: `
      Frank is a QA Engineer with a focus on automation and performance testing. He works to ensure that the software runs smoothly and meets all quality standards before release.
    `,
    position: "Quality Assurance Engineer",
    photo_url: "https://example.com/images/frank-taylor.jpg",
  },
  {
    member_id: 7,
    name: "Grace Lee",
    countries: ["South Korea"],
    bio: `
      Grace is a UX/UI Designer who focuses on creating intuitive and user-friendly interfaces. Her goal is to ensure that users have a seamless experience with the software, enhancing both usability and engagement.
    `,
    position: "UX/UI Designer",
    photo_url: "https://example.com/images/grace-lee.jpg",
  },
  {
    member_id: 8,
    name: "Harry Adams",
    countries: ["United States"],
    bio: `
      Harry is the CTO of the company, responsible for the overall technology strategy. He leads the engineering teams, ensuring that the company is always ahead of the curve in adopting new technologies and best practices.
    `,
    position: "Chief Technology Officer",
    photo_url: "https://example.com/images/harry-adams.jpg",
  },
  {
    member_id: 9,
    name: "Isabel Moore",
    countries: ["Canada"],
    bio: `
      Isabel is an Agile Coach with a focus on Scrum methodologies. She works with teams to ensure they are following Agile principles, improving collaboration, and delivering high-quality software on time.
    `,
    position: "Scrum Master",
    photo_url: "https://example.com/images/isabel-moore.jpg",
  },
  {
    member_id: 10,
    name: "James Green",
    countries: ["United Kingdom"],
    bio: `
      James is a Customer Success Engineer, helping clients maximize the value of their software solutions. He provides support, training, and troubleshooting to ensure that customers have a positive experience and achieve their business goals.
    `,
    position: "Customer Success Engineer",
    photo_url: "https://example.com/images/james-green.jpg",
  },
];


const currentIndex = ref(0);
const teamPerPage = 5;

const visibleTeam = computed(() =>
    team.slice(currentIndex.value, currentIndex.value + teamPerPage)
);

function nextPage() {
  currentIndex.value =
      (currentIndex.value + teamPerPage) % team.length;
}

function prevPage() {
  currentIndex.value =
      (currentIndex.value - teamPerPage + team.length) % team.length;
}
</script>

<template>
  <div class="team-section">
    <div class="team-grid">
      <div v-for="member in visibleTeam" :key="member.member_id" class="team-card">
        <div class="team-photo">
          <img src="/public/images/team-member.jpeg" :alt="`Photo of ${member.name}`"/>
        </div>
        <div class="team-details">
          <h2>{{ member.name }}</h2>
          <h3>{{ member.position }}</h3>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" class="btn">Previous</button>
      <button @click="nextPage" class="btn">Next</button>
    </div>
  </div>
</template>

<style scoped>
.team-section {
  padding: 40px 20px;
  background: url("../public/images/bg-team.jpg") no-repeat center center / cover;
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  width: 220px;
  min-height: 300px;
  padding: 20px;
  text-align: center;
  border: 3px solid #ddd;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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

.team-details h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.team-details h3 {
  font-size: 16px;
  color: #555;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
}

.btn {
  padding: 10px 20px;
  border: 2px solid var(--primary-hover);
  background: transparent;
  color: var(--primary-color);
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
  background: var(--primary-hover);
  color: var(--text-hover);
}
</style>

