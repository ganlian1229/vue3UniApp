const requestHeader = import.meta.env.VITE_SERVER_BASEURL || '';

export interface RequestParams {
    isHideLoading?: boolean;
    [key: string]: any;
}

interface ResponseData {
    code?: number;
    message?: string;
    msg?: string;
    [key: string]: any;
}

/**
 * 读取当前登录 token。
 * @returns {string} 本地缓存中的 token；没有有效字符串时返回空字符串。
 * @sideEffects 无。
 */
function getStoredToken(): string {
    const token = uni.getStorageSync('token');
    return typeof token === 'string' ? token : '';
}

/**
 * 为 POST 请求拼接文档定义的查询参数。
 * @param url 接口相对路径，可包含已有查询参数
 * @param params URL 查询参数，忽略空值和本地 loading 控制字段
 * @returns 编码后的请求路径
 * @sideEffects 无
 */
function appendQuery(url: string, params: RequestParams): string {
    const query = Object.entries(params)
        .filter(([key, value]) => key !== 'isHideLoading' && value != null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join('&');
    if (!query) return url;
    return `${url}${url.includes('?') ? '&' : '?'}${query}`;
}

/**
 * 发起统一网络请求。
 * @param url 接口相对路径
 * @param method HTTP 请求方法
 * @param data 请求体数据
 * @param contentType 请求体内容类型
 * @param queryParams URL 查询参数
 * @returns 接口响应数据
 * @sideEffects 发起网络请求；失败时显示提示并拒绝 Promise
 */
function request<T>(
    url: string,
    method: 'GET' | 'POST',
    data: RequestParams | undefined,
    contentType: string,
    queryParams: RequestParams = {}
): Promise<T> {
    return new Promise((resolve, reject) => {
        const storedToken = getStoredToken();
        uni.request({
            url: requestHeader + (method === 'POST' ? appendQuery(url, queryParams) : url),
            method,
            data: method === 'GET' ? queryParams : data,
            timeout: 15000,
            header: {
                'content-type': contentType,
                'x-token': storedToken
            },
            success: (res: any) => {
                const responseData = res.data as ResponseData;
                const code = Number(responseData?.code);

                if (res.statusCode >= 200 && res.statusCode < 300 && (code === 1 || code === 200)) {
                    resolve(responseData as T);
                    return;
                }

                // 登录过期交由现有请求拦截器清理状态并跳转，避免重复提示。
                if (res.statusCode === 401 || code === 401) {
                    reject(responseData);
                    return;
                }

                uni.showToast({
                    title: responseData?.message || responseData?.msg || '请求失败',
                    icon: 'none'
                });
                reject(responseData);
            },
            fail: (err) => {
                uni.showToast({
                    title: '请检查网络',
                    icon: 'none'
                });
                reject(err);
            }
        });
    });
}

/**
 * 发起表单格式 POST 请求。
 * @param url 接口相对路径
 * @param params 请求体参数
 * @returns 接口响应数据
 * @sideEffects 发起网络请求；失败时显示提示
 */
export function post<T = ResponseData>(url: string, params: RequestParams = {}) {
    return request<T>(url, 'POST', params, 'application/x-www-form-urlencoded');
}

/**
 * 发起 JSON 格式 POST 请求。
 * @param url 接口相对路径
 * @param params JSON 请求体参数
 * @param queryParams URL 查询参数
 * @returns 接口响应数据
 * @sideEffects 发起网络请求；失败时显示提示
 */
export function postJson<T = ResponseData>(
    url: string,
    params?: RequestParams,
    queryParams: RequestParams = {}
) {
    return request<T>(url, 'POST', params, 'application/json;charset=UTF-8', queryParams);
}

/**
 * 发起 GET 请求。
 * @param url 接口相对路径
 * @param params URL 查询参数
 * @returns 接口响应数据
 * @sideEffects 发起网络请求；失败时显示提示
 */
export function get<T = ResponseData>(url: string, params: RequestParams = {}) {
    return request<T>(url, 'GET', undefined, 'application/json;charset=UTF-8', params);
}

/**
 * 发起文件上传请求。
 * @param url 接口相对路径。
 * @param filePath 本地临时文件路径。
 * @param fileKey 后台接收文件的字段名。
 * @param params 其他表单参数，不是 FormData 实例。
 * @returns 解析后的接口响应数据。
 * @sideEffects 调用 uni.uploadFile 并携带当前登录 token；失败时显示网络提示。
 */
export function multiPost<T = ResponseData>(
    url: string,
    filePath: string,
    fileKey: string,
    params: RequestParams = {}
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const storedToken = getStoredToken();
        uni.uploadFile({
            url: requestHeader + url,
            filePath,
            name: fileKey,
            formData: params,
            header: { 'x-token': storedToken },
            success: (res) => {
                try {
                    const responseData =
                        typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
                    resolve(responseData as T);
                } catch (error) {
                    reject(error);
                }
            },
            fail: (err) => {
                uni.showToast({
                    title: '请检查网络',
                    icon: 'none'
                });
                // 调用接口失败
                reject(err);
            }
        });
    });
}
