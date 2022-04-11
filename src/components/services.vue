<template>
  <div class="container__services">
    <card v-for="service in services" :key="service.type" :title="service.title" :content="service.text"
          :image="service.image"></card>
  </div>
</template>

<script>
import Card from '@/components/card.vue';

export default {
  // eslint-disable-next-line
  name: "services",
  components: {
    Card
  },
  data() {
    return {
      services: [
        {
          type: "bronze",
          title: "Bronze",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: null
        },
        {
          type: "silver",
          title: "Silver",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: null
        },
        {
          type: "gold",
          title: "Gold",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: null
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.container__services {
  padding: 2px 16px;
  /**
   * User input values.
   */
  --grid-layout-gap: 1em;
  --grid-column-count: 3;
  --grid-item--min-width: 32em;

  /**
   * Calculated values.
   */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
  margin: 5em auto;
}
</style>