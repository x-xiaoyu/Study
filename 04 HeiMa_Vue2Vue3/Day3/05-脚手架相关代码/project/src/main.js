// 此文件的核心作用： 1. 导入app.vue 基于app.vue 创建解构渲染index.html

// 1. 导入vue核心包
import Vue from 'vue'

// 2， 导入vue.app 根组件
import App from './App.vue'

// 编写导入的代码， 王代码的顶部编写（规范） 不加.vue也是可以用的
import HmButton from './components/HmButton'

// 提示：当前从处于什么环境（生产环境/开发环境）false什么提示都不显示 true就会显示
Vue.config.productionTip = false

// 进行全局注册 ->在所有的组件范围内都能适用
// Vue.component(组件名，组件对象)
Vue.component('HmButton', HmButton)

// 3. vue实例化，提供render方法 作用是基于app.vue 创建解构渲染index.html 
new Vue({
  // el:'#app', 作用：.$mount('选择器')作用一直，用于指定vue所管理容器
  // render: h => h(App),
  // render完整写法 h换成了createElement
  render: (createElement) =>{
    // 基于App创建元素结构 这个结构用于以后渲染index
    return createElement(App)
  }
}).$mount('#app')
