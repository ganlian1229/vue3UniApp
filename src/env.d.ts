/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue';

    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    /** 网站标题，应用名称 */
    readonly VITE_APP_TITLE: string;
    /** 服务端口号 */
    readonly VITE_SERVER_PORT: string;
    /** 后台接口地址 */
    readonly VITE_SERVER_BASEURL: string;
    /** H5是否需要代理 */
    readonly VITE_APP_PROXY_ENABLE: 'true' | 'false';
    /** H5是否需要代理，需要的话有个前缀 */
    readonly VITE_APP_PROXY_PREFIX: string;
    /** 是否清除console */
    readonly VITE_DELETE_CONSOLE: string;
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare const __VITE_APP_PROXY__: 'true' | 'false';

// 全局 uni-app/小程序页面配置宏
declare const definePage: (options: any) => void;

declare interface modalOptions {
    title?: string;
    content?: string;
    confirmText?: string;
    cancelText?: string;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    showCancel?: boolean;
    confirmColor?: string;
    cancelColor?: string;
    buttonReverse?: boolean;
    zoom?: boolean;
    asyncClose?: boolean;
    asyncCloseTip?: string;
    asyncCancelClose?: boolean;
    closeOnClickOverlay?: boolean;
    negativeTop?: string;
    width?: string | number;
    confirmButtonShape?: string;
    contentTextAlign?: string;
    success?: (options: {
        confirm: boolean;
        cancel: boolean;
        mask: boolean;
        async: boolean;
    }) => void;
    complete?: () => void;
}

// 使用模块增强来扩展 uview-plus 的 $u 接口
declare module 'uview-plus' {
    interface $u {
        /**
         * 重载：支持字符串路径和参数对象的路由方法
         * @param url 路由路径
         * @param params 参数对象
         */
        route(url: _LocationUrl, params?: any): void;
        route(options: RouteParam): void;
        /** 时间格式化 */
        timeFormat: (time: number, format: string) => string;
        deepClone: (obj: any) => any;
        /** 轻提示 */
        toast: (message: string) => void;
        toast: (options: {
            loading?: boolean;
            message: string;
            icon?: string;
            position?: 'center' | 'top' | 'bottom';
            type?: string;
            params?: any;
            duration?: number;
            overlay?: boolean;
            complete?: () => void;
        }) => void;
        debounce: (
            func: (...args: any[]) => any,
            wait?: number,
            immediate?: boolean = false
        ) => void;
        modal: (options: modalOptions) => void;
        os: () => string;
        sleep: (ms: number) => Promise<void>;
    }
}

// 为了兼容 uni 对象上的 $u 属性
interface Uni {
    $u: import('uview-plus').$u;
}

// 扩展 uni 对象的类型定义
interface Uni {
    /**
     * 显示模态对话框
     * @param options
     */
    showModal(options: modalOptions): void;
}

// 或者更简单的方式 - 直接扩展所有属性
declare module '@vue/runtime-dom' {
    interface HTMLAttributes {
        class?: string | string[];
    }
}
