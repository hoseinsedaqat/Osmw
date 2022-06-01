<template>
  <div>
    <section id="attendForm">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-5">
            <div class="bg-pink text-white add-flex">
              <h4>Enquiry Registration</h4>
              <select name="" id="" v-model="access" class="form-control col-md-3 add-mt" required>
                <option value="Group Booking" selected>Group Booking</option>
                <option value="Two Days">Two Days</option>
                <option value="One Day">One Day</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p>Two Days of epic learning, video recordings and more</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-4">
            <h3 class="font-weight-bold">Admission</h3>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-md-6">
            <p>I am interested in</p>
            <select
              name=""
              id=""
              v-model="interested"
              class="w-50 form-control col-md-6"
              required
            >
              <option value="Exhibiting" selected>Exhibiting</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Speaking">Speaking</option>
              <option value="Attending">Attending</option>
            </select>
          </div>
          <div class="col-md-6">
            <p>Title <span class="required">*</span></p>
            <select name="" id="" v-model="title" class="w-50 form-control col-md-6" required>
              <option value="Mr" selected>Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Prof.">Prof.</option>
              <option value="Eng.">Eng.</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <p>First Name <span class="required">*</span></p>
              <input type="text" class="w-100" v-model="firstName" required/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <p>Last Name <span class="required">*</span></p>
              <input type="text" class="w-100" v-model="lastName" required/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <p>Designation<span class="required">*</span></p>
              <input type="text" class="w-100" v-model="designation" required/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <p>Company <span class="required">*</span></p>
              <input type="text" class="w-100" v-model="company" required/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <p>Email Address <span class="required">*</span></p>
              <input type="text" class="w-100" v-model="email" required/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <p>Mobile Phone <span class="required">*</span></p>
              <input type="text" class="w-100" v-model="mobile" required />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <p>Country of Residence <span class="required">*</span></p>
              <input type="text" class="w-100" v-model="country" required/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <p>Vaccination <span class="required">*</span></p>
              <input type="text" class="w-100" v-model="vaccination" required />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <input type="checkbox" name="" id="" class="checkbox" v-model="checked" required/>
                <span>
                  Yes - I understand that the delegate must be fully vaccinated to attend
                  OSMW22.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-3">
            <button class="btnAttendSubmit" type="button" @click="formData()">
              Submit
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="font-italic">
              <b>Disclaimer:</b> National Publishing Agency (NPA), has the full right to change, add, reschedule all or
              part of the event program, speakers, topics and schedule without any legal or moral liabilities
              towards registrants, sponsors, speakers or any party represented by an individual or entity.
            </p>
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
import axios from "axios";
import FormContactTwo from "@/components/FormContactTwo.vue";
import FormContacts from "@/components/FormContacts.vue";
import FooterApp from "@/components/FooterApp.vue";
export default {
  name: "AttendForm",
  data() {
    return {
      // select Box
      access: "One Day",
      interested: "Exhibiting",
      title: "Mr",
      // Other Data
      firstName: "",
      lastName: "",
      designation: "",
      company: "",
      email: "",
      mobile: "",
      country: "",
      vaccination: "",
      checked: false,
    };
  },
  components: {
    FormContactTwo,
    FormContacts,
    FooterApp,
  },
  methods: {
    formData() {
      const validationEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (
        this.access === "" ||
        this.interested === "" ||
        this.title === "" ||
        this.firstName === "" ||
        this.lastName === "" ||
        this.designation === "" ||
        this.company === "" ||
        this.mobile === "" ||
        this.country === "" ||
        this.vaccination === "" ||
        this.checked === false ||
        !validationEmail.test(this.email)
      ) {
        this.$toast.info("Please Complete the Form");
        console.log(
          this.access,
          this.interested,
          this.title,
          this.firstName,
          this.lastName,
          this.company,
          this.designation,
          this.email,
          this.country,
          this.vaccination,
          this.mobile,
          this.checked
        );
      } else {
        try {
          axios
            .post("https://www.actionforms.io/e/r/omansocialmediaweek-test", {
              Access: this.access,
              Interested: this.interested,
              Title: this.title,
              FirstName: this.firstName,
              LastName: this.lastName,
              Designation: this.designation,
              Company: this.company,
              EmailAddress: this.email,
              MobilePhone: this.mobile,
              CountryofResidence: this.country,
              Vaccination: this.vaccination,
              Agree: this.checked,
            })
            .then((res) => {
              if (res.status === 200) {
                this.$toast.success("Your Application is Submitted");
              }
            })
            .catch((e) => {
              this.$toast.error(e);
            }).finally(() => {  
                this.access = "One Day";
                this.interested = "Exhibiting";
                this.title = "Mr";
                this.firstName = "";
                this.lastName = "";
                this.designation = "";
                this.mobile = "";
                this.company = "";
                this.email = "";
                this.country = "";
                this.vaccination = "";
                this.checked = false;
            })
        } catch (e) {
          this.$toast.error("Try Again");
        }
      }
    },
  },
};
</script>

<style scoped>
.bg-pink {
  background-color: #e6007e;
  padding: 0.6rem;
  display: flex;
}

.bg-pink h4 {
  margin: 0 5rem 0 0;
}

.required {
  color: red;
}

.form-group input {
  border: 1px solid #e1e1e1;
  padding: 0.3rem;
  border-radius: 5px;
}

.form-group input:focus {
  outline: none;
}

.checkbox {
  background-color: #e6007e;
}

.btnAttendSubmit {
  border: none;
  padding: 0.3rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}

@media screen and (max-width:1000px){
  .add-flex {
    display: flex !important;
    flex-direction: column;
  }
  .add-mt {
    margin: 0.5rem 0 0 0;
  }
}
</style>
