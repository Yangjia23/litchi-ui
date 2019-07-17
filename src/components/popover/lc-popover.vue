<template>
  <div :class="popoverCls" @click="handleClick">
    <div :class="popoverContentCls" v-if="visible" ref="popover">
      <div :class="prefixCls + '-title'" v-if="title">{{title}}</div>
      <div :class="prefixCls + '-content'" v-if="content">{{content}}</div>
      <slot v-else name="content"></slot>
    </div>
    <span ref="trigger">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { setTimeout } from "timers";
const prefixCls = "lc-popover";
export default {
  name: "LcPopover",
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      prefixCls,
      visible: false
    };
  },
  computed: {
    popoverCls() {
      return [`${this.prefixCls}-wrapper`];
    },
    popoverContentCls() {
      return [`${this.prefixCls}`];
    }
  },
  methods: {
    handleClick(e) {
      console.log(this.$refs.trigger);
      if (this.$refs.trigger.contains(e.target)) {
        console.log("button点击");
        if (this.visible === true) {
          this.handleClose();
        } else {
          this.handleOpen();
        }
      }
    },
    handleOpen() {
      this.visible = true;
      setTimeout(() => {
        this.positionPopover();
        console.log("body 添加监听器");
        document.addEventListener("click", this.eventHandler);
      }, 0);
    },
    handleClose() {
      this.visible = false;
      console.log("closed");
      document.removeEventListener("click", this.eventHandler);
      console.log("body 移除监听器");
    },
    positionPopover() {
      document.body.appendChild(this.$refs.popover);
      const {
        width,
        height,
        left,
        top
      } = this.$refs.trigger.getBoundingClientRect();
      this.$refs.popover.style.left = left + window.scrollX + "px";
      this.$refs.popover.style.top = top + window.scrollY - 52 + "px";
    },
    /**
     * body 添加点击事件
     * 点击，popover 关闭
     */
    eventHandler(e) {
      if (!this.$refs.popover.contains(e.target)) {
        console.log("body click了");
        this.handleClose();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.lc-popover-wrapper {
  display: inline-block;
}
.lc-popover {
  display: inline-block;
  position: absolute;
  // bottom: 100%;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  padding: 12px;
  color: #606266;
  // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  &-title {
    color: #303133;
    font-size: 16px;
    line-height: 1;
    margin-bottom: 12px;
  }
}
</style>


