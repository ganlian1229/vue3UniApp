<route lang="json5" type="page">
{
    style: {
        navigationStyle: 'custom'
    },
    layout: 'default' // 布局方式
}
</route>
<template>
    <view>
        <wd-navbar fixed placeholder title="Navbar 导航条" left-arrow safeAreaInsetTop>
            <template #right>
                <wd-icon name="search" size="18" />
            </template>
        </wd-navbar>
        <view> 1111 </view>
    </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.test-css {
    // mt-4=>1rem=>16px;
    margin-top: 16px;
}
</style>
