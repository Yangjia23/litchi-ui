<template>
  <div :class="InputNumberWrapCls">
    <div :class="`${prefixCls}-handler`">
      <span
        :class="[`${prefixCls}-handler-item`,`${prefixCls}-handler-up`]"
        @click="handleModify(true)"
      >
        <lc-icon name="up"></lc-icon>
      </span>
      <span
        :class="[`${prefixCls}-handler-item`,`${prefixCls}-handler-down`]"
        @click="handleModify(false)"
      >
        <lc-icon name="down"></lc-icon>
      </span>
    </div>
    <div :class="`${prefixCls}-input-warp`">
      <input
        :class="`${prefixCls}-input`"
        :value="currentValue"
        :min="min"
        :max="max"
        step="step"
        @blur="handleBlur"
      />
    </div>
  </div>
</template>

<script>
const prefixCls = "lc-input-number";
import LcIcon from "../icon";
import { type } from "os";

export default {
  name: "LcInputNumber",
  props: {
    value: {
      type: Number
    },
    size: {
      type: String,
      validator(value) {
        return ["larger", "small"].includes(value);
      }
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    precision: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LcIcon
  },
  data() {
    return {
      prefixCls,
      currentValue: this.value
    };
  },
  computed: {
    InputNumberWrapCls() {
      return [
        `${this.prefixCls}`,
        this.size && `${this.prefixCls}-${this.size}`,
        {
          [`${this.prefixCls}-disabled`]: this.disabled
        }
      ];
    },
    InputHandlerAdd() {
      return [`${prefixCls}-handler-item`, `${prefixCls}-handler-up`, {}];
    },
    InputHandlerDown() {
      return [`${prefixCls}-handler-item`, `${prefixCls}-handler-down`];
    }
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal;
    }
  },
  methods: {
    handleModify(type) {
      const { min, max, step, currentValue } = this;
      let newValue = currentValue + (type ? step : -step);
      if (newValue > max) newValue = max;
      if (newValue < min) newValue = min;
      this.$emit("input", newValue);
      this.$emit("change", newValue);
    },
    handleBlur(e) {
      let value = e.target.value;
      if (typeof e.target.value !== "number") {
      }
    },
    getValue(value) {
      let v = parseFloat(value);
      return isNaN(v) ? null : v;
    },
    setValue(value, type) {
      if (this.disabled) return false;
      if (this.min) {
        value = Math.max(value, this.min);
      }
      if (this.max) {
        value = Math.min(value, this.max);
      }
      if (this.precision) {
          
      }
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
.lc-input-number {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  position: relative;
  height: @lc-input-height;
  border: 1px solid @border-color;
  border-radius: 4px;

  &-handler {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 22px;
    height: 100%;
    border-left: 1px solid @border-color;
    opacity: 1;
    overflow: hidden;
    transition: opacity 0.24s linear 0.1s;
    &-item {
      width: 100%;
      height: 50%;
      box-sizing: border-box;
      display: block;
      text-align: center;
      font-size: 12px;
      color: rgba(0, 0, 0, 1);
      font-weight: bold;
      cursor: pointer;
      transition: all 0.1s linear;
      &:hover {
        color: #20b2aa;
      }
    }
    &-up {
      border-bottom: 1px solid @border-color;
      &:hover {
        height: 60%;
      }
    }
    &-down:hover {
      height: 60%;
    }
  }
  &-input-warp {
    height: 100%;
    > .lc-input-number-input {
      height: 100%;
      border: 0;
      background-color: transparent;
      border-radius: 4px;
      outline: 0;
      padding: 0 16px;
    }
  }

  &-larger {
    height: @lc-input-height-larger;
  }

  &-small {
    height: @lc-input-height-small;
  }

  &-disabled {
    border-color: @border-color-disabled;
    background-color: @bg-color-disabled;
    cursor: not-allowed;
  }

  &:hover {
    .lc-input-number-handler {
      opacity: 1;
    }
  }
}
</style>


