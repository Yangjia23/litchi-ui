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
        it('设置 textarea".', () => {
            vm = createTest(Input, { type: 'textarea' })
            const textareaElement = vm.$el.querySelector('textarea')
            expect(textareaElement.classList.contains('lc-textarea')).to.eq(true)
        })
        it('设置 rows".', () => {
            vm = createTest(Input, { type: 'textarea', rows: 3 })
            const textareaElement = vm.$el.querySelector('textarea')
            expect(textareaElement.rows).to.equal(3)
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
            vm = createTest(Input, { clearable: true, value: 'abc' }, true)
            const svg = vm.$el.querySelector('svg')
            expect(svg.classList.contains('lc-input-clean-icon')).to.eq(true)
        })
        it('设置前/后缀内嵌 icon', () => {
            vm = createTest(Input, { prefix: 'search', suffix: 'add' }, true)
            const prefixIcon = vm.$el.querySelector('.lc-input-prefix svg')
            const suffixIcon = vm.$el.querySelector('.lc-input-suffix svg')
            expect(prefixIcon.classList.contains('lc-icon-search')).to.eq(true)
            expect(suffixIcon.classList.contains('lc-icon-add')).to.eq(true)
        })
    })

    describe('slot', () => {

    })

    describe('event', () => {
        let vm
        afterEach(() => {
            destoryVM(vm)
        })
        it('change/input/focus event', () => {
            ['change', 'input', 'focus'].forEach(eventName => {
                vm = createTest(Input, {}, true)
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(event, 'target', {value: {value: 'test', enumerable: false}})
                const inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('test');
            })
        })
    })
})