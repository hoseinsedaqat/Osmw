<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="sponsorsView">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-5">
            <h3 class="text-center font-weight-bold">SPONSORS</h3>
            <p class="text-center mt-5 font-weight-bold">
              OSMW 2022 would not be possible without a dedicated group of supporters and
              friends.
            </p>
            <p class="text-center text-muted">
              If you would like to see your brand listed with us,
              <router-link to="/contact-us"
                ><span class="text-primary">get in touch.</span></router-link
              >
            </p>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-md-7 mx-auto">
            <p class="text-center font-weight-bold">
              Oman Social Media Week 2022 aims to grow the understanding of the different
              social media tools and platforms and their impact on society, business and
              economy, and to show how online communities can benefit in the fields of
              marketing, finance and information technology. You can be part of this event
              by joining us as sponsor or exhibitor to display your technologies or
              services to highly qualified audience.
            </p>
            <div class="text-center my-5">
              <router-link to="/attend" class="attendBtn">Register Here</router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center font-weight-bold">SPONSORSHIP BENEFITS</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 mx-auto tarekFormat">
            <ul>
              <li>
                Get Your brand associated with the most impactful influencers in Oman
                reaching hundreds of thousands of followers.
              </li>
              <li>
                Promote Your products and services to hundreds of virtual and onsite
              </li>
              <li>
                Generate leads through a - 3day exhibition booth to connect with potential
                customers, partners and supporters
              </li>
              <li>
                Obtain detailed analytics of your brand engagement and booth visitors
              </li>
            </ul>
          </div>
        </div> -->
        <!-- One Card -->
        <!-- <div class="row no-gutters bg-sky-blue my-4">
          <div class="col-md-6 mx-auto my-4">
            <div class="text-white">
              <h1 class="font-weight-bold bg-sky-blue-own-font mx-3">GET</h1>
            </div>
          </div>
          <div class="col-md-6">
            <p class="text-white font-weight-bold">
              Your brand associated with the most impactful influencers in Oman reaching
              hundreds of thousands of followers.
            </p>
          </div>
        </div> -->
        <!-- Two Card -->
        <!-- <div class="row no-gutters bg-sky-blue my-4">
          <div class="col-md-6 mx-auto my-4">
            <div class="text-white">
              <h1 class="font-weight-bold bg-sky-blue-own-font mx-3">PROMOTE</h1>
            </div>
          </div>
          <div class="col-md-6">
            <p class="text-white font-weight-bold">
              Your products and services to hundreds of virtual and onsite
            </p>
          </div>
        </div> -->
        <!-- Three Card -->
        <!-- <div class="row no-gutters bg-sky-blue my-4">
          <div class="col-md-6 mx-auto my-4">
            <div class="bg-sky-blue text-white">
              <h1 class="font-weight-bold bg-sky-blue-own-font">GENERATE</h1>
            </div>
          </div>
          <div class="col-md-6">
            <p class="text-white font-weight-bold">
              leads through a - 3day exhibition booth to connect with potential customers,
              partners and supporters
            </p>
          </div>
        </div> -->
        <!-- Four Card -->
        <!-- <div class="row no-gutters bg-sky-blue">
          <div class="col-md-6 mx-auto my-4">
            <div class="text-white">
              <h1 class="font-weight-bold bg-sky-blue-own-font mx-3">OBTAIN</h1>
            </div>
          </div>
          <div class="col-md-6">
            <p class="text-white font-weight-bold">
              detailed analytics of your brand engagement and booth visitors
            </p>
          </div>
        </div> -->
        <!-- <div class="row">
          <div class="col-md-12 mx-auto my-3">
            <div class="text-center my-5">
              <router-link to="/attend" class="attendBtn">Register Here</router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-3">
            <img
              src="@/assets/Images/MMG-Brands 1.png"
              alt="MMG-BRANDS"
              class="img-fluid"
            />
          </div>
        </div> -->
        <!-- Old Content -->
        <div class="row">
          <div class="col-md-12 mx-auto text-center" id="sponsorsPartners">
            <div class="line"></div>
            <div class="font-weight-bold">GOLD SPONSOR</div>
            <div class="line"></div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-3 mx-auto">
            <div class="text-center">
              <img
                src="@/assets/Images/Millennium logo_Gold Sponsor.jpg"
                alt="SponsorsPartners"
                class="img-own-responsive"
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
              <img src="@/assets/Images/newSponsors.png" alt="Sponosrs" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 mx-auto">
            <p class="text-center sponsorsdefine">
              Muscat Media Group is the media gateway to the people of Oman.
            </p>
            <p class="text-center sponsorsdefine my-5">
              Founded by late Essa bin Mohammed Al Zedjali who was a renowned journalist
              in the Sultanate, the Group has played an integral role in Omani society
              since 1975.
            </p>
            <p class="text-center sponsorsdefine my-5">
              MMG offers advertisers more than 32 multimedia products in Arabic and
              English to craft 360⁰ campaigns that reach 3.5 million people everyday in
              the country.
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

a {
  text-decoration: none;
}

.attendBtn {
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}

.bg-sky-blue {
  background-color: #00aeef;
  padding: 0.7rem;
  border-radius: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.bg-sky-blue-own-font {
  font-size: 56px;
}

.tarekFormat ul li {
  margin: 1rem 0;
}
.img-own-responsive {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 1000px) {
  #sponsorsView {
    margin: 3rem 0 0 0;
  }

  .bg-sky-blue {
    flex-direction: column;
    text-align: center;
    padding: 1.68rem;
  }

  .img-own-responsive {
    width: 150px;
    height: 150px;
  }
  
}
</style>
