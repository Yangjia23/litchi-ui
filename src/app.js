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
        onClick() {
            // this.$toast('操作成功')
            this.$toast({
                showClose: true,
                type: 'success',
                message: '111222',
                position: 'middle',
                onClose(aaa) {
                    // console.log(aaa)
                }
            })
        }
    }
})
