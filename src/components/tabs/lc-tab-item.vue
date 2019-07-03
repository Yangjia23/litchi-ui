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
      this.eventHub.$emit("selected", this.name);
    }
  }
};
</script>

<style lang="less" scoped>
.lc-tab-item {
  flex-shrink: 0;
  padding: 0 1.5em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #409eff;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.is-active {
    color: #409eff;
    &::before {
      width: 100%;
      left: 0;
    }
    ~ .lc-tab-item::before {
      left: 0;
    }
  }

  &.is-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  &:not(.is-disabled):hover {
    color: #409eff;
  }
}
</style>