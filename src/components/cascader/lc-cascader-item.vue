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
    <lc-cascader-item
      v-if="filterSource"
      :source="filterSource"
      :field-names="fieldNames"
      :selected="selected"
      :level="level + 1"
      @update:selected="onSelectChange">
    </lc-cascader-item>
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
    },
    selected: {
      type: Array,
      default () {
        return []
      }
    },
    level: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      prefixCls,
      selectedObj: null
    };
  },
  computed: {
    filterSource() {
      const currentSelected = this.selected[this.level]
      return currentSelected  ? currentSelected["children"] : null;
    }
  },
  methods: {
    handleItemClick(item) {
      const selectedList = JSON.parse(JSON.stringify(this.selected))
      selectedList[this.level] = item
      selectedList.splice(this.level + 1) 
      this.$emit('update:selected', selectedList)
    },
    onSelectChange (newSelected) {
      this.$emit('update:selected', newSelected)
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


