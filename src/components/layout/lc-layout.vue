<template>
    <div class="lc-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LcLayout',
    data () {
        return {
            layoutClass: {
                'lc-layout_has-aside': false
            }
        }
    },
    mounted () {
        const children = this.$children
        children.forEach(vm => {
            if (vm.$options.name === 'LcAside') {
                this.layoutClass['lc-layout_has-aside'] = true
            }
        })
    }
}
</script>

<style lang="less" scoped>
.lc-layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &_has-aside{
        flex-direction: row;
    }
}
</style>

