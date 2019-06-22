import Vue from 'vue';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Icon from './components/icon';
import Input from './components/input';
import { Row, Col } from './components/grid'
import {
    Aside,
    Header,
    Main,
    Footer,
    Layout
} from './components/layout'

Vue.component('lc-button', Button)
Vue.component('lc-button-group', ButtonGroup)
Vue.component('lc-icon', Icon)
Vue.component('lc-input', Input)
Vue.component('lc-row', Row)
Vue.component('lc-col', Col)

Vue.component('lc-layout', Layout)
Vue.component('lc-header', Header),
Vue.component('lc-main', Main)
Vue.component('lc-aside', Aside)
Vue.component('lc-footer', Footer)

new Vue({
    el: '#app',
    data() {
        return {
            message: '111'
        }
    },
    methods: {
        onBtnClick(e) {
            console.log(e)
        }
    }
})
