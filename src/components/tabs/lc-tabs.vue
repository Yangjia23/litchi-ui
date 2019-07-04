<template>
  <div class="lc-tabs">
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
  provide() {
    return {
      eventHub: this.eventHub
    };
  },
  data() {
    return {
      eventHub: new Vue(),
      panes: [],
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
    this.calcTabInstances()
    const currentTab = this.panes.find(vm => vm.name === this.value)
    this.eventHub.$emit("selected", this.value, currentTab);
  },
  methods: {
    calcTabInstances () {
      const tabHead = this.$children.find(vm => vm.$options.name === 'LcTabHead')
      this.panes = tabHead.$children
    }
  }
};
</script>

<style lang="less" scoped>
.lc-tabs {
}
</style>


