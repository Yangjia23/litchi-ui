<template>
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = "lc-collapse";

export default {
  name: "LcCollapse",
  props: {
    accordion: {
      type: Boolean
    },
    value: {
      type: [String, Array]
    }
  },
  data() {
    return {
      prefixCls,
      activedKeys: [].concat(this.value)
    };
  },
  provide() {
    return {
      collapse: this
    };
  },
  watch: {
    value(newVal) {
      this.activedKeys = newVal;
    },
    activedKeys() {
      this.setActive();
    }
  },
  mounted() {
    this.setActive();
  },
  methods: {
    setActive() {
      this.$children.forEach(($item, index) => {
        const name = $item.name || index;
        $item.isExpand = this.activedKeys.includes(name);
        $item.index = index;
      });
    },
    toggle(value) {
      const { accordion, activedKeys } = this;
      const index = activedKeys.indexOf(value);
      if (accordion) {
        !!~index ? activedKeys.splice(0, 1) :  activedKeys.splice(0, 1, value)
      } else {
        !!~index ? activedKeys.splice(index, 1) : activedKeys.push(value);
      }
      this.$emit("input", this.activedKeys);
      this.$emit("change", this.activedKeys);
    }
  }
};
</script>

<style lang="less" scoped>
.lc-collapse {
  box-sizing: border-box;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-radius: 4px;
  background-color: #fafafa;
  font-size: 14px;
}
</style>


