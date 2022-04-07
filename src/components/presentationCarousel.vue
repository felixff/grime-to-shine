<template>
  <div class="presentation-carousel">
    <presentation v-for="(n, index) in 4"
                  :key="index"
                  :top-image="require(`@/assets/img/temp/${getTopImage(n)}.jpg`)"
                  :bottom-image="require(`@/assets/img/temp/${getBottomImage(n)}.jpg`)"
    ></presentation>
  </div>
</template>

<script>
import Presentation from '@/components/presentation.vue';

export default {
  name: "presentationCarousel",
  components: {
    Presentation
  },
  methods: {
    getTopImage(index) {
      switch (index) {
        case 1:
          return 1;
        case 2:
          return 3;
        case 3:
          return 5;
        case 4:
          return 7;
      }
    },
    getBottomImage(index) {
      switch (index) {
        case 1:
          return 2;
        case 2:
          return 4;
        case 3:
          return 6;
        case 4:
          return 8;
      }
    }
  }
}
</script>
<style scoped>
.presentation-carousel {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1.5em;
  margin: 5em auto;
}
</style>