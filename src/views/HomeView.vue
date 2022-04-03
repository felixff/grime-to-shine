<template>
  <div class="section bg-white">
    <img src="@/assets/temp-van.png" alt="Van Image">
  </div>
  <div class="section bg-gray-500">
    <h1>About Us</h1>
    <about-us> </about-us>
  </div>
  <div class="section">
    <h1>Services</h1>
  </div>
  <div class="section half-screen-height">
    <h1>Bookings</h1>
    <Booking></Booking>
  </div>
</template>

<script>
import Booking from '@/components/booking.vue';
import AboutUs from '@/components/aboutUs.vue';

export default {
  name: "homeView",
  components: {
    Booking,
    AboutUs
  },
};
</script>
