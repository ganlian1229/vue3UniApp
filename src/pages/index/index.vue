<script lang="ts" setup>
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
});

onShow(() => {
    console.log('首页 onShow 打印了');
});

function gotoAbout() {
    uni.navigateTo({
        url: '/pages-sub/other/about/about'
    });
}

function gotoDemo() {
    uni.navigateTo({
        url: '/pages-sub/other/demo/demo'
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
        <view class="mt-4 text-center">
            <u-button type="primary" class="ml-2" @click="gotoAbout"> 前往示例页 </u-button>
            <u-button class="ml-2" @click="gotoDemo"> 前往Dome页 </u-button>
        </view>
        <view class="h-6" />
    </view>
</template>
