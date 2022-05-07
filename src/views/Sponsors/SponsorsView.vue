<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="sponsorsView">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-5">
            <h3 class="text-center">SPONSORS</h3>
            <p class="text-center mt-5">
              OSMW 2022 would not be possible without a dedicated group of supporters and
              friends.
            </p>
            <p class="text-center">
              If you would like to see your brand listed with us,
              <router-link to="/contact-us"
                ><span class="text-primary">get in touch.</span></router-link
              >
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mx-auto text-center" id="sponsorsPartners">
            <div class="line"></div>
            <div class="font-weight-bold">FOUNDING PARTNERS</div>
            <div class="line"></div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-12">
            <div class="text-center">
              <img
                src="@/assets/Images/SponosorsPartnes.png"
                alt="SponsorsPartners"
                class="img-fuild"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mx-auto text-center" id="sponsorsPartners">
            <div class="line"></div>
            <div class="font-weight-bold">PARTNERS & FRIENDS</div>
            <div class="line"></div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-12">
            <div>
              <img src="@/assets/Images/Sponsors.png" alt="Sponosrs" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mx-auto">
            <p class="text-center sponsorsdefine">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="text-center sponsorsdefine">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
  name: "SponsorsView",
  mounted() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>

<style scoped>
#sponsorsView {
  margin: 5rem 0 0 0;
}
#sponsorsPartners {
  display: flex;
  align-items: center;
  justify-content: center;
}
#sponsorsPartners div {
  margin: 0 0.5rem;
}
#sponsorsPartners .line {
  width: 40%;
  border-bottom: 1px solid #333;
}

.sponsorsdefine {
  font-size: 0.9rem;
}

@media screen and (max-width: 1000px) {
  #sponsorsView {
    margin: 3rem 0 0 0;
  }
}
</style>
