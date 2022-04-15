<template>
  <div class="container__services">
    <div class="services-description">We have 3 different types of valet services; Bronze, Silver and Gold. Depending on
      your vehicle size (Small,
      Medium & Large) we will estimate the size and charge you respectfully, Small being a hatchback and Large being a 7
      seater/van. There is also optional extras that can be added on top of your valet service, please ask about this
      when booking
    </div>
    <div class="cards">
      <card v-for="service in services"
            :key="service.type"
            :title="service.title"
            :content="service.text"
            :type="service.type"
            :image="require(`@/assets/img/services/${service.type}.png`)"
            :itemList="service.itemList"
            :startingPrice="service.price"
            :gradientColor="service.gradientColor"
      >
      </card>
    </div>
    <div class="extras">
      <h1 class="section-header__small">Extras</h1>
      <ul class="extra-services">
        <li class="service">Leather care - from £30</li>
        <li class="service">Glass polished (Interior & Exterior) - from £10</li>
        <li class="service">Pet hair removal - from £20</li>
        <li class="service">Engine bay clean* - from £25</li>
        <li class="service">Body work hand polished - from £35</li>
        <li class="service">Driveways - from £??</li>
        <li class="service">Commercial van cleaning - from £??</li>
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
      imagesForService: {
        bronze: '@/assets/img/services/bronze.png',
        silver: '@/assets/img/services/bronze.png',
        gold: '@/assets/img/services/bronze.png',
      },
      services: [
        {
          type: "bronze",
          title: "Bronze",
          price: 30,
          gradientColor: '#CD7F32',
          itemList: [
            'Rubbish removal',
            'Floor mats cleaned',
            'Snow foam pre wash',
            'Shampoo & condition Exterior',
            'Pressure wash',
            'Wheels cleaned and tyres dressed',
            'Towel dried',
            'Dashboard & compartments vacuumed',
            'Dashboard & compartments chamoised',
            'Glass Polished (Exterior only)'
          ],
        },
        {
          type: "silver",
          title: "Silver",
          price: 60,
          gradientColor: '#C0C0C0',
          itemList: [
            'Rubbish removal',
            'Floor mats cleaned',
            'Snow foam pre wash',
            'Shampoo & condition Exterior',
            'Pressure wash',
            'Wheels cleaned and tyres dressed',
            'Towel dried',
            'Dashboard & compartments vacuumed',
            'Dashboard & compartments chamoised',
            'Glass Polished (Interior & Exterior)',
            'Carpets & Upholstery shampooed'
          ],
        },
        {
          type: "gold",
          title: "Gold",
          price: 85,
          gradientColor: '#D4AF37',
          itemList: [
            'Rubbish removal',
            'Floor mats cleaned',
            'Snow foam pre wash',
            'Shampoo & condition Exterior',
            'Pressure wash',
            'Wheels cleaned and tyres dressed',
            'Towel dried',
            'Dashboard & compartments vacuumed',
            'Dashboard & compartments chamoised',
            'Glass Polished (Interior & Exterior)',
            'Carpets & Upholstery shampooed',
            'Extensive vacuum',
            'Door, Boot & Bonnet shuts cleaned',
            'Exterior rubber & plastics treated',
            'Steam clean',
            'Odour fogger'
          ],
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1064px) {
  .container__services {
    --grid-item--min-width: 28em;

    .extras {
      width: 60% !important;
      max-width: 100% !important;
    }

    .services-description {
      max-width: 70%;
    }
  }
}

.container__services {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 3em;
  align-items: center;

  .services-description {
    color: $tertiary-calmer;
    padding: 10px;
  }

  .cards {
    padding: 2px 16px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 2em;
  }

  .extras {
    background-color: $primary-brighter;
    margin-inline: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    max-width: 22em;

    .extra-services {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 2em auto;
      align-items: center;

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
</style>