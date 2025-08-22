import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

// 价格小组件变成全局组件 先import 然后再定义注册
import BaseGoodsItem from './components/BaseGoodsItem'
Vue.component('BaseGoodsItem', BaseGoodsItem)

import BaseBrandItem from './components/BaseBrandItem'
Vue.component('BaseBrandItem', BaseBrandItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
