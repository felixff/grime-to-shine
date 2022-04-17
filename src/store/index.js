import {createStore} from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    scrollPosition: 0
  },
  getters: {},
  mutations: {
    saveScrollPosition(state, scrollPosition) {
      state.scrollPosition = scrollPosition;
    }
  },
  actions: {
    async requestBooking(state, {name, telephone, email, date, time, message}) {
      axios.get('https://www.googleapis.com/calendar/v3/calendars/faragau.florin@gmail.com/events').then((response) => {
        console.log(response.data)
      }, () => {
        console.log(name, telephone, email, date, time, message);
      })
    }
  },
  modules: {}
})
