import Vue from 'vue';
import Button from './components/button';
import Icon from './components/icon';

Vue.component('lc-button', Button)
Vue.component('lc-icon', Icon)
new Vue({
    el: '#app',
})