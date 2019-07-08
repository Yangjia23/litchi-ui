<template>
  <div class="lc-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LcButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      const name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `<lc-button-group> 的子元素应该是 <lc-button>, 而你写的是 <${name}>`
        );
      }
    }
  }
};
</script>

<style lang="less" scoped>
@border-radius: 4px;
.lc-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .lc-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: @border-radius;
      border-bottom-left-radius: @border-radius;
    }
    &:last-child {
      border-top-right-radius: @border-radius;
      border-bottom-right-radius: @border-radius;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
      position: relative;
      zoom: 1;
    }
  }
}
</style>


