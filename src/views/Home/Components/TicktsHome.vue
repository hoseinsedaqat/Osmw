<template>
  <section id="tickts">
    <h5 class="text-center font-weight-bold">GET YOUR LEARN ON</h5>
    <h2 class="text-center">TICKETS</h2>
    <!-- Images Absolute -->
    <div class="flashTImg">
      <img src="@/assets/Images/tikcts2.png" alt="" />
    </div>
    <div class="flashTImg2">
      <img src="@/assets/Images/tickts.png" alt="" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-4">
          <div class="cards" id="cardOne">
            <div class="card-body">
              <h5 class="text-center">One Day Pass</h5>
              <h1 class="text-center font-weight-bold">OR 100</h1>
              <p class="mt-4 text-center">Admission Options</p>
              <div class="mt-5 ftickts">
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-2">You selection of the day to attend</span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-2">Access to all day sessions </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-2">Access to lunch break and networking </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-1 w-100"
                    >Access to event recording / presentations after
                    <span class="mx-4">events</span>
                  </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-2">You selection of the day to attend</span>
                </div>
                <div class="ticktsOne mt-5">
                  <router-link to="/attend">
                    <button class="w-100">Register Now</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-2">
          <div class="cards" id="cardTwo">
            <div class="card-body">
              <h5 class="text-center">Two Days Pass</h5>
              <h1 class="text-center font-weight-bold">OR 150</h1>
              <p class="mt-4 text-center">Admission Options</p>
              <div class="mt-5 ftickts">
                <div class="my-1">
                  <img src="@/assets/Images/Vector 31.png" alt="" />
                  <span class="mx-2">Full event attendance </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 31.png" alt="" />
                  <span class="mx-2">Access to all sessions </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 31.png" alt="" />
                  <span class="mx-2">Access to 2 days lunch break and networking </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 31.png" alt="" />
                  <span class="mx-1 w-100">Certificate of attendance </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 31.png" alt="" />
                  <span class="mx-2">Inclusion in attendees list Hall of Fame</span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 31.png" alt="" />
                  <span class="mx-2">Inclusion of company logo on website. </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 31.png" alt="" />
                  <span class="mx-2"
                    >Access to event recording/ presentations after event
                  </span>
                </div>
                <div class="ticktsOne mt-5">
                  <router-link to="/attend">
                    <button class="w-100">Register Now</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="cards" id="cardOne">
            <div class="card-body">
              <h5 class="text-center">Group Booking</h5>
              <h1 class="text-center font-weight-bold">_ _ _</h1>
              <p class="mt-4 text-center">Admission to Conference</p>
              <div class="mt-5 ftickts">
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-2">Admission to the Influencer Forum </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-2">Access to Photo Booth with influencers </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-2">Admission to Social Talks Lounge </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-1 w-100">Certificate of Attendance </span>
                </div>
                <div class="my-1">
                  <img src="@/assets/Images/Vector 18.png" alt="" />
                  <span class="mx-2">Access to conference online recordings</span>
                </div>
                <div class="ticktsOne mt-5">
                  <router-link to="/attend">
                    <button class="w-100">Register Now</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TicktsHome",
};
</script>

<style scoped>
#tickts {
  background-color: #eee;
  padding: 2rem;
  position: relative;
  height: 100vh;
}

#tickts .flashTImg {
  position: absolute;
  top: 300px;
}

#tickts .flashTImg2 {
  position: absolute;
  top: 300px;
  left: 250px;
}

#tickts .flashTImg2 img {
  width: 874px;
}

#tickts #cardOne {
  background-color: #ffec00 !important;
  border-radius: 10px;
  height: 450px;
  color: #333;
}

#tickts #cardTwo {
  background-color: #00aeef !important;
  border-radius: 10px;
  height: 490px;
  color: #fff;
}

.ftickts {
  font-size: 11px;
  font-weight: bold;
}

.ticktsOne button {
  padding: 0.4rem 0.7rem;
  border: none;
  border-radius: 10px;
  background-color: #e6007e;
  color: #fff;
}

@media screen and (max-width: 1200px) {
  .flashTImg,
  .flashTImg2 {
    display: none;
  }

  #tickts {
    height: 100%;
  }
}
</style>
