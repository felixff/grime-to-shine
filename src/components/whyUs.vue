<template>
  <div class="container__why-us">
    <div class="section">
      <i class="fas fa-arrow-up"></i>
      <h2 class="section-header-black__small">Brand new business</h2>
      <div>Because we are a new business in this game, we are hungry and looking to be the best there is locally; that being said, you can expect the same level of service whether it being a BRONZE, SILVER or GOLD wash.</div>
    </div>
    <div class="section">
      <i class="fas fa-arrow-up"></i>
      <h2 class="section-header-black__small">Affordable prices</h2>
      <div>We have an amazing range of products that we use on your vehicle to keep away the grime at an affordable price. It is guaranteed that you will be more than pleased with the results of your vehicle, please CALL NOW for an enquiry or you can BOOK NOW for an appointment."</div>
    </div>
    <div class="section">
      <i class="fas fa-arrow-up"></i>
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
  --grid-layout-gap: 0.2em;
  --grid-column-count: 3;
  --grid-item--min-width: 20em;
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
  align-items: center;
  justify-content: center;

  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 22em;
    justify-self: center;
  }
}
</style>