<template>
  <div class="lc-tab-head" ref="lcTabHead">
    <slot></slot>
    <div class="active-line" ref="activeLine" v-if="!typeCard"></div>
    <div class="actions-wrapper">
        <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LcTabHead",
  inject: ['eventHub', 'type'],
  props: {
    typeCard: {
      default () {
        return this.type === 'card'
      }
    }
  },
  computed: {
    tabHeadClass () {
      return {
        'lc-tab-head': true,
        'lc-tab-head-card': this.typeCard
      }
    }
  },
  mounted () {
    const {left: tabHeadLeft} = this.$refs.lcTabHead.getBoundingClientRect()
    !this.typeCard && this.eventHub.$on("selected", (name, vm) => {
      const {width, left} = vm.$el.getBoundingClientRect()
      this.$refs.activeLine.style.width = `${width}px`
      this.$refs.activeLine.style.left = `${left - tabHeadLeft}px`
    });
  },
};
</script>

<style lang="less" scoped>
.lc-tab-head{
    border-bottom: 1px solid#e4e7ed;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: -1px;
    > .active-line{
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 2px;
      background-color: var(--color-primary);
      z-index: 1;
      transition: all .3s cubic-bezier(.645,.045,.355,1);
    }
    > .actions-wrapper{
        margin-left: auto;
        padding: 0 1em;
    }
}
</style>