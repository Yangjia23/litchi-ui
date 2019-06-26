<template>
  <div class="lc-toast" :class="toastClass">
    <div class="lc-toast__inner">
      <lc-icon :name="typeIconName" :class="typeClass" v-if="type"></lc-icon>
      <slot>
        <span v-if="enableUseHTML" v-html="message"></span>
        <span v-else>{{message}}</span>
      </slot>
      <i class="lc-toast__close" @click="handleClose" v-if="showClose">
        <lc-icon name="clear"></lc-icon>
      </i>
    </div>
  </div>
</template>

<script>
const typeMap = {
  info: "info",
  success: "success",
  error: "error",
  warning: "warning"
};

import Icon from "../icon";
export default {
  name: "LcToast",
  components: { "lc-icon": Icon },
  data() {
    return {
      message: "",
      type: "info",
      showClose: false,
      enableUseHTML: false,
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
      return this.type
        ? `lc-toast__type lc-toast__type-${typeMap[this.type]}`
        : "";
    },
    typeIconName() {
      return this.type && typeMap[this.type];
    }
  },
  mounted() {
    this.setTimer();
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
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(100%); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fead-in {
  from { opacity: 0;}
  to { opacity: 1;}
}

@animation-duration: 300ms;

.lc-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &__inner{
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
  }

  &__position-top {
    top: 16px;
    .lc-toast__inner{
      animation: slide-down @animation-duration;
    }
  }
  &__position-middle {
    top: 50%;
    .lc-toast__inner{
      animation: fead-in @animation-duration;
    }
  }
  &__position-bottom {
    bottom: 16px;
    .lc-toast__inner{
      animation: slide-up @animation-duration;
    }
  }

  &__type {
    margin-right: 10px;
    font-size: 16px;
    &-info {
      color: var(--color-primary);
    }
    &-success {
      color: var(--color-success);
    }
    &-warning {
      color: var(--color-warning);
    }
    &-error {
      color: var(--color-danger);
    }
  }
  // &-info {
  //   color: var(--color-primary);
  // }
  // &-success {
  //   color: var(--color-success);
  // }
  // &-warning {
  //   color: var(--color-warning);
  // }
  // &-error {
  //   color: var(--color-danger);
  // }

  &__close {
    margin-left: 10px;
    cursor: pointer;
    .lc-icon {
      vertical-align: text-top;
    }
  }
}
</style>

