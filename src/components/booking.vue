<template>
  <div class="container__booking-system">
    <div class="booking-data">
      <div class="picker">
        <div class="input-field-container">
          <label class="label">
            Date
          </label>
          <datepicker v-model="date"
                      :minDate="minDateAvailable"
                      :maxDate="maxDateAvailable"
                      :preventMinMaxNavigation="true"
                      :enableTimePicker="false"
                      :startDate="minDateAvailable"
                      :inline="false"
                      :format="'dd/MM/yyyy'"
                      :class="{'dp__icon-hidden': date !== null}"
                      :clearable="true"
                      style="width: 100%"
          >
          </datepicker>
        </div>
        <div class="input-field-container">
          <label for="name">Service</label>
          <div class="service-level-container">
            <div class="service-level bronze" :class="{'selected' : serviceLevel === 'bronze'}"
                 @click="setServiceLevel('bronze')">Bronze
            </div>
            <div class="service-level silver" :class="{'selected' : serviceLevel === 'silver'}"
                 @click="setServiceLevel('silver')">Silver
            </div>
            <div class="service-level gold" :class="{'selected' : serviceLevel === 'gold'}"
                 @click="setServiceLevel('gold')">Gold
            </div>
            <div class="service-level extra" :class="{'selected' : serviceLevel === 'extra'}"
                 @click="setServiceLevel('extra')">Extras
            </div>
          </div>
        </div>
        <div class="input-field-container">
          <label for="time-slots">Available Slots</label>
          <div id="time-slots" class="time-slots"
               :class="[{'disabled' : date === null}, { 'invalid': missingData.includes('date') && enableValidation}]">
            <template v-for="(hour, index) in workHours" :key="index">
              <div class="interval"
                   :class="{ 'not-available' : isAvailable(`${hour}:00`) === false, 'selected' : selectedInterval === `${hour}:00`}"
                   :style="`--background-color: ${backgroundColor}`"
                   @click="selectInterval(`${hour}:00`)">
                {{ hour }}:00
              </div>
              <div class="interval"
                   :class="{ 'not-available' : isAvailable(`${hour}:30`) === false, 'selected' : selectedInterval === `${hour}:30`}"
                   :style="`--background-color: ${backgroundColor}`"
                   @click="selectInterval(`${hour}:30`)">
                {{ hour }}:30
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="separator"></div>
      <div class="booking-form">
        <div class="contact-section">
          <div class="input-field-container">
            <label for="name">Name</label>
            <input type="text" v-model="name" :class="{ 'invalid' : missingData.includes('name') && enableValidation}" id="name" maxlength="60" placeholder="John Doe" required>
          </div>
          <div class="input-field-container">
            <label for="telephone">Telephone</label>
            <input type="tel" v-model="telephone" :class="{ 'invalid' : missingData.includes('telephone') && enableValidation}" id="telephone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                   placeholder="07777777777" required>
          </div>
        </div>
        <div class="address-section">
          <div class="input-field-container">
            <label for="address">Address</label>
            <input type="text" v-model="address" :class="{ 'invalid' : missingData.includes('address') && enableValidation}" id="address" maxlength="60" placeholder="Booking Address"
                   required>
          </div>
          <div class="input-field-container">
            <label for="postcode">Postcode</label>
            <input type="text" v-model="postcode" :class="{ 'invalid' : missingData.includes('postcode') && enableValidation}" id="postcode" maxlength="60" placeholder="IP1 11XX" required>
          </div>
        </div>
        <div class="input-field-container">
          <label for="email">Email</label>
          <input type="email" v-model="email" :class="{ 'invalid' : missingData.includes('email') && enableValidation}" id="email" maxlength="100" placeholder="email@placeholder.com" required>
        </div>
        <div class="input-field-container">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" maxlength="500" required></textarea>
        </div>
      </div>
    </div>
    <button type="submit" class="text-white font-bold py-1 px-5 rounded" @click.prevent="requestBooking()">Request
      Booking
    </button>
    <div v-show="name === null && bookingActionResult !== null" class="action-result">{{ bookingActionResult }}</div>
  </div>
</template>
<script>
import _ from "lodash";
import moment from 'moment'
import {toRaw} from "vue";

