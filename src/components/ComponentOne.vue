<template>
  <div>
    {{title}}dssdf{{content}}
    <input
      type="text"
      :value="value"
      v-on:change="$emit('input',$event.target.value)"
    >
  </div>
</template>
<script>
export default {
  name: "ComponentOne",
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
  created: function() {
    this.$emit("update:title", "title更新了");
    this.$emit("update:content", "这是更新后的内容");
  }
};
</script>