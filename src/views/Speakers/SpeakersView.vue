<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="speakersView">
      <div class="container">
        <div class="row my-5">
          <div class="col-md-6">
            <h1 class="font-weight-bold">STEVE BAMBURY</h1>
            <span>METAVERSE</span>
          </div>
          <div class="col-md-6 rightsideSpeakers">
            <p>APPEARING AT 11:00 // DAY ONE</p>
            <span class="font-weight-bold">Vray and Metaverse</span>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-5">
            <img src="@/assets/Images/SpeakersMain.png" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <p class="textdownSpeakers">
              Steve Bambury has worked in education and training for 20 years. In 2016 he
              became the first Head of Digital Learning and Innovation across the JESS
              school group before moving on to work as an education consultant in 2019.
              This included an extended engagement within New Media Academy where he led
              on education strategy and immersive technology and coordinated the
              deployment of the first virtual campus in The Middle East.
            </p>
            <p>
              Steve has won awards from Apple, Microsoft, GESS, BETT and EdTech Digest for
              his working integrating technology in learning and professional development.
              In 2017, he hosted the world’s first professional development sessions
              inside virtual reality and in 2018 he co-hosted the world’s first global
              lesson inside VR alongside Pixar co-founder Loren Carpenter. Steve is on the
              judging panel for both the GESS Awards and World VR Awards and his work with
              VR has been featured on Forbes Middle East, Arabian Business, Dubai One and
              more. Steve now works as a consultant and project manager in the field of
              NFTs, Web3 and the Metaverse.
            </p>
            <div class="socialmediaSpeakers">
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-linkedin"></i>
              </li>
            </div>
          </div>
        </div>
        <div class="row mt-6">
          <div class="col-md-12">
            <h4 class="text-center">Check out the other</h4>
            <h3 class="text-center font-weight-bold">Speakers</h3>
          </div>
        </div>
      </div>
      <SpeakersSlider></SpeakersSlider>
      <FormContact></FormContact>
      <FormContacts></FormContacts>
      <FooterApp></FooterApp>
    </section>
  </div>
</template>

<script>
import SpeakersSlider from "./Components/SpeakersSlider.vue";
export default {
  name: "SpeakersView",
  components: {
    SpeakersSlider,
  },
  mounted() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>

<style scoped>
#speakersView {
  margin: 10rem 0 0 0;
}
.rightsideSpeakers {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.rightsideSpeakers p {
  display: block;
}

.socialmediaSpeakers {
  display: flex;
}

.socialmediaSpeakers li {
  list-style: none;
  margin: 0 1.5rem 0 0;
  font-size: 1.3rem;
  color: #bfc5d0;
}

.mt-6 {
  margin: 5rem 0 0 0;
}

@media screen and (max-width: 1000px) {
  .textdownSpeakers {
    margin: 1rem 0;
  }
  #speakersView {
    margin: 5rem 0 0 0;
  }
}
</style>