export default {
  // eslint-disable-next-line
  name: 'booking',
  components: {},
  data() {
    return {
      date: null,
      name: null,
      telephone: null,
      email: null,
      message: null,
      selectedInterval: null,
      address: null,
      postcode: null,
      serviceLevel: 'extra',
      backgroundColor: null,
      enableValidation: false,
      workHours: ['08', '09', '10', '11', '12', '13', '14', '15']
    }
  },
  mounted() {
    this.$store.dispatch('getAllBookings');
  },
  computed: {
    existingBookings() {
      return this.$store.state.existingBookings ?? [];
    },
    minDateAvailable() {
      return moment(new Date()).add(1, 'day').format('Y-MM-DD');
    },
    maxDateAvailable() {
      return moment(new Date()).add(30, 'days').format('Y-MM-DD');
    },
    bookingActionResult() {
      return this.date !== null ? null : this.$store.state.bookingActionResult ?? null;
    },
    missingData() {
      let missingFields = [];

      if (this.date === null) {
        missingFields.push('date');
      }

      if (this.serviceLevel === null) {
        missingFields.push('serviceLevel');
      }

      if (this.selectedInterval === null) {
        missingFields.push('selectedInterval');
      }

      if (this.name === null) {
        missingFields.push('name');
      }

      if (this.telephone === null) {
        missingFields.push('telephone');
      }

      if (this.address === null) {
        missingFields.push('address');
      }

      if (this.postcode === null) {
        missingFields.push('postcode');
      }

      if (this.email === null) {
        missingFields.push('email');
      }

      return missingFields;
    }
  },
  watch: {
    date: {
      handler() {
        this.setServiceLevel(this.serviceLevel);
      },
      immediate: true
    }
  },
  methods: {
    setServiceLevel(serviceLevel) {
      this.serviceLevel = serviceLevel;

      if (serviceLevel === 'bronze') {
        this.backgroundColor = '#CD7F32';
      } else if (serviceLevel === 'silver') {
        this.backgroundColor = '#C0C0C0';
      } else if (serviceLevel === 'gold') {
        this.backgroundColor = '#D4AF37';
      } else {
        this.backgroundColor = '#6d431d'
      }
    },
    requestBooking() {
      if (this.missingData.length >= 1) {
        this.enableValidation = true;
        return;
      }

      this.$store.dispatch('requestBooking', {
        name: this.name,
        telephone: this.telephone,
        email: this.email,
        date: this.date,
        time: this.selectedInterval,
        message: this.message,
        address: this.address,
        postcode: this.postcode,
        serviceLevel: this.serviceLevel,
      })

      this.name = null;
      this.telephone = null;
      this.email = null;
      this.date = null;
      this.time = null;
      this.message = null;
      this.address = null;
      this.postcode = null;
      this.selectedInterval = null;
      this.serviceLevel = 'extra';
      this.enableValidation = false;
    },
    isAvailable(timeSlot) {
      if (this.date === null) {
        return
      }

      let found = false;

      let dateToCheck = new moment(new Date(this.date)).format('Y-MM-DD');
      let bookingsForTheDay = _.get(toRaw(this.existingBookings), dateToCheck, []);

      if (bookingsForTheDay.length > 0) {
        _.forEach(bookingsForTheDay, booking => {
          if (booking.start <= timeSlot && timeSlot <= booking.end) {
            found = true;
          }
        })
      }

      return found === false;
    },
    selectInterval(interval) {
      this.selectedInterval = interval;
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

    .booking-data {
      gap: 4em;
      flex-wrap: nowrap;
      flex-direction: row !important;

      .separator {
        min-height: 25em !important;
        width: 1px;
        border-right: 1px $primary solid;
      }

      .picker {
        width: 15% !important;
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        justify-content: flex-start;
      }

      .booking-form {
        width: 30% !important;
      }
    }

    button {
      width: 30% !important;
    }
  }
}

.not-available {
  --background-color: $primary;
  background-color: var(--background-color) !important;
  color: $primary !important;
  pointer-events: none !important;
}

.selected {
  background-color: $secondary !important;
  color: $tertiary-calmer !important;
}

.serviceSelected {
  box-shadow: inset 2px $tertiary-calmer;
}

.input-field-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;

  textarea {
    border-radius: 4px;
    padding: 5px;

    &:focus {
      outline: none !important;
      border: none;
      box-shadow: 0 0 2px $primary;
    }
  }

  input {
    width: 100%;
    border-radius: 4px;

    &:focus {
      outline: none !important;
      border: none;
      box-shadow: 0 0 2px $primary;
    }
  }
}

.dp__icon-hidden {
  svg {
    display: none !important;
  }
}

.container__booking-system {
  padding: 10px;
  width: 100%;

  input {
    //border-radius: 2px;
    //box-shadow: inset 0 1px 1px 0 rgba(38, 33, 33, 0.2);
    caret-color: $primary;
    padding: 5px;
  }

  label {
    font-weight: bold;
  }

  textarea {
    //border-radius: 2px;
    //box-shadow: inset 0 2px 4px 0 rgba(38, 33, 33, 0.2);
  }

  .booking-data {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .separator {
      min-height: 0;
    }

    .picker {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-self: flex-start;
      gap: 2em;
      margin-bottom: 2em;

      .service-level-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 1em;
        margin-top: 0.2em;
        align-items: center;
        justify-content: center;

        .service-level {
          background-color: $primary;
          width: 4em;
          border: 2px $primary solid;
          border-radius: 4px;
          padding: 5px;

          &:hover {
            cursor: pointer;
            transform: scale(105%);
          }
        }
      }

      .time-slots {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        border-radius: 5px;
        border: 1px $primary solid;

        .interval {
          padding: 5px;

          &:hover {
            cursor: pointer;
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

    .booking-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      text-align: left;
      justify-content: flex-start;
      align-self: flex-start;

      .contact-section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        justify-content: space-between;

        #name {
          flex-grow: 1;
        }

        #telephone {
          flex-grow: 1;
        }
      }

      .address-section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
      }

      #message {
        min-height: 10em;
        width: 100%;
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