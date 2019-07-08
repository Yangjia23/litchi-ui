---
title: Button 按钮
---

### Button 按钮

### 概述
基础组件，常用于触发事件

### 代码示例
<ClientOnly>
  <template>
    <div>
      <h4>基础用法</h4>
      <example>
        <lc-button>默认</lc-button>
        <lc-button type="primary">主色调</lc-button>
        <lc-button type="success">成功</lc-button>
        <lc-button type="danger">危险</lc-button>
        <lc-button type="warning">警告</lc-button>
        <template slot="code">{{code1 | format}}</template>
      </example>
      <h4>图标按钮</h4>
      <example>
        <lc-button icon="setting">设置</lc-button>
        <lc-button icon="setting" round>设置</lc-button>
        <lc-button icon="setting" icon-position="right">设置</lc-button>
        <template slot="code">{{code2 | format}}</template>
      </example>
      <h4>禁用按钮</h4>
      <example>
        <lc-button disabled>默认按钮</lc-button>
        <template slot="code">{{code3 | format}}</template>
      </example>
      <h4>加载中</h4>
      <example>
        <lc-button loading>加载中</lc-button>
        <template slot="code">{{code4 | format}}</template>
      </example>
      <h4>不同尺寸</h4>
      <example>
        <lc-button size="larger">larger</lc-button>
        <lc-button>default</lc-button>
        <lc-button size="small">small</lc-button>
        <template slot="code">{{code5 | format}}</template>
      </example>
      <h4>按钮组</h4>
      <example>
        <lc-button-group>
          <lc-button icon='left' type="primary">上一页</lc-button>
          <lc-button type="primary">确定</lc-button>
          <lc-button type="primary" icon="right" icon-position="right">下一页</lc-button>
        </lc-button-group>
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
      code1: `<lc-button>默认</lc-button>
        <lc-button type="primary">主色调</lc-button>
        <lc-button type="success">成功</lc-button>
        <lc-button type="danger">危险</lc-button>
        <lc-button type="warning">警告</lc-button>`,
      code2: `<lc-button icon="setting">设置</lc-button>
        <lc-button icon="setting" round>设置</lc-button>
        <lc-button icon="setting" icon-position="right">设置</lc-button>`,
      code3: `<lc-button disabled>设置</lc-button>`,
      code4: `<lc-button loading>加载中</lc-button>`,
      code5: `<lc-button size="larger">larger</lc-button>
        <lc-button>default</lc-button>
        <lc-button size="small">small</lc-button>`,
      code6: `<lc-button-group>
            <lc-button icon='left'>上一页</lc-button>
            <lc-button>确定</lc-button>
            <lc-button icon="right" icon-position="right">下一页</lc-button>
        </lc-button-group>`,
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

#### Button props
| 属性     | 说明     | 类型    | 可选值                                      | 默认值    |
| :------- | :------- | :------ | :------------------------------------------ | :-------- |
| type     | 按钮类型 | String  | default / primary / success / danger / warning | `default` |
| icon  | 图标类名 | String |                                      | `-` |
| icon-position  | 图标位置 | String |  left / right | `-` |
| loading  | 是否加载中状态 | Boolean |    | `false` |
| round    | 是否圆形按钮   | Boolean |    | `false` |
| disabled | 是否禁用       | Boolean |    | `false` |
| size     | 按钮大小       | String  |  larger / default / small     | `default` |
