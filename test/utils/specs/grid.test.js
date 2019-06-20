import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue'
import { Row, Col } from '../../../src/components/grid'
import { createVue, createTest, destoryVM } from '..'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })

    describe('Props', () => {
        let vm;
        afterEach(() => {
            destoryVM(vm)
        })

        it('接收 gutter', () => {
            Vue.component('lc-row', Row)
            Vue.component('lc-col', Col)
            const template = `
                <div>
                    <lc-row gutter="20">
                        <lc-col span="2">2</lc-col>
                        <lc-col span="22">22</lc-col>
                    </lc-row>
                </div>
            `
            vm = createVue(template, true)
            const row = vm.$el.querySelector('.lc-row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            const col = vm.$el.querySelector('.lc-col')
            expect(getComputedStyle(col).paddingLeft).to.eq('10px')
        })
    })
})