<template>
  <div :class="tabClass">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "LcTabs",
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "line",
      validator(value) {
        return ["line", "card"].includes(value);
      }
    }
  },
  computed: {
    tabClass() {
      return {
        "lc-tabs": true,
        "lc-tabs-card": this.type === "card"
      };
    }
  },
  provide() {
    return {
      eventHub: this.eventHub,
      type: this.type
    };
  },
  data() {
    return {
      eventHub: new Vue(),
      panes: []
    };
  },
  created() {
    this.eventHub.$on("selected", name => {
      if (name !== this.value) {
        this.$emit("input", name);
      }
    });
  },
  mounted() {
    this.calcTabInstances();
    const currentTab = this.panes.find(vm => vm.name === this.value);
    this.eventHub.$emit("selected", this.value, currentTab);
  },
  methods: {
    calcTabInstances() {
      const tabHead = this.$children.find(
        vm => vm.$options.name === "LcTabHead"
      );
      this.panes = tabHead.$children;
    }
  }
};
</script>

<style lang="less" scoped>
.lc-tabs {
  &-card {
    /deep/ .lc-tab-head {
      .lc-tab-item {
        border: 1px solid #e8e8e8;
        background-color: #fafafa;
        margin-right: 2px;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        &.is-active {
          color: #31c27c;
          background-color: #fff;
          border-bottom: 1px solid transparent;
        }
      }
    }

    /deep/ .lc-tab-body{
      background: #fff;
      border: 1px solid #dcdfe6;
      border-top: none;
    }
  }
}
</style>


