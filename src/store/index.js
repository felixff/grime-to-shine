import {createStore} from 'vuex'
import axios from "axios";

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
    [SET_EXISTING_BOOKINGS](state, existingBookings) {
      state.existingBookings = existingBookings.data;
    },
    [SET_BOOKING_ACTION_RESULT](state, bookingActionResult) {
      state.bookingActionResult = bookingActionResult;
    }
  },
  actions: {
    // eslint-disable-next-line
    getAllBookings({commit}) {
      axios.get('/api/api.php/booking/list').then((response) => {
        commit(SET_EXISTING_BOOKINGS, response)
      }, () => {
        console.log('Not connected');
      })
    },
    // eslint-disable-next-line
    async requestBooking({state, dispatch, commit}, {name, address, postcode, telephone, email, date, time, message}) {
      axios.post('/api/api.php/booking/add', {
        date: date,
        time: time,
        name: name,
        email: email,
        telephone: telephone,
        address: address,
        postcode: postcode,
        message: message
      }).then(() => {
        dispatch('getAllBookings');
        commit(SET_EXISTING_BOOKINGS, 'Your booking request has been submitted');
      }, () => {
        commit(SET_EXISTING_BOOKINGS, 'Your booking request has failed, please try again!')
      })
    },
  },
  modules: {}
})
