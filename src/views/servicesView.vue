<template>
  <div class="container__servicesView">
    <services></services>
  </div>
</template>

<script>
import Services from "@/components/services.vue";

export default {
  name: "servicesView",
  components: {
    Services,
  },
};
</script>
<style lang="scss" scoped>
.container__servicesView {
  background-color: $tertiary-calmer;
  //height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .container__servicesView {
    //margin: 10em auto;
  }
}
</style>