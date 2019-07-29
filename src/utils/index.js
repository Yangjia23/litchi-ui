const addClass = (el, value) => {
    if (!el) return
    const curCls = el.className
    const classes = (value || '').split(' ')
    for(let i = 0; i < classes.length; i++ ){
        const className = classes[i]
        if (!className) continue;
        if (el.classList) {
            // 指定的类名已存在，则不会添加
            el.classList.add(className)
        } else if (!hasClass(el, className)) {
            curCls += '' + className
        } 
    }
    if (!el.classList) {
        el.className = curCls
    }
}

const hasClass = (el, cls) => {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) {
        throw new Error('className should not contain space.');
    }
    if (el.classList) {
        return el.classList.contains(cls)
    } else {
        return ~el.className.indexOf(cls)
    }
}

const removeClass = (el, value) => {
    if (!el) return
    const curCls = el.className
    const classes = (value || '').split(' ')
    for(let i = 0; i < classes.length; i++ ){
        const className = classes[i]
        if (!className) continue;
        if (el.classList) {
            el.classList.remove(className)
        } else if (hasClass(el, className)) {
            curCls += '' + className
        } 
    }
    if (!el.classList) {
        el.className = curCls
    }
}

export default {
    addClass,
    hasClass,
    removeClass
}
