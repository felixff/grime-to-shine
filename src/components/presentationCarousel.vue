<template>
  <carousel class="presentation-carousel" :items-to-show="getItemsToShow($windowWidth)" :autoplay="10000"
            :wrapAround="true" :snapAlign="'start'" :itemsToScroll="1" :transition="700">
    <slide v-for="slide in 9" :key="slide">
      <presentation :top-image="require(`@/assets/img/presentation/${slide}-before.webp`)"
                    :top-id="slide"
                    :bottom-image="require(`@/assets/img/presentation/${slide}-after.webp`)"
                    :bottom-id="slide * 10"
      ></presentation>
    </slide>

    <template #addons>
      <navigation/>
      <pagination/>
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import Presentation from '@/components/presentation.vue';

export default {
  /* eslint-disable */
  name: "presentationCarousel",
  components: {
    Presentation,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {}
  },
  computed: {
    windowSize() {

    }
  },
  methods: {
    getItemsToShow(windowWidth) {
      if (windowWidth > 1700) {
        return 3;
      } else if(windowWidth > 1160) {
      return 2; }
      else {
        return 1;
      }
    }
  }
}
</script>
<style lang="scss">
.presentation-carousel {
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 5em auto;
  width: 80%;

  .carousel__prev, .carousel__next {
    display: none;
  }

  .carousel__track {
    //gap: 2em;
  }
}

.carousel__pagination-button {
  background-color: $secondary;
}

.carousel__pagination-button--active {
  background-color: $tertiary;
}

</style>