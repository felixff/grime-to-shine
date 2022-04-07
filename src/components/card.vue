<template>
  <div class="card">
    <!--    <img :src="image" class="image" :alt="image">-->
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "card",
  props: ['image', 'title', 'content']
}
</script>

<style scoped lang="scss">
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 20em;
  max-width: 18em;
  align-self: center;
  justify-self: center;
  margin-bottom: 1.5em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 5px;
  border-radius: 5%;
  background-color: $primary;

  .image {
    display: none;
  }

  .title {
    font-family: Grafitty, sans-serif;
    font-weight: bold;
    color: $secondary;
    font-size: 1.5rem;
  }

  .content {
    font-size: 1rem;
    color: $tertiary;
  }
}
</style>