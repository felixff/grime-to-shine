<template>
  <div class="card" :style="gradient">
    <div class="section-header__small service-title" :class="type !== null ? `${type}-card` : ''">{{ title }}</div>
    <div v-if="content !== null" class="content">{{ content }}</div>
    <ul v-if="itemList !== undefined && itemList !== null && itemList.length > 0" class="item-list">
      <li v-for="(item, index) in itemList" :key="index" class="listItem"><i class="fas fa-soap"/> {{ item }}</li>
    </ul>
    <div class="price">From £{{ startingPrice }}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "card",
  components: {},
  computed: {
    gradient() {
      return `background-image: linear-gradient(to bottom left, ${this.gradientColor}, ${this.gradientColor} 25%, transparent 35%, transparent 100%); background-image: -webkit-linear-gradient(to bottom left, ${this.gradientColor}, ${this.gradientColor} 25%, transparent 35%, transparent 100%);`;
    }
  },
  props: [
    'image',
    'title',
    'content',
    'type',
    'itemList',
    'startingPrice',
    'gradientColor',
  ]
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 1064px){
  .card {
    height: 30em;

    .service-title {
      align-self: flex-start;
      margin-left: 0.5em;
      margin-top: 0.2em;
    }
  }
}

@media screen and (max-width: 281px){
  .card {
    height: 48em !important;
  }
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 36em;
  align-self: center;
  justify-self: center;
  margin-bottom: 1.5em;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  background-color: $primary-brighter;
  position: relative;

  .service-title {
    align-self: flex-start;
    margin-left: 0.25em;
    margin-top: 0.1em;
    font-size: 2rem;
  }

  .image {
    max-width: 30%;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-25%, 20%);
  }

  .content {
    font-size: 1rem;
    color: $tertiary-calmer;
    padding: 5px;
  }

  .item-list {
    text-align: left;
    color: $tertiary-calmer;
    font-size: 1rem;
    padding: 5px;

    .listItem {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      gap: 0.2em;

      .fa-soap {
        font-size: 10px;
        transform: translateY(-2px);
      }
    }
  }

  .price {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-15%, -15%);
    color: $tertiary-calmer;
    //font-weight: bold;
    font-size: 2.2rem;
  }

  .bronze-card {
    color: $bronze !important;
  }

  .silver-card {
    color: $silver !important;
  }

  .gold-card {
    color: $gold !important;
  }
}
</style>