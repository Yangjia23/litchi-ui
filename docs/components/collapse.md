---
title: Collapse 折叠面板
---

### Collapse 折叠面板

### 概述
可以折叠/展开的内容区域

### 代码示例
<ClientOnly>
  <template>
    <div>
      <h4>基础用法</h4>
      <example>
        <lc-collapse v-model="expand1">
            <lc-collapse-item title="标题一">内容一</lc-collapse-item>
            <lc-collapse-item title="标题二">内容二</lc-collapse-item>
            <lc-collapse-item title="标题三">内容三</lc-collapse-item>
        </lc-collapse>
        <template slot="code">{{code1 | format}}</template>
      </example>
      <h4>手风琴效果</h4>
      <example>
        <lc-collapse v-model="expand2" accordion>
            <lc-collapse-item title="标题一" name="pane1">内容一</lc-collapse-item>
            <lc-collapse-item title="标题二" name="pane2">内容二</lc-collapse-item>
            <lc-collapse-item title="标题三" name="pane3">内容三</lc-collapse-item>
        </lc-collapse>
        <template slot="code">{{code2 | format}}</template>
      </example>
      <h4>自定义title</h4>
      <example>
        <lc-collapse v-model="expand３" accordion>
            <lc-collapse-item name="pane1">
                <template slot='title'>设置</template>
                内容一
            </lc-collapse-item>
            <lc-collapse-item title="标题二" name="pane2">内容二</lc-collapse-item>
            <lc-collapse-item title="标题三" name="pane3">内容三</lc-collapse-item>
        </lc-collapse>
        <template slot="code">{{code3 | format}}</template>
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
      expand1: [0, 1],
      expand2: 'pane2',
      expand３: 'pane3',
      code1: `
        <template>
          <lc-collapse v-model="expand">
            <lc-collapse-item title="标题一">内容一</lc-collapse-item>
            <lc-collapse-item title="标题二">内容二</lc-collapse-item>
            <lc-collapse-item title="标题三">内容三</lc-collapse-item>
        　</lc-collapse>
        </template>

        <script>
          export default {
            data () {
              return {
                expand: [0, 1]
              }
            }
          }
        <\/script>`,
      code2: `
        <template>
          <lc-collapse v-model="expand" accordion>
            <lc-collapse-item title="标题一" name="pane1">内容一</lc-collapse-item>
            <lc-collapse-item title="标题二" name="pane2">内容二</lc-collapse-item>
            <lc-collapse-item title="标题三" name="pane3">内容三</lc-collapse-item>
        　</lc-collapse>
        </template>

        <script>
          export default {
            data () {
              return {
                expand: 'pane2'
              }
            }
          }
        <\/script>`,
      code3: `
        <template>
          <lc-collapse v-model="expand" accordion>
            <lc-collapse-item name="pane1">
                <template slot='title'>设置<lc-icon name="setting"></ic-icon></template>
                内容一
            </lc-collapse-item>
            <lc-collapse-item title="标题二" name="pane2">内容二</lc-collapse-item>
            <lc-collapse-item title="标题三" name="pane3">内容三</lc-collapse-item>
          </lc-collapse>
        </template>

        <script>
          export default {
            data () {
              return {
                expand: 'pane3'
              }
            }
          }
        <\/script>`,
    }  
  },
};
</script>

### API

#### Collapse Attribute
| 属性     | 说明                | 类型           | 可选值 | 默认值  |
| :------- | :------------------ | :------------- | :----- | :------ |
| value    | 当前激活的面板的 name，可以使用 v-model 双向绑定      | String, Array |        | `-`     |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板          | Boolean        |        | `false` |

#### Collapse Item Attribute
| 属性     | 说明                | 类型           | 可选值 | 默认值  |
| :------- | :------------------ | :------------- | :----- | :------ |
| name    | 当前面板的 name，与 Collapse的value对应，不填为索引值      | String, Number |        | index    |
| title | 面板标题          | String        |        |  |