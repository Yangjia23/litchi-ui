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
            this.$toast.success('111')
            // this.$toast({
            //     type: 'success',
            //     message: '丑八怪',
            //     position: 'top',
            //     showClose: true,
            //     onClose: 111,
            //     // onClose: () => {
            //     //     console.log('close callback')
            //     // }
            // })
        },
    }
})
