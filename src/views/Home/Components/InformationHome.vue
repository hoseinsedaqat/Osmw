<template>
  <!-- Define -->
  <section id="information">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6">
          <h1 class="font-weight-bold own-size">Accelerating</h1>
          <h1 class="font-weight-bold own-size">the growth of</h1>
          <h1 class="d-flex font-weight-bold own-size">
            <div>Oman's</div>
            <div class="pinkLayout">
              <span class="pinkLayoutChild"></span>
            </div>
          </h1>
          <h1 class="font-weight-bold own-size">Digital</h1>
          <h1 class="font-weight-bold own-size">Economy</h1>
        </div>
        <div class="col-md-6">
          <p class="font-weight-bold">
            According to Oman's Vision 2040, Oman's digital economy's contribution to GDP
            planned to reach 10% by 2040. Digital transformation will play an important
            role in supporting Oman's strategic and important industries in line with Oman
            Vision 2040's economic growth and job creation. What is defined named, as
            “hyper-connectivity” is the spine of the digital economy, which is defined as
            increased interoperability of people, organizations, and machines due to the
            Internet, mobile technology, and the Internet of Things (IoT).
          </p>
          <div class="informationBtn">
            <div>
              <router-link to="/attend">
                <button>Register to Attend</button>
              </router-link>
            </div>
            <div class="mx-5">
              <img
                src="@/assets/Images/InformationStickers.png"
                alt="Capture"
                class="infoStickers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InformationHome",
};
</script>

<style scoped>
#information .pinkLayout {
  position: relative;
  width: 150px;
  height: 40px;
  background-color: #e6007e;
  margin: 0 0 0 1rem;
}
#information .pinkLayout .pinkLayoutChild {
  position: absolute;
  width: 100px;
  height: 40px;
  background-color: #e6007e;
  top: 30px;
  left: 119px;
  transform: rotate(90deg);
}
.informationBtn {
  display: flex;
}

.informationBtn button {
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 0;
  border-radius: 6px;
}

.infoStickers {
  margin: -1rem 0 0 0;
  width: 200px;
}

.own-size {
  font-size: 50px;
}

@media screen and (max-width: 1000px) {
  .informationBtn {
    flex-direction: column;
  }

  .infoStickers {
    margin: 0;
    width: 50%;
  }

  .informationBtn button {
    width: 100%;
  }

  .informationBtn div:nth-child(2) {
    text-align: center;
  }

  .pinkLayout,
  .pinkLayoutChild {
    display: none;
  }
}
</style>
