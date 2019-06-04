<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ComponentOne/>
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue";
import ComponentOne from "../../components/ComponentOne.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    ComponentOne
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
