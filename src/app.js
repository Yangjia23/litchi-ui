import Vue from 'vue';
import Litchi from './main';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(Litchi);
Vue.use(VueHighlightJS);

new Vue({
    el: '#app',
    data() {
        return {
            message: '',
            activeTab: 'woman'
        }
    },
    methods: {
        handleClick () {
            this.$toast({
                type: 'success',
                message: '丑八怪',
                position: 'top',
                showClose: true,
                onClose: 111,
                // onClose: () => {
                //     console.log('close callback')
                // }
            })
        },
        onBtnClick(e) {
            console.log(e)
        },
    }
})
