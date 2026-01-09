import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';

export default defineUniPages({
    globalStyle: {
        navigationStyle: 'default',
        navigationBarTitleText: 'unibest',
        navigationBarBackgroundColor: '#f8f8f8',
        navigationBarTextStyle: 'black',
        backgroundColor: '#FFFFFF'
    },
    easycom: {
        autoscan: true,
        custom: {
            '^u--(.*)': 'uview-plus/components/u-$1/u-$1.vue',
            '^up-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
            '^u-([^-].*)': 'uview-plus/components/u-$1/u-$1.vue'
        }
    },
    tabBar: {
        color: '#999999',
        selectedColor: '#018d71',
        backgroundColor: '#F8F8F8',
        borderStyle: 'black',
        height: '50px',
        fontSize: '10px',
        iconWidth: '24px',
        spacing: '3px',
        list: [
            {
                iconPath: 'static/tabbar/home.png',
                selectedIconPath: 'static/tabbar/homeHL.png',
                pagePath: 'pages/index/index',
                text: '首页'
            },
            {
                iconPath: 'static/tabbar/personal.png',
                selectedIconPath: 'static/tabbar/personalHL.png',
                pagePath: 'pages/me/me',
                text: '我的'
            }
        ]
    },
    pages: [
        {
            path: 'pages/index/index'
        },
        {
            path: 'pages/me/me'
        }
    ],
    subPackages: [
        {
            root: 'pages-sub/other',
            page: [
                {
                    path: 'about/about'
                },
                {
                    path: 'demo/demo'
                }
            ]
        }
    ]
});
