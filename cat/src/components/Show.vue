<template>
  <div class="show">
      <div>
        <img :src="showData.cover.origin" alt="" class="showImg" >
        <div class="show-word">
          <div class="show-word-left">
            <p>{{showData.name}}</p>
            <div class="spanBox">
              <span>{{showData.cinemaCount}}</span>
              <span>家影院上映</span>
              <span>{{showData.watchCount}}</span>
              <span>人购票</span>
            </div>
          </div>
          <div class="show-word-right">
            {{showData.grade}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  props:['showData'],
  mounted(){
    // console.log(this.showData);
  },
  data () {
    return {

    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .show {
    background-color: #fff;
    border-radius: 4px;
  }
  .showImg{
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
  }
  .show-word{
    display: flex;
    padding:13px 28px;
  }
  .show-word-right{
    width: 50px;
    line-height: 50px;
    color: #f78360;
    font-size: 24px;
  }
  .show-word-left{
    flex: 1;
  }
  .show-word-left p{
    height: 25px;
    line-height: 25px;
    margin-bottom: 5px;
    font-size: 18px;
  }
  .spanBox{
    font-size: 14px;
    height: 25px;
    line-height: 25px;
  }
  .spanBox span{
    margin-right: 5px;
  }
</style>
