<script setup lang="ts">
import customToast from './components/customToast/customToast.vue';
import { currRoute } from './utils';

onShow(() => {
    handleToast();
    handleModal();
});

const toastRef = ref(null);
function handleToast() {
    async function newToast(options: string | any) {
        // 统一处理参数：字符串转为对象格式
        const normalizedOptions =
            typeof options === 'string'
                ? { message: options }
                : {
                      duration: 1500,
                      ...options,
                      message: options.message || options.title,
                      title: options.title || options.message,
                      overlay: options.hasOwnProperty('overlay') ? options.overlay : false
                  };
        await nextTick();
        // 优先使用自定义 toast 组件
        if (toastRef.value) {
            toastRef.value.show(normalizedOptions);
        } else {
            // 降级使用 uni.showToast
            (uni as any).oldShowToast({
                title: normalizedOptions.message || normalizedOptions.title || '',
                icon: normalizedOptions.icon || 'none',
                duration: normalizedOptions.duration || 1500
            });
        }
    }
    uni.$u.toast = newToast;
    uni.$u.toast.hide = () => {
        if (toastRef.value) {
            toastRef.value.hide();
        }
    };
    // uni.showToast = newToast;
}

const commonModalRef = ref(null);

function handleModal() {
    let defaultModalData = {
        title: '', //标题内容
        content: '', //模态框内容
        confirmText: '确认', // 确认按钮的文字 confirmText
        cancelText: '取消', // 取消按钮的文字 cancelText
        showConfirmButton: true, // 是否显示确认按钮
        showCancelButton: true, // 是否显示取消按钮 showCancel
        showCancel: true, // 是否显示取消按钮 showCancel
        confirmColor: '#F44A30', // 确认按钮的颜色 confirmColor
        cancelColor: '#606266', // 取消按钮的颜色 cancelColor
        buttonReverse: false, // 对调确认和取消的位置
        zoom: true, // 是否开启缩放模式
        asyncClose: false, // 是否异步关闭，只对确定按钮有效
        asyncCloseTip: '', // 确定按钮异步关闭启用时，如果点击取消时的文案提示
        asyncCancelClose: false, // 是否异步关闭，只对取消按钮有效
        closeOnClickOverlay: false, // 是否允许点击遮罩关闭Modal
        negativeTop: '0', // 往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为rpx单位
        width: '480rpx', // modal宽度，不支持百分比，可以数值，px，rpx单位
        confirmButtonShape: '', // 确认按钮的样式,如设置，将不会显示取消按钮
        contentTextAlign: '', // 文案对齐方式
        success: (res) => {}, // 接口调用成功的回调函数  res.confirm true 确认 res.cancel true 取消 res.mask true 遮罩 res.async true 异步
        complete: () => {} // 接口调用结束的回调函数
    };

    async function newModal(options: modalOptions = {}) {
        await nextTick();
        console.log('commonModalRef.value', commonModalRef.value);
        if (commonModalRef.value) {
            commonModalData.value = defaultModalData;
            if (options.hasOwnProperty('showCancel')) {
                options.showCancelButton = options.showCancel;
            }
            Object.assign(commonModalData.value, options);
            commonModalShow.value = true;
        } else {
            (uni as any).oldShowModal(options);
        }
    }

    uni.$u.modal = newModal;
    uni.showModal = newModal;
}

const commonModalShow = ref(false);

const commonModalData = ref({});

function commonModalConfirm() {
    handlerModalFunction('confirm');
}
function commonModalCancel() {
    handlerModalFunction('cancel');
}
function commonModalClose() {
    handlerModalFunction('mask');
}
function commonModalCancelOnAsync() {
    handlerModalFunction('async');
}
function handlerModalFunction(type: string) {
    commonModalShow.value = false;
    commonModalData.value.success && commonModalData.value.success({ [type]: true });
    commonModalData.value.complete && commonModalData.value.complete();
}
</script>

<template>
    <view class="ku-root">
        <KuRootView />
        <customToast ref="toastRef" />
        <u-modal
            ref="commonModalRef"
            :show="commonModalShow"
            :title="commonModalData.title"
            :content="commonModalData.content"
            :confirmText="commonModalData.confirmText"
            :cancelText="commonModalData.cancelText"
            :showConfirmButton="commonModalData.showConfirmButton"
            :showCancelButton="commonModalData.showCancelButton"
            :confirmColor="commonModalData.confirmColor"
            :cancelColor="commonModalData.cancelColor"
            :buttonReverse="commonModalData.buttonReverse"
            :zoom="commonModalData.zoom"
            :asyncClose="commonModalData.asyncClose"
            :asyncCloseTip="commonModalData.asyncCloseTip"
            :asyncCancelClose="commonModalData.asyncCancelClose"
            :closeOnClickOverlay="commonModalData.closeOnClickOverlay"
            :negativeTop="commonModalData.negativeTop"
            :width="commonModalData.width"
            :confirmButtonShape="commonModalData.confirmButtonShape"
            :contentTextAlign="commonModalData.contentTextAlign"
            @confirm="commonModalConfirm"
            @cancel="commonModalCancel"
            @close="commonModalClose"
            @cancelOnAsync="commonModalCancelOnAsync"
        />
    </view>
</template>
<style lang="scss" scoped>
::v-deep .u-toast__content {
    max-width: 300rpx !important;
    padding: 10px 18px !important;
}

::v-deep .u-toast__content__text {
    line-height: 1.6 !important;
    font-size: 12px !important;
    text-align: center !important;
}
</style>
