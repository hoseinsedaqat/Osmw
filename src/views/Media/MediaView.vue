<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="media">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-5">
            <h3 class="text-center font-weight-bold">LATEST NEWS</h3>
          </div>
        </div>
        <!-- Row One -->
        <div class="row mb-4">
          <div class="col-md-4">
            <div class="bg-pink text-white p-5 text-center mainMediaTitle">
              <p>SPEAKER</p>
              <p>ANNOUNCMENT</p>
            </div>
            <div class="mediaTitle">
              FIRST KEYNOTE! The last word on community creation with Jennie Sager.
            </div>
            <div class="defineMedia">
              <span>
                FIRST KEYNOTE! The last word on community creation with Jennie Sager.
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-yellow text-dark p-5 text-center mainMediaTitle">
              <p>WORKSHOP</p>
              <p>ANNOUNCMENT</p>
            </div>
            <div class="mediaTitle">
              FIRST KEYNOTE! The last word on community creation with Jennie Sager.
            </div>
            <div class="defineMedia">
              <span>
                FIRST KEYNOTE! The last word on community creation with Jennie Sager.
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-blue text-white p-5 text-center mainMediaTitle">
              <p>EXHIBITION</p>
              <p>ANNOUNCMENT</p>
            </div>
            <div class="mediaTitle">
              FIRST KEYNOTE! The last word on community creation with Jennie Sager.
            </div>
            <div class="defineMedia">
              <span>
                FIRST KEYNOTE! The last word on community creation with Jennie Sager.
              </span>
            </div>
          </div>
        </div>
        <!-- Row Two -->
        <div class="row">
          <div class="col-md-4">
            <div class="bg-pink text-white p-5 text-center mainMediaTitle">
              <p>WHAT IS THE</p>
              <p>MVP ALL ABOUT?</p>
            </div>
            <div class="mediaTitle">
              What is the <br />
              MVP theme all <br />
              about?
            </div>
            <div class="defineMedia">
              <span>
                GETTING YOUR MVP ON MEANS MAXIMISING YOUR IMPACT WITH MINIMUM EFFORT.
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-yellow text-dark p-5 text-center mainMediaTitle">
              <p>NEED A REASON</p>
              <p>TO ATTEND?</p>
            </div>
            <div class="mediaTitle">
              FIRST KEYNOTE! The last word on community creation with Jennie Sager.
            </div>
            <div class="defineMedia">
              <span>
                FIRST KEYNOTE! The last word on community creation with Jennie Sager.
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-blue text-white p-5 text-center mainMediaTitle">
              <p>WHAT IT ALL</p>
              <p>ABOUT?</p>
            </div>
            <div class="mediaTitle">
              FIRST KEYNOTE! The last word on community creation with Jennie Sager.
            </div>
            <div class="defineMedia">
              <span>
                FIRST KEYNOTE! The last word on community creation with Jennie Sager.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FormContactTwo></FormContactTwo>
    <FormContacts></FormContacts>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import FormContactTwo from "@/components/FormContactTwo.vue";
export default {
  name: "MediaView",
  components: {
    FormContactTwo,
  },
  mounted() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>

<style scoped>
#media {
  margin: 5rem 0 0 0;
}
.bg-pink {
  background-color: #e6007e;
}
.bg-yellow {
  background-color: #ffec00;
}

.bg-blue {
  background-color: #00aeef;
}
.mediaTitle {
  margin: 0.4rem 0;
  font-size: 28px;
}
.defineMedia {
  font-size: 0.8rem;
  margin: 1rem 0;
}

.mainMediaTitle p {
  font-size: 30px;
}

@media screen and (max-width: 1000px) {
  #media {
    margin: 4rem 0 0 0;
  }
}
</style>
