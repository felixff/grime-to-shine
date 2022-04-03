<template>
  <div>
    <DatePicker v-model="date"></DatePicker>
  </div>
</template>
<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'bookingComponent',
  components: [
    Datepicker
  ],
  data() {
    return {
      date: null
    }
  },
}
</script>
<style lang="">
  
</style>