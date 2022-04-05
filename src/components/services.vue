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
        {
          type: "platinum",
          title: "Platinum",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: null
        },
        {
          type: "diamond",
          title: "Diamond",
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
  display: grid;
  //grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr)); /* see notes below */
  gap: calc(2% - 1em);
  margin: 5em auto;
}
</style>