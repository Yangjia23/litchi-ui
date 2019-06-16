<template>
    <div class="lc-row" 
    :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}" >
        <slot><slot>
    </div>
</template>

<script>
export default {
    name: 'Lc_Row',
    props: {
        gutter: [String, Number]
    },
    provide: function () {
        return {
            gutter: this.gutter
        }
    }
}
</script>


<style lang="less" scoped>
.lc-row{
    display: flex;
    margin-bottom: 10px;
}
</style>

