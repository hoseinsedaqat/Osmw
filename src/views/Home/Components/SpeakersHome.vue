<template>
  <section id="speakres">
    <h4 class="text-center">SHARE THE KNOWLEDGE</h4>
    <h2 class="text-center">SPEAKERS</h2>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay">
            <div class="text">Hello</div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-sm-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay">
            <div class="text">Hello</div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-sm-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay">
            <div class="text">Hello</div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12 col-md-4 col-sm-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay">
            <div class="text">Hello</div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-sm-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay">
            <div class="text">Hello</div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-sm-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay">
            <div class="text">Hello</div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12 col-md-4 col-sm-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay2">
            <div class="text">Hello</div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-sm-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay2">
            <div class="text">Hello</div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-sm-6" id="speakersMain">
          <img src="@/assets/Images/Rectangle 322.png" alt="" class="speakersImg" />
          <div class="overlay2">
            <div class="text">Hello</div>
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
</style>
