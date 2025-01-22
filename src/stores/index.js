import { createPinia } from 'pinia'

import useRouteStore from './modules/route'

const pinia = createPinia()

export default pinia

// 自动导出modules下的store
export { useRouteStore }
