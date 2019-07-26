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
        <lc-checkbox v-model="checkList2" :datas="sourceList2" value-key="key" label-key="title"></lc-checkbox>
        <template slot="code">{{code4 | format}}</template>
      </example>
      <h4>组合禁用</h4>
      <example>
        <lc-checkbox v-model="checkList3" :datas="sourceList3" disabled></lc-checkbox>
        <template slot="code">{{code5 | format}}</template>
      </example>
      <h4>自定义渲染内容</h4>
      <example>
        <lc-checkbox v-model="checkList4" :datas="sourceList4">
          <template v-slot:item="{option}">
            <span>{{option.city}}-{{option.name}}-{{option.job}}</span>
          </template>
        </lc-checkbox>
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
      isChecked: true,
      isChecked1: false,
      isChecked2: true,
      checkList1: [1,3, 5],
      checkList2: [],
      checkList3: [],
      checkList4: [],
      sourceList1: [
        {label: '选项1',value: 1,}, 
        {label: '选项2',value: 2,},
        {label: '选项3',value: 3,},
        {label: '选项4',value: 4, disabled: true},
        {label: '选项5',value: 5, disabled: true},
      ],
      sourceList2: [{title: '选项1',key: 1,}, {title: '选项2',key: 2,},{title: '选项3',key: 3}],
      sourceList3: [{label: '选项1',value: 1,}, {label: '选项2',value: 2,},{label: '选项3',value: 3}],
      sourceList4: [
        {city: '北京', value: 1, name: '张三', job: 'Node'}, 
        {city: '上海', value: 2, name: '李四', job: 'Java'},
        {city: '杭州', value: 3, name: '王五', job: 'Python'}
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
                  {label: '选项1',value: 1,}, 
                  {label: '选项2',value: 2,},
                  {label: '选项3',value: 3,},
                  {label: '选项4',value: 4, disabled: true},
                  {label: '选项5',value: 5, disabled: true},
                ],
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
                  {title: '选项1',key: 1,}, 
                  {title: '选项2',key: 2,},
                  {title: '选项3',key: 3}
                ],
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
                  {label: '选项1',value: 1,}, 
                  {label: '选项2',value: 2,},
                  {label: '选项3',value: 3}
                ],
              }
            }
          }
        <\/script>`,
      code6: `<template>
          <lc-checkbox v-model="checkList" :datas="source">
            <template v-slot:item="{option}">
              <span>{{option.city}}-{{option.name}}-{{option.job}}</span>
            </template>
          </lc-checkbox>
        </template>

        <script>
          export default {
            data () {
              return {
                checkList: [],
                source: [
                  {city: '北京', value: 1, name: '张三', job: 'Node'}, 
                  {city: '上海', value: 2, name: '李斯', job: 'Java'},
                  {city: '杭州', value: 3, name: '王五', job: 'Python'}
                ],
              }
            }
          }
        <\/script>`,
    }
  },
};
</script>

### API

#### Checkbox Attribute
| 属性     | 说明                     | 类型           | 可选值 | 默认值  |
| :------- | :----------------------- | :------------- | :----- | :------ |
| value    | 选项是否被选中             | Boolean, Array |        | `-`     |
| datas    | 选项数据组               | Array          |        | `-`     |
| valueKey | 自定义选项的值key        | String         |        | `value` |
| labelKey | 自定义选项的标题key      | String         |        | `label` |
| disabled | 是否禁用                 | Boolean        |        | `false` |

#### Checkbox Slot
| 名称       | 说明                |
| :-------  |  :------           |
| item      | 当需要自定义渲染内容，需要用到插槽 `item`，并在插槽上绑定数据 `option`(选项数据组 `datas` 中的每一项)       |