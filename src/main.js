import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios"
import VueAxios from 'vue-axios'
// import VueSweetalert2 from 'vue-sweetalert2';
// import swal from "sweetalert2"

 
// Vue.use(VueSweetalert2);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

axios.defaults.baseURL = "https://coronavirus-19-api.herokuapp.com/countries";

new Vue({
  router,
  store,
  // swal,
  axios,
  vuetify,
  render: h => h(App)
}).$mount("#app");
