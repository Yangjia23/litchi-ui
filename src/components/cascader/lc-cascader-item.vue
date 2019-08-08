<template>
  <div :class="`${prefixCls}-wrap`">
    <ul :class="`${prefixCls}-menu`" v-if="source">
      <li
        :class="{
          [`${prefixCls}-item`]: true,
        }"
        v-for="(item,index) in source"
        :key="index"
        @click="handleItemClick(item)"
      >
        {{item[fieldNames['label']]}}
        <lc-icon :class="`${prefixCls}-item__icon`" v-if="item[fieldNames['children']] && item[fieldNames['children']].length" name="right"></lc-icon>
      </li>
    </ul>
    <lc-cascader-item :source="filterSource" v-if="filterSource" :field-names="fieldNames"></lc-cascader-item>
  </div>
</template>

<script>
const prefixCls = "lc-cascader";
export default {
  name: "LcCascaderItem",
  props: {
    source: {
      type: Array,
      default() {
        return [];
      }
    },
    fieldNames: {
      type: Object,
    }
  },
  data() {
    return {
      prefixCls,
      selectedObj: null
    };
  },
  watch: {
    source () {
      this.selectedObj = null;
    }
  },
  computed: {
    filterSource() {
      return this.selectedObj ? this.selectedObj["children"] : null;
    }
  },
  methods: {
    handleItemClick(item) {
      this.selectedObj = item;
    }
  }
};
</script>

<style lang="less" scoped>
.lc-cascader{
  &-wrap{
    display: flex;
  }
  &-menu{
    list-style: none;
    display: inline-block;
    height: 204px;
    overflow: auto;
    border-right: 1px solid #e4e7ed;
    background-color: #fff;
    box-sizing: border-box;
    margin: 0;
    padding: 6px 0;
    min-width: 160px;
  }
  &-item {
    font-size: 14px;
    padding: 8px 20px;
    box-sizing: border-box;
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    &:hover{
      background: #f5f7fa;
    }

    &__icon{
        font-size: 14px;
        color: #bfcbd9;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
  }

}
</style>


