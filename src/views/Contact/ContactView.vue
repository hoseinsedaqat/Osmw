<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="contactView">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-5">
            <div class="text-center">
              <img
                src="@/assets/Images/ContactUs.png"
                alt="Alwataniye"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 mx-auto text-center">
            <p>
              We are NPA is a 360 degree full-service advertising agency with over 30
              years of experience in providing clients with more than just positive ROI.
              At NPA we believe that storytelling is the future of marketing, which is why
              we endeavor to weave narratives that resonate with clients and consumers
              alike.
            </p>
            <p>
              We are passionate about creating new ways for consumers to interact with
              brands and we believe that the true measurement of our success is measured
              by the satisfaction of our clients. We are brand storytellers with an
              in-depth understanding of the local nuances, and offer clients a gamut of
              communication solutions, from Digital, Creative and Media to Event,
              Editorial and OOH services.
            </p>
            <h3 class="my-5">
              Write us, call us or <br />
              drop by our office at:
            </h3>
          </div>
        </div>
      </div>
    </section>
    <FormContacts></FormContacts>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  mounted(){
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  }
};
</script>

<style scoped></style>
