import pinia from '@/stores'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:uno.css'
import './styles/app.less'

const app = createApp(App)

const head = createHead()

// 文档头管理器
app.use(head)
// 路由
app.use(router)
// 状态管理
app.use(pinia)

app.mount('#app')
