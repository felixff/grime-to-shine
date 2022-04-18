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
    // eslint-disable-next-line
    async requestBooking(state, {name, telephone, email, date, time, message}) {
      axios.get('/api/api.php/booking/list').then((response) => {
        console.log(response.data)
      }, () => {
        console.log('tralalala')
        // console.log(name, telephone, email, date, time, message);
      })
    }
  },
  modules: {}
})
