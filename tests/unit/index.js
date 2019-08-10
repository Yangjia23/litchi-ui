import Vue from 'vue';

let id = 0;
const createElm = () => {
    const elm = document.createElement('div');
    elm.id = 'app' + ++id;
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
    const Constructor = Vue.extend(Compo)
    return new Constructor({ propsData }).$mount(mounted ? createElm() : null)
}

export const createVue = function (Compo, mounted = false) {
    if (Object.prototype.toString.call(Compo) === '[object String]') {
        Compo = { template: Compo };
    }
    return new Vue(Compo).$mount(mounted ? createElm() : null);
};


export const destoryVM = (vm) => {
    vm.$destory && vm.$destory()
    vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
}