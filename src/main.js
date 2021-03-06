import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// main css
import './assets/Style/main.css'
// Bootstrap Import
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Vue Toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast, {
  // You can set your default options here
  position: "top-center",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});

Vue.config.productionTip = false

// Global Components
import HeaderAppDark from './components/HeaderAppDark.vue';
import FormContacts from './components/FormContacts.vue';
import FormContact from './components/FormContact';
import FooterApp from './components/FooterApp.vue';
Vue.component('HeaderAppDark',HeaderAppDark)
Vue.component('FormContacts',FormContacts)
Vue.component('FormContact',FormContact)
Vue.component('FooterApp',FooterApp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
