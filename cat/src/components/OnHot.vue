<template>
    <div class="onHot">
      <div class="scroll_bar"   ref="scrollBar"></div>
      <div class="onHot-film clearfix" v-for="item in $store.state.onHotItems" @click="goDetail(item)">
          <div  class="alignLeft">
            <img :src="item.cover.origin" alt="">
          </div>
          <div class="alignRight">
            <div>
              <span class="one">{{item.name }}</span>
              <span class="two">{{item.grade}}</span>
            </div>
            <div class="xia">
              <span class="three">{{item.scheduleCount}}家影院上映</span>
              <span class="four">{{item.watchCount}}人购票</span>
            </div>
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
        name: "OnHot",
        mounted(){
          this.$store.dispatch('getOnHot');
          //滚动事件
          let self = this;
          window.onscroll = function (ev) {
            //判断超出的高度 + 当屏幕的高度  是否等于 document的高度
            //超出的高度
            let sT = document.documentElement.scrollTop;
            let sH = document.documentElement.clientHeight;
            let dH = document.body.scrollHeight;


            // console.log('屏幕高',sH);
            // console.log('滚动的距离',sT);
            // console.log('文档高度',dH);
            if (Math.ceil(sT + sH) >= dH) {
              self.$store.dispatch('getOnHot');
            }
          }
          },
        methods:{
          goDetail(item){
            console.log(item);
            this.$router.push({name:'Detail',params:{id:item.id}})
          }
        }
    }
</script>

<style scoped>
.onHot{
  padding-bottom: 40px ;
}
.scroll_bar{
  float: left;
  height: 0;
  border-top: 2px solid #fe6e00;
  width: 50%;
  transition: 0.2s;
}
 .onHot-film{
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
  position: relative;
}
.one{
  font-size: 16px;
  line-height: 32px;
  color: #000;
}
.two{
  float: right;
  font-size: 16px;
  line-height: 32px;
  color: #fc7103;
}
.three,.four{
  line-height: 24px;
  color: #8e8e8e;
  font-size: 12px;
  margin-right: 10px;
}
.xia{
  position: absolute;
  bottom: 0;
}

</style>
