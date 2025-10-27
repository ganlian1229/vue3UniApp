<script lang="ts" setup>
definePage({
  style: {
    navigationBarTitleText: '关于',
  },
  layout: 'default', // 布局方式
})
function gotoSubPage() {
  uni.navigateTo({
    url: '/pages-sub/demo/index',
  })
}

// uniLayout里面的变量通过 expose 暴露出来后可以在 onReady 钩子获取到（onLoad 钩子不行）
const uniLayout = ref()
</script>

<template>
  <view>
    <view class="mt-8 text-center text-xl text-gray-400">
      about
    </view>
  </view>
</template>
