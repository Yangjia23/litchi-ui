---
title: Radio 单选框
---

### Radio 单选框

### 概述
在备选项中单选

### 代码示例
<ClientOnly>
  <template>
    <div>
      <h4>基础用法</h4>
      <example>
        <lc-radio value="111" v-model="value1">选项1</lc-radio>
        <lc-radio value="222" v-model="value1">选项2</lc-radio>
        <template slot="code">{{code1 | format}}</template>
      </example>
      <h4>禁用</h4>
      <example>
        <lc-radio value="禁用" v-model="value2" disabled>选项1</lc-radio>
        <lc-radio value="选中并禁用" v-model="value2" disabled>选项2</lc-radio>
        <template slot="code">{{code2 | format}}</template>
      </example>
      <h4>组合使用</h4>
      <example>
        <lc-radio v-model="value3" :datas="sourceList1"></lc-radio>
        <template slot="code">{{code3 | format}}</template>
      </example>
      <h4>自定义 valueKey, labelKey</h4>
      <example>
        <lc-radio v-model="value4" :datas="sourceList2" valueKey="key" labelKey="title"></lc-radio>
        <template slot="code">{{code4 | format}}</template>
      </example>
      <h4>组合禁用</h4>
      <example>
        <lc-radio v-model="value5" :datas="sourceList1" disabled></lc-radio>
        <template slot="code">{{code5 | format}}</template>
      </example>
      <h4>组合禁用某一项</h4>
      <example>
        <lc-radio v-model="value6" :datas="sourceList3"></lc-radio>
        <template slot="code">{{code6 | format}}</template>
      </example>
    </div>
  </template>
</ClientOnly>

<script>
export default {
  filters: {
    format (str) {
      return str.replace(/^ {8}/gm, "").trim()
    }
  },
  data () {
    return {
      code1: `
        <template>
          <lc-radio value="111" v-model="radio">选项1</lc-radio>
          <lc-radio value="222" v-model="radio">选项2</lc-radio>
        </template>

        <script>
          export default {
            data () {
              return {
                radio: '111'
              }
            }
          }
        <\/script>`,
      code2: `
        <template>
          <lc-radio value="禁用" v-model="radio" disabled>选项1</lc-radio>
          <lc-radio value="选中并禁用" v-model="radio" disabled>选项2</lc-radio>
        </template>

        <script>
          export default {
            data () {
              return {
                radio: '选中并禁用'
              }
            }
          }
        <\/script>`,
      code3: `
        <template>
          <lc-radio v-model="radio" :datas="source"></lc-radio>
        </template>

        <script>
          export default {
            data () {
              return {
                radio: null,
                source: [
                  {
                    label: '选项1',
                    value: 1,
                  },
                  {
                    label: '选项2',
                    value: 2,
                  },
                  {
                    label: '选项3',
                    value: 3
                  }
                ]
              }
            }
          }
        <\/script>`,
      code4: `
        <template>
          <lc-radio v-model="radio" :datas="source" valueKey="key" labelKey="title"></lc-radio>
        </template>

        <script>
          export default {
            data () {
              return {
                radio: null,
                source: [
                  {
                    title: '选项1',
                    key: 1,
                  },
                  {
                    title: '选项2',
                    key: 2,
                  },
                  {
                    title: '选项3',
                    key: 3
                  }
                ]
              }
            }
          }
        <\/script>`,
      code5: `<template>
          <lc-radio v-model="radio" :datas="source" disabled></lc-radio>
        </template>

        <script>
          export default {
            data () {
              return {
                radio: null,
                source: [
                  {
                    label: '选项1',
                    value: 1,
                  },
                  {
                    label: '选项2',
                    value: 2,
                  },
                  {
                    label: '选项3',
                    value: 3
                  }
                ]
              }
            }
          }
        <\/script>`,
      code6: `
        <template>
          <lc-radio v-model="radio" :datas="source"></lc-radio>
        </template>

        <script>
          export default {
            data () {
              return {
                radio: null,
                source: [
                  {
                    label: '选项1',
                    value: 1,
                  },
                  {
                    label: '选项2',
                    value: 2,
                    disabled: true,
                  },
                  {
                    label: '选项3',
                    value: 3
                  }
                ]
              }
            }
          }
        <\/script>`,
      value1: '111',
      value2: '选中并禁用',
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      sourceList1: [
        {
          label: '选项1',
          value: 1,
        },
        {
          label: '选项2',
          value: 2,
        },
        {
          label: '选项3',
          value: 3
        }
      ],
      sourceList2: [
        {
          title: '选项1',
          key: 1,
        },
        {
          title: '选项2',
          key: 2,
        },
        {
          title: '选项3',
          key: 3
        }
      ],
      sourceList3: [
        {
          label: '选项1',
          value: 1,
        },
        {
          label: '选项2',
          value: 2,
          disabled: true
        },
        {
          label: '选项3',
          value: 3
        }
      ],
    }
  },
  methods: {
    handleClick() {
      alert('按钮被点击');
    }
  }
};
</script>

### API

#### Radio Attribute
| 属性     | 说明                     | 类型           | 可选值 | 默认值  |
| :------- | :----------------------- | :------------- | :----- | :------ |
| value    | 选项的唯一值             | String，Number |        | `-`     |
| v-model  | 动态绑定选中的选项唯一值 | String，Number |        | `-`     |
| datas    | 选项数据组               | Array          |        | `-`     |
| valueKey | 自定义选项的值key        | String         |        | `value` |
| labelKey | 自定义选项的标题key      | String         |        | `label` |
| disabled | 是否禁用                 | Boolean        |        | `false` |