<template>
  <section id="oswmAbout">
    <h2 class="text-center osmwTitle">ABOUT OSMW22</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-5">
          <h4>Oman Social Media</h4>
          <h4>Week 2022</h4>
          <p>
            Oman Social Media Week 2022 facilitates the understanding of diverse social
            media tools and platforms and their impact on society, business, and the
            economy and illustrates how online communities can benefit the domains of
            marketing, finance, and information technology.
          </p>
          <div class="osmwAboutBtn">
            <router-link to="/about-us">
              <button>See More</button>
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <img src="@/assets/Images/AboutUs.png" alt="AboutOsmw" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutHome",
};
</script>

<style scoped>
#oswmAbout {
  padding: 1rem;
}

.osmwAboutBtn button {
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 0;
  border-radius: 6px;
}

.osmwTitle {
  padding: 2rem 0;
}
</style>
