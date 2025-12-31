<script lang="ts" setup>
defineOptions({
    name: 'Home'
});
definePage({
    // 使用 type: "home" 属性设置首页，其他页面不需要设置，默认为page
    type: 'home',
    style: {
        // 'custom' 表示开启自定义导航栏，默认 'default'
        navigationStyle: 'custom',
        navigationBarTitleText: '首页'
    }
});

console.log('index/index 首页打印了');

onLoad(() => {
    console.log('测试 uni API 自动引入: onLoad');
    /**
     * @description:
     * @return {*}
     */
});

onShow(() => {
    console.log('首页 onShow 打印了');
});

function gotoAbout() {
    uni.navigateTo({
        url: '/pages-sub/about/about'
    });
}

function gotoDemo() {
    uni.navigateTo({
        url: '/pages-sub/demo/index'
    });
}
</script>

<template>
    <view class="bg-white px-4 pt-2">
        <u-navbar fixed placeholder title="首页" left-arrow safe-area-inset-top>
            <template #right>
                <u-icon name="search" size="18" />
            </template>
        </u-navbar>
        <view class="mt-4 text-center text-4xl text-[#d14328]"> unibest </view>
        <view class="mb-8 mt-2 text-center text-2xl"> 最好用的 uniapp 开发模板 </view>
        <!-- #ifdef H5 -->
        <view class="mt-4 text-center">
            <a href="https://unibest.tech/base/3-plugin" target="_blank" class="text-green-500">
                新手请看必看章节1：
            </a>
        </view>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <view class="mt-4 text-center">
            新手请看必看章节1：
            <text class="text-green-500"> https://unibest.tech/base/3-plugin </text>
        </view>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <view class="mt-4 text-center">
            <a href="https://unibest.tech/base/14-faq" target="_blank" class="text-green-500">
                新手请看必看章节2：
            </a>
        </view>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <view class="mt-4 text-center">
            新手请看必看章节2：
            <text class="text-green-500"> https://unibest.tech/base/14-faq </text>
        </view>
        <!-- #endif -->
        <view class="mt-4 text-center">
            UI组件官网：<text class="text-green-500"> https://wot-design-uni.cn </text>
        </view>
        <view class="mt-4 text-center">
            <u-button type="primary" class="ml-2" @click="gotoAbout"> 前往示例页 </u-button>
            <u-button type="primary" class="ml-2" @click="gotoDemo"> 前往Dome页 </u-button>
        </view>
        <view class="h-6" />
    </view>
</template>
