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
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
  .use(store)
  .use(router)
  .use(VueWindowSizePlugin)
  .use(VueAxios, axios)
  .mount('#app')
