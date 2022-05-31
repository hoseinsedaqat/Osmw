<template>
  <section id="attendTable">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered text-center">
            <thead class="thead-pink">
              <tr>
                <th scope="col">Benefits</th>
                <th scope="col">1 Day</th>
                <th scope="col">2 Days</th>
                <th scope="col" colspan="2">Group Booking</th>
              </tr>
            </thead>
            <tbody class="bg-light text-dark">
              <!-- <tr>
                <th>Your selection of the day to attend</th>
                <td>1 Day</td>
                <td>2 Days</td>
              </tr> -->
              <tr>
                <th>Access to all day sessions</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td colspan="2"><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr>
                <th>Access to lunch break and networking</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <th>networking</th>
                <td></td>
                <td></td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <th>Access to event recordings/ Presentations after the event</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td colspan="2"><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr>
                <th>Certificate of attendance</th>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td colspan="2"><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr>
                <th>Inclusion in attendees list “Hall of Fame”</th>
                <td></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <th>Inclusion of company logo on event website</th>
                <td></td>
                <td><i class="fa fa-check" aria-hidden="true"></i></td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <th>Admission to the Influencer Forum</th>
                <td></td>
                <td></td>
                <td colspan="2"><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr>
                <th>Access to the Photo Booth with Influencers</th>
                <td></td>
                <td></td>
                <td colspan="2"><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr>
                <th>Admission to the Social Talks Lounge</th>
                <td></td>
                <td></td>
                <td colspan="2"><i class="fa fa-check" aria-hidden="true"></i></td>
              </tr>
              <tr>
                <th><b class="font-weight-bold h4 text-dark">Price</b></th>
                <td><b class="tableAttendShow font-weight-bold text-dark">OMR 100</b></td>
                <td><b class="tableAttendShow font-weight-bold text-dark">OMR 150</b></td>
                <td colspan="2"><b class="tableAttendShow font-weight-bold text-dark">OMR 100 PER PERSON</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h4 class="my-3">
            *20% discount for SMEs
          </h4>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-12">
          <h4>*20% discount for SMEs</h4>
          <h4 class="text-danger">(CTA Book your Seat)</h4>
          <h5 class="text-danger">
            (Keep the rest of the page as it is but activate the social handles links and
            add the below disclaimer below the Covid 19 vaccination note)
          </h5>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "AttendTable",
};
</script>

<style scoped>
.thead-pink {
  background-color: #e6007e;
  color: #fff;
}

/* .tableAttendShow {
  font-size: 1.5rem;
  padding: 2rem;
} */

@media screen and (max-width: 1000px) {
  .tableAttendShow {
    font-size: 1rem;
  }
}
</style>
