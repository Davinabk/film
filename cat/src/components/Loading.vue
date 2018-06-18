<template>
    <div id="loading">
       <div class="loading-box">
         <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        props: ['isShow']
    }
</script>

<style scoped>
  #loading{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 500;
    background-color: rgba(0,0,0,.5);
  }
  .loading-box{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin:auto;
  }
  .loading-box i{
     color: #ffffff;
     font-size: 50px;
  }
</style>
