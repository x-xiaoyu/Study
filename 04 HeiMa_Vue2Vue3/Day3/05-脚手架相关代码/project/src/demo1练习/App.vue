<template>
  <!-- 这个类名最好和组件名同名 -->
  <div class="App">
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主体组件 -->
    <HmMain></HmMain>
    <!-- 底部组件 -->
    <HmFooter></HmFooter>
    

  </div>
</template>

<script>
import HmHeader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'

export default {
  components:{
    //'组件名'：组件对象 可以直接写名字 也可以全部都写出来
    HmHeader:HmHeader,
    // HmMain:HmMain,
    // HmFooter:HmFooter
    HmMain,
    HmFooter
  }
}
</script>

<style>
.App{
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin:0 auto;
  padding: 20px;
}
</style>