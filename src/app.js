import Vue from 'vue';
import Litchi from './main';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(Litchi);
Vue.use(VueHighlightJS);

new Vue({
    el: '#app',
    data() {
        return {
            checked1: false,
            checked2: true,
            checkList: [],
            sourceList: [
                {
                    label: '111',
                    value: 1,
                },
                {
                    label: '222',
                    value: 2,
                    disabled: true,
                },
                {
                    label: '333',
                    value: 3
                }
            ]
        }
    },
    methods: {
        handleClick() {
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
