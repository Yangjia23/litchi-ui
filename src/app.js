import Vue from 'vue';
import Litchi from './main';

Vue.use(Litchi)


new Vue({
    el: '#app',
    data() {
        return {
            message: ''
        }
    },
    methods: {
        onBtnClick(e) {
            console.log(e)
        },
    }
})
