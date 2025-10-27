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
    <wd-config-provider class="ku-root">
        <KuRootView />

        <wd-toast />
        <wd-message-box />
    </wd-config-provider>
</template>
