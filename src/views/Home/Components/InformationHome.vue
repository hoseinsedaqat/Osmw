<template>
  <!-- Define -->
  <section id="information">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6">
          <h1>Accelerating</h1>
          <h1>the growth of</h1>
          <h1 class="d-flex">
            <div>Oman's</div>
            <div class="pinkLayout">
              <span class="pinkLayoutChild"></span>
            </div>
          </h1>
          <h1>Digital</h1>
          <h1>Economy</h1>
        </div>
        <div class="col-md-6">
          <p>
            Oman’s digital economy's contribution to the GDP is aimed at 10% in 2040
            according to Oman’s Vision 2040. Digital transformation plays a critical role
            in supporting the Sultanate of Oman's strategic and vital industries, which is
            aligned with Oman Vision 2040's economic growth and employment creation goals.
            The backbone of the digital economy is hyper connectivity which means growing
            interconnectedness of people, organizations, and machines that results from
            the Internet, mobile technology and the internet of things (IoT).
          </p>
          <div class="informationBtn">
            <div>
              <button>Register to Attend</button>
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
  margin: -1.5rem 0 0 0;
  width: 200px;
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
}
</style>
