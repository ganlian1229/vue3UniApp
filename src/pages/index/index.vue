<route lang="json5" type="page">
{
    style: { navigationBarTitleText: '首页' },
    layout: 'default' // 布局方式
}
</route>
<template>
    <view :style="{ marginTop: safeAreaInsets?.top + 'px' }">
        <view>
            当前平台是：
            <text>{{ PLATFORM.platform }}</text>
        </view>
    </view>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform';
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();
// 测试 uni API 自动引入
onLoad(() => {});
</script>

<style>
.main-title-color {
    color: #d14328;
}
</style>
