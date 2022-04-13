<template>
  <div class="card">
    <!--    <img :src="image" class="image" :alt="image">-->
    <div class="section-header__small" :class="type !== null ? type : ''">{{ title }}</div>
    <div v-if="content !== null" class="content">{{ content }}</div>
    <ul v-if="itemList !== undefined && itemList.length > 0" class="item-list">
      <li v-for="(item, index) in itemList" :key="index" class="listItem">{{ index + 1 }}. {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "card",
  components: {},
  props: {
    image: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    itemList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 30em;
  align-self: center;
  justify-self: center;
  margin-bottom: 1.5em;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5px;
  border-radius: 2.5%;
  background-color: $primary-brighter;

  .image {
    display: none;
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
  }

  .bronze {
    color: $bronze !important;
  }

  .silver {
    color: $silver !important;
  }

  .gold {
    color: $gold !important;
  }
}
</style>