<template>
  <div class="lc-toast" :class="toastClass">
    <i></i>
    <slot></slot>
    <i class="lc-toast__close" @click="handleClose" v-if="showClose">
      <lc-icon name="clear"></lc-icon>
    </i>
  </div>
</template>

<script>
import Icon from "../icon";
export default {
  name: "LcToast",
  components: { "lc-icon": Icon },
  data() {
    return {
      message: "",
      type: "",
      showClose: false,
      duration: 3000,
      position: "top",
      timer: null,
      onClose: null
    };
  },
  computed: {
    toastClass() {
      if (!["top", "bottom", "middle"].includes(this.position)) {
        return [];
      }
      return [`lc-toast__position-${this.position}`];
    },
    typeClass() {
      return [];
    }
  },
  mounted() {
    // this.timer = setTimeout(() => {
    //   this.close();
    //   this.timer = null;
    // }, this.duration);
  },
  methods: {
    close() {
      this.$el.remove();
      this.cleanTimer();
      this.$destroy();
    },
    setTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    cleanTimer() {
      this.timer = null;
    },
    handleClose() {
      this.close();
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.lc-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1010;
  box-sizing: border-box;
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 10px 16px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;

  &__position-top{
      top: 16px;
  }
  &__position-middle{
      top: 50%;
      transform: translateY(-50%);
  }
  &__position-bottom{
      bottom: 16px;
  }

  &__close {
    margin-left: 10px;
    cursor: pointer;
    .lc-icon {
      vertical-align: text-top;
    }
  }
}
</style>

