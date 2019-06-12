<template>
  <div
    :class="[
    'lc-input',
    `lc-input-${type}`,
    size ? `lc-input-${size}` : '',
    {
      'is-disabled': disabled,
      'is-readonly': readonly,
    }
    ]"
  >
    <input
      class="lc-input__inner"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    >
  </div>
</template>

<script>
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
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
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

  &.is-disabled{
    > .lc-input__inner{
      border-color: @border-color-disabled;
      background-color: @bg-color-disabled;
      cursor: not-allowed;
    }
  }

  &.is-readonly{
    > .lc-input__inner{
      &:focus, &:hover{
        border-color: @border-color-disabled;
      }
    }
  }

  &__inner {
    height: 100%;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    padding: 0 8px;

    &:hover {
      border-color: @border-color-hover;
    }
    &:focus {
      border-color: @border-color-focus;
      outline: none;
    }
  }
}
</style>


