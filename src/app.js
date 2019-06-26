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
        onClick1() {
            this.$toast({
                type: 'success',
                message: '111222',
                position: 'top',
            })
        },
        onClick2() {
            this.$toast({
                type: 'success',
                message: '111222',
                position: 'middle',
            })
        },
        onClick3() {
            this.$toast({
                type: 'success',
                message: '111222',
                position: 'bottom',
            })
        },
    }
})
