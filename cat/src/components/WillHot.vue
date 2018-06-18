<template>
  <div class="willHot" ref="willHot">
    <div class="scroll_bar"   ref="scrollBar"></div>
    <div class="willHot-film clearfix" v-for="item in $store.state.willHotItems" @click="goDetail(item)">
      <div  class="alignLeft">
        <img :src="item.cover.origin" alt="">
      </div>
      <div class="alignRight">
          <div class="one">{{item.name }}</div>
          <div class="two">{{item.intro}}</div>
          <div class="three">{{item.premiereAt | timeFilter}}上映</div>
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
        name: "WillHot",
        mounted(){
          this.$store.dispatch('getwillHot');
        },
        methods:{
          goDetail(item){
            // console.log(item);
            this.$router.push({name:'Detail',params:{id:item.id}})
          }
        }

    }
</script>

<style scoped>
  .willHot{
    padding-bottom: 40px ;
  }
  .scroll_bar{
    float:right;
    height: 0;
    border-top: 2px solid #fe6e00;
    width: 50%;
    transition: 0.2s;
  }
  .willHot-film{
    width: 100%;
    padding: 20px;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
    height: 125px;
  }
  .alignLeft{
    width: 60px;
    height: 83px;
    float: left;
  }
  .alignLeft img{
    width: 100%;
    height: 100%;
  }
  .alignRight{
    float: left;
    margin-left: 20px;
    width: 273px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .one{
    font-size: 16px;
    line-height: 32px;
    color: #000;
  }
  .two{
    height: 24px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
  }
  .three{
    line-height: 24px;
    color: #ffb375;
    font-size: 12px;
  }
</style>
