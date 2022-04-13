<template>
  <div class="container__services">
    <div class="cards">
      <card v-for="service in services"
            :key="service.type"
            :title="service.title"
            :content="service.text"
            :type="service.type"
            :image="service.image"
            :item-list="service.itemList">
      </card>
    </div>
    <div class="extras">
      <h1 class="section-header__small">Extras</h1>
      <ul class="extra-services">
        <li class="service">Leather Care - from £30</li>
        <li class="service">Glass polished (Interior & Exterior) - from £10</li>
        <li class="service">Pet hair removal - from £20</li>
        <li class="service">Engine Bay Clean* - from £25</li>
        <li class="service">Body work hand polished - from £35</li>
      </ul>
      <small>*Engine bays are cleaned at the owners risk and as such we take no responsibility for any damage
        caused</small>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card.vue';

export default {
  // eslint-disable-next-line
  name: "services",
  components: {
    // eslint-disable-next-line
    Card
  },
  data() {
    return {
      services: [
        {
          type: "bronze",
          title: "Bronze",
          itemList: [
            'Rubbish removal',
            'Floor mats cleaned',
            'Snow foam pre wash',
            'Pressure wash, Shampoo & condition Exterior',
            'Wheels cleaned and tyres dressed',
            'Towel dried',
            'Dashboard & compartments vacuumed',
            'Dashboard & compartments chamoised',
            'Glass Polished (Exterior only)'
          ],
          image: null
        },
        {
          type: "silver",
          title: "Silver",
          itemList: [
            'Rubbish removal',
            'Floor mats cleaned',
            'Snow foam pre wash',
            'Pressure wash, Shampoo & condition Exterior',
            'Wheels cleaned and tyres dressed',
            'Towel dried',
            'Dashboard & compartments vacuumed',
            'Dashboard & compartments chamoised',
            'Glass Polished (Exterior only)',
            'Glass Polished (Interior & Exterior)',
            'Carpets & Upholstery shampooed'
          ],
          image: null
        },
        {
          type: "gold",
          title: "Gold",
          itemList: [
            'Rubbish removal',
            'Floor mats cleaned',
            'Snow foam pre wash',
            'Pressure wash, Shampoo & condition Exterior',
            'Wheels cleaned and tyres dressed',
            'Towel dried',
            'Dashboard & compartments vacuumed',
            'Dashboard & compartments chamoised',
            'Glass Polished (Exterior only)',
            'Glass Polished (Interior & Exterior)',
            'Carpets & Upholstery shampooed',
            'Extensive vacuum',
            'Door, Boot & Bonnet shuts cleaned',
            'Exterior rubber & plastics treated',
            'Odour fogger'
          ],
          image: null
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.container__services {
  --grid-layout-gap: 0.2em;
  --grid-column-count: 3;
  --grid-item--min-width: 22em;
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: flex;
  flex-direction: column;
  height: 100%;

  .cards {
    padding: 2px 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
    grid-gap: var(--grid-layout-gap);
  }

  .extras {
    background-color: $primary-brighter;
    margin-inline: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    .extra-services {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 2em auto;

      .service {
        color: $tertiary-calmer;
      }
    }

    small {
      color: $tertiary-calmer;
      margin: 2em auto;
    }
  }
}

@media screen and (min-width: 1064px){
  .container__services {
    --grid-item--min-width: 28em;
  }
}
</style>