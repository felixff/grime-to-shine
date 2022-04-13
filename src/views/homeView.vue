<template>
<div class="container__home" @scroll="handleChevron">
<div class="van-image">
    <img
      src="@/assets/img/slides/van-left.jpg"
      alt="Van Image 1"
      class="fadeInOutAnimation"
      :class="{ transparent: imageToShow !== 1 }"
    />
    <img
      src="@/assets/img/slides/van-right.jpg"
      alt="Van Image 2"
      class="fadeInOutAnimation"
      :class="{ transparent: imageToShow !== 2 }"
    />
    <img
      src="@/assets/img/slides/suv.jpg"
      alt="Van Image 3"
      class="fadeInOutAnimation"
      :class="{ transparent: imageToShow !== 3 }"
    />
    <img
      src="@/assets/img/slides/merc.png"
      alt="Van Image 3"
      class="fadeInOutAnimation"
      :class="{ transparent: imageToShow !== 4 }"
    />
    <div class="main-text">
      <span class="main-text__header">Mobile Valeting Service</span><br />
      Hertfordshire | Bedfordshire | Buckinghamshire<br />
      +44 7970 797979 | email@grimetoshine.com<br />
    </div>
    <a class="call-to-action" :class="{ hidden: currentScrollPosition > 1 || $windowWidth < 1064}" href="#meet-the-team">
      <i class="fas fa-chevron-down bounce"></i>
    </a>
  </div>
  <div id="meet-the-team" class="section bg-white">
    <h1 class="section-header header-text-black">About Us</h1>
    <meet-the-team></meet-the-team>
  </div>
  <div id="previous-work" class="section">
    <h1 class="section-header">Previous Work</h1>
    <presentation-carousel></presentation-carousel>
  </div>
  <div class="section bg-white">
    <h1 class="section-header header-text-black">Why Us?</h1>
    <why-us></why-us>
  </div>
  <div id="booking-system" class="section half-screen-height">
    <h1 class="section-header">Bookings</h1>
    <booking></booking>
  </div>
</div>
  
</template>

<script>
import Booking from "@/components/booking.vue";
import MeetTheTeam from "@/components/aboutUs.vue";
import PresentationCarousel from "@/components/presentationCarousel";
import WhyUs from "@/components/whyUs";

export default {
  name: "homeView",
  components: {
    PresentationCarousel,
    Booking,
    MeetTheTeam,
    WhyUs
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
      if (this.imageToShow < 4) {
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
.container__home {
  scroll-behavior: smooth !important;
  max-width: 100vw;
}
.section {
  padding: 2em 0;
  max-width: 100vw;
}

.van-image {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid $tertiary-calmer;

  img {
    display: none;
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

@media screen and (min-width: 1064px) {
  .main-text {
    max-width: 50%;
  }

  .van-image {
    border-bottom: none;

    img {
      display: block;
    }
  }

  .call-to-action {
    display: block;
  }
}
</style>
