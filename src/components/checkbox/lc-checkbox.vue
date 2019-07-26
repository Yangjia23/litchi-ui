<template>
  <div :class="checkBoxCls">
    <template v-if="isGroup">
      <label v-for="option in datas"
        :key="option[valueKey]"
        :class="[`${prefixCls}-item`, {[`${prefixCls}-item-disabled`]: option['disabled']}]"
        @click="setChecked(option)"
      >
        <span :class="[
          `${prefixCls}-icon`,
          {
            [`${prefixCls}-icon-checked`]: value.includes(option[valueKey])
          }
        ]"></span>
        <slot v-if="$scopedSlots.item" name="item" :option="option"></slot>
        <span v-else :class="`${prefixCls}-label`">{{option[labelKey]}}</span>
      </label>
    </template>
    <label v-else @click="setChecked">
      <span :class="checkBoxIconCls"></span>
      <span :class="`${prefixCls}-label`">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
const prefixCls = "lc-checkbox";
export default {
  name: "LcCheckbox",
  props: {
    disabled: Boolean,
    datas: {
      type: Array,
      default() {
        return [];
      }
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    labelKey: {
      type: String,
      default: 'label',
    },
    value: [Boolean, Array],
  },
  data() {
    return {
      prefixCls,
      checkedOptMap: {}
    };
  },
  computed: {
    isGroup() {
      return this.datas && !!this.datas.length;
    },
    checkBoxCls() {
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-disabled`]: this.disabled,
          [`${this.prefixCls}-group`]: this.isGroup
        }
      ];
    },
    checkBoxIconCls() {
      return [
        `${this.prefixCls}-icon`,
        {
          [`${this.prefixCls}-icon-checked`]: !this.isGroup && this.value
        }
      ];
    }
  },
  created() {
    this.isGroup && this.initCheckedData(this.value);
  },
  methods: {
    initCheckedData(checkedList) {
      const { checkedOptMap, datas, valueKey } = this;
      datas.forEach(opt => {
        checkedOptMap[opt[valueKey]] = checkedList.includes(opt[valueKey]);
      });
    },
    setChecked(option) {
      if (this.disabled || option["disabled"]) return false;
      const { isGroup, value, datas, checkedOptMap, valueKey } = this;
      let checkedValue;
      if (!isGroup) {
        checkedValue = !value;
      } else {
        checkedOptMap[option[valueKey]] = !checkedOptMap[option[valueKey]];
        checkedValue = datas
          .filter(item => checkedOptMap[item[valueKey]])
          .map(item => item[valueKey]);
      }
      this.$emit("input", checkedValue);
      this.$emit("change", checkedValue);
    }
  }
};
</script>

<style lang="less" scoped>
@active-color: #20b2aa;
.lc-checkbox {
  display: inline-block;
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
    border: 1px solid #d3d3d3;
    border-radius: 2px;
    background-color: #fff;
    position: relative;
    &:hover {
      border-color: @active-color;
    }
    &::after {
      content: "";
      position: absolute;
      top: 1px;
      left: 4px;
      transform: rotate(45deg) scale(0);
      box-sizing: content-box;
      width: 4px;
      border: 2px solid #fff;
      border-top: none;
      border-left: none;
      height: 9px;
      // background: @active-color;
      transition: all 0.2s linear;
    }
    &-checked {
      border-color: @active-color;
      background: @active-color;
      &::after {
        transform: rotate(45deg) scale(0.8);
      }
    }
  }

  &-label {
    color: #606266;
    font-size: 14px;
    padding-left: 4px;
  }

  &-group {
    .lc-checkbox-item {
      // margin-right: 10px;
      & + .lc-checkbox-item {
        margin-left: 20px;
      }
      &-disabled {
        cursor: not-allowed;
        .lc-checkbox-icon {
          background-color: #f5f7fa;
          border-color: #e4e7ed;
          &-checked {
            background-color: #d3d3d3;
            &::after {
              background-color: #d3d3d3;
            }
          }
        }
        .lc-checkbox-label {
          color: #c0c4cc;
        }
      }
    }
  }

  &-disabled {
    label {
      cursor: not-allowed;
      .lc-checkbox-icon {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        &-checked {
          background-color: #d3d3d3;
          &::after {
            background-color: #d3d3d3;
          }
        }
      }
      .lc-checkbox-label {
        color: #c0c4cc;
      }
    }
  }

  & + & {
    margin-left: 20px;
  }
}
</style>


