import {createStore} from 'vuex'
import axios from "axios";

const SET_EXISTING_BOOKINGS = 'setExistingBookings';

export default createStore({
  state: {
    scrollPosition: 0,
    existingBookings: []
  },
  getters: {},
  mutations: {
    saveScrollPosition(state, scrollPosition) {
      state.scrollPosition = scrollPosition;
    },
    [SET_EXISTING_BOOKINGS](state, existingBookings) {
      state.existingBookings = existingBookings.data;
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
    async requestBooking(state, {name, telephone, email, date, time, message}) {
      axios.post('/api/api.php/booking/add', {
        date: date,
        time: time,
        name: name,
        address: message
      }).then((response) => {
        console.log(response.data);
      }, () => {
        console.log('Not connected');
        // console.log(name, telephone, email, date, time, message);
      })
    },
  },
  modules: {}
})
