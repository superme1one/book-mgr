import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
//import Antd from 'ant-design-vue';;
import SpaceBetween from './components/SpaceBetween.vue'

import 'ant-design-vue/dist/antd.css';
//Vue.config.productionTip = false;

createApp(App)
.use(store)
.use(Antd)
.component('space-between',SpaceBetween)
.use(router)
.mount('#app');
