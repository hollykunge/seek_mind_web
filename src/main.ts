import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入性能监控
import { performanceMonitor, measurePageLoad } from './utils/performance'

// 开始测量页面加载时间
const pageLoadMeasure = measurePageLoad()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 页面挂载完成后结束测量
pageLoadMeasure.end()

// 在开发环境中显示性能信息
if (import.meta.env.DEV) {
  console.log('🚀 SeekMind Web App 已启动')
  console.log('📊 性能监控已启用')
}
