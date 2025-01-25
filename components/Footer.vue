<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="footer">
    <div class="main-container">
      <div class="links-container">
        <div class="logo-container">
          <a>
            <img src="../public/images/logo.webp" alt="logo">
          </a>
        </div>
        <div class="links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <router-link to="/home">
              <span>
                <UIcon name="material-symbols-contact-page"
                />
              </span>Home
              </router-link>
            </li>
            <li>
              <router-link to="/home">
              <span>
                <UIcon name="mdi-about"
                />
              </span>About
              </router-link>
            </li>
            <li>
              <router-link to="/home">
              <span>
                <UIcon name="mdi-book"
                />
              </span>Stories
              </router-link>
            </li>
            <li>
              <router-link to="/articles">
              <span>
                <UIcon name="mdi-book"
                />
              </span>Articles
              </router-link>
            </li>

          </ul>
        </div>
        <div class="subscribe-section">
          <h1 class="subscribe-title">Subscribe</h1>
          <div class="container-form">
            <div class="subscribe-input">
              <input type="email" placeholder="Enter your email"/>
            </div>
            <div class="subscribe-button">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <hr class="divider">
      <div class="socials-section">
        <div class="socials-container">
          <div></div>
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
                <a href="https" target="_blank" rel="noopener">
                  <UIcon name="mdi-instagram"/>
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div class="footer-bottom">
          <p>&copy; Copyright <a href="">My child {{ currentYear }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 1em 0;
  background-color: var(--primary-color);
}

.main-container {
  display: block;
  padding: 0 100px;
}

@media (max-width: 800px) {
  .main-container {
    padding: 0;
  }
}

.links-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.links-container div {
  flex: calc(100% / 3);
}

.logo-container {
  max-width: 200px;
  max-height: 200px;
  margin: 0 auto;
}

@media (max-width: 800px) {
  .links-container {
    display: block;
  }
}

.divider {
  margin: 1rem 0;
  border: 2px solid var(--text-hover);
}

.links {
  margin: 0 5rem;
}

.links h2,
.subscribe-section h2,
.others-links-section h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin: 15px 0;
}

.links ul li,
.others-links-section ul li {
  list-style: none;
  font-size: 1rem;
}

.links ul li a span,
.others-links-section li a span {
  color: var(--text-color);
  margin-right: .5rem;
}

.links ul li a,
.others-links-section li a {
  color: var(--text-color);
  margin-right: .5rem;
}

.links ul li a:hover,
.others-links-section li a:hover {
  color: var(--text-hover);
  transition: .3s ease-in-out;
}

.subscribe-section {
  text-align: start;
  padding: 2rem;
}

.container-form {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

@media (max-width: 800px) {
  .container-form {
    display: block;
    margin: 0 auto;
  }

  .container-form div {
    margin: 3rem 0;
  }
}

.subscribe-title {
  color: var(--text-color);
  margin-bottom: 10px;
  margin-top: -20px;
  font-size: 1.5rem;
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
}

.subscribe-button button:hover {
  background-color: var(--text-color);
  transition: .3s ease-in-out;
}

.socials-container {
  display: flex;
  justify-content: space-between;
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
  border: 2px solid var(--text-color);
  border-radius: 50%;
  color: var(--text-color);
}

.social-icons ul li:hover {
  color: var(--text-hover);
  border: 2px solid var(--text-hover);
  transition: .3s ease-in-out;
}

@media (max-width: 1200px) {
  .links ul li span {
    display: none;
  }

  .others-links-section ul li span {
    display: none;
  }
}

.footer-bottom {
  text-align: start;
  font-size: 1.2rem;
  color: var(--text-color);
  padding: 2rem 0;
}

.footer-bottom a {
  color: var(--text-color);
}

a:hover {
  color: var(--text-hover);
}
</style>
