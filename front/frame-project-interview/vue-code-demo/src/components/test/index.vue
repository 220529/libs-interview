<template>
  <div>
    <!-- <p>vue 高级特性</p>
        <hr> -->

    <!-- 自定义 v-model -->
    <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->
    <div>
      <MyInput v-model="inputValue" />
      <p>输入的值是：{{ inputValue }}</p>
    </div>

    <!-- nextTick -->
    <!-- <NextTick/> -->

    <!-- slot -->
    <!-- <SlotDemo :url="website.url">
            {{website.title}}
        </SlotDemo> -->
    <!-- <ScopedSlotDemo :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </ScopedSlotDemo> -->

    <!-- 动态组件 -->
    <!-- <component :is="NextTickName"/> -->

    <!-- 异步组件 -->
    <!-- <FormDemo v-if="showFormDemo"/>
        <button @click="showFormDemo = true">show form demo</button> -->

    <!-- keep-alive -->
    <!-- <KeepAlive/> -->

    <!-- mixin -->
    <!-- <MixinDemo/> -->
  </div>
</template>

<script>
import MyInput from './MyInput.vue';

export default {
  components: {
    MyInput
  },
  data() {
    return {
      inputValue: ''
    };
  }
};
</script>
