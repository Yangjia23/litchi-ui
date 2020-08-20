import * as components from './components'

const ComponentLibrary = {
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

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}