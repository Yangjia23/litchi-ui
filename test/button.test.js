import chai from'chai';
const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/components/button'
import {createTest, destoryVM} from './utils'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        const vm = createTest(Button, {icon: 'setting'})
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
        destoryVM(vm)
    })
    it('可以设置loading.', () => {
        const vm = createTest(Button, {icon: 'setting', loading: true})
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
        destoryVM(vm)
    })
    it('icon 默认的 order 是 1', () => {
        const vm = createTest(Button, {icon: 'setting'}, true)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        destoryVM(vm)
    })
    it('设置 iconPosition 可以改变 order', () => {
        const vm = createTest(Button, {icon: 'setting', iconPosition: 'right'}, true)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        destoryVM(vm)
    })
    // it('点击 button 触发 click 事件', () => {
    //     const vm = createTest(Button, {icon: 'setting'})
    //     const callback = sinon.fake();
    //     vm.$on('click', callback)
    //     vm.$el.click()
    //     expect(callback).to.have.been.called
    //     destoryVM(vm)
    // })
})