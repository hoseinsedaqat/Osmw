<template>
  <section id="speakres">
    <h4 class="text-center py-2">SHARE THE KNOWLEDGE</h4>
    <h2 class="text-center py-1">SPEAKERS</h2>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Screen Shot 2022-04-21 at 3.43.31 PM.png"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Sharifa Al Buruomi</div>
            <p>Business Woman, Speaker</p>
            <router-link to="/speaker/SharifaAlBuruomi">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img src="@/assets/Images/SpeakersMain.png" alt="" class="speakersImg h-100" />
          <div class="overlay text-white">
            <div>Steve Bambury</div>
            <p>Metaverse, Web3 and XR Consultant</p>
            <router-link to="/speaker/SteveBambury">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Thuraya Al Harthi- Speaker_ Digital Transformation_ Innovation.jpeg"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Thuraya Al Harthi</div>
            <p>Speake, Digital Transformation, Innovation</p>
            <router-link to="/speaker/ThurayaAlHarthi">More</router-link>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Saba Al Busaidi- Senior Manager Corporate Affairs at Omantel .jpeg"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay2 text-white">
            <div>Saba Al Busaidi</div>
            <p>Senior Manager-Corporate Affairs - Omantel</p>
            <router-link to="/speaker/SabaAlBusaidi">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Aneela Hameed- Speaker _ Writer _ Marketing & Communication.jpeg"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay2 text-white">
            <div>Aneela Hameed</div>
            <p>Metaverse, Web3 and XR Consultant</p>
            <router-link to="/speaker/AneelaHameed">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Hala Al Zadjali.jpeg"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay2 text-white">
            <div>Hala Al Zadjali</div>
            <p>Speaker</p>
            <router-link to="/speaker/HalaAlZadjali">More</router-link>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Maged Farrag-Creative and Managing Director at 5dVR.jpeg"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Maged Farrag</div>
            <p>Creative and Managing Director at 5dVR</p>
            <router-link to="/speaker/MagedFarrag">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Tariq Al Barwani-Award-Winning Technology Professional & Practical Motivational Speaker .jpeg"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Tariq Al Barwani</div>
            <p>Award-Winning Technology Professional & Practical Motivational Speaker</p>
            <router-link to="/speaker/TariqAlBarwani">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Tazima Al Ghannami- Senior Manager HR Analytics, Omantel.jpeg"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Tazima Al Ghannami</div>
            <p>Senior Manager HR Analytics, Omantel</p>
            <router-link to="/speaker/TazimaAlGhannami">More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SpeakersHome",
};
</script>

<style scoped>
#speakres {
  padding: 1rem;
}

#speakersMain {
  position: relative;
  width: 50%;
}

.speakersImg {
  display: block;
  width: 100%;
  height: auto;
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
</style>
