import {createApp} from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas);
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(far);
import {dom} from "@fortawesome/fontawesome-svg-core";

dom.watch();
import {VueWindowSizePlugin} from 'vue-window-size/option-api';
import axios from 'axios';
import VueAxios from 'vue-axios';
import _ from 'lodash';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import {VueReCaptcha} from 'vue-recaptcha-v3'

let options = {
  siteKey: process.env.NODE_ENV === 'development' ? process.env.VUE_APP_KEY_DEV : process.env.VUE_APP_KEY_PROD,
  loaderOptions: {
    autoHideBadge: true
  }
}

createApp(App)
  .use(store)
  .use(router)
  .use(_)
  .use(VueWindowSizePlugin)
  .use(VueAxios, axios)
  .use(VueReCaptcha, options)
  .component('Datepicker', Datepicker)
  .mount('#app')
