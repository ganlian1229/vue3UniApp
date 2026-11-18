export default {
    methods: {
        shareData() {
            return {
                title: '分享标题',
                path: '/pages/index/index',
                imageUrl: ''
            };
        }
    },
    // 分享好友
    onShareAppMessage() {
        return (this as any).shareData();
    },
    // 分享朋友圈
    onShareTimeline() {
        return (this as any).shareData();
    }
};
