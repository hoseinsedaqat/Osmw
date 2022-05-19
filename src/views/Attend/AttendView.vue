<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="attend">
      <div class="container">
        <div class="row">
          <div class="col-md-12 my-5">
            <h1 class="text-center font-weight-bold">Many reasons to book your seat</h1>
            <!-- <p class="text-center my-2">
              Oman’s brainiest digital marketing event is back to equip you with the
              skills, tools and <br />
              smarts you need to to stay ahead of the pack.
            </p> -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <h5 class="text-center font-weight-bold">
              #OSMW is an exclusive opportunity to build and refine your skillset in
              social media & influencer marketing
            </h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-9 mx-auto">
            <p class="text-center my-5">
              <b>Meet</b> influencers, experts and peers from Oman and the world
            </p>
            <p class="text-center my-5">
              <b class="font-weight-bold">Learn </b> how to position your brand for success through good social
              media plan and strategy
            </p>
            <p class="text-center my-5">
              <b class="font-weight-bold">Connect </b> with like-minded attendees and build resourceful toolkit for
              your social
            </p>
            <p class="text-center my-5">
              <b class="font-weight-bold">Evaluate </b> how your current social media efforts are benchmarked with
              others in your sector or other industries
            </p>
            <p class="text-center my-5">
              <b class="font-weight-bold">Meet </b> face-to-face with prominent social media influencers
            </p>
            <p class="text-center my-5">
              <b class="font-weight-bold">Highlight </b> your presence by sharing what you learned and boosting
              your profile status
            </p>
            <p class="text-center my-5">
              <b class="font-weight-bold">Earn </b> a certificate of Attendance from Muscat Media Group
            </p>
            <div class="text-center my-5">
              <button class="attendBtn">Download the Prospecteus</button>
            </div>
            <p class="text-center my-5 text-center">
              <b>Who can attend OSMW 2022 ?</b>
            </p>
            <h5 class="text-center my-5">
              <span>
                Marketing Manager• E-commerce Manager • Communication Managers •
                Entrepreneurs, Digital Marketing specialists • Digital Media Specialists •
                Commercial managers • Public Information • Public Affairs • Public and
                media relations • Customer service managers and specialists. • Advertising
                and destination marketing specialist • Information Officer • Program
                Manager • Community Manager • HR Manager• HR Coordinator • Strategic
                communication manager • Digital Marketing Instructor.
              </span>
            </h5>
            <!-- <p class="text-center my-5">
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
            </p> -->
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-3 text-center my-3">
            <div class="defineClock">
              <div class="bg-blue">
                <h1 class="font-weight-blod">
                  {{ clock.days }}
                </h1>
                <span>Days</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 text-center my-3">
            <div class="defineClock">
              <div class="bg-blue">
                <h1 class="font-weight-blod">
                  {{ clock.hours }}
                </h1>
                <span>HOURS</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 text-center my-3">
            <div class="defineClock">
              <div class="bg-blue">
                <h1 class="font-weight-blod">
                  {{ clock.minutes }}
                </h1>
                <span>MINS</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 text-center my-3">
            <div class="defineClock">
              <div class="bg-blue">
                <h1 class="font-weight-blod">
                  {{ clock.seconds }}
                </h1>
                <span>SECONDS</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-12">
            <p class="text-center">
              Which ticket is right for you? We break it down here
            </p>
          </div>
        </div>
      </div>
      <AttendTable></AttendTable>
      <AttendForm></AttendForm>
    </section>
  </div>
</template>

<script>
import AttendTable from "./Components/AttendTable.vue";
import AttendForm from "./Components/AttendForm.vue";
export default {
  name: "AttendView",
  components: {
    AttendTable,
    AttendForm,
  },
  data() {
    return {
      clock: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  methods: {
    defineClock() {
      var countDownDate = new Date("Jun 13, 2022 00:00:00").getTime();

      setInterval(() => {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        this.clock.days = days;
        this.clock.hours = hours;
        this.clock.minutes = minutes;
        this.clock.seconds = seconds;
      }, 1000);
    },
  },
  mounted() {
    this.defineClock();
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>

<style scoped>
#attend {
  margin: 6rem 0 0 0;
}
.attendBtn {
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: #e6007e;
  color: #fff;
  margin: 0.4rem 1rem 0 0;
  border-radius: 6px;
}

.bg-blue {
  background-color: #00aeef;
  border-radius: 60px;
  padding: 2rem 0;
  color: #fff;
}

@media screen and (max-width: 1000px) {
  #attend {
    margin: 3rem 0 0 0;
  }
}
</style>
