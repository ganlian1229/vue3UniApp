<script lang="ts" setup>
import { currRoute } from '@/utils';
import pagesJson from '@/pages.json';
const currRouteInfo = currRoute();
// 是否自动填充顶部安全距离高度
const isAutoFillHeight = ref(true);
// 是否显示底部填充（主要处理IOS滚动回弹）
const isShowBottomFill = ref(false);
// 自定义class类名
const customClass = ref('');
// 自定义样式
const customStyle = ref<any>({});
// 处理自定义导航栏
function handlerCustomNavbar() {
    let allPages = [];
    let pagesArr = pagesJson.pages.map((page) => {
        return {
            path: page.path,
            style: page.style
        };
    });
    let subPackagesArr = [];
    pagesJson.subPackages.forEach((subPackage) => {
        let pageItem = {
            path: '',
            style: {}
        };
        subPackage.pages.forEach((page) => {
            pageItem.path = subPackage.root + '/' + page.path;
            pageItem.style = page.style;
            subPackagesArr.push(pageItem);
        });
    });
    let isPage = pagesArr.find((page) => page.path === currRouteInfo.path.slice(1));
    // console.log('isPage', isPage);
    if (isPage) {
        // 当前是page页面
        isAutoFillHeight.value = true;
    } else {
        isAutoFillHeight.value = false;
    }
    // allPages = [...pagesArr, ...subPackagesArr];
    // console.log('allPages', allPages);
    // const currPageStyle = allPages.find((page) => page.path === currRouteInfo.path.slice(1))?.style;
    // console.log('currPageStyle', currPageStyle);
    // if (currPageStyle?.navigationStyle === 'custom' || currPageStyle?.['app-plus']?.titleNView === false) {
    //   // 自定义导航栏
    //   isAutoFillHeight.value = true;
    // }
}
handlerCustomNavbar();

defineExpose({
    setIsShowBottomFill: (isShow: boolean) => {
        isShowBottomFill.value = isShow;
    },
    setIsAutoFillHeight: (isCustom: boolean) => {
        isAutoFillHeight.value = isCustom;
    },
    setCustomClass: (classStr: string) => {
        customClass.value = classStr;
    },
    setCustomStyle: (style: any) => {
        customStyle.value = style;
    }
});
</script>

<template>
    <view class="layouts-default-page" :class="customClass" :style="customStyle">
        <u-status-bar v-if="isAutoFillHeight"></u-status-bar>
        <slot />
        <view v-if="$u.os() === 'ios' && isShowBottomFill" class="fill-ios"></view>
    </view>
</template>
<style lang="scss" scoped>
.layouts-default-page {
    // padding: 0 24rpx;
    box-sizing: border-box;
}
.p0 {
    padding: 0;
}
.fill-ios {
    height: 70rpx;
    background-color: transparent;
}
</style>
