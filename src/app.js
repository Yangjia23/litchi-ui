import Vue from 'vue';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Icon from './components/icon';
import Input from './components/input';
import {Row, Col} from './components/grid'

Vue.component('lc-button', Button)
Vue.component('lc-button-group', ButtonGroup)
Vue.component('lc-icon', Icon)
Vue.component('lc-input', Input)
Vue.component('lc-row', Row)
Vue.component('lc-col', Col)

new Vue({
    el: '#app',
    data () {
        return {
            message: '111'
        }
    },
    methods: {
        onBtnClick (e) {
            console.log(e)
        }
    }
})

// 单元测试
import {createTest, destoryVM} from '../test/utils'
import chai from'chai'
import spies from 'chai-spies'

chai.use(spies)
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

{
    // click 
    const $vm = createTest(Button, {icon: 'setting', iconPosition: 'right'}, true)
    const spy = chai.spy(() => {console.log('clicked')})
    $vm.$on('click', spy)       

    const button = $vm.$el
    button.click()
    expect(spy).to.have.been.called()
    destoryVM($vm)
}