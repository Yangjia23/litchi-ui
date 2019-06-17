<template>
  <div class="lc-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Lc_Row",
  props: {
    gutter: [String, Number]
  },
  provide: function() {
    return {
      gutter: this.gutter
    };
  },
  computed: {
    rowStyle() {
      return {
        paddingLeft: -this.gutter / 2 + "px",
        paddingRight: -this.gutter / 2 + "px"
      };
    }
  }
};
</script>


<style lang="less" scoped>
.lc-row {
  display: flex;
  margin-bottom: 10px;
}
</style>

