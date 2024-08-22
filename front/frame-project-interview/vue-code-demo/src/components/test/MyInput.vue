<!-- MyInput.vue -->
<template>
    <input
      :value="value"
      @input="updateValue($event.target.value)"
    />
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: [String, Number],
        default: ''
      }
    },
    methods: {
      updateValue(value) {
        // 触发 input 事件，将新值传递给父组件
        this.$emit('input', value);
      }
    }
  }
  </script>
  