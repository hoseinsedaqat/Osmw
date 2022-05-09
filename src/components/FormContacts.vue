<template>
  <section id="formcontacts">
    <div class="container">
      <div class="row mt-5 mx-5" id="contactUsAlign">
        <div class="col-md-6">
          <h3 class="font-weight-bold">Contact Us</h3>
          <p id="pinkBelow"></p>
          <p class="mt-3">
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium
          </p>
        </div>
        <div class="col-md-6 my-3">
          <img src="@/assets/Images/ContactUs.png" alt="" />
        </div>
      </div>
      <div class="row mx-5">
        <div class="col-md-6">
          <div class="form-group">
            <label for="forname" class="d-block">Your name:</label>
            <input
              type="text"
              name="forname"
              id="forname"
              class="w-100"
              placeholder="Enter your name"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label for="foremail" class="d-block">Your email:</label>
            <input
              type="email"
              name="foremail"
              id="foremail"
              class="w-100"
              placeholder="Enter your email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="fortextarea" class="d-block">Message:</label>
            <textarea
              name="fortextarea"
              id="fortextarea"
              class="w-100"
              placeholder="Type here..."
              v-model="message"
            ></textarea>
          </div>
          <button class="my-3 contactSendformbtn" @click="formData()">View All</button>
        </div>
        <div class="col-md-6">
          <div>
            <h4>Contact Info:</h4>
            <li class="mt-4">
              <img src="@/assets/Images/Locatioons.png" alt="" style="width:30px;">
              <span class="mx-2"
                >Madinat Sultan Qaboos, Way no. 1947, Villa no. 2551</span
              >
            </li>
            <li class="mt-4">
              <img src="@/assets/Images/telephone.png" alt="" style="width:30px;">
              <span class="mx-2">+968 24694905</span>
              <p class="m-self mt-1">+968 94060921</p>
            </li>
            <li class="mt-4">
              <img src="@/assets/Images/emails.png" alt="" style="width:30px;">
              <span class="mx-2">enquiry@npa.om</span>
            </li>
          </div>
          <div class="mt-5">
            <h4>Follow us:</h4>
            <div class="social-icons">
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-linkedin"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
// import axios from 'axios'
export default {
  name: "FormContacts",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    formData() {
      const validationEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (
        this.name === "" ||
        this.email === "" ||
        this.message === "" ||
        !validationEmail.test(this.email)
      ) {
        this.$toast.info("Please Enter Valid Data");
      } else {
        try {
          axios
            .post("https://www.actionforms.io/e/r/hsoein-sedaqat-test", {
              contactName: this.name,
              contactEmail: this.email,
              contactMessage: this.message,
            })
            .then((res) => {
              if (res.status === 200) {
                this.$toast.success("Message Was Send");
                this.name = "";
                this.email = "";
                this.message = "";
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
div li {
  list-style: none;
}
i {
  color: #00aeef;
}

#contactUsAlign{
    display: flex;
    align-items: center;
    justify-content: center;
}

textarea {
  resize: none;
  border: 1px solid #c8d0da;
  padding: 0.3rem 0.5rem;
  height: 150px;
  border-radius: 10px;
}

textarea:focus {
  outline: none;
}

.form-group input {
  border: 1px solid #c8d0da;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
}

.form-group input:focus {
  outline: none;
}

.contactSendformbtn {
  border: none;
  padding: 0.3rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}

.social-icons {
  display: flex;
}

.social-icons li {
  margin: 0 1rem 0 0;
}

.m-self{
  margin: 0 0 0 2.4rem;
}

#pinkBelow {
  width: 50px;
  height: 3px;
  background: #e6007e;
}

@media screen and (max-width: 1000px) {
}
</style>
