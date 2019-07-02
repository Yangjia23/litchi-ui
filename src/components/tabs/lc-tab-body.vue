<template>
  <div class="lc-tab-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LcTabBody",
  inject: ['eventHub'],
};
</script>

<style lang="less" scoped>
.lc-tab-body{
    
}
</style>