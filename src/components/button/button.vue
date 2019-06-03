<template>
  <button class="lc-button" :class="{[`icon-${iconPosition}`]: true}">
    <lc-icon :name="icon" v-if="icon" class="icon"></lc-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "",
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator (value) {
        return ['left', 'right'].includes(value)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.lc-button {
  font-size: var(--button-size);
  height: var(--button-height);
  line-height: 1.2;
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .3em;
  }
  > .content {
    order: 2;
  }

  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
  }
}
</style>



