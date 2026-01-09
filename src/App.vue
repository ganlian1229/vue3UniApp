<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';

onLaunch((options) => {
    console.log('App Launch', options);
});
onShow((options) => {
    console.log('App Show', options);
});
onHide(() => {
    console.log('App Hide');
});
</script>

<style lang="scss">
@import 'uview-plus/index.scss';
@import '@/style/index.scss';
</style>
