<template>
  <div class="container__booking-system">
    <div class="bookingData">
      <div class="availableDates">

      </div>
      <div class="picker">
        <label for="dateInput">Choose Day</label>
        <input type="date" id="dateInput" v-model="date">
        <div class="time-slots">
          <template v-for="(hour, index) in workHours" :key="index">
            <div class="interval" :class="{ 'hidden' : isAvailable(`${hour}:00`) }">
              {{ hour }}:00
            </div>
            <div class="interval">
              {{ hour }}:30
            </div>
          </template>
        </div>
      </div>
      <div class="bookingForm">
        <label for="name">Name</label>
        <input type="text" id="name" maxlength="60" required>
        <label for="telephone">Telephone</label>
        <input type="tel" id="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
        <label for="email">Email</label>
        <input type="email" id="email" maxlength="100" required>
        <label for="message">Message</label>
        <textarea id="message" maxlength="500" required></textarea>
      </div>
    </div>
    <button type="submit" class="text-white font-bold py-1 px-5 rounded" @click.prevent="requestBooking()">Request
      Booking
    </button>
  </div>
</template>
<script>

export default {
  // eslint-disable-next-line
  name: 'booking',
  components: {},
  data() {
    return {
      date: new Date().toDateString(),
      time: '00:00',
      name: null,
      telephone: null,
      email: null,
      message: null,
      workHours: [8, 9, 10, 11, 12, 13, 14, 15]
    }
  },
  mounted() {
    this.$store.dispatch('getAllBookings');
    console.log(typeof(this.$store.state.existingBookings));
  },
  computed: {
    existingBookings() {
      console.log(typeof(this.$store.state.existingBookings));
      return this.$store.state.existingBookings ?? [];
    },
  },
  methods: {
    requestBooking() {
      this.$store.dispatch('requestBooking', {
        name: this.name,
        telephone: this.telephone,
        email: this.email,
        date: this.date,
        time: this.time,
        message: this.message,
      })
    },
    isAvailable(timeSlot) {
      return timeSlot;
    }
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 1064px) {
  .container__booking-system {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .bookingData {
      gap: 4em;
      flex-wrap: nowrap;
      flex-direction: row !important;

      .picker {
        width: 15% !important;
        display: flex;
        flex-direction: column;
      }

      .bookingForm {
        width: 30% !important;
      }
    }

    button {
      width: 30% !important;
    }
  }
}

.container__booking-system {
  padding: 10px;
  width: 100%;

  input {
    border-radius: 5px;
    box-shadow: inset 0 2px 4px 0 rgba(38, 33, 33, 0.2);
  }

  label {
    font-weight: bold;
  }

  textarea {
    border-radius: 5px;
    box-shadow: inset 0 2px 4px 0 rgba(38, 33, 33, 0.2);
  }

  .bookingData {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .picker {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-self: flex-start;
      gap: 0.5em;

      .time-slots {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .interval {

          &:nth-of-type(1) {
            border-top: 1px $primary solid;
          }

          &:nth-of-type(2) {
            border-top: 1px $primary solid;
          }

          &:nth-of-type(3) {
            border-top: 1px $primary solid;
          }

          &:nth-of-type(4) {
            border-top: 1px $primary solid;
          }

          &:nth-of-type(4n-3) {
            border-left: 1px $primary solid;
            border-bottom: 1px $primary solid;
          }

          &:nth-of-type(4n-2) {
            border-left: 1px $primary solid;
            border-bottom: 1px $primary solid;
          }

          &:nth-of-type(4n-1) {
            border-left: 1px $primary solid;
            border-bottom: 1px $primary solid;
          }

          &:nth-of-type(4n) {
            border-left: 1px $primary solid;
            border-bottom: 1px $primary solid;
            border-right: 1px $primary solid;
          }
        }
      }
    }

    .bookingForm {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      #message {
        min-height: 10em;
      }
    }
  }

  button {
    margin-top: 2em;
    background-color: $primary;
    color: $tertiary-calmer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;

    &:hover {
      background-color: $secondary;
    }
  }
}
</style>