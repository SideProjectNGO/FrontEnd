<script setup lang="ts">
const currentYear = new Date().getFullYear();
const {t} = useI18n();
</script>

<template>
  <div class="footer">
    <div class="main-container">
      <div class="links-item">
        <div class="logo-container">
          <h2>{{ t('footer.logo') }}</h2>
          <div class="logo-img">
            <a>
              <img src="../public/images/MyChild%20logo.png" alt="logo">
            </a>
          </div>
        </div>

        <div class="links">
          <h2>{{ t('footer.quickLinksSection') }}</h2>
          <ul class="links-list">
            <li>
              <router-link to="/home">
                <UIcon name="material-symbols-contact-page" class="links-icon"/>
                {{ t('footer.linksTitle.home') }}
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <UIcon name="mdi-about" class="links-icon"/>
                {{ t('footer.linksTitle.about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/stories">
                <UIcon name="mdi-book" class="links-icon"/>
                {{ t('footer.linksTitle.stories') }}
              </router-link>
            </li>
            <li>
              <router-link to="/articles">
                <UIcon name="mdi-book" class="links-icon"/>
                {{ t('footer.linksTitle.articles') }}
              </router-link>
            </li>
            <li>
              <NuxtLink to="/volunteer-form">
                <UIcon name="mdi-user" class="links-icon"/>
                {{ t("footer.linksTitle.volunteer") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/donate">
                <UIcon name="mdi-money" class="links-icon"/>
                {{ t("footer.linksTitle.donate") }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="social-media-section">
          <h2>{{ t('footer.connectWithUs') }}</h2>
          <ul class="links-list">
            <li>
              <a href="https://www.instagram.com/mychild_polimas?igsh=MW5pOWZmdDYyOGU1cw==" target="_blank">
                <UIcon name="mdi-instagram" class="links-icon"/>
                {{ t('footer.socialMedia.instagram.name') }}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/12ADScDU6hV/?mibextid=wwXIfr" target="_blank">
                <UIcon name="mdi-facebook" class="links-icon"/>
                {{ t('footer.socialMedia.facebook.name') }}
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@yourpage" target="_blank">
                <UIcon name="mdi-user" class="links-icon"/>
                {{ t('footer.socialMedia.tiktok.name') }}
              </a>
            </li>
            <li>
              <a  href="https://wa.me/60194021066" target="_blank">
                <UIcon name="mdi-whatsapp" class="links-icon"/>
                {{ t('footer.socialMedia.whatsapp.name') }}
              </a>
            </li>
            <li>
              <a href="mailto:mychild2021is@gmail.com">
                <UIcon name="mdi-email" class="links-icon"/>
                {{ t('footer.socialMedia.email.name') }}
              </a>
            </li>
          </ul>

        </div>

      </div>

      <hr class="divider">

      <div class="footer-bottom">
        <p>{{ t('footer.copyright', { year: currentYear }) }}</p>
      </div>

      <TranslateNavbar/>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 1em 0;
  background-color: var(--primary-color);
  animation: fadeIn 1s ease-in;
}

.main-container {
  display: flex;
  flex-direction: column;
  padding: 0 5%;
}

.links-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0;
}

.links-item > div {
  flex: 1;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.links-item h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin-top: 0;
  padding-bottom: 10px;
}

.logo-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container .logo-img img {
  max-width: 180px;
  height: auto;
  margin-top: 10px;
}

.links ul,
.social-media-section ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.links ul li,
.social-media-section ul li {
  font-size: 1rem;
  padding: 5px 0;
}

.links ul li a,
.social-media-section ul li a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.links ul li a:hover,
.social-media-section ul li a:hover {
  color: var(--primary-hover);
}

.links-icon {
  margin-right: 10px;
}

.footer-bottom {
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-color);
  padding: 1.5rem 0;
}

.divider {
  border: 1px solid var(--text-color);
}

@media (max-width: 800px) {
  .links-item {
    flex-direction: column;
    align-items: start;
    text-align: start;
    margin: 1rem auto;
  }

  .links-item > div {
    min-height: auto;
  }

  .logo-container .logo-img img {
    max-width: 150px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

