<script setup lang="ts">
import { currRoute } from './utils';

onShow(() => {
    console.log('App.ku.vue onShow', currRoute());
});

const exposeRef = ref('this is form app.Ku.vue');

defineExpose({
    exposeRef
});
</script>

<template>
    <view class="ku-root">
        <KuRootView />
        <u-toast />
    </view>
</template>
