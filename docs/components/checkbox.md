---
title: Checkbox 复选框
---

### Checkbox 复选框

### 概述
在备选项中多选

### 代码示例
<ClientOnly>
  <template>
    <div>
      <h4>基础用法</h4>
      <example>
        <lc-checkbox v-model="isChecked">选项1</lc-checkbox>
        <template slot="code">{{code1 | format}}</template>
      </example>
      <h4>禁用</h4>
      <example>
        <lc-checkbox v-model="isChecked1" disabled>选项1</lc-checkbox>
        <lc-checkbox v-model="isChecked2" disabled>选项2</lc-checkbox>
        <template slot="code">{{code2 | format}}</template>
      </example>
      <h4>组合使用</h4>
      <example>
        <lc-checkbox v-model="checkList1" :datas="sourceList1"></lc-checkbox>
        <template slot="code">{{code3 | format}}</template>
      </example>
      <h4>自定义 valueKey, labelKey</h4>
      <example>
        <lc-checkbox v-model="checkList2" :datas="sourceList2" valueKey="key" labelKey="title"></lc-checkbox>
        <template slot="code">{{code4 | format}}</template>
      </example>
      <h4>组合禁用</h4>
      <example>
        <lc-checkbox v-model="checkList3" :datas="sourceList3" disabled></lc-checkbox>
        <template slot="code">{{code5 | format}}</template>
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
      isChecked: true,
      isChecked1: false,
      isChecked2: true,
      checkList1: [1,3, 5],
      checkList2: [],
      checkList3: [],
      checkList4: [],
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
        },
        {
          label: '禁用',
          value: 4,
          disabled: true,
        },
        {
          label: '禁用并选中',
          value: 5,
          disabled: true,
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
        },
        {
          label: '选项3',
          value: 3
        }
      ],
      code1: `
        <template>
          <lc-checkbox v-model="checked">选项1</lc-checkbox>
        </template>

        <script>
          export default {
            data () {
              return {
                checked: true
              }
            }
          }
        <\/script>`,
      code2: `
        <template>
          <lc-checkbox v-model="checked1" disabled>选项1</lc-checkbox>
          <lc-checkbox v-model="checked2" disabled>选项2</lc-checkbox>
        </template>

        <script>
          export default {
            data () {
              return {
                checked1: false,
                checked2: true
              }
            }
          }
        <\/script>`,
      code3: `
        <template>
          <lc-checkbox v-model="checkList" :datas="source"></lc-checkbox>
        </template>

        <script>
          export default {
            data () {
              return {
                checkList: [1,3,5],
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
                  },
                  {
                    label: '禁用',
                    value: 4,
                    disabled: true,
                  },
                  {
                    label: '禁用并选中',
                    value: 5,
                    disabled: true,
                  }
                ]
              }
            }
          }
        <\/script>`,
      code4: `
        <template>
          <lc-checkbox v-model="checkList" :datas="source" valueKey="key" labelKey="title"></lc-checkbox>
        </template>

        <script>
          export default {
            data () {
              return {
                checkList: [1,3],
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
          <lc-checkbox v-model="checkList" :datas="source" disabled></lc-checkbox>
        </template>

        <script>
          export default {
            data () {
              return {
                checkList: [],
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
    }
  },
};
</script>

### API

#### Radio Attribute
| 属性     | 说明                     | 类型           | 可选值 | 默认值  |
| :------- | :----------------------- | :------------- | :----- | :------ |
| value    | 选项是否被选中             | Boolean, Array |        | `-`     |
| datas    | 选项数据组               | Array          |        | `-`     |
| valueKey | 自定义选项的值key        | String         |        | `value` |
| labelKey | 自定义选项的标题key      | String         |        | `label` |
| disabled | 是否禁用                 | Boolean        |        | `false` |