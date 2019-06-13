<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ComponentOne
      :title.sync="ComponentOneTitle"
      :content.sync="content"
      v-model="value"
      v-on:input="change"
    />
    {{value}}--{{radio}}
    <div>
      <input type="radio" name="q" value="0" id="radio1" v-model="radio">
      <input type="radio" name="q" value="1" id="radio2" v-model="radio">
    </div>
    <input onchange="console.log('sdf')" oninput="console.log('input')">
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
  methods: {
    radioonchange: function(e) {
      console.log(e);
    },
    change: function() {
      console.log("yes");
    }
  },
  data: function() {
    return {
      ComponentOneTitle: "ComponentOne的Title",
      content: "这是内容",
      value: "hahaha",
      radio: "1"
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
