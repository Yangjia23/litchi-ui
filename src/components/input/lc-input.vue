<template>
  <div
    :class="[
    'lc-input',
    `lc-input-${type}`,
    size ? `lc-input-${size}` : '',
    {
      'is-disabled': disabled,
      'is-readonly': readonly,
      'lc-input-group': $slots.prepend || $slots.append,
      'lc-input-group-prepend': $slots.prepend,
      'lc-input-group-append': $slots.append,
      'lc-input-has-prefix': prefix,
      'lc-input-has-suffix': suffix || clearable,
    }
    ]"
  >
    <span class="lc-input-group__addon" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </span>
    <lc-icon :name="prefix" v-if="prefix" class="lc-input__prefix-icon"></lc-icon>
    <input
      class="lc-input__inner"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @blur="onBlur"
      @change="$emit('change', $event.target.value)"
      @focus="onFocus"
      @input="$emit('input', $event.target.value)"
      @mouseentry="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
    <lc-icon :name="suffix" v-if="suffix && !showclear" class="lc-input__suffix-icon"></lc-icon>
    <lc-icon
      name="clear"
      v-if="showclear"
      class="lc-input__suffix-icon"
      :class="{'clearable': showclear}"
    ></lc-icon>
    <span class="lc-input-group__addon" v-if="$slots.append">
      <slot name="append"></slot>
    </span>
  </div>
</template>

<script>
import Icon from "../icon";
export default {
  name: "LcInput",
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    size: {
      type: String,
      validator(value) {
        return ["larger", "small"].includes(value);
      }
    },
    type: {
      type: String,
      default: "text"
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String
    },
    suffix: {
      type: String
    }
  },
  components: {
    "lc-icon": Icon
  },
  computed: {
    showclear() {
      return (
        this.clearable &&
        !this.disabled &&
        !this.readonly &&
        (this.focused || this.hovering)
      );
    }
  },
  data() {
    return {
      focused: false,
      hovering: false
    };
  },
  methods: {
    onBlur(e) {
      this.focused = false;
      this.$emit("blur", e.target.value);
    },
    onFocus(e) {
      this.focused = true;
      this.$emit("focus", e.target.value);
    },
    /**
     * mouseover,mouseenter 的区别在于 mouseover 事件会冒泡
     */
    onMouseEnter() {
      this.hovering = true;
      this.$emit("mouseenter");
    },
    onMouseLeave() {
      this.hovering = false;
      this.$emit("mouseover");
    }
  }
};
</script>

<style lang="less" scoped>
@lc-input-height: 32px;
@lc-input-height-larger: 36px;
@lc-input-height-small: 28px;
@border-color: #999;
@border-color-disabled: #aaa;
@border-color-hover: #666;
@border-color-focus: #20b2aa;
@bg-color-disabled: #eee;
@border-radius: 4px;

.lc-input {
  display: inline-block;
  vertical-align: top;
  height: @lc-input-height;

  &.lc-input-larger {
    height: @lc-input-height-larger;
  }

  &.lc-input-small {
    height: @lc-input-height-small;
  }

  &.is-disabled {
    > .lc-input__inner {
      border-color: @border-color-disabled;
      background-color: @bg-color-disabled;
      cursor: not-allowed;
    }
  }

  &.is-readonly {
    > .lc-input__inner {
      &:focus,
      &:hover {
        border-color: @border-color-disabled;
      }
    }
  }

  &__inner {
    height: 100%;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    padding: 0 8px;
    box-sizing: border-box;

    &:hover {
      border-color: @border-color-hover;
    }
    &:focus {
      border-color: @border-color-focus;
      outline: none;
    }
  }
}

.lc-input-group {
  display: inline-flex;
  align-items: center;
  > .lc-input__inner {
    flex: 1;
    border-radius: 0;

    &:hover,
    &:focus {
      z-index: 2;
    }
  }
  &__addon {
    height: @lc-input-height;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    font-size: 14px;
    padding: 0 10px;
    background-color: #eee;
    color: #666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .lc-button,
    .lc-button:hover,
    .lc-button:active {
      background-color: transparent !important;
      border-color: transparent !important;
      margin: -10px;
    }
  }

  &-prepend {
    > .lc-input-group__addon:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: -1px;
    }
  }

  &-append {
    > .lc-input-group__addon:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -1px;
    }
  }
}

.lc-input-has-prefix {
  position: relative;
  .lc-input__inner {
    padding-left: 26px;
  }
  .lc-input__prefix-icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -8px;
  }
}

.lc-input-has-suffix {
  position: relative;
  .lc-input__inner {
    padding-right: 26px;
  }
  .lc-input__suffix-icon {
    position: absolute;
    top: 50%;
    right: 6px;
    margin-top: -8px;
    &.clearable {
      cursor: pointer;
    }
  }
}
</style>


