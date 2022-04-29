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
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Screen Shot 2022-04-21 at 3.43.31 PM.png"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Sharifa Al Buruomi</div>
            <p>Business Woman, Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Screen Shot 2022-04-21 at 3.43.31 PM.png"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Sharifa Al Buruomi</div>
            <p>Business Woman, Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </div>
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
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Screen Shot 2022-04-21 at 3.43.31 PM.png"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Sharifa Al Buruomi</div>
            <p>Business Woman, Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Screen Shot 2022-04-21 at 3.43.31 PM.png"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Sharifa Al Buruomi</div>
            <p>Business Woman, Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
      </div>
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
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Screen Shot 2022-04-21 at 3.43.31 PM.png"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Sharifa Al Buruomi</div>
            <p>Business Woman, Speaker</p>
            <router-link to="/speakers">More</router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img
            src="@/assets/Images/Screen Shot 2022-04-21 at 3.43.31 PM.png"
            alt=""
            class="speakersImg h-100"
          />
          <div class="overlay text-white">
            <div>Sharifa Al Buruomi</div>
            <p>Business Woman, Speaker</p>
            <router-link to="/speakers">More</router-link>
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

.overlay a{
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5rem 2rem;
}
</style>
