<template>

</template>

<script>
export default {
  // eslint-disable-next-line
  name: "observer",
  data() {
    return {
      observer: null,
    };
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  mounted() {
    this.observer = new IntersectionObserver(
        this.onElementObserved,
        {
          root: this.$el,
          threshold: 1.0,
        }
    );
  },
  methods: {
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting}) => {
        // do something ...
      });
    }
  },
}
</script>

<style scoped>

</style>