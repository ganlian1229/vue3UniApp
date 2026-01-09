<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'default title'
    }
});

console.log('test组件打印了', props);
</script>
<template>
    <view> test组件 ：{{ props.title }} </view>
</template>
<style scoped lang="scss"></style>
