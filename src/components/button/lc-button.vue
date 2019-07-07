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
  name: "LcButton",
  props: {
    type: {
      type: String,
      default: "default"
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
@button-height-larger: 36px;
@button-height: 32px;
@button-height-small: 28px;
@button-size-larger: 16px;
@button-size: 14px;
@button-size-small: 12px;
@button-bg: white;
@button-active-bg: #eee;
@border-radius: 4px;
@color: #333;
@border-color: #999;
@border-color-hover: #666;

@color-primary: #20b2aa;
@color-primary-plain: #32ccbc;
@color-white: #fff;
@color-black: #000;
@color-success: #67c23a;
@color-danger: #ff3333;
@color-warning: #ff9900;

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
  font-size: @button-size;
  height: @button-height;
  line-height: 1;
  padding: 0 1em;
  border-radius: @border-radius;
  border: 1px solid @border-color;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }

  // color
  &_primary {
    color: @color-white;
    background: @color-primary;
    border-color: @color-primary;
    &:hover {
      background: #25c3cc;
      border-color: #25c3cc;
    }
  }

  &_default {
    border: 1px solid @border-color;
    background: @button-bg;

    &:not(.@{prefixCls}_loading):not(.is-disabled) {
      &:hover {
        border-color: @border-color-hover;
      }
      &:active {
        background-color: @button-active-bg;
      }
    }
  }

  &_success {
    color: @color-white;
    background: @color-success;
    border-color: @color-success;
  }

  &_danger {
    color: @color-white;
    background: @color-danger;
    border-color: @color-danger;
  }

  &_warning {
    color: @color-white;
    background: @color-warning;
    border-color: @color-warning;
  }

  &:focus {
    outline: none;
  }

  &_icon {
    order: 1;
    margin-right: 0.2em;
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

  &.is-loading {
    > .lc-icon-loading {
      animation: spin 1.5s infinite linear;
    }
  }

  &.is-round {
    border-radius: @button-height;
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
    height: @button-height-larger;
    font-size: @button-size-larger;

    &.is-round {
      border-radius: @button-height-larger;
    }
  }

  &_small {
    height: @button-height-small;
    font-size: @button-size-small;
    &.is-round {
      border-radius: @button-height-small;
    }
  }
}
</style>



