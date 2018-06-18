<template>
  <div class="detail" v-if="detailData.length !== 0">
    <!--头部-->
    <div id="header" >
      <h1>{{detailData[0].name}}</h1>
    </div>

    <!--影片详细介绍-->
    <div class="filmdetail">
      <img :src="detailData[0].cover.origin" alt="">
      <div class="jieshao">影片简介</div>
      <div class="box">
        <div>
          <span>导演：</span>
          <span>{{detailData[0].director}}</span>
        </div>
        <div>
          <span>主演：</span>
          <span>{{detailData[0].actors | actorFilter}}</span>
        </div>
        <div>
          <span>地区语言：</span>
          <span>{{detailData[0].nation}}（{{detailData[0].language}}）</span>
        </div>
        <div>
          <span>上映时间：</span>
          <span>{{detailData[0].premiereAt | timeFilter}}上映</span>
        </div>
        <div class="xiangqing">
          {{detailData[0].synopsis}}
        </div>
    </div>
  </div>

    <!--尾部-->
    <div class="buy">立即购票</div>

  </div>
</template>

<script>
export default {
  name: 'Detail',
  mounted(){
    console.log(this.$route.params.id);

    //发送ajax请求获取数据
    let temp = new Date().getTime();
    let self = this;

    this.$http.get('/hellobk/v4/api/film/'+self.$route.params.id+'?__t='+temp)
      .then(function (data) {
        self.detailData = self.detailData.concat(data.data.data.film);
        console.log('aaa', self.detailData);
    })
  },
  data () {
    return {
     logo:'详情页',
     detailData:[]
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
  }

/*详情介绍*/
  .jieshao{
    font-weight: normal;
    margin: 16px auto;
    border-left: 16px solid RGB(228, 200, 156);
    font-size: 20px;
    font-weight: bold;
    padding-left: 4px;
  }
  .box{
    padding: 20px;
  }
  .box div {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .box .xiangqing{
    line-height: 20px;
  }

  /*尾部*/
  .buy{
    width: 100px;
    text-align: center;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    background-color: #fe8233;
    margin: 0 auto;
    border-radius: 18px;
    color: #fff;
    position: fixed;
    bottom: 20px;
    left: 140px;
  }

</style>
