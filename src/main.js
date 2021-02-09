import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App'

import 'element-plus/lib/theme-chalk/index.css'

const Vue = createApp(App)

Vue.use(ElementPlus)
Vue.mount('#app')
