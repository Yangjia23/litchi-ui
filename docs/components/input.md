---
title: Input 输入框
---

### Input 输入框

### 概述
基本表单组件

### 代码示例
<ClientOnly>
  <template>
    <div>
      <h4>基础用法</h4>
      <example>
        <lc-input placeholder="请输入"></lc-input>
        <lc-input placeholder="请输入密码" type="password"></lc-input>
        <lc-input placeholder="请输入数字" type="number"></lc-input>
        <lc-input placeholder="" v-model="message"></lc-input>
        <lc-input placeholder="只读" readonly></lc-input>
        <lc-input placeholder="禁止" disabled></lc-input>
      </example>
      <h4>前置/后置标签</h4>
      <example>
        <lc-input placeholder="请输入邮箱">
            <lc-icon name="email" slot="prepend"></lc-icon>
        </lc-input>
        <lc-input placeholder="请搜索">
            <template slot="append">
                <lc-button>搜索</lc-button>
            </template>
        </lc-input>
        <lc-input placeholder="请搜索">
            <lc-button icon="search" slot="append"></lc-button>
        </lc-input>
        <lc-input placeholder="请输入">
            <template slot="prepend">www</template>
            <template slot="append">cn</template>
        </lc-input>
        <template slot="code">{{code3 | format}}</template>
      </example>
      <h4>前 / 后缀内嵌 icon</h4>
      <example>
        <lc-input placeholder="请输入" prefix="search"></lc-input>
        <lc-input placeholder="请搜索" suffix="correct"></lc-input>
        <lc-input placeholder="请搜索" prefix="user" suffix="add"></lc-input>
        <template slot="code">{{code3 | format}}</template>
      </example>
      <h4>不同尺寸</h4>
      <example>
        <lc-input placeholder="larger" size="larger"></lc-input>
        <lc-input placeholder="default"></lc-input>
        <lc-input placeholder="small" size="small"></lc-input>
        <template slot="code">{{code5 | format}}</template>
      </example>
      <h4>可清空</h4>
      <example>
        <lc-input placeholder="请输入" clearable value="111"></lc-input>
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

<style lang="less" scoped>
.lc-input{
  display: inline-block;
  margin: 0 20px 10px 0;
}
</style>

### API

#### Button Attribute
| 属性     | 说明     | 类型    | 可选值                                      | 默认值    |
| :------- | :------- | :------ | :------------------------------------------ | :-------- |
| type     | 按钮类型 | String  | default / primary / success / danger / warning | `default` |
| icon  | 图标类名 | String |                                      | `-` |
| icon-position  | 图标位置 | String |  left / right | `-` |
| loading  | 是否加载中状态 | Boolean |    | `false` |
| round    | 是否圆形按钮   | Boolean |    | `false` |
| disabled | 是否禁用       | Boolean |    | `false` |
| size     | 按钮大小       | String  |  larger / default / small     | `default` |
