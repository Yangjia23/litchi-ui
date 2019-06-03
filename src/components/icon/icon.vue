<template>
  <svg class="lc-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "lc-icon",
  props: ['name']
};
</script>

<style>
.lc-icon {
  width: 1em;
  height: 1em;
}
</style>


