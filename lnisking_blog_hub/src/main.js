
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// svg-icons配置
import 'virtual:svg-icons-register'
// 全局组件
import globalComponents from '@/components/index.js'
// 全局样式
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(globalComponents)
app.mount('#app')
