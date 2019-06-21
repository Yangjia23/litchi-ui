import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue'
import { Row, Col } from '../../../src/components/grid'
import { createVue, createTest, destoryVM } from '..'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })

    describe('Props', () => {
        let vm;
        Vue.component('lc-row', Row)
        Vue.component('lc-col', Col)
        afterEach(() => {
            destoryVM(vm)
        })

        it('接收 span', () => {
            const template = `
                <div>
                    <lc-row>
                        <lc-col span="2">2</lc-col>
                        <lc-col span="22">22</lc-col>
                    </lc-row>
                </div>
            `
            vm = createVue(template, true)
            const col = vm.$el.querySelector('.lc-col')
            expect(col.classList.contains('lc-col_2')).to.eq(true)
        })

        it('接收 offset', () => {
            const template = `
                <div>
                    <lc-row>
                        <lc-col span="6">6</lc-col>
                        <lc-col span="6" offset="6">6</lc-col>
                    </lc-row>
                </div>
            `
            vm = createVue(template, true)
            const offsetCol = vm.$el.querySelectorAll('.lc-col')[1]
            expect(offsetCol.classList.contains('lc-col-offset_6')).to.eq(true)
        })

        it('响应式', () => {
            const template = `
                <div>
                    <lc-row>
                        <lc-col :xs="{span: 8, offset: 6}"></lc-col>
                    </lc-row>
                </div>
            `
            vm = createVue(template, true)
            const col = vm.$el.querySelector('.lc-col')
            expect(col.classList.contains('lc-col_xs-8')).to.eq(true)
        })
    })
})