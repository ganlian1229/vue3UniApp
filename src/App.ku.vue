<script setup lang="ts">
import { ref } from 'vue';
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
    <u-config-provider class="ku-root">
        <KuRootView />
        <u-toast />
    </u-config-provider>
</template>
