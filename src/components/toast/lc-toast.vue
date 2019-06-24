<template>
  <div class="lc-toast">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LcToast"
};
</script>

<style lang="less" scoped>
.lc-toast{
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1010;
    box-sizing: border-box;
    margin: 0;
    color: rgba(0,0,0,0.65);
    font-size: 14px;
    line-height: 1.5;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    padding: 10px 16px;
    background: #fff;
    border-radius: 4px;
}
</style>

