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
            <h1 class="font-weight-bold own-size">
              <span class="d-block m-0 p-0">Embrace the Future  </span>
              <span class="d-block m-0 p-0">of Social Media </span>
              <span class="d-block m-0 p-0">Marketing</span>
            </h1>
          </div>
        </div>
        <div class="row">
          <div id="pinkBelow" class="mx-own d-block"></div>
        </div>
        <div class="row showcase-3">
          <div class="col-md-5 mx-4 text-white mt-3">
            <p>
              The first of its kind in the Sultanate of Oman, Oman Social Media Week 2022
              aims to gather industry thought leaders, experts and influencers to share
              and discuss local and global trends in social media and its vital role in
              today’s evolving digital landscape
            </p>
            <router-link to="/attend/nice">
              <button>REGISTER TO ATTEND</button>
            </router-link>
            <router-link to="/sponsorship">
              <button>BE A SPONSOR</button>
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
  margin: 4rem 0 0 0;
  width: 100%;
  height: 800px;
  background: url("@/assets/Images/waiting-room-with-monitors.jpg") no-repeat center
    center/cover;
  position: relative;
}

#showcase .showcase-layout {
  position: absolute;
  width: 100%;
  height: 800px;
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
  left: 120px;
}
#showcase .t2 {
  position: absolute;
  top: 127px;
  left: 120px;
}

.own-size {
  font-size: 50px;
  font-weight: 900;
}

.mx-own {
  margin: 0 0 0 2.5rem;
}

.eventMobile {
  display: none;
}

#pinkBelow {
  width: 85px;
  height: 3px;
  background: #e6007e;
}
@media screen and (max-width: 1000px) {
  #showcase {
    margin: 4rem 0 0 0;
    height: 900px;
  }
  #showcase .eventcol div img {
    display: none;
  }

  #showcase .showcase-layout {
    height: 900px;
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

  .own-size {
    font-size: 40px;
    font-weight: 900;
  }
}
</style>
