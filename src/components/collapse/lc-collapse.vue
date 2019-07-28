<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = "lc-collapse";

export default {
    name: 'LcCollapse',
    data () {
        return {
            prefixCls,
        }
    }
}
</script>

<style lang="less" scoped>
.lc-collapse{
    box-sizing: border-box;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-radius: 4px;
    background-color: #fafafa;
    font-size: 14px;
}
</style>


