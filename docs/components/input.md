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
        <lc-input placeholder="Enter something..." v-model="value1"></lc-input>
        <span class="demo-desc">You entered: <i>{{value1}}</i></span>
        <template slot="code">{{code1 | format}}</template>
      </example>
      <h4>可清空</h4>
      <example>
        <lc-input placeholder="Enter something..." clearable></lc-input>
        <template slot="code">{{code2 | format}}</template>
      </example>
      <h4>禁用状态</h4>
      <example>
        <lc-input placeholder="Enter something..." disabled></lc-input>
        <template slot="code">{{code3 | format}}</template>
      </example>
      <h4>前 / 后缀内嵌 icon</h4>
      <example>
        <lc-input placeholder="Enter something..." prefix="search"></lc-input>
        <lc-input placeholder="Enter something..." suffix="correct"></lc-input>
        <lc-input placeholder="Enter something..." prefix="user" suffix="add"></lc-input>
        <template slot="code">{{code4 | format}}</template>
      </example>
      <h4>复合型输入框</h4>
      <example>
        <lc-input placeholder="Enter email">
            <lc-icon name="email" slot="prepend"></lc-icon>
        </lc-input>
        <lc-input placeholder="Enter something...">
            <template slot="append">
                <lc-button>Search</lc-button>
            </template>
        </lc-input>
        <lc-input placeholder="Enter something...">
            <lc-button icon="search" slot="append"></lc-button>
        </lc-input>
        <lc-input placeholder="Enter something...">
            <template slot="prepend">www</template>
            <template slot="append">cn</template>
        </lc-input>
        <template slot="code">{{code5 | format}}</template>
      </example>
      <h4>不同尺寸</h4>
      <example>
        <lc-input placeholder="larger" size="larger"></lc-input>
        <lc-input placeholder="default"></lc-input>
        <lc-input placeholder="small" size="small"></lc-input>
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
      value1: '',
      value2: '',
      code1: `<lc-input placeholder="Enter something..." v-model="value"></lc-input>`,
      code2: `<lc-input placeholder="Enter something..." clearable></lc-input>`,
      code3: `<lc-input placeholder="Enter something..." disabled></lc-input>`,
      code4: `<lc-input placeholder="Enter something..." prefix="search"></lc-input>
        <lc-input placeholder="Enter something..." suffix="correct"></lc-input>
        <lc-input placeholder="Enter something..." prefix="user" suffix="add"></lc-input>`,
      code5: `<lc-input placeholder="Enter something...">
            <lc-icon name="email" slot="prepend"></lc-icon>
        </lc-input>
        <lc-input placeholder="Enter something...">
            <template slot="append">
                <lc-button>Search</lc-button>
            </template>
        </lc-input>
        <lc-input placeholder="Enter something...">
            <lc-button icon="search" slot="append"></lc-button>
        </lc-input>
        <lc-input placeholder="Enter something...">
            <template slot="prepend">www</template>
            <template slot="append">cn</template>
        </lc-input>`,
      code6: `<lc-input placeholder="larger" size="larger"></lc-input>
        <lc-input placeholder="default"></lc-input>
        <lc-input placeholder="small" size="small"></lc-input>`,
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
  // display: inline-block;
  margin: 0 20px 10px 0;
}
.demo-desc{
  color: #606266;
  font-size: 12px;
  display: inline-block;
  vertical-align: -webkit-baseline-middle;
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
