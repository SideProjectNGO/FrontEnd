<script setup lang="ts">
const currentYear = new Date().getFullYear();
const {t} = useI18n();
</script>

<template>
  <div class="footer">
    <div class="main-container">
      <div class="links-item">
        <div class="logo-container">
          <h2>{{ t('footerTitle.logo') }}</h2>
          <div class="logo-img">
            <a>
              <img src="../public/images/landing-image-1.jpeg" alt="logo">
            </a>
          </div>
        </div>

        <div class="links">
          <h2>{{ t('quickLinksSection') }}</h2>
          <ul class="links-list">
            <li>
              <router-link to="/home">
                <UIcon name="material-symbols-contact-page" class="links-icon"/>
                {{ t('linksTitle.home') }}
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <UIcon name="mdi-about" class="links-icon"/>
                {{ t('linksTitle.about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/stories">
                <UIcon name="mdi-book" class="links-icon"/>
                {{ t('linksTitle.stories') }}
              </router-link>
            </li>
            <li>
              <router-link to="/articles">
                <UIcon name="mdi-book" class="links-icon"/>
                {{ t('linksTitle.articles') }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="social-media-section">
          <h2>{{ t('footerTitle.connectWithUs') }}</h2>
          <ul class="links-list">
            <li>
              <a href="https://www.instagram.com/yourpage" target="_blank">
                <UIcon name="mdi-instagram" class="links-icon"/>
                {{ t('socialMedia.instagram') }}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/yourpage" target="_blank">
                <UIcon name="mdi-facebook" class="links-icon"/>
                {{ t('socialMedia.facebook') }}
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@yourpage" target="_blank">
                <UIcon name="mdi-user" class="links-icon"/>
                {{ t('socialMedia.tiktok') }}
              </a>
            </li>
            <li>
              <a href="https://t.me/yourchannel" target="_blank">
                <UIcon name="mdi-telegram" class="links-icon"/>
                {{ t('socialMedia.telegram') }}
              </a>
            </li>
            <li>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <UIcon name="mdi-whatsapp" class="links-icon"/>
                {{ t('socialMedia.whatsapp') }}
              </a>
            </li>
          </ul>
        </div>


      </div>

      <hr class="divider">

      <div class="footer-bottom">
        <p>{{ t('footerText.copyright', {year: currentYear}) }}</p>
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

