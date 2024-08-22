<template>
    <!-- 例如：vue 颜色选择 -->
    <input type="text"
        :value="text1"
        @input="$emit('change1', $event.target.value)"
    >
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
</template>

<script>
export default {
    model: {
        prop: 'text1', // 对应 props text1
        event: 'change1',
    },
    props: {
        text1: String,
        default() {
            return ''
        }
    }
}
</script>

<!-- /**
 * 父组件中的v-model="message"实际上是v-bind:value="message" + v-on:input="message = $event"的简写。
 * 这里，v-bind:value="message"将message作为prop传递给子组件，而v-on:input="message = $event"监听子组件发出的input事件，并更新message的值。
 */ -->