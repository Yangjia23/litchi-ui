---
title: Layout 布局
---

### Layout 布局

### 概述
基础组件，常用于触发事件

### 代码示例
<ClientOnly>
  <template>
      <div>
        <example>
          <lc-layout style="height: 300px">
            <lc-header><div class="demo-layout-item bg-light">Header</div></lc-header>
            <lc-main><div  class="demo-layout-item bg-dark" style="height: 100%;">Main</div></lc-main>
            <lc-footer><div  class="demo-layout-item bg-light">Footer</div></lc-footer>
          </lc-layout>
          <template slot="code">{{code1 | format}}</template>
        </example>
        <example>
          <lc-layout style="height: 300px">
            <lc-header><div class="demo-layout-item bg-light">Header</div></lc-header>
            <lc-layout>
                <lc-aside><div  class="demo-layout-item" style="background-color: #20b2aa80; height: 100%; width: 160px;">Aside</div></lc-aside>
                <lc-main><div class="demo-layout-item bg-dark" style="height: 100%;">Main</div></lc-main>
            </lc-layout>
            <lc-footer><div class="demo-layout-item bg-light">Footer</div></lc-footer>
          </lc-layout>
          <template slot="code">{{code1 | format}}</template>
        </example>
        <example>
          <lc-layout style="height: 300px">
            <lc-header><div class="demo-layout-item bg-light">Header</div></lc-header>
            <lc-layout>
                <lc-main><div class="demo-layout-item bg-dark" style="height: 100%;">Main</div></lc-main>
                <lc-aside>
                  <div class="demo-layout-item" style="background-color: #20b2aa80; height: 100%; width: 160px;">Aside</div>
                </lc-aside>
            </lc-layout>
            <lc-footer><div class="demo-layout-item bg-light">Footer</div></lc-footer>
          </lc-layout>
          <template slot="code">{{code1 | format}}</template>
        </example>
        <example>
          <lc-layout style="height: 300px">
            <lc-aside>
              <div class="demo-layout-item" style="background-color: #20b2aa80; height: 100%; width: 160px;">Aside</div>
            </lc-aside>
            <lc-layout>
                <lc-header><div class="demo-layout-item bg-light">Header</div></lc-header>
                <lc-main><div class="demo-layout-item bg-dark" style="height: 100%;">Main</div></lc-main>
                <lc-footer><div class="demo-layout-item bg-light">Footer</div></lc-footer>
            </lc-layout>
          </lc-layout>
          <template slot="code">{{code1 | format}}</template>
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
      code1: `<lc-layout style="height: 300px">
          <lc-header><div class="demo-layout-item bg-light">Header</div></lc-header>
          <lc-main><div class="demo-layout-item bg-dark" style="height: 100%;">Main</div></lc-main>
          <lc-footer><div class="demo-layout-item bg-light">Footer</div></lc-footer>
        </lc-layout>`
    }
  }
}
</script>

<style lang="less" scoped>
.demo-layout-item{
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  &.bg-light{
    background-color:#20b2aa;
  }
  &.bg-dark{
    background-color:#bfe0db;
  }
}
</style>

### API
