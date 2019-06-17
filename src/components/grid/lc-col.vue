<template>
  <div class="lc-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LcCol",
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  inject: ["gutter"],
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    colClass() {
      const { span, offset } = this;
      return [
        span ? `lc-col_span-${span}` : "",
        offset && `lc-col_offset-${offset}`
      ];
    }
  }
};
</script>


<style lang="less" scoped>
.lc-col {
  box-sizing: border-box;
  width: 50%;
  line-height: 30px;
  text-align: center;
  .generate-columns(@n, @i: 1) when (@i =< @n) {
    &.lc-col_span-@{i} {
      width: (@i * 100% / @n);
    }
    &.lc-col_offset-@{i} {
      margin-left: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i + 1));
  }
  .generate-columns(24);
}
</style>