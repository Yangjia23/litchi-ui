<template>
  <div :class="radioCls">
    <template v-if="isGroup">
      <label v-for="(option,idx) in datas" :key="idx" @click="setValue(option)"
        :class="[`${prefixCls}-item`, {[`${prefixCls}-item-disabled`]: option['disabled']}]">
        <span :class="[`${prefixCls}-icon`, {[`${prefixCls}-icon-checked`]: selectValue === option[valueKey]}]"></span>
        <slot v-if="$scopedSlots.item" name="item" :option="option"></slot>
        <span v-else :class="`${prefixCls}-label`">{{option[labelKey]}}</span>
      </label>
    </template>
    <label v-else @click="setValue(value)">
      <span :class="radioIconCls"></span>
      <span :class="`${prefixCls}-label`">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
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
      if (typeof data === "object" && data.disabled) return false;
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
  box-sizing: border-box;
  label {
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }
  &-icon {
    display: inline-block;
    box-sizing: border-box;
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
        transform: scale(0.8);
      }
    }
  }

  &-label{
    color: #606266;
    font-size: 14px;
    padding-left: 4px;
  }

  &-group {
    .lc-radio-item {
      // margin-right: 10px;
      & + .lc-radio-item{
        margin-left: 20px;
      }
      &-disabled{
        cursor: not-allowed;
        .lc-radio-icon{
          background-color: #f5f7fa;
          border-color: #e4e7ed;
          &-checked {
            &::after {
              background-color: #c0c4cc;
              transform: scale(0.8);
            }
          }
        }
        .lc-radio-label{
          color: #c0c4cc;
        }
      }
    }
  }

  &-disabled{
    label{
      cursor: not-allowed;
      .lc-radio-icon{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        &-checked {
          &::after {
            background-color: #c0c4cc;
            transform: scale(0.8);
          }
        }
      }
      .lc-radio-label{
        color: #c0c4cc;
      }
    }
  }

  & + &{
    margin-left: 20px;
  }
}
</style>


