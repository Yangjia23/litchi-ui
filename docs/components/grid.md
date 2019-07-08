---
title: Grid 栅格
---

### Grid 栅格

### 概述
基础组件，常用于触发事件

### 代码示例
<ClientOnly>
  <template>
    <div>
      <h4>基础用法</h4>
      <example>
        <lc-row>
          <lc-col span="8"><div class="demo-col bg-light">8</div></lc-col>
          <lc-col span="8"><div class="demo-col bg-dark">8</div></lc-col>
          <lc-col span="8"><div class="demo-col bg-light">8</div></lc-col>
        </lc-row>
        <lc-row>
          <lc-col span="2"><div class="demo-col bg-light">2</div></lc-col>
          <lc-col span="22"><div class="demo-col bg-dark">22</div></lc-col>
        </lc-row>
        <template slot="code">{{code1 | format}}</template>
      </example>
      <h4>偏移</h4>
      <example>
        <lc-row>
          <lc-col span="6"><div class="demo-col bg-light">6</div></lc-col>
          <lc-col offset="6" span="6"><div class="demo-col bg-dark">6</div></lc-col>
        </lc-row>
        <lc-row>
          <lc-col span="4"><div class="demo-col bg-light">4</div></lc-col>
          <lc-col span="4" offset="16"><div class="demo-col bg-dark">4</div></lc-col>
        </lc-row>
        <template slot="code">{{code2 | format}}</template>
      </example>
      <h4>区块间隔</h4>
      <example>
        <lc-row gutter="20">
          <lc-col span="6"><div class="demo-col bg-light">6</div></lc-col>
          <lc-col span="6"><div class="demo-col bg-dark">6</div></lc-col>
          <lc-col span="6"><div class="demo-col bg-light">6</div></lc-col>
          <lc-col span="6"><div class="demo-col bg-dark">6</div></lc-col>
        </lc-row>
        <lc-row gutter="20">
          <lc-col span="2"><div class="demo-col bg-light">2</div></lc-col>
          <lc-col span="22"><div class="demo-col bg-dark">22</div></lc-col>
        </lc-row>
        <template slot="code">{{code3 | format}}</template>
      </example>
      <h4>响应式</h4>
      <example>
        <lc-row>
          <lc-col :xs="{span: 8}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
              <div class="demo-col bg-light">1</div>
          </lc-col>
          <lc-col :xs="{span: 4}" :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
              <div class="demo-col bg-dark">1</div>
          </lc-col>
          <lc-col :xs="{span: 4}" :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
              <div class="demo-col bg-light">1</div>
          </lc-col>
          <lc-col :xs="{span: 8}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
              <div class="demo-col bg-dark">1</div>
          </lc-col>
        </lc-row>
        <template slot="code">{{code4 | format}}</template>
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
      code1: `<lc-row>
          <lc-col span="8"><div class="demo-col bg-light">8</div></lc-col>
          <lc-col span="8"><div class="demo-col bg-dark">8</div></lc-col>
          <lc-col span="8"><div class="demo-col bg-light">8</div></lc-col>
        </lc-row>
        <lc-row>
          <lc-col span="2"><div class="demo-col bg-light">2</div></lc-col>
          <lc-col span="22"><div class="demo-col bg-dark">22</div></lc-col>
        </lc-row>`,
      code2: `<lc-row>
          <lc-col span="6"><div class="demo-col bg-light">6</div></lc-col>
          <lc-col offset="6" span="6"><div class="demo-col bg-dark">6</div></lc-col>
        </lc-row>
        <lc-row>
          <lc-col span="4"><div class="demo-col bg-light">4</div></lc-col>
          <lc-col span="4" offset="16"><div class="demo-col bg-dark">4</div></lc-col>
        </lc-row>`,
      code3: `<lc-row gutter="20">
          <lc-col span="6"><div class="demo-col bg-light">6</div></lc-col>
          <lc-col span="6"><div class="demo-col bg-dark">6</div></lc-col>
          <lc-col span="6"><div class="demo-col bg-light">6</div></lc-col>
          <lc-col span="6"><div class="demo-col bg-dark">6</div></lc-col>
        </lc-row>
        <lc-row gutter="20">
          <lc-col span="2"><div class="demo-col bg-light">2</div></lc-col>
          <lc-col span="22"><div class="demo-col bg-dark">22</div></lc-col>
        </lc-row>`,
      code4: `<lc-row>
          <lc-col :xs="{span: 8}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
              <div class="demo-col bg-light">1</div>
          </lc-col>
          <lc-col :xs="{span: 4}" :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
              <div class="demo-col bg-dark">1</div>
          </lc-col>
          <lc-col :xs="{span: 4}" :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
              <div class="demo-col bg-light">1</div>
          </lc-col>
          <lc-col :xs="{span: 8}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
              <div class="demo-col bg-dark">1</div>
          </lc-col>
        </lc-row>`,
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
.demo-col{
  color: #fff;
  &.bg-light{
    background-color:#20b2aa;
  }
  &.bg-dark{
    background-color:#bfe0db;
  }
}
</style>

### API

#### Row Attribute
| 属性     | 说明     | 类型    | 可选值                                      | 默认值    |
| :------- | :------- | :------ | :------------------------------------------ | :-------- |
| gutter  | 栅格间距，单位 px，左右平分 | Number  |   |  0 |



#### Col Attribute
| 属性     | 说明     | 类型    | 可选值                                      | 默认值    |
| :------- | :------- | :------ | :------------------------------------------ | :-------- |
| span   | 栅格占据的列数     | Number  |                 | 24 |
| offset | 栅格左侧的间隔格数  | Number |                        | 0 |
| xs  |  响应式栅格，可为栅格数或一个包含其他属性的对象 | Object |    | - |
| sm  |  响应式栅格，可为栅格数或一个包含其他属性的对象 | Object |    | - |
| md  |  响应式栅格，可为栅格数或一个包含其他属性的对象 | Object |    | - |
| lg  |  响应式栅格，可为栅格数或一个包含其他属性的对象 | Object |    | - |
| xl  |  响应式栅格，可为栅格数或一个包含其他属性的对象 | Object |    | - |
