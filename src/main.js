import Vue from "vue";
import App from "./App.vue";
import Litchi from './litchi';
// import VueHighlightJS from 'vue-highlightjs';

Vue.use(Litchi);
// Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
