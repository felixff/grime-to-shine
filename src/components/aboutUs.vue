<template>
  <div class="container__contact">
    <div class="description">
      Fully equipped mobile valeting service covering <b>Hertfordshire | Bedfordshire | Buckinghamshire</b> areas.
      Wash your car as often as you like, GrimeToShine is your mobile ticket to a sparkling clean car at all times.
      Our cleaning products and style will leave your car shining brighter for longer, keeping the grime and dirt away
      for longer than the traditional washes. Call now and ask us about our cleaning products for more information.
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
.container__contact {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  gap: 2em;
  padding: 10px;

  .description {
    color: $primary-brighter;
    max-width: 20em;
  }

  .image-about {
    max-height: 20em;
  }
}

@media screen and (min-width: 1064px) {
  .container__contact {
    --grid-item--min-width: 28em;
  }
}
</style>
