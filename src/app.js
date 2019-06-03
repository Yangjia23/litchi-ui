import Vue from 'vue';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Icon from './components/icon';

Vue.component('lc-button', Button)
Vue.component('lc-button-group', ButtonGroup)
Vue.component('lc-icon', Icon)
new Vue({
    el: '#app',
})