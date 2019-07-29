import Vue from 'vue';
import Litchi from './main';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(Litchi);
Vue.use(VueHighlightJS);

new Vue({
    el: '#app',
    data() {
        return {
            expand1: [0, 2],
            expand2: 'pane2'
        }
    },
    methods: {
    }
})
