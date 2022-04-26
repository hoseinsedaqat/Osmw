<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="attend">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-5">
            <h3 class="text-center">#OSMW22 IS COMING!!</h3>
            <p class="text-center my-2">
              Oman’s brainiest digital marketing event is back to equip you with the
              skills, tools and <br />
              smarts you need to to stay ahead of the pack.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <p class="text-center">
              From becoming the Most Valuable Player to fast-tracking projects with a
              Minimum Viable Product mindset, getting your MVP on means getting maximum
              points on the board with minimum effort.
            </p>
            <p class="text-center my-5">
              Join us June 13 - 14 for two days of OCEC, discussions and brainstorms
              analysing the latest trends, techniques and real-world to help you find your
              MVP, no matter what the world throws at you.
            </p>
            <p class="text-center">
              <b>Day One: Game on. International keynotes. Local marketing legends. </b>A
              day of digital talks and breakout sessions, trends and tactics, strategies
              and case studies to inform and inspire.
            </p>
            <p class="text-center">
              <b>Day Two: Level up.</b> Pick from our line-up of <b>15 workshops</b>. Get
              coached by our industry’s movers, shakers and leading players on how to take
              on and beat the competition.
            </p>
            <p class="text-center">
              Perfect your strategy and master new tactics. Slam-dunk your execution and
              convert your goals. Find your niche and dominate the market.
            </p>
            <p class="text-center">
              <b>Get in before the price rise on May 20!</b>
            </p>
            <div class="text-center my-5">
              <button class="attendBtn">Download the Prospecteus</button>
            </div>
            <p class="text-center">
              <b>Who will attends Oman Social Media Week 2022</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderAppDark from "@/components/HeaderAppDark.vue";
export default {
  name: "AttendView",
  components: {
    HeaderAppDark,
  },
};
</script>

<style scoped>
.attendBtn {
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}
</style>
