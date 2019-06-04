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

// 单元测试
import {createTest, destoryVM} from './utils'
import chai from'chai'
const expect = chai.expect

{
    // init
    const $vm = createTest(Button, {icon: 'setting'})
    let useElement = $vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
}

{
    // loading
    const $vm = createTest(Button, {icon: 'setting', loading: true})
    let useElement = $vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}

{
    // iconPosition
    const $vm = createTest(Button, {icon: 'setting'}, true)
    let svg = $vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    destoryVM($vm)
}

{
    // iconPosition right
    const $vm = createTest(Button, {icon: 'setting', iconPosition: 'right'}, true)
    let svg = $vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    destoryVM($vm)
}
