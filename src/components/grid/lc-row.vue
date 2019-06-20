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
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    }
  }
};
</script>


<style lang="less" scoped>
.lc-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>

