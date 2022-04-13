<template>
  <div class="container__contact">
    <div class="team-member">
      <div class="description">
        Fully equipped mobile valeting service covering Hertfordshire | Bedfordshire | Buckinghamshire areas
        Wash your car as often as you like, GrimeToShine is your mobile ticket to a sparkling clean car at all times.
        Our cleaning products and style will leave your car shining brighter for longer, keeping the grime and dirt away for longer than the traditional washes. Call now and ask us about our cleaning products for more information.
      </div>
    </div>
<!--    <img src="" alt="Contact Image" />-->
  </div>
</template>

<script>
export default {
  name: "meetTheTeam",
};
</script>

<style scoped lang="scss">
.container__contact {
  --grid-layout-gap: 2em;
  --grid-column-count: 2;
  --grid-item--min-width: 22em;
  --grid-item--max-width: calc((100% - var(--grid-layout-gap)) / var(--grid-column-count));

  margin-block-end: 2em;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
  align-items: center;
  justify-content: center;
  max-width: 80%;
  text-align: left;

  .team-member{
    width: 100%;
    color: $tertiary-calmer;

    .team-member-name {
      font-size: 2rem;
      font-family: Grafitty, sans-serif;
      //font-weight: bold;
    }

    .description {
      color: $primary-brighter;
    }
  }
}

@media screen and (min-width: 1064px){
  .container__contact {
    --grid-item--min-width: 28em;
  }
}
</style>
