<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';

definePage({
    style: {
        navigationBarTitleText: '我的'
    }
});

const userStore = useUserStore();
// 使用storeToRefs解构userInfo
const { userInfo } = storeToRefs(userStore);
</script>

<template>
    <view class="profile-container">
        <!-- 用户信息区域 -->
        <view class="user-info-section" />

        <view class="mt-3 break-all px-3">
            {{ JSON.stringify(userInfo, null, 2) }}
        </view>
    </view>
</template>

<style lang="scss" scoped></style>
