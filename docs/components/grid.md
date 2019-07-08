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
          <lc-col span="8"><div class="demo-col" style="backgroundColor:#20b2aa;">8</div></lc-col>
          <lc-col span="8"><div class="demo-col" style="backgroundColor:#bdded9;">8</div></lc-col>
          <lc-col span="8"><div class="demo-col" style="backgroundColor:#20b2aa;">8</div></lc-col>
        </lc-row>
        <lc-row>
          <lc-col span="2"><div class="demo-col" style="backgroundColor:#20b2aa;">2</div></lc-col>
          <lc-col span="22"><div class="demo-col" style="backgroundColor:#bdded9;">22</div></lc-col>
        </lc-row>
        <template slot="code">{{code1 | format}}</template>
      </example>
      <h4>偏移</h4>
      <example>
        <lc-row>
          <lc-col span="6"><div class="demo-col" style="backgroundColor:#20b2aa;">6</div></lc-col>
          <lc-col offset="6" span="6"><div class="demo-col" style="backgroundColor:#bdded9;">6</div></lc-col>
        </lc-row>
        <lc-row>
          <lc-col span="4"><div class="demo-col" style="backgroundColor:#20b2aa;">4</div></lc-col>
          <lc-col span="4" offset="16"><div class="demo-col" style="backgroundColor:#bdded9;">4</div></lc-col>
        </lc-row>
        <template slot="code">{{code2 | format}}</template>
      </example>
      <h4>区块间隔</h4>
      <example>
        <lc-row gutter="20">
          <lc-col span="6"><div class="demo-col" style="backgroundColor:#20b2aa;">6</div></lc-col>
          <lc-col span="6"><div class="demo-col" style="backgroundColor:#bdded9;">6</div></lc-col>
          <lc-col span="6"><div class="demo-col" style="backgroundColor:#20b2aa;">6</div></lc-col>
          <lc-col span="6"><div class="demo-col" style="backgroundColor:#bdded9;">6</div></lc-col>
        </lc-row>
        <lc-row gutter="20">
          <lc-col span="2"><div class="demo-col" style="backgroundColor:#20b2aa;">2</div></lc-col>
          <lc-col span="22"><div class="demo-col" style="backgroundColor:#bdded9;">22</div></lc-col>
        </lc-row>
        <template slot="code">{{code3 | format}}</template>
      </example>
      <h4>响应式</h4>
      <example>
        <lc-row>
          <lc-col :xs="{span: 8}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
              <div style="background-color: #20b2aa;">1</div>
          </lc-col>
          <lc-col :xs="{span: 4}" :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
              <div style="background-color: #bdded9;">1</div>
          </lc-col>
          <lc-col :xs="{span: 4}" :sm="{span: 6}" :md="{span: 8}" :lg="{span: 9}" :xl="{span: 11}">
              <div style="background-color: #20b2aa;">1</div>
          </lc-col>
          <lc-col :xs="{span: 8}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}" :xl="{span: 1}">
              <div style="background-color: #bdded9;">1</div>
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
          <lc-col><div class="demo-col" style="backgroundColor:#20b2aa;">8</div></lc-col>
          <lc-col><div class="demo-col" style="backgroundColor:#f69e9f;">8</div></lc-col>
          <lc-col><div class="demo-col" style="backgroundColor:#3eaf7c;">8</div></lc-col>
        </lc-row>
        
        <lc-row>
          <lc-col span="2">2</lc-col>
          <lc-col span="22">22</lc-col>
        </lc-row>`,
      code2: `<lc-button icon="setting">设置</lc-button>
        <lc-button icon="setting" round>设置</lc-button>
        <lc-button icon="setting" icon-position="right">设置</lc-button>`,
      code3: `<lc-button disabled>设置</lc-button>`,
      code4: `<lc-button loading>加载中</lc-button>`,
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
