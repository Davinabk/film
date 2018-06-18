<template>
  <div class="register">
    <!--头部-->
    <div id="header" >
      <h1>{{logo}}</h1>
    </div>

    <!--内容-->
    <div>


    </div>




  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      logo:'注  册'
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header{
    height: 60px;
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
