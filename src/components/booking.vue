<template>
  <div class="booking-system-container">
    <date-picker v-show="false" v-model="date" :clearable="true" :inputFormat="'dd.mm.yyyy'"></date-picker>
  </div>
</template>
<script>
import DatePicker from 'vue3-datepicker';

export default {
  // eslint-disable-next-line
  name: 'booking',
  components: {
    DatePicker
  },
  data() {
    return {
      date: new Date()
    }
  },
}
</script>
<style lang="scss">
  .booking-system-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    .v3dp__datepicker {
      position: relative;

      .v3dp__popout {
        background-color: black !important;
        position: absolute;
      }
    }
  }
</style>