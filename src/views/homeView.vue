<template>
  <div class="section van-image">
    <img src="@/assets/img/van1.jpg" alt="Van Image 1" class="fadeInOutAnimation" :class="{transparent : imageToShow !== 1}">
    <img src="@/assets/img/van2.jpg" alt="Van Image 2" class="fadeInOutAnimation" :class="{transparent : imageToShow !== 2}">
    <img src="@/assets/img/van3.jpg" alt="Van Image 3" class="fadeInOutAnimation" :class="{transparent : imageToShow !== 3}">
    <div class="main-text">
      We are GrimeToShine! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
  <div class="section">
    <h1 class="section-header">Meet the Team</h1>
    <meet-the-team></meet-the-team>
  </div>
  <div class="section mt-48">
    <h1 class="section-header">Services</h1>
    <services></services>
  </div>
  <div id="booking-system" class="section mt-48 half-screen-height">
    <h1 class="section-header">Bookings</h1>
    <booking></booking>
  </div>
</template>

<script>
import Booking from '@/components/booking.vue';
import MeetTheTeam from '@/components/meetTheTeam.vue';
import Services from '@/components/services.vue';

export default {
  name: "homeView",
  components: {
    Booking,
    MeetTheTeam,
    Services
  },
  data() {
    return {
      msg: 'THIS IS A TEST MESSAGE',
      imageToShow: 1,
      vanImages: [
          '@/assets/img/van1.jpg',
          '@/assets/img/van2.jpg',
          '@/assets/img/van3.jpg'
      ]
    }
  },
  mounted() {
    setInterval(() => {
      if (this.imageToShow < 3) {
        this.imageToShow += 1;
      } else {
        this.imageToShow = 1;
      }
    },7000)
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style lang="scss">
.section {
  margin-bottom: 4em;
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
    font-size: 2rem;
    color: $tertiary;
    z-index: 2;
    max-width: 50%;
    background-color: rgba(0,0,0, 0.5);
    border-radius: 10px;
  }
}
</style>