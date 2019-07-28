<template>
    <div :class="collapseItemCls" @click="handleClick">
        <div :class="`${prefixCls}__header`">
            <i :class="`${prefixCls}__icon`">
                <lc-icon name="right"></lc-icon>
            </i>
            <template v-if="$slots.title" slot="title"></template>
            <template v-else>{{title}}</template>
        </div>
        <div :class="`${prefixCls}__content`" v-if="expand">
            <slot></slot>
        </div>
    </div>
</template>

<script>
const prefixCls = "lc-collapse-item";
import Icon from '../icon/'

export default {
    name: 'LcCollapseItem',
    components: {
        'lc-icon': Icon
    },
    props: {
        title: {
            type: String,
        }
    },
    computed: {
        collapseItemCls () {
            return [
                'lc-collapse-item',
                {
                    'lc-collapse-item-active': this.expand
                }
            ]
        }
    },
    data () {
        return {
            prefixCls,
            expand: false
        }
    },
    methods: {
        handleClick () {
            this.expand = !this.expand
        }
    }
}
</script>

<style lang="less" scoped>
@keyframes identifier {
    
}
.lc-collapse-item{
    border-bottom: 1px solid #d9d9d9;
    &:last-child{
        border-radius: 0 0 4px 4px;
    }

    &__header{
        position: relative;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        padding-left: 40px;
        cursor: pointer;
        transition: all .3s;
    }
    &__icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
        font-size: 12px;
        display: inline-block;
        line-height: 0;
    }
    &__content{
        border-top: 1px solid #d9d9d9;
        padding: 16px;
        background-color: #fff;
    }

    &-active{
        .lc-collapse-item__icon{
            svg{
                transform: rotate(90deg);
                transform-origin:center center;
                // transform-origin: 6px 6px;
            }
        }
    }
}
</style>


