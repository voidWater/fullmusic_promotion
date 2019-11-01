import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//import BaiduMap from 'vue-baidu-map'
import App from './App'
import router from './router'

Vue.use(MintUI)
/*Vue.use(BaiduMap,{
	ak: '0NqknX8HQxY9fieVmNCQTVOxm9mBCIOR'
})*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
