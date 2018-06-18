<template>
  <div class="login">
    <!--头部-->
    <div id="header" >
      <h1>{{logo}}</h1>
    </div>




  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
     logo:'登录'
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header{
    height:60px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
  }
  #header h1{
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    line-height: 60px;
  }


</style>
