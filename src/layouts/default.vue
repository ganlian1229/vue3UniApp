<template>
    <wd-config-provider class="layouts-default" :themeVars="themeVars">
        <slot name="header" />

        <slot />
        <wd-toast />
        <wd-message-box />
    </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni';
const slots = defineSlots<{
    default(): any;
    header(): any;
}>();
console.log('slots', slots);
const themeVars: ConfigProviderThemeVars = {
    // colorTheme: 'red',
    // buttonPrimaryBgColor: '#07c160',
    // buttonPrimaryColor: '#07c160',
};
</script>
