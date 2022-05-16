<template>
  <section id="formContact" class="mt-5 text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="form-card">
            <h3 class="font-weight-bold">
              Send us your email address so <br />
              we can contact you.
            </h3>
            <div class="formpartcard mt-4">
              <input type="email" placeholder="Enter Your Email" v-model="subscribe" />
              <button @click="Subscribe()">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "FormContactTwo",
  data() {
    return {
      subscribe: "",
    };
  },
  methods: {
    Subscribe() {
      const validationEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (this.subscribe === "" || !validationEmail.test(this.subscribe)) {
        this.$toast.info("Please Enter Your Email");
      } else {
        try {
          axios
            .post("https://www.actionforms.io/e/r/omansocialmediaweek-test", {
              emailSubscribe: this.subscribe,
            })
            .then((res) => {
              if (res.status === 200) {
                this.$toast.success("Email Was Send ");
                this.subscribe = "";
              }
            })
            .catch((e) => {
              this.$toast.error(e);
            });
        } catch (e) {
          this.$toast.error("Try Again");
        }
      }
    },
  },
};
</script>

<style scoped>
.form-card {
  background-color: #f2f2f2;
  padding: 6rem;
  border-radius: 60px;
}
.formpartcard button {
  border: none;
  padding: 0.3rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}

.formpartcard input {
  padding: 0.3rem 0.5rem;
  border: 1px solid #c8d0da;
  border-radius: 5px;
  width: 50%;
  margin: 0 0.7rem 0 0;
}

.formpartcard input:focus {
  outline: none;
}

@media screen and (max-width: 1000px) {
  .form-card {
    padding: 3rem;
  }
  .formpartcard input {
    width: 100% !important;
  }

  .formpartcard button {
    width: 100% !important;
  }

  .form-card h3 {
    font-size: 16px;
  }
}
</style>
