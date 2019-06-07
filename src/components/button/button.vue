<template>
  <button
    class="lc-button"
    :class="[
      type ? `lc-button_${type}` : '',
      size ? `lc-button_${size}` : '',
      icon ? `icon-${iconPosition}` : '',
      {
        'is-round': round,
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]"
    @click="handleClick"
  >
    <lc-icon v-if="loading" name="loading" class="lc-button_icon lc-icon-loading"></lc-icon>
    <lc-icon :name="icon" v-if="!loading && icon" class="lc-button_icon"></lc-icon>
    <span class="lc-button_content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from "../icon";
export default {
  name: "",
  props: {
    type: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "right"].includes(value);
      }
    },
    size: {
      type: String,
      validator(value) {
        return ["larger", "small"].includes(value);
      }
    },
    loading: Boolean,
    round: Boolean,
    disabled: Boolean
  },
  components: {
    "lc-icon": Icon
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        this.$emit("click");
      }
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@prefixCls: lc-button;

.@{prefixCls} {
  font-size: var(--button-size);
  height: var(--button-height);
  line-height: 1;
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  margin-bottom: 10px;

  & + & {
    margin-left: 10px;
  }

  // color
  &_primary{
    color: var(--color-white);
    background: var(--color-primary);
    border-color: var(--color-primary);
    &:hover{
      background: #25c3cc;
      border-color: #25c3cc;
    }
  }

  &_default{
    border: 1px solid var(--border-color);
    background: var(--button-bg);

    &:not(.@{prefixCls}_loading):not(.is-disabled) {
      &:hover{
        border-color: var(--border-color-hover);
      }
      &:active{
        background-color: var(--button-active-bg);
      }
    }
  }

  &_success{
    color: var(--color-white);
    background: var(--color-success);
    border-color: var(--color-success);
  }

  &_danger{
    color: var(--color-white);
    background: var(--color-danger);
    border-color: var(--color-danger);
  }

  &_warning{
    color: var(--color-white);
    background: var(--color-warning);
    border-color: var(--color-warning);
  }

  &:focus {
    outline: none;
  }

  &_icon {
    order: 1;
    margin-right: 0.2em;
    fill: currentColor;
  }
  &_content {
    order: 2;
  }

  &.icon-right {
    .lc-button_content {
      order: 1;
    }
    .lc-button_icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2em;
    }
  }

  &.is-loading{
    > .lc-icon-loading{
      animation: spin 1.5s infinite linear;
    }
  }

  &.is-round {
    border-radius: var(--button-height);
  }

  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }

  // size
  &_larger {
    height: var(--button-height-larger);
    font-size: var(--button-size-larger);

    &.is-round {
      border-radius: var(--button-height-larger);
    }
  }

  &_small {
    height: var(--button-height-small);
    font-size: var(--button-size-small);
    &.is-round {
      border-radius: var(--button-height-small);
    }
  }
}
</style>



