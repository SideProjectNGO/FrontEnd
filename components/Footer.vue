<script setup lang="ts">
const currentYear = new Date().getFullYear();
const {t} = useI18n();
</script>

<template>
  <div class="footer">
    <div class="main-container">

      <div class="links-item">

        <div class="logo-container">
          <h2></h2>
          <div class="logo-img">
            <a>
              <img src="../public/images/landing-image-1.jpeg" alt="logo">
            </a>
          </div>
        </div>

        <div class="links">
          <h2>{{ t('quickLinksSection') }}</h2>
          <ul>
            <li>
              <router-link to="/home">
                <span>
                  <UIcon name="material-symbols-contact-page" class="links-icon"/>
                </span>{{ t('linksTitle.home') }}
              </router-link>
            </li>
            <li>
              <router-link to="/home">
                <span>
                  <UIcon name="mdi-about" class="links-icon"/>
                </span>{{ t('linksTitle.about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/home">
                <span>
                  <UIcon name="mdi-book" class="links-icon"/>
                </span>{{ t('linksTitle.stories') }}
              </router-link>
            </li>
            <li>
              <router-link to="/articles" class="links-icon">
                <span>
                  <UIcon name="mdi-book" class="links-icon"/>
                </span>{{ t('linksTitle.articles') }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="social-media-section">
          <h2>Our Channels</h2>
          <ul class="social-icons">
            <li>
              <a href="https://www.instagram.com/yourpage" target="_blank">
                <UIcon name="mdi-instagram" class="links-icon"/>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/yourpage" target="_blank">
                <UIcon name="mdi-facebook" class="links-icon"/>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@yourpage" target="_blank">
                <UIcon name="mdi-user" class="links-icon"/>
                <span>TikTok</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/yourchannel" target="_blank">
                <UIcon name="mdi-telegram" class="links-icon"/>
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/yourphonenumber" target="_blank">
                <UIcon name="mdi-whatsapp" class="links-icon"/>
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="divider">
      <div class="socials-section">
        <div class="footer-bottom">
          <p>{{ t('footerText.copyright', {year: currentYear}) }}</p>
        </div>
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
  display: block;
  padding: 0 5%;
}

@media (max-width: 800px) {
  .main-container {
    padding: 0;
    margin: 0;
  }
}

.links-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;
}

.links-item div {
  flex: 1;
  margin-right: 2rem;
}

.logo-container {
  text-align: center;
  margin: 1rem 0;
}

.logo-container .logo-img img {
  width: 100%;
  max-width: 250px;
  height: auto;
  align-content: center;
  justify-content: center;
  margin: auto;
}

.divider {
  border: 2px solid var(--text-color);
}

@media (max-width: 800px) {
  .links-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-container .logo-img img {
    max-width: 220px;
  }
}

.links {
  margin-top: 2rem;
}

.links h2,
.social-media-section h2,
.logo-container h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin: 15px 0;
  justify-content: start;
  text-align: start;
}

.links ul {
  padding: 0;
  margin: 0;
}

.links ul li {
  list-style: none;
  font-size: 1rem;
  padding: 5px 0;
  border-radius: 5px;
}

.links ul li a {
  color: var(--text-color);
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.links ul li:hover {
  color: var(--text-hover);
  background-color: var(--primary-hover);
}

.links-icon {
  margin-right: 15px;
}

.social-media-section {
  text-align: center;
  padding: 1rem;
}

.social-icons {
  display: block;
  justify-content: center;
  gap: 15px;
  padding: 0;
  list-style: none;
  color: var(--text-color);
}

.social-icons li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-icons a {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #007bff;
}

.social-icons svg {
  font-size: 24px;
}

@media (max-width: 1200px) {
  .links ul li {
    text-align: start;
  }
}

.footer-bottom {
  text-align: center;
  font-size: 1.5rem;
  color: var(--text-color);
  padding: 2rem 0;
  animation: fadeIn 3s ease-in;
}

.footer-bottom a {
  color: var(--text-color);
}

a:hover {
  color: var(--text-hover);
}

.translate-navbar-container button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  color: var(--primary-color);
  padding: 8px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.translate-navbar-container button:hover {
  background-color: var(--primary-hover);
  color: var(--text-hover);
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
