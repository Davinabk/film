<template>
  <div id="app">

    <router-view class="content"/>


    <!--<Loading v-show="iS"/>-->

  </div>
</template>
<script>
  // import Loading from "./components/Loading"
  // import { mapState } from 'vuex'

export default {
  name: 'App',

  // components: {Loading},
  // mounted(){
  // //   console.log(this.$store.state.isShow)
  // },
  // computed:mapState({
  //   iS: 'isShow'
  // }),

  data:function(){
    return{

    }
  }

}
</script>



<!--scoped的意思是当前的样式只能在当前的页面内使用，页面内的子组件也可以继承该样式。-->
<style scoped>
*{
    margin: 0;
    padding:0;
  }
#app {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
}


</style>
