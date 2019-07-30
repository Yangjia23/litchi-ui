<template>
    <div :class="collapseItemCls" @click="handleClick">
        <div :class="`${prefixCls}__header`">
            <i :class="`${prefixCls}__icon`">
                <lc-icon name="right"></lc-icon>
            </i>
            <template v-if="$slots.title">
                <slot name="title"></slot>
            </template>
            <template v-else>{{title}}</template>
        </div>
        <lc-collapse-transition>
            <div :class="`${prefixCls}__content`" v-show="isExpand">
                <div :class="`${prefixCls}__content-box`">
                     <slot></slot>
                </div>
            </div>
        </lc-collapse-transition>
    </div>
</template>

<script>
import LcCollapseTransition from './collapse-transition'
import Icon from '../icon/'

const prefixCls = "lc-collapse-item";
export default {
    name: 'LcCollapseItem',
    components: {
        LcCollapseTransition,
        'lc-icon': Icon
    },
    inject: ['collapse'],
    props: {
        title: String,
        name: {
            type: String,
        }
    },
    computed: {
        collapseItemCls () {
            return [
                'lc-collapse-item',
                {
                    'lc-collapse-item-active': this.isExpand
                }
            ]
        }
    },
    data () {
        return {
            prefixCls,
            isExpand: false
        }
    },
    methods: {
        handleClick () {
            this.collapse.toggle(this.name || this.index)
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
        padding-left: 32px;
        cursor: pointer;
        transition: all .3s;
        &:hover{
            color: #20B2AA;
        }
    }
    &__icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
        font-size: 12px;
        display: inline-block;
        line-height: 0;
        svg{
            transition: transform .3s;
        }
    }
    &__content-box{
        border-top: 1px solid #d9d9d9;
        padding: 16px;
        background-color: #fff;
    }

    &-active{
        .lc-collapse-item__icon{
            svg{
                transform: rotate(90deg);
                // transform-origin: 6px 6px;
            }
        }
    }
}

.lc-collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
</style>


