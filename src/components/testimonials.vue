<template>
  <carousel class="presentation-carousel" :items-to-show="getItemsToShow($windowWidth)" :autoplay="5000"
            :wrapAround="true" :snapAlign="'start'" :itemsToScroll="1" :transition="700">
    <slide v-for="(testimony, index) in testimonials" :key="index">
      <div class="testimony-wrapper">
        <div class="testimony">"{{ testimony.content }}"</div>
        <div class="name">- {{testimony.name}}</div>
      </div>
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
  name: "testimonials",
  components: {
    Presentation,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      testimonials: [
        {
          content: 'Nice work on your Car valeting. Just what I was looking for.',
          name: 'Harriett V.'
        },
        {
          content: 'Nice work on your Car valeting. Just what I was looking for.',
          name: 'Harriett V.'
        },
        {
          content: 'Nice work on your Car valeting. Just what I was looking for.',
          name: 'Harriett V.'
        },
        {
          content: 'Nice work on your Car valeting. Just what I was looking for.',
          name: 'Harriett V.'
        },
        {
          content: 'Nice work on your Car valeting. Just what I was looking for.',
          name: 'Harriett V.'
        },
      ]
    }
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

  .testimony-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .testimony {
      font-style: italic;
    }
  }

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