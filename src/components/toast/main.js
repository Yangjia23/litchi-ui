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
    if (options.onClose){
    }
    instance = new ToastConstructor({
        data: options
    })
    instance.$mount()
    document.body.appendChild(instance.$el)
}

const typeList = ['success', 'error', 'warning', 'info']
typeList.forEach(type => {
    Toast[type] = options => {
        options = options || {}
        if (typeof options === 'string') {
            options = {
                message: options
            }
        }
        options.type = type
        return Toast(options)
    }
});

export default Toast
