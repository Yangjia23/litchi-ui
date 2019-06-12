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
.lc-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .lc-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
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


