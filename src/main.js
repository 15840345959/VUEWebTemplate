import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './routes'
import store from './store/index'

import globalVars from './config/globalVars'
import beforeInit from './config/beforeInit'
import beforeCreate from './config/beforeCreate'
import created from './config/created'
import themeColors from './styles/global.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 全局变量
window._GLOBAL = globalVars       // 全局变量，这里的全局变量不应更改
window._global = {}               // 全局变量，可以进行更改
Vue.prototype.$bus = new Vue()    // 主要用于绑定自定义事件及触发相应事件
Vue.prototype.$colors = themeColors // 主题色，这是一个对象，包含了在styles/global.scss中导出的颜色值

require('./config/methods')
require('./config/directives')
require('./config/filters')
require('./config/api')

beforeInit(() => new Vue({
  router,
  store,
  beforeCreate, created,
  render: h => h(App)
}).$mount('#app'))
