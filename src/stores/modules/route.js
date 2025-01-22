import { defineStore } from 'pinia'
import { ref } from 'vue'

const useRouteStore = defineStore('route', () => {
  const keepAliveRoutes = ref([])

  /**
   * 添加缓存路由
   * @param {string} routeName
   */
  const addKeepAliveRoutes = (routeName) => {
    if (!keepAliveRoutes.value.includes(routeName)) {
      keepAliveRoutes.value.push(routeName)
    }
  }

  return {
    keepAliveRoutes,
    addKeepAliveRoutes,
  }
})

export default useRouteStore
