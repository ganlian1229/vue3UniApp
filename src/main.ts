import { createSSRApp } from 'vue';
import uviewPlus from 'uview-plus';

import App from './App.vue';
import store from './store';
import { requestInterceptor } from './utils/interceptor';

// #ifdef MP-WEIXIN
import share from './share/share';
// #endif
export function createApp() {
    const app = createSSRApp(App);
    app.use(uviewPlus, () => {
        return {};
    });
    app.use(store);
    app.use(requestInterceptor);
    // #ifdef MP-WEIXIN
    app.use(share);
    // #endif
    return {
        app
    };
}
