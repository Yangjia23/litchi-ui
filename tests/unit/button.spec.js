import { expect } from "chai";
// import { shallowMount } from "@vue/test-utils";
import Button from "@/components/button";
import { createTest, destoryVM } from './index'

describe("Button.vue", () => {
    it("exit", () => {
        expect(Button).to.be.ok
    })

    describe('Props', () => {
        let vm;
        afterEach(() => {
            destoryVM(vm)
        })

        // it('set icon.', () => {
        //     vm = createTest(Button, { icon: 'setting' })
        //     const useElement = vm.$el.querySelector('use')
        //     expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
        // })

        // it('icon 默认的 order 是 1', () => {
        //     vm = createTest(Button, { icon: 'setting' }, true)
        //     const icon = vm.$el.querySelector('svg')
        //     expect(getComputedStyle(icon).order).to.eq('1')
        // })
        // it('设置 iconPosition 可以改变 order', () => {
        //     vm = createTest(Button, { icon: 'setting', iconPosition: 'right' }, true)
        //     const icon = vm.$el.querySelector('svg')
        //     expect(getComputedStyle(icon).order).to.eq('2')
        // })
        // it('点击 button 触发 click 事件', () => {
        //     vm = createTest(Button, { icon: 'setting' }, true)
        //     const callback = sinon.fake();
        //     console.log(callback)
        //     vm.$on('click', callback)
        //     vm.$el.click()
        //     expect(callback).to.have.been.called
        // })
    })

});
