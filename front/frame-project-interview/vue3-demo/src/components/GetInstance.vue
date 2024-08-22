<template>
    <p>get instance</p>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue'

export default {
    name: 'GetInstance',
    data() {
        return {
            x: 1,
            y: 2
        }
    },
    setup() {
        console.log('setup.this', this)

        onMounted(() => {
            console.log('onMounted.this', this)
            console.log('onMounted.this.x', instance.data.x)
        })

        const instance = getCurrentInstance()
        console.log('instance', instance, instance.data.x)
    },
    created() {
        console.log('created.this', this)
    },
    mounted() {
        console.log('mounted.this', this)
        console.log('mounted.this.y', this.y)
    }
}
</script>