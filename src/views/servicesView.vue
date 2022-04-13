<template>
  <div class="container__services">
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
.container__services {
  height: 100vh;
}
</style>