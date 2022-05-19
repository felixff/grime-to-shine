import {createStore} from 'vuex'
import axios from "axios";
import {toRaw} from "vue";
import moment from "moment";

const SET_EXISTING_BOOKINGS = 'setExistingBookings';
const SET_BOOKING_ACTION_RESULT = 'setBookingActionResult';
const SET_STATE = 'setState';

export default createStore({
  state: {
    scrollPosition: 0,
    bookingActionResult: null,
    existingBookings: [],
    state: 'READY'
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
    },
    [SET_STATE](state, currentState) {
      state.state = currentState;
    }
  },
  actions: {
    setState({commit}, {currentState}) {
      commit(SET_STATE, currentState);
    },
    getAllBookings({commit}) {
      axios.get('/api/api.php/bookings?a=list').then((response) => {
        commit(SET_EXISTING_BOOKINGS, response.data);
      }, () => {
        console.log('Not connected');
      })
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
      serviceLevel,
      token
    }) {
      axios.post('/api/api.php/book', {
        date: date,
        time: time,
        name: name,
        email: email,
        telephone: telephone,
        address: address,
        postcode: postcode,
        message: message,
        serviceLevel: serviceLevel,
        token: token
      }).then((response) => {
        dispatch('getAllBookings');
        let bookingDate = new moment(response.data.start.dateTime);
        commit(SET_BOOKING_ACTION_RESULT, `Your booking request for ${bookingDate.format('DD.MM.YYYY')} at ${bookingDate.format('HH:mm')} has been successfully submitted!`);
        commit(SET_STATE, 'READY');
      }, () => {
        commit(SET_BOOKING_ACTION_RESULT, 'Your booking request has failed, please try again!')
        commit(SET_STATE, 'READY');
      }).catch((error) => {
        if(process.env.NODE_ENV === 'development') {
          console.log(error)
        }
        commit(SET_BOOKING_ACTION_RESULT, 'Your booking request has failed, please try again!')
        commit(SET_STATE, 'READY');
      })
    },
  },
  modules: {}
})
