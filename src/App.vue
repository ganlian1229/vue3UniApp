<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'

onLaunch((options) => {
  console.log('App Launch', options)
})
onShow((options) => {
  console.log('App Show', options)
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
</style>
