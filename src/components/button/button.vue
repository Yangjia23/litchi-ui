<template>
  <button class="lc-button" :class="{[`icon-${iconPosition}`]: true}">
    <lc-icon v-if="loading" name="loading" class="lc-button__loading"></lc-icon>
    <lc-icon :name="icon" v-if="!loading && icon" class="lc-button__icon"></lc-icon>
    <span class="lc-button__content">
      <slot></slot>
    </span>
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
    },
    loading: Boolean
  }
};
</script>

<style lang="less" scoped>
@keyframes spin {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
}

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
  &__loading{
    margin-right: .2em;
    animation: spin 1.5s infinite linear;
  }
  &__icon {
    order: 1;
    margin-right: .2em;
  }
  &__content {
    order: 2;
  }

  &.icon-right {
    .lc-button__content {
      order: 1;
    }
    .lc-button__icon {
      order: 2;
      margin-right: 0;
      margin-left: .2em;
    }
  }
}
</style>



