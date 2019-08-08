<template>
  <div :class="`${prefixCls}`">
    <div :class="`${prefixCls}-picker`" @click="handleClick">
      <lc-input type="text" :class="`${prefixCls}-input`"></lc-input>
    </div>
    <div :class="`${prefixCls}-menus`">
        <lc-cascader-item :source="filterSource" :field-names="props"></lc-cascader-item>
    </div>
  </div>
</template>

<script>
const prefixCls = "lc-cascader";
import LcInput from '../input';
import LcCascaderItem from "./lc-cascader-item";

const defaultProps = {
  label: "label",
  value: "value",
  children: "children"
}

export default {
  name: "LcCascader",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultValue: {
      type: Array,
      default() {
        return [];
      }
    },
    fieldNames: {
      type: Object,
    }
  },
  components: {
    LcInput,
    LcCascaderItem
  },
  data() {
    return {
      prefixCls,
      popoverVisible: false,
      props: Object.assign({}, defaultProps, this.fieldNames)
    };
  },
  computed: {
    filterSource () {
      return this.options
    }
  },
  methods: {
    handleClick () {
      this.popoverVisible = !this.popoverVisible
    }
  }
};
</script>

<style lang="less" scoped>
.lc-cascader{
    display: inline-block;
    &-picker{
    }
    &-menus{
      display: inline-block;
      border: 1px solid #333;
      border: 1px solid #e4e7ed;
      border-radius: 2px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
}
</style>


