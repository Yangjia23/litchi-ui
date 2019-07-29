class Transition {
    beforeEnter(el) { }
    enter(el) { }
    afterEnter(el) { }
    beforeLeave(el) { }
    leave(el) { }
    afterLeave(el) { }
}

export default {
    name: 'collapse-transition',
    functional: true,
    render (h, {children}) {
        const data = {
            on: new Transition()
        }
        return h('transition', data, children)
    }
}