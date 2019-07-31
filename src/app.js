import Vue from 'vue';
import Litchi from './main';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(Litchi);
Vue.use(VueHighlightJS);

new Vue({
    el: '#app',
    data() {
        return {
            value1: '22',
            value2: 5,
            expand1: [0, 2],
            expand2: 'pane2'
        }
    },
    methods: {
    }
})
