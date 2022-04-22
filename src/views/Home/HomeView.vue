<template>
  <section id="home">
    <HeaderApp></HeaderApp>
    <ShowCase></ShowCase>
    <InformationHome></InformationHome>
    <HappeningHome></HappeningHome>
    <AboutHome></AboutHome>
    <TicktsHome></TicktsHome>
    <SpeakersHome></SpeakersHome>
  </section>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import ShowCase from "./Components/ShowcaseHome.vue";
import InformationHome from "./Components/InformationHome.vue";
import HappeningHome from "./Components/HappeningHome.vue";
import AboutHome from "./Components/AboutHome.vue";
import TicktsHome from "./Components/TicktsHome.vue";
import SpeakersHome from "./Components/SpeakersHome.vue";
export default {
  name: "HomeView",
  components: {
    HeaderApp,
    ShowCase,
    InformationHome,
    HappeningHome,
    AboutHome,
    TicktsHome,
    SpeakersHome,
  },
};
</script>
