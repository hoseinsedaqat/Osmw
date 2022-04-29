<template>
  <section id="speakersSlider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/Screen Shot 2022-04-21 at 3.43.31 PM.png"
            alt=""
            class="speakersImg"
          />
          <div class="overlay text-white">
            <div>Sharifa Al Buruomi</div>
            <p>Business Woman, Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img src="@/assets/Images/SpeakersMain.png" alt="" class="speakersImg" />
          <div class="overlay text-white">
            <div>Steve Bambury</div>
            <p>Metaverse, Web3 and XR Consultant</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/Thuraya Al Harthi- Speaker_ Digital Transformation_ Innovation.jpeg"
            alt=""
            class="speakersImg"
          />
          <div class="overlay text-white">
            <div>Thuraya Al Harthi</div>
            <p>Speake, Digital Transformation, Innovation</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/Saba Al Busaidi- Senior Manager Corporate Affairs at Omantel .jpeg"
            alt=""
            class="speakersImg"
          />
          <div class="overlay2 text-white">
            <div>Saba Al Busaidi</div>
            <p>Senior Manager-Corporate Affairs - Omantel</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/Aneela Hameed- Speaker _ Writer _ Marketing & Communication.jpeg"
            alt=""
            class="speakersImg"
          />
          <div class="overlay2 text-white">
            <div>Aneela Hameed</div>
            <p>Metaverse, Web3 and XR Consultant</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img src="@/assets/Images/Hala Al Zadjali.jpeg" alt="" class="speakersImg" />
          <div class="overlay2 text-white">
            <div>Hala Al Zadjali</div>
            <p>Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/Maged Farrag-Creative and Managing Director at 5dVR.jpeg"
            alt=""
            class="speakersImg"
          />
          <div class="overlay text-white">
            <div>Maged Farrag</div>
            <p>Creative and Managing Director at 5dVR</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/Tariq Al Barwani-Award-Winning Technology Professional & Practical Motivational Speaker .jpeg"
            alt=""
            class="speakersImg"
          />
          <div class="overlay text-white">
            <div>Tariq Al Barwani</div>
            <p>Award-Winning Technology Professional & Practical Motivational Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/Tazima Al Ghannami- Senior Manager HR Analytics, Omantel.jpeg"
            alt=""
            class="speakersImg"
          />
          <div class="overlay text-white">
            <div>Tazima Al Ghannami</div>
            <p>Senior Manager HR Analytics, Omantel</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/Said Al Busiaid - Manager Communication and Sustainability at Mazoon Electricity .jpeg"
            alt=""
            class="speakersImg"
          />
          <div class="overlay2 text-white">
            <div>Said Al Busiaid</div>
            <p>Manager Communication and Sustainability at Mazoon</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div id="speakersMain">
          <img
            src="@/assets/Images/WhatsApp Image 2022-04-21 at 12.21.21 PM.jpeg"
            alt=""
            class="speakersImg"
          />
          <div class="overlay2 text-white">
            <div>Rehab Ibrahim</div>
            <p>Founder & MD, TEDx Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
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
