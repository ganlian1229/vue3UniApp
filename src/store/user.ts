import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
    'user',
    () => {
        // 定义用户信息
        const userInfo = ref<any>({});
        // 设置用户信息
        const setUserInfo = (val) => {
            console.log('设置用户信息', val);
            // 若头像为空 则使用默认头像
            if (!val.avatar) {
                val.avatar = '';
            }
            userInfo.value = val;
        };
        const setUserAvatar = (avatar: string) => {
            userInfo.value.avatar = avatar;
            console.log('设置用户头像', avatar);
            console.log('userInfo', userInfo.value);
        };
        // 删除用户信息
        const clearUserInfo = () => {
            userInfo.value = {};
            uni.removeStorageSync('user');
        };

        /**
         * 获取用户信息
         */
        const fetchUserInfo = async () => {
            const res = {};
            setUserInfo(res);
            return res;
        };

        return {
            userInfo,
            clearUserInfo,
            fetchUserInfo,
            setUserInfo,
            setUserAvatar
        };
    },
    {
        persist: true
    }
);
