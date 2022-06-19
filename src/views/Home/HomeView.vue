<template>
  <section id="home">
    <!-- <div id="myNav" class="overlay">
      <div class="overlay-content">
        <div class="container">
          <div class="row">
            <div class="col-md-7 mx-auto">
              <h3 class="font-weight-bold">Dear guests and participants!</h3>
              <p class="my-3">
                Unfortunately, the dates of our event have been changed. We were forced to
                move the event to the last quarter of the year.
              </p>
              <h5 class="my-3 font-weight-bold">
                We’ll inform you about the new dates as soon as we can.
              </h5>
              <p>
                We’re sincerely sorry for your inconvenience and frustration, and we fully
                understand how you feel.
              </p>
              <p class="my-3">
                But let’s try to look at it from the brighter side: we’ll have more time
                for preparations, making the event even more dazzling and unforgettable.
              </p>
              <p class="my-3">
                And your anticipation of excitement will last longer.
              </p>
              <h5 class="font-weight-bold">
                  Stay tuned for more updates!
              </h5>
              <div class="text-center">
                <img src="@/assets/Images/pospandedEvent.png" alt="PospandedTheEvent" class="img-pospanded">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <HeaderApp></HeaderApp>
    <ShowCase></ShowCase>
    <InformationHome></InformationHome>
    <HappeningHome></HappeningHome>
    <AboutHome></AboutHome>
    <TicktsHome></TicktsHome>
    <SpeakersHome></SpeakersHome>
    <SponsorsHome></SponsorsHome>
    <FormContact></FormContact>
    <FormContacts></FormContacts>
    <FooterApp></FooterApp>
  </section>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import ShowCase from "./Components/ShowcaseHome.vue";
import InformationHome from "./Components/InformationHome.vue";
import HappeningHome from "./Components/HappeningHome.vue";
import AboutHome from "./Components/AboutHome.vue";
import TicktsHome from "./Components/TicktsHome.vue";
import SpeakersHome from "./Components/SpeakersHome.vue";
import SponsorsHome from "./Components/SponsorsHome.vue";
export default {
  name: "HomeView",
  components: {
    HeaderApp,
    ShowCase,
    InformationHome,
    HappeningHome,
    AboutHome,
    TicktsHome,
    SpeakersHome,
    SponsorsHome,
  },
  mounted() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>

<style scoped>
.myNav {
  display: block;
}
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(255, 255, 255); /* Black fallback color */
  background-color: rgba(255, 255, 255, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 12%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: #333;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

.img-pospanded{
  width: 100%;
  height: 230px;
}

@media screen and (max-width:1000px){
  .img-pospanded{
    height: 150px;
  }
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}


</style>
