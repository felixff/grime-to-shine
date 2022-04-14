<template>
  <div class="container__why-us">
    <div class="section">
      <font-awesome-icon class="fas fa-business-time icon"></font-awesome-icon>
      <h2 class="section-header-black__small">Brand new business</h2>
      <div>Because we are a new business in this game, we are hungry and looking to be the best there is locally; that being said, you can expect the same level of service whether it being a <b>BRONZE</b>, <b>SILVER</b> or <b>GOLD</b> wash.</div>
    </div>
    <div class="section">
      <font-awesome-icon class="fas fa-sterling-sign icon"></font-awesome-icon>
      <h2 class="section-header-black__small">Affordable prices</h2>
      <div>We have an amazing range of products that we use on your vehicle to keep away the grime at an affordable price. It is guaranteed that you will be more than pleased with the results of your vehicle, please <b>CALL NOW</b> for an enquiry or you can <b>BOOK NOW</b> for an appointment."</div>
    </div>
    <div class="section">
      <font-awesome-icon class="fas fa-spray-can-sparkles icon"> </font-awesome-icon>
      <h2 class="section-header-black__small">Best Cleaning Equipment</h2>
      <div>Our cleaning products and style will leave your car shining brighter for longer, keeping the grime and dirt away for longer than the traditional washes. Call now and ask us about our cleaning products for more information.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "whyUs"
}
</script>

<style scoped lang="scss">
.container__why-us {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4em;

  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 24em;
    justify-self: center;
    padding: 10px;

    .icon {
      font-size: 2rem;
      color: $primary;
      margin-bottom: 0.5em;
    }
  }
}
</style>