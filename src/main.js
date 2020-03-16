import Vue from 'vue'
import App from './App.vue'
import router from "./Router";
import mask from 'v-mask';

Vue.use(mask);

Vue.config.productionTip = false

new Vue({
  router,
  render(h) {
    return h(App);
  }

}).$mount('#app')
