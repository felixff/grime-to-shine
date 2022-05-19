<template>
  <carousel class="presentation-carousel" :items-to-show="getItemsToShow($windowWidth)" :autoplay="8000"
            :wrapAround="true" :snapAlign="'start'" :itemsToScroll="1" :transition="400">
    <slide v-for="(testimony, index) in testimonials" :key="index">
      <div class="testimony-wrapper">
        <div class="testimony">❝ {{ testimony.content }}❞</div>
        <div class="name">- {{ testimony.name }}</div>
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
          content: 'Wow what an incredible service provided, literally gone through the whole vehicle with a fine tooth ' +
              'comb. Would highly recommend Grime To Shine and we will be using them for all our cleaning going forward.',
          name: 'L. Wilkinson'
        },
        {
          content: 'Used Grime To Shine for the first time. Will definitely be using again. My car was pretty awful from ' +
              'muddy football and helping on my sisters farm. It now looks like a new car again. Professional service and ' +
              'great rates, would highly recommend.',
          name: 'K. Douglas'
        },
        {
          content: 'Grime To Shine travelled 45 minutes to help me with an awful smell in my car. They did an excellent job! 100% recommend them to anyone.',
          name: 'J. Newman'
        },
        {
          content: 'Had my Mercedes CLA cleaned today and i am very happy with the service. Would 100% recommend to family and friends. Will be using your service again, thanks.',
          name: 'V. Patel'
        },
        {
          content: 'My car is now shining and very clean both inside and outside. I would highly recommend Luca to clean your car. He is very professional with a great eye for detail. My car looks like new again!',
          name: 'B. Amos'
        },
        {
          content: 'I will definitely be back to Grime To Shine! Superb service from someone who knows what he is doing. I am extremely satisfied with the result and quality/price ratio is great!',
          name: 'D. Lucchesi'
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
      } else if (windowWidth > 1160) {
        return 2;
      } else {
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
    justify-content: flex-start;
    height: 100% !important;

    .testimony {
      font-style: italic;
    }

    .name {
      align-self: flex-end;
    }
  }

  .carousel__prev, .carousel__next {
    display: none;
  }

  .carousel__track {
    //gap: 2em;
  }
}

.carousel__slide {
  padding: 10px !important;
  display: flex !important;
  align-items: flex-start !important;
}

.carousel__pagination-button {
  background-color: $secondary;
}

.carousel__pagination-button--active {
  background-color: $tertiary;
}

</style>