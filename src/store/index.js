import {createStore} from 'vuex'
import axios from "axios";
import {toRaw} from "vue";
import moment from "moment";
// import _ from "lodash";

const SET_EXISTING_BOOKINGS = 'setExistingBookings';
const SET_BOOKING_ACTION_RESULT = 'setBookingActionResult';

export default createStore({
  state: {
    scrollPosition: 0,
    bookingActionResult: null,
    existingBookings: []
  },
  getters: {},
  mutations: {
    saveScrollPosition(state, scrollPosition) {
      state.scrollPosition = scrollPosition;
    },
    [SET_EXISTING_BOOKINGS](state, data) {
      state.existingBookings = toRaw(data.existingBookings);
    },
    [SET_BOOKING_ACTION_RESULT](state, bookingActionResult) {
      state.bookingActionResult = toRaw(bookingActionResult);
    }
  },
  actions: {
    // eslint-disable-next-line
    getAllBookings({commit}) {
      // axios.get('/api/api.php/booking/list?a=test').then((response) => {
      //   commit(SET_EXISTING_BOOKINGS, response.data);
      // }, () => {
      //   console.log('Not connected');
      // })
      axios.post('/api/api.php/book', {aaaaaaaaaaaa: 'AAAAAAAAAAAAAAAA'}, {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
      },)
    },
    // eslint-disable-next-line
    async requestBooking({state, dispatch, commit}, {
      name,
      address,
      postcode,
      telephone,
      email,
      date,
      time,
      message,
      serviceLevel
    }) {
      axios.post('/api/api.php/booking/add', {
        date: date,
        time: time,
        name: name,
        email: email,
        telephone: telephone,
        address: address,
        postcode: postcode,
        message: message,
        serviceLevel: serviceLevel
      }).then((response) => {
        dispatch('getAllBookings');
        let bookingDate = new moment(response.data.start.dateTime);
        commit(SET_BOOKING_ACTION_RESULT, `Your booking request for ${bookingDate.format('DD.MM.YYYY')} at ${bookingDate.format('HH:mm')} has been successfully submitted!`);
      }, () => {
        commit(SET_BOOKING_ACTION_RESULT, 'Your booking request has failed, please try again!')
      })
    },
    verifyReCaptcha() {
      axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=&response=`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          },
        },
      );
    }
  },
  modules: {}
})
