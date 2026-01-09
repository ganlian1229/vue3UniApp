<script lang="ts" setup>
definePage({
    style: {
        navigationBarTitleText: '关于'
    },
    layout: 'default' // 布局方式
});
function gotoSubPage() {
    uni.navigateTo({
        url: '/pages-sub/other/demo/demo'
    });
}

// uniLayout里面的变量通过 expose 暴露出来后可以在 onReady 钩子获取到（onLoad 钩子不行）
const uniLayout = ref<any>(null);
// 这里获取的是布局方式default（也就是layouts/default.vue导出的变量）
onReady(() => {
    console.log('uniLayout', uniLayout.value);
});
</script>

<template>
    <view>
        <view class="mt-8 text-center text-xl text-gray-400"> 分包About页 </view>
    </view>
</template>
