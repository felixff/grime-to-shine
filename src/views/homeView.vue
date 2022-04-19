<template>
  <div class="container__home">
    <div class="van-image">
      <img
          src="@/assets/img/slides/van-right.jpg"
          alt="Van Image 2"
          class="fadeInOutAnimation"
          :class="{ transparent: imageToShow !== 1 }"
      />
      <img
          src="@/assets/img/slides/suv.jpg"
          alt="Van Image 3"
          class="fadeInOutAnimation"
          :class="{ transparent: imageToShow !== 2 }"
      />
      <img
          src="@/assets/img/slides/merc.png"
          alt="Van Image 3"
          class="fadeInOutAnimation"
          :class="{ transparent: imageToShow !== 3 }"
      />
      <div class="main-text">
        <span class="main-text__header">Mobile Valeting Service</span><br/>
        Hertfordshire | Bedfordshire | Buckinghamshire<br/>
        +44 7902 532850 | email@grimetoshinevaleting.co.uk<br/>
      </div>
      <a class="call-to-action" :class="{ hidden: currentScrollPosition > 1 || $windowWidth < 1064}"
         href="#about">
        <i class="fas fa-chevron-down bounce"></i>
      </a>
    </div>
    <div id="about" class="section bg-white">
      <h1 class="section-header header-text-black">About Us</h1>
      <meet-the-team></meet-the-team>
    </div>
    <div id="previous-work" class="section">
      <h1 class="section-header">Previous Work</h1>
      <presentation-carousel></presentation-carousel>
    </div>
    <div class="section bg-white section__why-us">
      <h1 class="section-header header-text-black">Why Us?</h1>
      <why-us></why-us>
    </div>
    <div id="services" class="section section__services">
      <h1 class="section-header">Services</h1>
      <services></services>
    </div>
    <div id="bookings" class="section bg-white">
      <h1 class="section-header">Book Now</h1>
      <booking></booking>
      <testimonials></testimonials>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Booking from "@/components/booking.vue";
import MeetTheTeam from "@/components/aboutUs.vue";
import PresentationCarousel from "@/components/presentationCarousel";
import WhyUs from "@/components/whyUs";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default {
  name: "homeView",
  components: {
    Testimonials,
    PresentationCarousel,
    Booking,
    MeetTheTeam,
    WhyUs,
    Services
  },
  data() {
    return {
      msg: "THIS IS A TEST MESSAGE",
      imageToShow: 1,
      ticking: false,
      showChevron: true,
      vanImages: [
        "@/assets/img/van1.jpg",
        "@/assets/img/van2.jpg",
        "@/assets/img/van3.jpg",
      ],
      presentationImages: [],
    };
  },
  mounted() {
    setInterval(() => {
      if (this.imageToShow < 3) {
        this.imageToShow += 1;
      } else {
        this.imageToShow = 1;
      }
    }, 7000);
  },
  computed: {
    currentScrollPosition() {
      return this.$store.state.scrollPosition;
    }
  },
  methods: {
    handleChevron(lastKnownScrollPosition) {
      this.showChevron = lastKnownScrollPosition < 1;
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1064px) {
  .container__home {
    padding-top: 0 !important;

    .section__why-us {

    }

    .section__services {

    }

    .main-text {
      max-width: 50%;
    }

    .van-image {
      height: 100vh;

      img {
        display: block;
      }
    }

    .call-to-action {
      display: block;
    }
  }
}

.container__home {
  padding-top: 120px;
  scroll-behavior: smooth !important;

  .section {
    padding: 2em 0;
    max-width: 100vw;
  }

  .van-image {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    img {
      //display: none;
      width: 100%;
      position: absolute;
      -webkit-transition: opacity 1s ease-in-out;
      -moz-transition: opacity 1s ease-in-out;
      -o-transition: opacity 1s ease-in-out;
      transition: opacity 1s ease-in-out;
      object-fit: cover;
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
      border-radius: 10px;
      width: 96%;

      .main-text__header {
        font-family: Grafitty, sans-serif;
        font-size: 3rem;
      }
    }

    .call-to-action {
      position: absolute;
      bottom: 0;
      margin-inline: auto;
      animation: bounce 2s infinite;
      transform-origin: bottom;
      z-index: 2;

      &:hover {
        cursor: pointer;
      }
    }

    .bounce {
      color: $tertiary;
      filter: drop-shadow(0 0 1px $tertiary);
      font-weight: bolder;
      height: 2.7em;
    }
  }
}
</style>
