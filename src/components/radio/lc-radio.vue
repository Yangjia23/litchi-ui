<template>
  <div :class="radioCls">
    <template v-if="isGroup">
      <label v-for="(option,idx) in datas" :key="idx" @click="setValue(option)">
        <span
          :class="[`${prefixCls}-icon`, {[`${prefixCls}-icon-checked`]: selectValue === option[valueKey]}]"
        ></span>
        <span>{{option[labelKey]}}</span>
      </label>
    </template>
    <label v-else @click="setValue(value)">
      <span :class="radioIconCls"></span>
      <span>
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
import { type } from "os";
import { Stream } from "stream";
const prefixCls = "lc-radio";
export default {
  name: "LcRadio",
  model: {
    prop: "selectValue",
    event: "input"
  },
  props: {
    disabled: Boolean,
    datas: {
      type: Array,
      default() {
        return [];
      }
    },
    value: [String, Number],
    valueKey: {
      type: String,
      default: "value"
    },
    labelKey: {
      type: String,
      default: "label"
    },
    selectValue: [String, Number]
  },
  data() {
    return {
      prefixCls
    };
  },
  computed: {
    isGroup() {
      return this.datas && !!this.datas.length;
    },
    radioCls() {
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-disabled`]: this.disabled,
          [`${this.prefixCls}-group`]: this.isGroup
        }
      ];
    },
    radioIconCls() {
      return [
        `${this.prefixCls}-icon`,
        {
          [`${this.prefixCls}-icon-checked`]: this.value === this.selectValue
        }
      ];
    }
  },
  methods: {
    setValue(data) {
      if (this.disabled) return false;
      let value = typeof data === "string" ? data : data[this.valueKey];
      this.$emit("input", value);
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="less" scoped>
@active-color: #20b2aa;
.lc-radio {
  display: inline-block;
  label {
    height: 30px;
    line-height: 30px;
  }
  &-icon {
    display: inline-block;
    vertical-align: -3px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #d3d3d3;
    background-color: #fff;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      transform: scale(0);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: @active-color;
      transition: all 0.2s linear;
    }
    &-checked {
      border-color: @active-color;
      &::after {
        transform: scale(1);
      }
    }
  }

  &-group {
    label {
      margin-right: 10px;
      &:last-child{
        margin-right: 0
      }
    }
  }
}
</style>


