<template>
  <div id="app">
    <demo></demo>
  </div>
</template>

<script>
import Demo from "./demo";

export default {
  name: "app",
  components: {
    Demo
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
</style>
