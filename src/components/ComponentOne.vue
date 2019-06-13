<template>
  <div>
    {{title}}dssdf{{content}}
    <input
      type="text"
      :value="value"
      v-on:change.passive="$emit('input',$event.target.value)"
    >
    <input type="checkbox">
    {{count}}
  </div>
</template>
<script>
export default {
  name: "ComponentOne",
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    title: String,
    content: String,
    value: String
  },
  data: function() {
    return {
      sd: "123"
    };
  },
  computed: {
    count() {
      this.$store.dispatch("test/increment");
      this.$store.dispatch("test/increment");
      console.log(this.$store);

      console.log(this.$store.getters["test/result"]);
      return this.$store.getters["test/result"];
    }
  },
  created: function() {
    this.$emit("update:title", "title更新了");
    this.$emit("update:content", "这是更新后的内容");
  }
};
</script>