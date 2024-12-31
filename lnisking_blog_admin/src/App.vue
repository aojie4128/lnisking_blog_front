<script setup>
import { onMounted } from 'vue'
import request from '@/utils/request'
// onMounted(() => {
//     console.log(request)
// })
</script>

<template>
    <div>这里是app
        <h1>hello</h1>
    </div>
    <el-button>按钮</el-button>
    <svg-icon name="about" width="20px" height="20px" />
</template>

<style scoped lang="scss">
div {
    h1 {
        color: $color-primary;
    }
}
</style>
