<template>
  <div class="van-image">
    <img src="@/assets/img/van1.jpg" alt="Van Image 1" class="fadeInOutAnimation"
         :class="{transparent : imageToShow !== 1}">
    <img src="@/assets/img/van2.jpg" alt="Van Image 2" class="fadeInOutAnimation"
         :class="{transparent : imageToShow !== 2}">
    <img src="@/assets/img/van3.jpg" alt="Van Image 3" class="fadeInOutAnimation"
         :class="{transparent : imageToShow !== 3}">
    <div class="main-text">
      <span class="main-text__header">Mobile Valeting Service</span><br>
      Hertfordshire | Bedfordshire | Buckinghamshire<br>
      +44 7970 797979 | email@grimetoshine.com<br>
      {{$windowWidth}}
    </div>
    <i class="fas fa-chevron-down call-to-action bounce"></i>
  </div>
  <div class="section">
    <h1 class="section-header">Meet the Team</h1>
    <meet-the-team></meet-the-team>
  </div>
  <div class="section bg-white">
    <div class="services-header">
      <h1 class="section-header header-text-black">Services</h1>
    </div>
    <services></services>
  </div>
  <div id="previous-work" class="section">
    <h1 class="section-header">Previous Work</h1>
    <presentation-carousel></presentation-carousel>
  </div>
  <div id="booking-system" class="section half-screen-height bg-white">
    <h1 class="section-header header-text-black">Bookings</h1>
    <booking></booking>
  </div>
</template>

<script>
import Booking from '@/components/booking.vue';
import MeetTheTeam from '@/components/meetTheTeam.vue';
import Services from '@/components/services.vue';
import PresentationCarousel from "@/components/presentationCarousel";

export default {
  name: "homeView",
  components: {
    PresentationCarousel,
    Booking,
    MeetTheTeam,
    Services,
  },
  data() {
    return {
      msg: 'THIS IS A TEST MESSAGE',
      imageToShow: 1,
      vanImages: [
        '@/assets/img/van1.jpg',
        '@/assets/img/van2.jpg',
        '@/assets/img/van3.jpg'
      ],
      presentationImages: [],
    }
  },
  mounted() {
    setInterval(() => {
      if (this.imageToShow < 3) {
        this.imageToShow += 1;
      } else {
        this.imageToShow = 1;
      }
    }, 7000)
  },
  computed: {},
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.section {
  padding: 2em 0;
}

.van-image {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
  }

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .main-text {
    font-size: 1.5rem;
    color: $tertiary;
    z-index: 2;
    max-width: 50%;
    //background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    .main-text__header {
      font-family: Grafitty, sans-serif;
      font-size: 3rem;
    }
  }

  .call-to-action {
    position: absolute;
    bottom: 0;
    margin-inline: auto;
    height: 2.7em;
    color: $tertiary;
    filter: drop-shadow(0 0 1px $tertiary);
    font-weight: bolder;
    animation: bounce 2s infinite;
    transform-origin: bottom;
    z-index: 2;
  }
}
</style>