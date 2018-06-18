<template>
  <div class="my">
    <!--如果用户已经登录-->
    <div class="mycontent" v-if="isLogin">
      <!--头部-->
      <div class="header" >
        <h1>个人中心</h1>
      </div>

      <div class="d1">我的影片</div>
      <div class="d2">我的影院</div>
      <div class="d3">我的订单</div>

      <!--尾部-->
      <div id="footer" >
        <div @click="goChange('/home')">
          <span><i class="fa fa-university" aria-hidden="true"></i></span>
          <p>{{shouye}}</p>
        </div>
        <div @click="goChange('/film')">
          <span><i class="fa fa-film" aria-hidden="true"></i></span>
          <p>{{yingpian}}</p>
        </div>
        <div @click="goChange('/cinema')">
          <span><i class="fa fa-car" aria-hidden="true"></i></span>
          <p>{{yingyuan}}</p>
        </div>
        <div class="self" @click="goChange('/my')">
          <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
          <p>{{my}}</p>
        </div>
      </div>
    </div>


    <!--如果用户未登录-->
    <div class="mycontent" v-if="!isLogin">
      <!--头部-->
      <div class="header" >
        <h1>登录</h1>
      </div>

      <!--内容-->
      <div class="content">
        <div class="inp1">
          <div class="shang">
            <input type="text" placeholder="输入手机号" v-model="tel"></input>
            <span @click="getCode">发送验证码</span>
          </div>
          <div class="bor"></div>
        </div>
        <div class="inp2">
          <div class="xia">
            <input type="text" placeholder="输入验证码" v-model="code" id="yanzheng"></input>
          </div>
          <div class="bor"></div>
        </div>
      </div>
      <div @click="toLogin" class="tologin">
        登录
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'My',
  methods:{
    goChange(path){
      this.$router.push(path);
    },
    getCode(){
      this.$store.dispatch('getCode',this.tel)
    },
    toLogin(){
      var yanzheng=document.getElementById("yanzheng");
      this.code=yanzheng.value;
      console.log(this.code);
      // if(this.code==this.tel){
        this.isLogin= true,
        this.$router.push('/my');
      // }else{
      //   alert('验证码错误，请重新输入')
      // }
    }
  },
  data () {
    return {
      shouye:'首页',
      yingpian:'影片',
      yingyuan:'影院',
      my:'我的',
      isLogin: false,
      tel: '',
      code: ''
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*头部*/
  .header{
    height: 50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
  }
  .header h1{
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
  }

  /*登录内容*/
  .inp1,.inp2{
    position:relative;
    width: 350px;
    margin: 50px auto 0;
  }
  .bor{
    position: absolute;
    top: 25px;
    height: 12px;
    width: 100%;
    border: solid #c4c4c4;
    border-width: 0 1px 1px 1px;
  }
  input{
    border: none;
    background-color: #f6f6f6;
    border-radius: 0px;
    box-shadow: none;
    outline: none;
    background: #eee;
    width: 100%;
    height:40px;
    padding: 0 10px;
    font-size: 14px;
  }
  .inp1 span{
    width: 95px;
    position: absolute;
    right: 5px;
    top: 0;
    background-color: #29a097;
    color: #fff;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
  }
  .tologin{
    width: 163px;
    background-color: #fe8233;
    color: #fff;
    border: none;
    border-radius: 36px;
    padding: 8px 12px;
    font-size: 15px;
    outline: none;
    text-align: center;
    margin: 45px auto;
  }

  /*个人中心内容*/
  .d1,.d2,.d3{
    width: 100%;
    background: #fff9ec;
    font-size: 16px;
   text-align: center;
    margin-top: 30px;
    padding: 10px;
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
