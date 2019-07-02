import Vue from 'vue';
import Litchi from './main';

Vue.use(Litchi)


new Vue({
    el: '#app',
    data() {
        return {
            message: '',
            activeTab: 'woman'
        }
    },
    methods: {
        handleTabClick () {

        },
        onBtnClick(e) {
            console.log(e)
        },
    }
})
