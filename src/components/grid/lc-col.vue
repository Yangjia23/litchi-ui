<template>
    <div class="lc-col" :class="[span ? `lc-col_span-${span}`: '', offset && `lc-col_offset-${offset}`]"
    :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}">
       <div :style="{ border: '1px solid #666'}">
            <slot><slot>
       </div>
    </div>
</template>

<script>
export default {
    name: 'LcCol',
    props: {
        span: [Number, String],
        offset: [Number, String]
    },
    inject: ['gutter']
}
</script>


<style lang="less" scoped>
.lc-col{
    box-sizing: border-box;
    width: 50%;
    line-height: 30px;
    text-align: center;
    .generate-columns(@n, @i: 1) when (@i =< @n) {
        &.lc-col_span-@{i} {
            width: (@i * 100% / @n);
        }
        &.lc-col_offset-@{i} {
            margin-left: (@i * 100% / @n);
        }
        .generate-columns(@n, (@i + 1));
    }
    .generate-columns(24);
}
</style>