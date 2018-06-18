<template>
  <div class="film">
    <!--头部-->
    <div id="header" >
      <h1>{{logo}}</h1>
      <span>{{location}}<i class="fa fa-chevron-down" aria-hidden="true"></i> </span>
    </div>

  <!--二级导航-->
    <div class="navBox">
      <router-link to="/onHot" class="er" @click="goChange('/onHot')">正在热映</router-link>
      <router-link to="/willHot" class="er" @click="goChange('/willHot')">即将上映</router-link>
    </div>


    <!--尾部-->
    <div id="footer" >
      <div @click="goChange('/home')">
        <span><i class="fa fa-university" aria-hidden="true"></i></span>
        <p>{{shouye}}</p>
      </div>
      <div class="self" @click="goChange('/film')">
        <span><i class="fa fa-film" aria-hidden="true"></i></span>
        <p>{{yingpian}}</p>
      </div>
      <div @click="goChange('/cinema')">
        <span><i class="fa fa-car" aria-hidden="true"></i></span>
        <p>{{yingyuan}}</p>
      </div>
      <div @click="goChange('/my')">
        <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
        <p>{{my}}</p>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Film',
  methods:{
    goChange(path,index){
      this.$router.push(path);
    }
  },
  data () {
    return {
      logo:'影片',
      location:'北京',
      shouye:'首页',
      yingpian:'影片',
      yingyuan:'影院',
      my:'我的'
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*头部*/
  #header{
    height: 50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
  }
  #header h1{
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    float: left;
    margin-left: 40px;
  }
  #header span{
    float: right;
    margin-right: 20px;
    font-size: 14px;
    color: #fff;
    line-height:50px;
  }
  #header span i{
    margin-left: 5px;
  }

  /*二级导航*/
  .navBox{
    width: 100%;
    height: 40px;
    display: flex;
    background: #fff;
    border-bottom: solid #fe6e00 1px;
    position: relative;
  }
  .navBox .er{
    flex: 1;
    font-size: 16px;
    color: #000;
    line-height: 40px;
    text-align: center;
    font-weight: 500;
  }


  /*尾部*/
  #footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    background: #fff;
    border-top:2px solid #d8d8d8;
    display: flex;
    justify-content: space-around;
  }
  #footer div{
    float: left;
    height: 48px;
    position: relative;
    text-align: center;
    flex: 1;
  }
  #footer div p{
    line-height: 12px;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    bottom:5px;
    font-size:12px;
    color: #696969;
  }
  #footer div span{
    font-size: 20px;
  }
  #footer .self{
    color: #e54847;
  }
  #footer .self p{
    color: #e54847;
  }
</style>
