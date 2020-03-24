import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

axios.defaults.baseURL = "https://coronavirus-19-api.herokuapp.com/countries";

new Vue({
  router,
  store,
  // swal,
  axios,
  vuetify,
  render: h => h(App)
}).$mount("#app");
