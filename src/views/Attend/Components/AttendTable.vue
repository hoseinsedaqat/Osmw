<template>
  <section id="attendTable">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered text-center">
            <thead class="thead-pink">
              <tr>
                <th></th>
                <th scope="col">One Days</th>
                <th scope="col">Two Days</th>
                <th scope="col">Group Booking</th>
              </tr>
            </thead>
            <tbody class="bg-light text-dark">
              <tr>
                <th>ALL DAY BARISTA & SO MUCH FOOD</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>MAIN CONFERENCE</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>NETWORKING DRINKS</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>THE MOST EPIC GIFT BAG</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>DAY TWO WORKSHOPS</th>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>POST-SHOW VIDEO ACCESS</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>EXTRA SPECIAL VIRTUAL SESSIONS</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th class="tableAttendShow">REGISTRATIONS</th>
                <td class="tableAttendShow">OR 150</td>
                <td class="tableAttendShow">OR 100</td>
                <td class="tableAttendShow">______</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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

.tableAttendShow {
  font-size: 1.5rem;
  padding: 2rem;
}

@media screen and (max-width: 1000px) {
  .tableAttendShow {
    font-size: 1rem;
    padding: 1rem;
  }
}
</style>
