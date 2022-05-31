<template>
  <section id="sponsors">
    <h3 class="text-center mt-5 font-weight-bold">SPONSORS</h3>
    <p class="text-center mt-4 mx-2">
      OSMW 2022 would not be possible without a dedicated group of supporters and friends.
    </p>
    <div class="container">
      <div class="row my-5">
        <div class="col-md-12 mx-auto">
          <h3 class="text-center font-weight-bold">GOLD SPONSOR</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 mx-auto">
          <div class="text-center">
            <img src="@/assets/Images/Millennium logo_Gold Sponsor.jpg" alt="GOLDSPONSOR" class="img-own-responsive my-3">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img src="@/assets/Images/Sponsors.png" alt="Sponosrs" class="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <router-link to="/sponsorship">
              <button class="sponsorsHome">BE A SPONSOR</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SponsorsHome",
};
</script>

<style scoped>
.sponsorsHome {
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}

.img-own-responsive{
  width: 100%;
  height: auto;
}

@media screen and (max-width:1000px) {
  .img-own-responsive{
    width: 150px;
    height: 150px;
  }
}
</style>
