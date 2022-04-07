<template>
  <div class="container__presentation">
    <img :src="topImage" alt="Top Gallery Image" class="image-stack__item--top">
    <img :src="bottomImage" alt="Bottom Gallery Image" class="image-stack__item--bottom">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "presentation",
  props: ['topImage', 'bottomImage'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.container__presentation {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  position: relative;
  width: 18em;
  height: 15em;
  filter: drop-shadow(0 0 15px rgba(100, 100, 100, 0.4));

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    transition: all .6s cubic-bezier(0.5, 0, 0.3, 1);
    &:hover {
      grid-column: 1 / span 12;
      grid-row: 1 / span 3;
      z-index: 3;
      cursor: zoom-in;
    }
  }

  .image-stack__item--top {
    grid-column: 1 / span 6;
    grid-row: 1 / span 2; // must be on the same row as the other image
  }

  .image-stack__item--bottom {
    grid-column: 5 / span 6;
    grid-row: 2 / span 2; // make this image be on the same row
    z-index: 1; // make this image render on top of the bottom
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