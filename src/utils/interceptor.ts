let loadingCount = 0;

/**
 * @description: 添加loading
 * @param {*} text
 * @return {*}
 */
function addLoading(text = '加载中') {
    loadingCount++;
    if (loadingCount === 1) {
        uni.hideLoading();
        uni.showLoading({
            title: text,
            mask: true
        });
    }
    // console.log("add----loadingCount", loadingCount);
}
/**
 * @description: 关闭loading
 * @return {*}
 */
function closeLoading() {
    if (loadingCount > 0) {
        loadingCount--;
    }
    if (loadingCount <= 0) {
        uni.hideLoading();
        loadingCount = 0;
    }
    // console.log("close-----loadingCount", loadingCount);
}

export const requestInterceptor = {
    install() {
        uni.addInterceptor('request', {
            invoke(args) {
                console.log('拦截到请求', args);
                const isHideLoading = args?.data?.isHideLoading;
                if (!isHideLoading) {
                    addLoading();
                }
                if (!args.header) {
                    return;
                }
                // const token = uni.getStorageSync('token');
                // if (token) {
                //     args.header['authentication'] = token;
                // }
                return args;
            },
            success(args) {
                // console.log("请求结果", args);
                // 登录超时，刷新token,refresh_token
                // if (args.data.code === 2) {
                //     uni.removeStorageSync('token');
                //     uni.reLaunch({
                //         url: '/pages/account/login'
                //     });
                //     return false;
                // }
                return args;
            },
            fail: (err) => {
                // console.log("请求报错", err);
                console.error(err);
            },
            complete: (e) => {
                // console.log("complete", e);
                closeLoading();
            }
        });

        uni.addInterceptor('uploadFile', {
            invoke(args) {
                console.log('拦截到上传请求', args);
                addLoading('上传中');
                // const token = uni.getStorageSync('token');
                // if (token) {
                //     args.header['authentication'] = token;
                // }
                return args;
            },
            success(args) {
                // 登录超时，刷新token,refresh_token
                // if (args.data.code === 2) {
                //     uni.removeStorageSync('token');
                //     uni.reLaunch({
                //         url: '/pages/account/login'
                //     });
                //     return false;
                // }
                return args;
            },
            fail: (err) => {
                console.error(err);
            },
            complete: (e) => {
                closeLoading();
            }
        });

        // const actions = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];
        // // 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
        // actions.forEach((item) => {
        //     uni.addInterceptor(item, {
        //         invoke(e) {
        //             loadingCount = 0;
        //             uni.hideLoading();
        //             // 获取要跳转的页面路径（url去掉"?"和"?"后的参数）
        //             const url = e.url.split('?')[0];
        //             return e;
        //         },
        //         fail(err) {
        //             // 失败回调拦截
        //             console.log(err);
        //         }
        //     });
        // });
    }
};
