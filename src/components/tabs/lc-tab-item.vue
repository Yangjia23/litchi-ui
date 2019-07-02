<template>
  <div class="lc-tab-item" @click="onTabClick" :class="tabItemClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LcTabItem",
  inject: ["eventHub"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    tabItemClass() {
      return {
        "is-active": this.isActive
      };
    }
  },
  created() {
    this.eventHub.$on("selected", name => {
      this.isActive = this.name === name;
    });
  },
  methods: {
    onTabClick() {
      this.eventHub.$emit("selected", this.name);
    }
  }
};
</script>

<style lang="less" scoped>
.lc-tab-item {
    flex-shrink: 0;
    padding: 0 1.5em;
    cursor: pointer;
    &.is-active{
        background-color: green;
    }
}
</style>