import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//  reset CSS
import "normalize.css/normalize.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import '@/pages/index/styles/index.scss' // global css
import '@/assets/js/common.js'
import '@/pages/index/permission' // permission control
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;
import '@/assets/font/iconfont.css'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
