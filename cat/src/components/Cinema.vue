<template>
  <div class="cinema">
    <!--头部-->
    <div id="header" >
      <h1>{{logo}}</h1>
      <span>{{location}}<i class="fa fa-chevron-down" aria-hidden="true"></i> </span>
    </div>


    <!--内容-->
    <div class="neirong">
      <div v-for="q,index in arr1">
        <div class="line" @click="changeIndex(q.name,index)">
          {{q}}
        </div>
        <div v-show="showIndex === index">
          <div class="cinema-box">
            <div class="title">保利国际影城北京东坝店</div>
            <div> </div>
            <div class="address">北京市朝阳区东坝中路</div>
            <div class="address">距离未知</div>
          </div>
        </div>
      </div>
    </div>



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
      <div class="self" @click="goChange('/cinema')">
        <span><i class="fa fa-car" aria-hidden="true"></i></span>
        <p>{{yingyuan}}</p>
      </div>
      <div @click="goChange('/my')">
        <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
        <p>{{my}}</p>
      </div>
    </div>

    <!--加载转圈-->
    <div style="text-align: center;padding: 20px">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Cinema',
  mounted(){
    let self=this;
    this.$store.dispatch('getCinema').then(function(data){
      // console.log(data);    //所有的数据
      for(let i=0;i<data.length;i++){
        self.arr1.push(data[i].district.name);
        self.arr1=Array.from(new Set(self.arr1));
      }
      // console.log(self.arr1);    //北京所有的地区
    });
  },

  methods:{
    goChange(path){
      this.$router.push(path);
    },
    changeIndex(name,index){
      if(this.showIndex === index){
        this.showIndex = -1;
      }else {
        this.showIndex = index;
      }
    }
  },
  data () {
    return {
      logo:'影院',
      location:'北京',
      shouye:'首页',
      yingpian:'影片',
      yingyuan:'影院',
      my:'我的',
      showIndex: -1,
      arr1:[],
      arr2:[]
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

  /*内容*/
  .neirong{
    margin-bottom:50px;
  }
  .line{
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding-left: 16px;
  background: #e1e1e1;
  margin-bottom: 1px;
  color: #636363;
  cursor: pointer;
}
  .title{
    font-size: 16px;
    width: 100%;
    margin-bottom: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: text-top;
  }
  .address{
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: #ccc;
    margin-bottom: 8px;
  }
  .cinema-box{
    border-bottom: 1px solid #e1e1e1;
    padding: 20px;
    background:#fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
