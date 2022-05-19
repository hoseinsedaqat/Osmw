<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="speakersView">
      <div class="container">
        <div class="row my-5">
          <div class="col-md-6">
            <h1 class="font-weight-bold">{{ data.name }}</h1>
            <span>{{ data.career }}</span>
          </div>
          <div class="col-md-6 rightsideSpeakers">
            <p>{{ data.when }}</p>
            <span class="font-weight-bold">{{ data.where }}</span>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-5">
            <img :src="data.image" alt="" class="img-fluid h-100 w-100" />
          </div>
          <div class="col-md-6">
            <p class="textdownSpeakers">
              {{ data.description }}
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
import { SpeakerData } from "@/data/SpeakerPageData";
import SpeakersSlider from './Components/SpeakersSlider.vue';
export default {
  name: "SpeakerView",
  data() {
    return {
      SpeakerData,
      data: {},
    };
  },
  components:{
    SpeakersSlider
  },
  mounted() {
    var test = this.SpeakerData.find((data) => data.page === this.$route.params.id);
    this.data = test;
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
