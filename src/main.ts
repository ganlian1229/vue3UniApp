import { createSSRApp } from 'vue';
import uviewPlus from 'uview-plus';

import App from './App.vue';
import store from './store';
import { requestInterceptor } from './utils/interceptor';

export function createApp() {
    const app = createSSRApp(App);
    app.use(uviewPlus, () => {
        return {};
    });
    app.use(store);
    app.use(requestInterceptor);

    return {
        app
    };
}
