<template>
  <section id="speakersSlider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/Images/Rectangle 322.png" class="img-fluid" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "SpeakersSlider",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1400: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 50,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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
