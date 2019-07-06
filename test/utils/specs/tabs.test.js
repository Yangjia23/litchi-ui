import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue'
import Icon from '../../../src/components/icon'
import { Tabs, TabHead, TabBody, TabItem, TabPane } from '../../../src/components/tabs'
import { createVue, createTest, destoryVM } from '..'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

let vm;
Vue.component('lc-tabs', Tabs)
Vue.component('lc-tab-head', TabHead)
Vue.component('lc-tab-body', TabBody)
Vue.component('lc-tab-item', TabItem)
Vue.component('lc-tab-pane', TabPane)
Vue.component('lc-icon', Icon)

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })

    describe('Props', () => {
        afterEach(() => {
            destoryVM(vm)
        })

        it('默认选中 active', (done) => {
            const template = `
                <div>
                    <lc-tabs value="tab1">
                        <lc-tab-head>
                            <lc-tab-item name="tab1">标签一</lc-tab-item>
                            <lc-tab-item name="tab2">标签二</lc-tab-item>
                        </lc-tab-head>
                        <lc-tab-body>
                            <lc-tab-pane name="tab1">标签一相关内容</lc-tab-pane>
                            <lc-tab-pane name="tab2">标签二相关内容</lc-tab-pane>
                        </lc-tab-body>
                    </lc-tabs>
                </div>`
            vm = createVue(template, true)
            setTimeout(() => {
                const col = vm.$el.querySelector('.lc-tab-item:nth-child(1)')
                expect(col.classList.contains('is-active')).to.eq(true)
                done()
            }, 1000)
        })

        it('type 风格', (done) => {
            const template = `
                <div>
                    <lc-tabs value="tab1" type="card">
                        <lc-tab-head>
                            <lc-tab-item name="tab1">标签一</lc-tab-item>
                            <lc-tab-item name="tab2">标签二</lc-tab-item>
                        </lc-tab-head>
                        <lc-tab-body>
                            <lc-tab-pane name="tab1">标签一相关内容</lc-tab-pane>
                            <lc-tab-pane name="tab2">标签二相关内容</lc-tab-pane>
                        </lc-tab-body>
                    </lc-tabs>
                </div>`
            vm = createVue(template, true)
            setTimeout(() => {
                const col = vm.$el.querySelector('.lc-tabs')
                expect(col.classList.contains('lc-tabs-card')).to.eq(true)
                done()
            }, 1000)
        })
    })
})

describe('TabItem', () => {
    it('存在.', () => {
        expect(TabItem).to.be.ok
    })

    describe('Props', () => {
        afterEach(() => {
            destoryVM(vm)
        })

        it('set disabled', (done) => {
            const template = `
                <div>
                    <lc-tabs value="tab1">
                        <lc-tab-head>
                            <lc-tab-item name="tab1" disabled>标签一</lc-tab-item>
                            <lc-tab-item name="tab2">标签二</lc-tab-item>
                        </lc-tab-head>
                        <lc-tab-body>
                            <lc-tab-pane name="tab1">标签一相关内容</lc-tab-pane>
                            <lc-tab-pane name="tab2">标签二相关内容</lc-tab-pane>
                        </lc-tab-body>
                    </lc-tabs>
                </div>`
            vm = createVue(template, true)
            setTimeout(() => {
                const col = vm.$el.querySelector('.lc-tab-item:nth-child(1)')
                expect(col.classList.contains('is-disabled')).to.eq(true)
                done()
            }, 1000)
        })

        it('set icon', (done) => {
            const template = `
                <div>
                    <lc-tabs value="tab1" type="card">
                        <lc-tab-head>
                            <lc-tab-item name="tab1" icon="setting">标签一</lc-tab-item>
                            <lc-tab-item name="tab2">标签二</lc-tab-item>
                        </lc-tab-head>
                        <lc-tab-body>
                            <lc-tab-pane name="tab1">标签一相关内容</lc-tab-pane>
                            <lc-tab-pane name="tab2">标签二相关内容</lc-tab-pane>
                        </lc-tab-body>
                    </lc-tabs>
                </div>`
            vm = createVue(template, true)
            setTimeout(() => {
                const useElement = vm.$el.querySelector('use')
                expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
                done()
            }, 1000)
        })
    })
})