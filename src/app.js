import Vue from 'vue';
import Litchi from './main';

Vue.use(Litchi)


new Vue({
    el: '#app',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            message: '111'
        }
    },
    methods: {
        onBtnClick(e) {
            console.log(e)
        },
        onClick () {
            this.$toast('操作成功')
        }
    }
})
