import Vue from 'vue'
import App from './components/Layouts/AdminLayout.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugin/vuetify'
import VueQrcodeReader from "vue-qrcode-reader";
Vue.use(VueQrcodeReader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
