---
title: Icon 图标
---

### Icon 图标

### 代码示例
<ClientOnly>
  <template>
    <div>
      <h4>基础用法</h4>
      <example>
        <div class="icon-wrapper">
            <div class="icon-item" v-for="icon in list" :key="icon">
                <lc-icon :name="icon"></lc-icon>
                <div class="icon-name">{{icon}}</div>
                <div 
                  class="icon-hover"
                  v-clipboard:copy='`<lc-icon name="${icon}"></lc-icon>`'
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  v-text="copySuccess ? '复制成功' : '点击复制'"
                ></div>
            </div>
        </div>
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
      list: ['add', 'reduce', 'info', 'success', 'warning', 'error', 'warning-outline',
      'info-outline', 'clear', 'add-outline', 'correct-outline', 'error-outline', 'user',
      'reduce-outline', 'password-open', 'password-close', 'password', 'search', 'email',
      'loading', 'setting', 'right', 'left', 'up', 'down', 'download', 'thumbs-up'
      ],
      code1: `<lc-icon name="add"></lc-icon>`,
      copySuccess: false
    }
  },
  methods: {
    handleClick() {
      alert('按钮被点击');
    },
    onCopy () {
      console.log('复制成功')
      this.copySuccess = true
      setTimeout(() => {
        this.copySuccess = false
      }, 1500)
      // this.$message.success('复制成功')
    },
    onError () {
      console.log('复制失败')
      // this.$message.error('复制失败')
    }
  }
};
</script>

<style>
.icon-wrapper{
  display: flex;
  flex-wrap: wrap;
}
.icon-item{
  width: 140px;
  height: 120px;
  color: #303133;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.lc-icon{
  font-size: 20px;
}
.icon-name{
  margin-top: 10px;
  font-size: 12px;
}

.icon-hover{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13,10,49,.9);
  border-radius: 4px;
  cursor: pointer;
  display: none;
  text-align: center;
  color: #fff;
  font-size: 14px;
  line-height: 120px;
}

.icon-item:hover .icon-hover{
  display: block;
}
  

</style>

### API

#### Button Attribute
| 属性     | 说明     | 类型    | 可选值                                      | 默认值    |
| :------- | :------- | :------ | :------------------------------------------ | :-------- |
| name     | 图标名称 | String  | - | `-` |

