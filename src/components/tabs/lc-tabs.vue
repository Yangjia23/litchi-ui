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
    }
  },
  provide() {
    return {
      eventHub: this.eventHub
    };
  },
  data() {
    return {
      eventHub: new Vue()
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
    this.eventHub.$emit("selected", this.value);
  }
};
</script>

<style lang="less" scoped>
.lc-tabs {
}
</style>


