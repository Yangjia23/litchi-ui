import Vue from "vue";
import App from "./App.vue";
import Litchi from './litchi';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
// import VueHighlightJS from 'vue-highlightjs';

Vue.use(Litchi);
// Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
