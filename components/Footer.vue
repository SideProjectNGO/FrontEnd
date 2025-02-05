<script setup lang="ts">
const currentYear = new Date().getFullYear();
const {t} = useI18n();
</script>

<template>
  <div class="footer">
    <div class="main-container">
      <div class="links-item">
        <div class="logo-container">
          <div class="logo-img">
            <a>
              <img src="../public/images/landing-image-1.jpeg" alt="logo">
            </a>
          </div>
          <div class="social-icons">
            <ul>
              <li>
                <a href="https:///" target="_blank" rel="noopener">
                  <UIcon name="ic-baseline-facebook"/>
                </a>
              </li>
              <li>
                <a href="https://" target="_blank" rel="noopener">
                  <UIcon name="mdi-twitter"/>
                </a>
              </li>
              <li>
                <a href="https://" target="_blank" rel="noopener">
                  <UIcon name="mdi-youtube"/>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener">
                  <UIcon name="mdi-instagram"/>
                </a>
              </li>
            </ul>
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

        <div class="subscribe-section">
          <h1 class="subscribe-title">{{ t('footerText.subscribe') }}</h1>
          <div class="container-form">
            <div class="subscribe-input">
              <input type="email" :placeholder="t('subscribeForm.placeholder')"/>
            </div>
            <div class="subscribe-button">
              <button class="subscribe-btn">{{ t('subscribeForm.button') }}</button>
            </div>
          </div>
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
  flex-direction: row;
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
  height: auto;
  max-width: 250px;
  justify-content: center;
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

  .logo-container .logo-img{
    margin: 0 auto;
  }

  .logo-container .logo-img img {
    max-width: 220px;
    margin: 0 auto;
  }
}

.links {
  margin-top: 2rem;
}

.links h2,
.subscribe-section h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin: 15px 0;
}

.links ul {
  padding-left: 0;
  margin: 0;
}

.links ul li {
  list-style: none;
  font-size: 1rem;
  padding: 5px 0;
  border-radius: 5px;
}

.links-icon {
  font-size: 1.2rem;
  margin-right: 15px;
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

.subscribe-section {
  text-align: center;
  padding: 1rem;
}

.subscribe-title {
  font-size: 1.5rem;
  color: var(--text-color);
}

.container-form {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 1rem;
}

@media (max-width: 800px) {
  .container-form {
    flex-direction: column;
    align-items: center;
  }

  .container-form div {
    margin: 1rem 0;
  }

  .subscribe-section {
    display: none;
  }
}

.subscribe-input input {
  padding: .5rem;
  font-size: 1rem;
  width: 12rem;
  border: 1px solid var(--text-color);
  border-radius: 5px;
}

.subscribe-button button {
  padding: .5rem;
  font-size: 1rem;
  background-color: var(--text-color);
  color: var(--primary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.subscribe-button button:hover {
  background-color: var(--text-hover);
}

.social-icons {
  width: 70%;
  margin: 0 auto;
}

.social-icons ul {
  display: flex;
  justify-content: space-between;
  gap: 0 10px;
  margin: 20px 0;
}

.social-icons ul li {
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 50%;
  color: var(--text-color);
  transition: transform 0.3s ease-in-out;
}

.social-icons ul li:hover {
  color: var(--text-hover);
  transform: scale(1.1);
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
