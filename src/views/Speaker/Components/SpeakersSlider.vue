<template>
  <section id="speakersSlider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(speaker, idx) in SpeakerData" :key="(speaker, idx)">
        <div id="speakersMain">
          <img :src="speaker.image" alt="" class="speakersImg" />
          <div class="overlay text-white">
            <div>{{ speaker.name }}</div>
            <p>{{ speaker.career }}</p>
            <router-link :to="`/speaker/` + testlink(idx)">More</router-link>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </section>
</template>

<script>
import { SpeakerData } from "@/data/SpeakersData";
import { swiperOption } from "@/utils/swiperOptions";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "SpeakersSlider",
  data() {
    return {
      swiperOption,
      SpeakerData,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    testlink(idx) {
      var test = this.SpeakerData[idx]
      return test.page;
    },
  },
  methods: {
    // goToSpeaker() {
    //   var test = this.SpeakerData[idx];
    //   // window.location.href = window.location.origin + "/" + "speaker" + "/" + test.page;
    //   // this.$router.push(`/speaker/${test.page}`);
    //   // let link = document.createElement("a");
    //   // link.href = window.location.href
    // },
  },
};
</script>

<style scoped>
.swiper {
  height: 500px;
  width: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  background-color: #fff;
  border-radius: 10px;
  /* margin: 2rem 0 0 0; */
}

.swiper-button-next {
  margin: 2rem 0 0 0;
  top: 170px;
  /* left: 900px; */
  background-color: #fff;
  padding: 2.5rem 1rem;
  color: #333;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(000000, 000000, 000000, 30%);
}
.swiper-button-next::after {
  font-size: 22px;
}
.swiper-button-prev {
  margin: 2rem 0 0 0;
  top: 170px;
  /* left: 580px; */
  background-color: #fff;
  padding: 2.5rem 1rem;
  color: #333;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(000000, 000000, 000000, 30%);
}
.swiper-button-prev::after {
  font-size: 22px;
}

#speakres {
  padding: 1rem;
}

#speakersMain {
  position: relative;
  width: 100%;
  height: 400px;
}

.speakersImg {
  display: block;
  width: 100%;
  height: 400px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #008cba;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.overlay2 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #e6007e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#speakersMain:hover .overlay {
  opacity: 0.8;
  cursor: pointer;
}
#speakersMain:hover .overlay2 {
  opacity: 0.8;
  cursor: pointer;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay a {
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5rem 2rem;
}
.overlay2 a {
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5rem 2rem;
}

@media screen and (max-width: 1000px) {
  .swiper-button-prev {
    background-color: #333;
    color: #fff;
  }

  .swiper-button-next {
    background-color: #333;
    color: #fff;
  }
}
</style>
