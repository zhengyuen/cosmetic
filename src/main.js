import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';
import '@/assets/css/index.css'
import '@/mock/index.js'



createApp(App).use(router).use(Antd).mount('#app')

