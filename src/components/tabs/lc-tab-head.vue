<template>
  <div class="lc-tab-head">
    <slot></slot>
    <div class="actions-wrapper">
        <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LcTabHead",
  inject: ['eventHub'],
};
</script>

<style lang="less" scoped>
@tab-head-height: 40px;
.lc-tab-head{
    border-bottom: 2px solid#e4e7ed;
    height: @tab-head-height;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    > .actions-wrapper{
        margin-left: auto;
        padding: 0 1em;
    }
}
</style>