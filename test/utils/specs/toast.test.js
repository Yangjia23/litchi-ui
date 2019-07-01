import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue'
import Toast from '../../../src/components/toast'
import { createVue, createTest, destoryVM } from '..'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    describe('data', () => {
        // let vm;
        afterEach(() => {
            const el = document.querySelector('.lc-toast');
            if (!el) return;
            if (el.parentNode) {
                el.parentNode.removeChild(el)
            }
            if (el.__vue__) {
                el.__vue__.$destroy();
            }
        })

        it('message 为字符串', () => {
            const msg = 'hello toast'
            Toast(msg)
            const toastMsgEle = document.querySelector('.lc-toast span')
            expect(toastMsgEle.textContent).to.eq(msg)
        })

        it('参数为obj', () => {
            const msg = 'hello toast'
            Toast({ message: msg })
            const toastMsgEle = document.querySelector('.lc-toast span')
            expect(toastMsgEle.textContent).to.eq(msg)
        })

        it('设置 type', () => {
            const msg = '操作成功1'
            Toast({ message: msg, type: 'success' })
            const toastTypeEle = document.querySelector('.lc-toast__type-success use')
            expect(toastTypeEle.getAttribute('xlink:href')).to.equal('#i-success')
        })

        it('设置 duration', () => {
            const msg = '操作成功2'
            Toast({ message: msg, type: 'success', duration: 2000 })
            setTimeout(() => {
                expect(document.body.contains(document.querySelector('.lc-toast__type'))).to.equal(false)
            }, 4000)
        })

        it('设置 close', () => {
            const msg = '操作成功3'
            Toast({ message: msg, showClose: true })
            const toastCloseEle = document.querySelector('.lc-toast__close use')
            expect(toastCloseEle.getAttribute('xlink:href')).to.equal('#i-clear')
        })

        it('设置 close 后 callback', (done) => {
            const msg = '操作成功111'
            const callback = sinon.fake()
            Toast({
                message: msg,
                showClose: true,
                onClose: callback
            })
            setTimeout(() => {
                const toastClose = document.querySelector('.lc-toast__close')
                toastClose.click()
                expect(callback).to.have.been.called
                done();
            }, 500);
        })


        it('使用定义的 [type] 方法', ()=> {
            Toast.success('hahaha');
            expect(document.querySelector('.lc-toast').__vue__.type).to.equal('success');
        })
    })
})