import * as components from './components'

const ComponentLibary = {
    install(Vue, opts = {}) {
        for(const componentName in components) {
            if (componentName.toUpperCase() === 'TOAST') {
                Vue.prototype.$toast = components[componentName]
            } else {
                const component = components[componentName]
                Vue.component(component.name, component)
            }
        }
    }
}

export default ComponentLibary

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibary)
}
