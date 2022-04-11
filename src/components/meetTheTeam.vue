<template>
  <div class="container__contact">
    <div class="team-member" v-for="(contact, index) in contacts" :key="index">
      <h1 class="team-member-name">{{ contact }}</h1>
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        tincidunt lorem. Aenean et tortor ac mi sollicitudin viverra.
        Pellentesque mollis lacinia eros, vitae mattis tellus sagittis a.
        Integer vel scelerisque massa. Nam eu convallis sem. Donec mauris arcu,
        ultrices nec augue ut, semper molestie eros. Sed et magna velit. In
        sagittis aliquam elit, tincidunt blandit purus porta in. Nam hendrerit
        accumsan ante ac blandit. Quisque odio purus, consectetur quis nibh id,
        sodales ornare ipsum. Donec vitae pretium libero.
      </div>
    </div>
<!--    <img src="" alt="Contact Image" />-->
  </div>
</template>

<script>
export default {
  name: "meetTheTeam",
  props: {
    "contacts" : {
      default: [ 'Manager' , 'Colleague']
    }
  },
};
</script>

<style scoped lang="scss">
.container__contact {
  --grid-layout-gap: 2em;
  --grid-column-count: 2;
  --grid-item--min-width: 32em;
  --grid-item--max-width: calc((100% - var(--grid-layout-gap)) / var(--grid-column-count));

  margin-block-end: 2em;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
  align-items: center;
  justify-content: center;
  max-width: 80%;

  .team-member{
    width: 100%;
    color: $tertiary-calmer;

    .team-member-name {
      font-size: 2rem;
      font-family: Grafitty, sans-serif;
      //font-weight: bold;
    }

    .description {
    }
  }
}
</style>
