<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ComponentOne :title.sync="ComponentOneTitle" :content.sync="content" v-model="value"/>
    {{value}}
  </div>
</template>

<script>
import HelloWorld from "@components/HelloWorld.vue";
import ComponentOne from "@components/ComponentOne.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ComponentOne
  },
  methods: {},
  data: function() {
    return {
      ComponentOneTitle: "ComponentOne的Title",
      content: "这是内容",
      value: "hahaha"
    };
  },
  created: function() {
    console.log(this);
    console.log(this.$event);
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
