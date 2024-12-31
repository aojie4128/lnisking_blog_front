import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// svg-icons配置
import 'virtual:svg-icons-register'
// 全局组件
import globalComponents from '@/components/index.js'
// 全局样式
import '@/styles/index.scss'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.use(globalComponents)

app.mount('#app')
