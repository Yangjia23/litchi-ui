import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue'
import Input from '../../../src/components/input'
import { createTest, destoryVM } from '..'
import { className } from 'postcss-selector-parser';

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    // BDD 行为驱动测试

    /**
     * @param (name, callback)
     */
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        let vm
        afterEach(() => {
            destoryVM(vm)
        })
        it('设置 password 输入".', () => {
            vm = createTest(Input, { type: 'password' })
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.getAttribute('type')).to.equal('password')
        })
        it('设置默认值".', () => {
            vm = createTest(Input, { value: '111', disabled: true, readonly: true })
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('111')
        })
        it('设置 disabled".', () => {
            vm = createTest(Input, { disabled: true })
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('设置 readonly".', () => {
            vm = createTest(Input, { readonly: true })
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('设置 clearable".', () => {
            vm = createTest(Input, { clearable: true, value: 'abc' })
            expect(vm.$el.className).to.include('lc-input-has-suffix')
        })
        it('设置前/后缀内嵌 icon', () => {
            const vm = createTest(Input, { prefix: 'search', suffix: 'add' })
            const prefixIcon = vm.$el.querySelector('.lc-input__prefix-icon use')
            const suffixIcon = vm.$el.querySelector('.lc-input__suffix-icon use')
            expect(prefixIcon.getAttribute('xlink:href')).to.equal('#i-search')
            expect(suffixIcon.getAttribute('xlink:href')).to.equal('#i-add')
        })
    })

    describe('slot', () => {

    })

    describe('event', () => {
        let vm
        afterEach(() => {
            destoryVM(vm)
        })
        it('change/input/focus/blur event', () => {
            ['change', 'input', 'focus', 'blur'].forEach(eventName => {
                vm = createTest(Input, {}, true)
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                const inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event);
            })
        })

    })
})