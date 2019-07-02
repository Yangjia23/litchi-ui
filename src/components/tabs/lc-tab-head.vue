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
    border: 1px solid red;
    height: @tab-head-height;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    > .actions-wrapper{
        margin-left: auto;
    }
}
</style>