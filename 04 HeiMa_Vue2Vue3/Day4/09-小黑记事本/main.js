import Vue from 'vue'
import App from './App.vue'
// 导入样式
import './style/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
