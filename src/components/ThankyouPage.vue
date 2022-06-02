<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="thankyou">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="text-center font-weight-bold">
              THANK YOU FOR SUBMITTING THE REGISTRATION FORM.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-5">
            <p class="text-center">
              We have received your form and our team will be in contact with you shortly.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <router-link to="/attend">
              <h3 class="text-center">BACK TO PREVIOUS PAGE</h3>
            </router-link>
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
  name: "ThankyouPage",
  mounted() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>

<style scoped>
#thankyou {
  margin: 9rem 0 0 0;
}

a{
    color: #333;
    text-decoration: none;
}

@media screen and (max-width: 1000px) {
  #thankyou {
    margin: 7rem 0 0 0;
  }
}
</style>
