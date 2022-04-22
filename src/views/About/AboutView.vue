<template>
  <section id="oswmAbout">
        <h2 class="text-center">
            ABOUT OSMW22
        </h2>
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-6">
                    <h4>Oman Social Media</h4>
                    <h4>Week 2022</h4>
                    <p>Oman Social Media Week 2022 facilitates the understanding of diverse social media tools and
                        platforms and their impact on society, business, and the economy and illustrates how online
                        communities can benefit the domains of marketing, finance, and information technology.
                    </p>
                    <div class="osmwAboutBtn">
                        <button>See More</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="../../assets/Images/AboutUs.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
#oswmAbout {
    padding: 1rem;
}

.osmwAboutBtn button {
    padding: 0.4rem 0.7rem;
    border: none;
    border-radius: 10px;
    background-color: #E6007E;
    color: #fff;
}
</style>
