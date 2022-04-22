<template>
  <section id="header">
    <!-- for desktop -->
    <header>
      <div>
        <ul>
          <li>
            <img src="@/assets/Images/HeaderIcon.png" alt="TitleOsmw" />
          </li>
          <li class="current">Home</li>
          <li>Agenda</li>
          <li>About Us</li>
          <li>Speakers</li>
          <li>Sponsers</li>
          <li>Media</li>
          <li>FAQS</li>
          <li>Contact Us</li>
          <li>
            <button>Attend</button>
          </li>
        </ul>
      </div>
    </header>
    <!-- for mobile -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#"><img src="@/assets/Images/HeaderIcon.png" alt="TitleOsmw" /></a>
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
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
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
  width: 100%;
}
header ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
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
  color: #e6007e;
}

nav {
  display: none;
}

@media screen and (max-width: 1000px) {
  header {
    display: none;
  }
  nav {
    display: flex;
  }
}
</style>
