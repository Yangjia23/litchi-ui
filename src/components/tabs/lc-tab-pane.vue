<template>
  <div class="lc-tab-pane" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LcTabPane",
  inject: ['eventHub'],
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  created() {
    this.eventHub.$on("selected", name => {
      this.isActive = this.name === name
    });
  },
};
</script>

<style lang="less" scoped>
.lc-tab-pane {
}
</style>