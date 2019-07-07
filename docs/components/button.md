---
title: Button 按钮
---

### Button 按钮

#### 概述
基础组件，常用于触发事件

#### 代码示例
- 基本使用

#### API

<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="3">
    <show-components-item label="默认按钮">
      <lc-button type="primary">主色调</lc-button>
    </show-components-item>
    <show-components-item label="禁用按钮">
      <lc-button type="primary">主色调</lc-button>
    </show-components-item>
        <template slot="code">
        ```vue
        <lc-button type="primary">主色调</lc-button>
        ```
        </template>
  </show-components>
</template>
</ClientOnly>

<script>
export default {
  methods: {
    handleClick() {
      alert('按钮被点击');
    }
  }
};
</script>

### API

#### Button props
| 属性     | 说明     | 类型    | 可选值                                      | 默认值    |
| :------- | :------- | :------ | :------------------------------------------ | :-------- |
| type     | 按钮类型 | String  | `default`、`primary`、`disabled` 或者不设置 | `default` |
| disabled | 是否禁用 | Boolean | `true` \| `false`                           | `false`   |
| size     | 按钮大小 | String  | `default`、`small`、`large` 或者不设置      | `default` |

#### Button events
| 事件名 | 说明             | 返回值 |
| :----- | :--------------- | :----- |
| click  | 按钮被点击时触发 | 无     |