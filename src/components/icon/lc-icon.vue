<template>
  <svg class="lc-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "LcIcon",
  props: ['name']
};
</script>

<style lang="less" scoped>
.lc-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>


