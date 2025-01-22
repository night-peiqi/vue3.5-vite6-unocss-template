import { APP_NAME } from '@/constants'
import { useRouteStore } from '@/stores'
import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes,
})

// 路由热更新
if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach((to, from, next) => {
  NProgress.start()

  const routeStore = useRouteStore()
  // 添加路由缓存
  if (to.meta.keepAlive) {
    routeStore.addKeepAliveRoutes(to.name)
  }

  // 设置页面标题
  console.log(to)
  document.title = to.meta.title || APP_NAME

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
