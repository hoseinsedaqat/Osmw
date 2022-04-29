<template>
  <section id="showcase">
    <div class="showcase-layout">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 mt-5 mx-4">
            <img
              src="@/assets/Images/ShowcaseTitle.png"
              alt="Showcasetitle"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-3 mx-4 text-white">
            <h3>
              A LOOK AT CURRENT AND FUTURE TRENDS IN SOCIAL MEDIA & <br />
              DIGITAL MARKETING.
            </h3>
          </div>
        </div>
        <div class="row showcase-3">
          <div class="col-md-5 mx-4 text-white mt-3">
            <p>
              The first of its type in the Sultanate of Oman, Oman Social Media Week 2022
              intends to gather thought leadership and influencers, highlight global and
              local trends, and feature latest technology in an inspiring dynamic
              environment.
            </p>
            <router-link to="/attend">
              <button>Register to Attend</button>
            </router-link>
            <router-link to="/sponsors">
              <button>Become a Sponsor</button>
            </router-link>
          </div>
          <div class="col-md-6">
            <div class="eventcol">
              <div>
                <img
                  src="@/assets/Images/ShowcaseBlueBackground.png"
                  alt="BlueBackground"
                  class="img-fluid"
                />
              </div>
              <div class="flashImg">
                <img src="@/assets/Images/ShowcaseFlash.png" alt="FlashImage" />
              </div>
            </div>
            <p class="text-white font-weight-bold t1">13-14 June 2022</p>
            <p class="text-white font-weight-bold t2">
              Grand Millennium Hotel, Muscat, Oman.
            </p>

            <div class="eventMobile">
              <p class="text-white font-weight-bold">13-14 June 2022</p>
              <p class="text-white font-weight-bold">
                Grand Millennium Hotel, Muscat, Oman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ShowCase",
};
</script>

<style scoped>
#showcase {
  width: 100%;
  height: 700px;
  background: url("@/assets/Images/waiting-room-with-monitors.jpg") no-repeat center
    center/cover;
  position: relative;
}

#showcase .showcase-layout {
  position: absolute;
  width: 100%;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.3);
}

#showcase .showcase-3 button {
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}

#showcase .flashImg img {
  margin: 0 0 0 -11rem;
}

#showcase .eventcol {
  display: flex;
  position: relative;
}

#showcase .t1 {
  position: absolute;
  top: 90px;
  left: 125px;
}
#showcase .t2 {
  position: absolute;
  top: 125px;
  left: 125px;
}

.eventMobile {
  display: none;
}
@media screen and (max-width: 1000px) {
  #showcase {
    height: 800px;
  }
  #showcase .eventcol div img {
    display: none;
  }

  #showcase .showcase-layout {
    height: 800px;
  }

  .t1,
  .t2 {
    display: none;
  }
  .eventMobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 0 0;
    border: 1px solid #fff;
    border-radius: 10px;
  }

  #showcase .showcase-3 button {
    width: 100%;
  }
}
</style>
