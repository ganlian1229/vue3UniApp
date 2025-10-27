<script lang="ts" setup>
const testUniLayoutExposedData = ref('testUniLayoutExposedData');
defineExpose({
    testUniLayoutExposedData
});
</script>

<template>
    <view class="layouts-default-page">
        <slot />
    </view>
</template>
