<template>
  <div :class="wrapperClasses">
    <template v-if="this.type !== 'textarea'">
      <span :class="[prefixCls + '-group-prepend']" v-if="prepend">
        <slot name="prepend"></slot>
      </span>
      <lc-icon
        name="clear"
        :class="['lc-input-icon', prefixCls + '-clean-icon']"
        v-if="clearable && currentValue && !append"
        @click="onClear" ></lc-icon>
      <lc-icon
        :name="icon"
        :class="['lc-input-icon', `${prefixCls}-${icon}-icon`]"
        v-else-if="icon"></lc-icon>
      <span :class="[prefixCls + '-suffix']" v-else-if="showSuffix">
        <lc-icon :name="suffix" :class="[`lc-icon-${suffix}`]"></lc-icon>
      </span>
      <input
        :class="inputClasses"
        :type="type"
        :value="currentValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @change="handleChange"
        @focus="onFocus"
        @input="handleInput"
        @mouseentry="onMouseEnter"
        @mouseleave="onMouseLeave"
      />
      <span :class="[prefixCls + '-group-append']" v-if="append">
        <slot name="append"></slot>
      </span>
      <span :class="[prefixCls + '-prefix']" v-if="showPrefix">
        <lc-icon :name="prefix" :class="[`lc-icon-${prefix}`]"></lc-icon>
      </span>
    </template>
    <textarea v-else></textarea>
  </div>
</template>

<script>
import Icon from "../icon";
import { sign } from "crypto";
const prefixCls = "lc-input";

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
      default: "text",
      validator(value) {
        return ["text", "textarea", "password", "number", "date", "email", "url", "tel"].includes(value);
      }
    },
    icon: String,
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
    wrapperClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-group`]: this.prepend || this.append,
          [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && !!this.size,
          [`${prefixCls}-group-with-prepend`]: this.prepend || this.append,
          [`${prefixCls}-group-with-append`]: this.prepend || this.append,
          [`${prefixCls}-hide-icon`]: this.prepend || this.append
        }
      ];
    },
    inputClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: !!this.disabled,
          [`${prefixCls}-with-prefix`]: this.showPrefix,
          [`${prefixCls}-with-suffix`]: this.showSuffix,
        }
      ];
    },
    showclear() {
      return (
        this.clearable &&
        !this.disabled &&
        !this.readonly &&
        this.currentValue &&
        (this.focused || this.hovering)
      );
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      currentValue: this.value,
      prepend: false,
      append: false,
      showPrefix: false,
      showSuffix: false,
      focused: false,
      hovering: false,
    }
  },
  mounted() {
    if (this.type !== "textarea") {
      this.prepend = this.$slots.prepend !== undefined;
      this.append = this.$slots.append !== undefined;
      this.showPrefix = !!this.prefix;
      this.showSuffix = !!this.suffix;
    }
  },
  methods: {
    handleChange(event) {
      this.$emit("on-input-change", event);
    },
    handleInput(event) {
      let value = event.target.value;
      this.$emit("input", value);
      this.setCurrentValue(value);
      this.$emit("on-change", event);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
    },
    onBlur(e) {
      this.focused = false;
      this.$emit("blur", e.target.value);
    },
    onClear() {
      this.$emit("input", "");
      this.setCurrentValue("");
      this.$emit("change", "");
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
@lc-input-placeholder-color: #0000004d;
@border-color: #e8e8e8;
@border-color-disabled: #e7e7e7;
@border-color-hover: #c0c4cc;
@border-color-focus: #20b2aa;
@bg-color-disabled: #f7f7f7;
@border-radius: 4px;
.placeholder(@rules) {
  &::-webkit-input-placeholder {
    @rules();
  }
  &:-moz-placeholder {
    @rules();
  }
  &::-moz-placeholder {
    @rules();
  }
  &:-ms-input-placeholder {
    @rules();
  }
}
.lc-input-wrapper {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  height: @lc-input-height;
  position: relative;

  &.lc-input-wrapper-larger {
    height: @lc-input-height-larger;
  }

  &.lc-input-wrapper-small {
    height: @lc-input-height-small;
  }

  &.lc-input-hide-icon{
    .lc-input-icon{
      display: none;
    }
  }

  > .lc-input-icon{
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);

    &.lc-input-clean-icon {
      display: none;
    }
  }

  &:hover{
    > .lc-input-clean-icon {
      display: inline-block;
      cursor: pointer;
    }
  }

  > .lc-input-prefix{
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
  }

  > .lc-input-suffix{
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }

  > .lc-input {
    height: 100%;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    padding: 0 8px;
    box-sizing: border-box;
    .placeholder(
        {color: @lc-input-placeholder-color; 
        // text-transform: uppercase;
        }
      )
      ;;

    &:not(&-disabled) :hover {
      border-color: @border-color-hover;
    }

    &:focus {
      border-color: @border-color-focus;
      outline: none;
    }

    &-disabled {
      border-color: @border-color-disabled;
      background-color: @bg-color-disabled;
      cursor: not-allowed;
    }

    &-with-prefix{
      padding-left:  26px;
    }
    &-with-suffix{
      padding-right:  26px;
    }
  }
}

.lc-input-group {
  display: inline-flex;
  align-items: center;
  > .lc-input {
    flex: 1;
    border-radius: 0;

    &:hover,
    &:focus {
      z-index: 2;
    }
  }

  > .lc-input-group-prepend, .lc-input-group-append {
    box-sizing: border-box;
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

  &-with-prepend {
    > .lc-input-group-prepend:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: -1px;
    }
  }

  &-with-append {
    > .lc-input-group-append:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -1px;
    }
  }
}

</style>


