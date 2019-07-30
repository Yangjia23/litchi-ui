import utils from '../../utils'

const Transition = {
    beforeEnter(el) {
        utils.addClass(el, 'lc-collapse-transition');
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    },
    enter(el) {
        console.log(el)
        el.dataset.oldOverflow = el.style.overflow;
        el.style.height = el.scrollHeight ? el.scrollHeight + 'px' : '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
        el.style.overflow = 'hidden';
    },
    afterEnter(el) {
        utils.removeClass(el, 'lc-collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },
    leave(el) {
        if (el.scrollHeight !== 0) {
            utils.addClass(el, 'lc-collapse-transition');
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    },
    afterLeave(el) {
        utils.removeClass(el, 'lc-collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
}

export default {
    name: 'LcCollapseTransition',
    functional: true,
    render(h, { children }) {
        const data = {
            on: Transition
        }
        return h('transition', data, children)
    }
}