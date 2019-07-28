<template>
  <div :class="popoverCls" ref="popoverWrap">
    <div :class="popoverContentCls" v-if="visible" ref="popover">
      <div :class="prefixCls + '-title'" v-if="title">{{title}}</div>
      <div :class="prefixCls + '-content'" v-if="content">{{content}}</div>
      <slot v-else name="content"></slot>
    </div>
    <span class="lc-popover-trigger" ref="trigger">
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
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].includes(value);
      }
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
      return [`${this.prefixCls}`, `${this.prefixCls}-${this.position}`];
    }
  },
  mounted () {
    if (this.trigger === 'click') {
      this.$refs.popoverWrap.addEventListener('click', this.handleClick)
    } else {
      this.$refs.popoverWrap.addEventListener('mouseenter', this.handleOpen)
      this.$refs.popoverWrap.addEventListener('mouseleave', this.handleClose)
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
      const { popover, trigger } = this.$refs;
      const { width, height, left, top } = trigger.getBoundingClientRect();
      const { height: popoverHeight } = popover.getBoundingClientRect();
      const map = {
        top: { top, left },
        bottom: { left, top: top + height },
        left: { left, top: top + (height - popoverHeight) / 2 },
        right: { left: left + width, top: top + (height - popoverHeight) / 2 }
      };
      popover.style.left = map[this.position]["left"] + window.scrollX + "px";
      popover.style.top = map[this.position]["top"] + window.scrollY + "px";
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

<style lang="less" scoped>
@popover-border-color: #333;

.lc-popover-wrapper {
  display: inline-block;
}
.lc-popover {
  display: inline-block;
  position: absolute;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid @popover-border-color;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  padding: 12px;
  color: #606266;
  max-width: 20em;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
  background: #fff;
  // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  &-title {
    color: #303133;
    font-size: 16px;
    line-height: 1;
    margin-bottom: 12px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    width: 0px;
    height: 0px;
  }

  &-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 20px;
      border-bottom: none;
    }
    &::before {
      top: 100%;
      border-top-color: @popover-border-color;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: #fff;
    }
  }
  &-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 20px;
      border-top: none;
    }
    &::before {
      bottom: 100%;
      border-bottom-color: @popover-border-color;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: #fff;
    }
  }
  &-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
    }
    &::before {
      left: 100%;
      border-left-color: @popover-border-color;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: #fff;
    }
  }
  &-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-left: none;
    }
    &::before {
      right: 100%;
      border-right-color: @popover-border-color;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: #fff;
    }
  }
}
.lc-popover-trigger {
  display: inline-block;
}
</style>


