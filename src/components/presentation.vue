<template>
  <div class="container__presentation">
    <div class="image-stack__item--top" :class="{'zoomed-in' : hoveringTop}">
      <label for="before" :class="{hidden : hoveringTop}">Before</label>
      <img id="before" :src="topImage" alt="Top Gallery Image" @mouseover="hoveringTop = true"
           @mouseleave="hoveringTop = false" @click="hoveringTop = !hoveringTop">
    </div>
    <div class="image-stack__item--bottom" :class="{'zoomed-in' : hoveringBottom}">
      <img id="after" :src="bottomImage" alt="Bottom Gallery Image"
           @mouseenter="hoveringBottom = true" @mouseleave="hoveringBottom = false"
           @click="hoveringBottom = !hoveringBottom">
      <label for="after" :class="{hidden : hoveringBottom}">After</label>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "presentation",
  props: ['topImage', 'bottomImage'],
  data() {
    return {
      hoveringTop: false,
      hoveringBottom: false
    }
  }
}
</script>

<style scoped lang="scss">
.container__presentation {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  position: relative;
  width: 27em;
  height: 20em;

  label {
    color: $tertiary;
  }

  img {
    width: 100%;
    height: 100%;
    min-width: 14em;
    min-height: 14em;
    object-fit: cover;
    overflow: hidden;
    transition: all .6s cubic-bezier(0.5, 0, 0.3, 1);
    border-radius: 4px;

  }

  .zoomed-in {
    grid-column: 1 / span 12 !important;
    grid-row: 1 / span 3 !important;
    z-index: 3 !important;
    cursor: zoom-in;
  }

  .image-stack__item--top {
    position: relative;
    grid-column: 1 / span 6;
    grid-row: 1 / span 2; // must be on the same row as the other image

    label {
      position: absolute;
      bottom: 0;
      left: 0;
      font-family: Grafitty, sans-serif;
      font-size: 2rem;
      color: $secondary;
      transform: translateY(100%);
    }
  }

  .image-stack__item--bottom {
    position: relative;
    grid-column: 5 / span 6;
    grid-row: 2 / span 2; // make this image be on the same row
    z-index: 1; // make this image render on top of the bottom

    label {
      position: absolute;
      top: 0;
      right: 0;
      font-family: Grafitty, sans-serif;
      font-size: 2rem;
      color: $tertiary;
      transform: translateY(-90%);
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
}
</style>