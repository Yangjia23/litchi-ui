import Vue from 'vue'
import LcToast from './lc-toast'

const ToastConstructor = Vue.extend(LcToast) // 使用 Vue 构造函数，创建出一个child class

let instance
const Toast = function (options) {
    options = options || {}
    if (typeof options === 'string') {
        options = {
            message: options
        }
    }
    instance = new ToastConstructor({
        data: options
    })
    instance.$slots.default = [instance.message]
    instance.$mount()
    document.body.appendChild(instance.$el)
}

export default Toast
