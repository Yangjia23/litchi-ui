<template>
  <svg class="lc-icon" aria-hidden="true" @click="clickHandler">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
// import './svg';
export default {
  name: "LcIcon",
  props: ['name'],
  methods: {
    clickHandler () {
      this.$emit('click')
    }
  }
};
</script>

<style lang="less" scoped>
.lc-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>


