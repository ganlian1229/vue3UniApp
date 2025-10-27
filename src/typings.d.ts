// 全局要用的类型放到这里

declare global {}

// patch uni 类型
// 1. 补全 uni.hideToast() 的 options 类型
// 2. 补全 uni.hideLoading() 的 options 类型
// 3. 使用方式见：https://github.com/unibest-tech/unibest/pull/241
declare global {}

export {} // 防止模块污染
