import Vue from 'vue';

const createElm = () => {
    const elm = document.createElement('div')
    document.body.appendChild(elm)
    return elm;
}

/**
 * 
 * @param {Object} Compo 
 * @param {Object} propsData 
 * @param {Boolean} mounted 
 */
export const createTest = (Compo, propsData = {}, mounted = false) => {
    if (propsData === true || propsData === false) {
        mounted = propsData
        propsData = {}
    }
    const elm = createElm();
    const Constructor = Vue.extend(Compo)
    return new Constructor({ propsData }).$mount(mounted ? elm : null)
}

export const destoryVM = (vm) => {
    vm.$destory && vm.$destory()
    vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
}