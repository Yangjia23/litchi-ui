<template>
  <div class="example-wrapper">
    <div class="example-demo">
      <slot></slot>
    </div>
    <div :class="{'example-code': true, 'expand': codeVisible}">
      <div class="example-tools">
        <span title="在XX打开">open</span>
        <span title="复制">copy</span>
      </div>
      <pre v-highlightjs><code class="html"><slot name="code"></slot></code></pre>
    </div>
    <div class="example-more-code" @click="toggle">{{codeVisible ? 'Hide Code': 'Show Code'}}</div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';

Vue.use(VueHighlightJS);
export default {
  name: "Example",
  data() {
    return {
      codeVisible: false
    };
  },
  mounted () {
    // console.log(this.$slots.default)
  },
  methods: {
    toggle() {
      this.codeVisible = !this.codeVisible;
    }
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
  max-height: 230px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  max-height: 0px;
}
.example-wrapper {
  border: 1px solid #eaecef;
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
    border-color: transparent;
    position: relative;
  }
  .example-demo {
    padding: 16px;
    border-bottom: 1px dashed #eaecef;
  }
  .example-code {
    padding: 0 16px;
    position: relative;
    overflow: hidden;
    transition: all .8s ease-in-out;
    max-height: 0;
    &.expand{
      max-height: 1000px;
    }
    .example-tools {
      position: absolute;
      top: 13px;
      right: 16px;
      color: #fff;
      cursor: pointer;
    }
  }
  .example-more-code {
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 12px;
    color: #909399;
    cursor: pointer;
    &:hover {
      color:#32CCBC;
    }
  }
}
</style>


