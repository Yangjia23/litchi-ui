<template>
  <div class="lc-tab-item" @click="onTabClick" :class="tabItemClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LcTabItem",
  inject: ["eventHub"],
  props: {
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    tabItemClass() {
      return {
        "is-active": this.isActive,
        "is-disabled": this.disabled
      };
    }
  },
  created() {
    this.eventHub.$on("selected", name => {
      this.isActive = this.name === name;
    });
  },
  methods: {
    onTabClick() {
      if (this.disabled) return false;
      this.eventHub.$emit("selected", this.name, this);
    }
  }
};
</script>

<style lang="less" scoped>
@tab-head-height : 40px;
.lc-tab-item {
  flex-shrink: 0;
  padding: 0 1.5em;
  cursor: pointer;
  height: @tab-head-height;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: -1px;

  &.is-active {
    color: var(--color-primary);
  }

  &.is-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  &:not(.is-disabled):hover {
    color: var(--color-primary);
  }
}
</style>