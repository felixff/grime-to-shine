<template>
  <div class="container__about">
    <div class="description__container">
      <div class="description">
        Fully equipped mobile valeting service covering <b>Hertfordshire | Bedfordshire | Buckinghamshire</b> areas.
        Wash your car as often as you like, GrimeToShine is your mobile ticket to a sparkling clean car at all times.
        Our cleaning products and style will leave your car shining brighter for longer, keeping the grime and dirt away
        for longer than the traditional washes. Call now and ask us about our cleaning products for more information.
      </div>
      <div class="description">
        We use a 350 ltr elite tank that stops the swishing of water when the tank is low, creating a safe environment
        for
        road users + ourselves. A Honda generator fitted which is very reliable for pressure at any given time which is
        connected to our K7 pressure washer/steam cleaners. A wet and dry vac to rinse out your fabrics and also a whole
        range of professional cleaning solutions and chemicals for all types of material.
      </div>
    </div>
    <img src="@/assets/img/about.jpg" alt="About Image" class="image-about"/>
  </div>
</template>

<script>
export default {
  name: "meetTheTeam",
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 726px) {
  .container__about {
    --grid-item--min-width: 28em;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    max-width: 80%;
    gap: 4em;

    .description__container {
      max-width: 50%;

      .description {
        color: $primary-brighter;
        max-width: 100% !important;
      }
    }

    .image-about {
      vertical-align: top !important;
      align-self: flex-start;
      justify-self: center;
    }
  }
}

.container__about {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;
  gap: 2em;
  padding: 10px;
  margin-inline: auto;

  .description__container {
    display: flex;
    gap: 2em;
    flex-direction: column;

    .description {
      color: $primary-brighter;
      max-width: 20em;
    }
  }

  .image-about {
    max-height: 20em;
    max-width: 15em;
  }
}
</style>
