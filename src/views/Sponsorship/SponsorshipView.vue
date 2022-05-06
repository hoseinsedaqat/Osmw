<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="sponsorShip">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-5">
            <h3 class="text-center">SPONSORSHIP</h3>
            <p class="text-center my-2">
              Join the exclusive group of digital-savvy brands that helps the digital and
              social <br />
              marketing industry bounce back better post-pandemic.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <p class="text-center">
              Helps digital practitioners and agencies choose the right path when the
              apocalypse comes out of leftfield and save budgets, reputations and blushes.
            </p>
            <p class="text-center my-4">
              <b> A myriad of sponsorship options. All sure-fire winners. </b>
            </p>
            <p class="text-center my-5">
              We’ve got two days of killer keynotes, discussions and breakout brainstorms
              analysing the latest trends, techniques and real-world case studies to help
              delegates plan, create and convert, no matter what the world throws at them.
            </p>
            <p class="text-center">
              Plus, gourmet eats and treats. Plus, bottomless barista-brewed coffee Plus,
              sweeping Swan River views from the world’s most beautiful stadium. Plus, a
              host of extra-special experiences.
            </p>
            <p class="text-center">
              It all means that, as an SOS ’22 sponsor, you’ll not only bask in the
              reflected brilliance of the digital marketing world’s brightest minds.
              You’ll also have the thanks and admiration of our industry.
            </p>
            <p class="text-center">
              Finally, a sponsorship that will blow your mind, not your budget.
            </p>
            <div class="text-center my-5">
              <button class="attendBtn">Download the Prospecteus</button>
            </div>
            <p class="text-center">
              <b>Who will attends Oman Social Media Week 2022</b>
            </p>
            <p class="text-center my-4">
              Oman Social Media Week is the only place to be if you’re in the business of
              digital, which is why we’ve welcomed delegates from across the region and
              the industry spectrum, including:
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <img src="@/assets/Images/Sponsors.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <FormContactTwo></FormContactTwo>
    <FormContacts></FormContacts>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import FormContactTwo from "@/components/FormContactTwo.vue";
export default {
  name: "SponsorShip",
  components: {
    FormContactTwo,
  },
  mounted() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>

<style scoped>
#sponsorShip {
  margin: 5rem 0 0 0;
}
.attendBtn {
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}
</style>
