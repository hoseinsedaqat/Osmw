<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="AboutUs">
      <div class="container">
        <div class="row my-5">
          <div class="col-md-8 offset-md-2">
            <img
              src="@/assets/Images/AboutUsPage.png"
              alt="AboutUsPage"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h3 class="text-center my-2">ABOUT OSMW22</h3>
            <p class="text-center my-4">
              Oman Social Media Week 2022 facilitates the understanding of diverse social
              media tools and platforms and their impact on society, business, and the
              economy and illustrates how online communities can benefit the domains of
              marketing, finance, and information technology.
            </p>
            <p class="text-center my-2">
              Featuring topics such as technologies influencing social media evolution,
              Influencers, service quality, and consumer engagement, this conference is
              ideally designed for E-Commerce Managers, Marketers, managing directors,
              executives, marketers, industry professionals, social media analysts,
              academicians, researchers, and students.
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md 12">
            <h3 class="text-center">MEET THE TEAM</h3>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4 text-center mt-3">
            <img src="@/assets/Images/Member1.png" alt="" class="img-fluid" />
            <h4 class="my-3">TAREK ALI</h4>
            <span>Event Program & Sponsorship</span>
          </div>
          <div class="col-md-4 text-center mt-3">
            <img src="@/assets/Images/Member2.png" alt="" class="img-fluid" />
            <h4 class="my-3">MARIE KRIS SULANGI</h4>
            <span>Events Operations</span>
          </div>
          <div class="col-md-4 text-center mt-3">
            <img src="@/assets/Images/Member3.png" alt="" class="img-fluid" />
            <h4 class="my-3">Meriana Ebef</h4>
            <span>Influencers Relations</span>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4 text-center mt-3">
            <img src="@/assets/Images/Member4.png" alt="" class="img-fluid" />
            <h4 class="my-3">RUWAYDA AL BARWANI</h4>
            <span>Customer Acquisition </span>
          </div>
          <div class="col-md-4 text-center mt-3">
            <img src="@/assets/Images/Member5.png" alt="" class="img-fluid" />
            <h4 class="my-3">ASIL Al Lawati</h4>
            <span>Content & Engagement </span>
          </div>
          <div class="col-md-4 text-center mt-3">
            <img src="@/assets/Images/Member6.png" alt="" class="img-fluid" />
            <h4 class="my-3">Meera Al Sabbagh</h4>
            <span>Content & Engagement </span>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4 text-center mt-3">
            <img src="@/assets/Images/Member7.png" alt="" class="img-fluid" />
            <h4 class="my-3">MARIA Khairulla</h4>
            <span>Digital Media Strategy</span>
          </div>
          <div class="col-md-4 text-center mt-3">
            <img src="@/assets/Images/Member8.png" alt="" class="img-fluid" />
            <h4 class="my-3">MOHAYA CHAMSEDDINE</h4>
            <span>Creative Design & Branding </span>
          </div>
          <div class="col-md-4 text-center my-3">
            <img src="@/assets/Images/Member9.png" alt="" class="img-fluid" />
            <h4 class="my-3">Aman Shaw</h4>
            <span>Accounts</span>
          </div>
        </div>
      </div>
    </section>
    <FormContact></FormContact>
    <FormContacts></FormContacts>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  mounted(){
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  }
};
</script>

<style scoped>
#AboutUs{
  margin: 10rem 0 0 0;
}
</style>
