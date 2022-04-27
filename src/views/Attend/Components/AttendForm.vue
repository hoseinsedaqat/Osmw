<template>
  <section id="attendForm">
    <div class="container">
      <div class="row">
        <div class="col-md-12 my-5">
          <div class="bg-pink text-white">
            <h4>Enquiry Registration</h4>
            <select name="" id="" v-model="regestartion">
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
          <select name="" id="" v-model="regestartion" class="w-50">
            <option value="Group Booking" selected>Group Booking</option>
            <option value="Two Days">Two Days</option>
            <option value="One Day">One Day</option>
          </select>
        </div>
        <div class="col-md-6">
          <p>Title <span class="required">*</span></p>
          <select name="" id="" v-model="regestartion" class="w-50">
            <option value="Group Booking" selected>Group Booking</option>
            <option value="Two Days">Two Days</option>
            <option value="One Day">One Day</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>First Name <span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>Last Name <span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>First Name <span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>Designation<span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>Company <span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>Email Address <span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>Mobile Phone <span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>Country of Residence <span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p>Vaccination <span class="required">*</span></p>
            <input type="text" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AttendForm",
  data() {
    return {
      regestartion: "One Day",
    };
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

.form-group input{
    border: 1px solid #e1e1e1;
    padding: 0.3rem;
    border-radius: 5px;
}

.form-group input:focus{
    outline: none;
}
</style>
