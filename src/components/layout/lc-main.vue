<template>
  <div class="lc-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'LcMain'
}
</script>

<style lang="less" scoped>
.lc-main {
    flex-grow: 1;
}
</style>

