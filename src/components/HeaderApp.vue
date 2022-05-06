<template>
  <section id="header">
    <!-- for desktop -->
    <header>
      <div>
        <ul>
          <li>
            <img src="@/assets/Images/HeaderIcon.png" alt="TitleOsmw" />
          </li>
          <li class="current">
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/agenda">Agenda</router-link>
          </li>
          <li>
            <router-link to="/about-us">About Us</router-link>
          </li>
          <li>
            <router-link to="/speakers">Speakers</router-link>
          </li>
          <li>
            <router-link to="/sponsors">Sponsers</router-link>
          </li>
          <li>
            <router-link to="/media">Media</router-link>
          </li>
          <li>FAQS</li>
          <li>
            <router-link to="/contact-us">Contact Us</router-link>
          </li>
          <li>
            <button>
              <router-link to="/attend">Attend</router-link>
            </button>
          </li>
        </ul>
      </div>
    </header>
    <!-- for mobile -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <a class="navbar-brand" href="#"
        ><img src="@/assets/Images/HeaderIcon.png" alt="TitleOsmw"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/agenda">Agenda</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about-us">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/speakers">Speakers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sponsors">Sponsers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/media">Media</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQS</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <button class="hamburgerBtn">
              <router-link to="/attend">Attend</router-link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "HeaderApp",
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
}
header ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
}

a {
  text-decoration: none;
  color: #333;
}

.router-link-exact-active {
  color: #e6007e;
}

button a {
  color: #fff;
}

header ul li {
  margin: 0 2.5rem 0 0;
}

header ul li button {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: #fff;
  background-color: #00aeef;
}

/* for Show we are in which router */
.current {
  color: #e6007e !important;
}

nav {
  display: none;
}

.hamburgerBtn {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: #fff;
  background-color: #00aeef;
}

@media screen and (max-width: 1100px) {
  header {
    display: none;
  }
  nav {
    display: flex;
  }
}
</style>
