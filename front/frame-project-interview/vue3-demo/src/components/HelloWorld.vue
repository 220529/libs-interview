<template>
  <span>{{ msg }}</span>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  emits: ['onSayHello'],
  setup(props, { emit }) {
    emit('onSayHello', 'vue3')
  }
}
</script>
