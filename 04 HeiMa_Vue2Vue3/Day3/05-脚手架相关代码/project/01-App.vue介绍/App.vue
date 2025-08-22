<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<!-- 结构 -->
<template>
  
  <div class="App">
    我是结构
    <div class="box" @click="fn"></div>
  </div>
</template>

<!-- 行为动作js -->
<script>
// 导出的是当前组件的配置项
// 里面可以提供data(特殊） methods computed watch 生命周期八大钩子
  export default{
    // 一加载页面 在控制台就会显示这个提示
    created(){
      console.log('我是created');
    },
    methods:{
      fn(){
        alert('你好')
      }
    }
  }
</script>


<!-- 样式 可以用less进行嵌套 -->
<style>
.App{
  width: 400px;
  height: 400px;
  background-color: pink;
}
.App .box{
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>