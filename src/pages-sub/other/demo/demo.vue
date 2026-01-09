<script lang="ts" setup>
definePage({
    style: {
        navigationBarTitleText: '分包页面'
    }
});
// uniLayout里面的变量通过 expose 暴露出来后可以在 onReady 钩子获取到（onLoad 钩子不行）
const uniLayout = ref<any>(null);
// 这里获取的是布局方式default（也就是layouts/default.vue导出的变量）
onReady(() => {
    console.log('uniLayout', uniLayout.value);
});
</script>

<template>
    <view class="text-center">
        <view class="my-4 text-green-500"> 分包页面demo </view>
    </view>
</template>

<style lang="scss" scoped></style>
