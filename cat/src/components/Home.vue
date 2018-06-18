<template>
  <div class="home">
    <!--头部-->
    <div id="header" >
      <h1>{{logo}}</h1>
      <span>{{location}}<i class="fa fa-chevron-down" aria-hidden="true"></i> </span>
    </div>

    <!--轮播-->
    <Lunbo :d="items" />

    <!--show-->
    <ul class="showUl">
      <li class="showLi" v-for="item in showItems" @click="goDetail(item)">
        <Show :showData="item"></Show>
      </li>
    </ul>

    <!--获取更多-->
    <div class="more" @click="goChange('/film')">更多影片</div>


    <!--尾部-->
    <div id="footer" >
      <div class="self" @click="goChange('/home')">
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
      <div @click="goChange('/my')">
        <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
        <p>{{my}}</p>
      </div>
    </div>


  </div>
</template>

<script>
  import Swiper from 'swiper'
  import Lunbo from './lunbo'
  import Show from './show'
  import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Home',
  components:{Lunbo,Show},


  computed:{
    ...mapState(['showItems'])
  },
  methods:{
    ...mapMutations(['changeShow']),

    goDetail(item){
      console.log(item);
      this.$router.push({name:'Detail',params:{id:item.id}})
    },
    goChange(path){
      this.$router.push(path);
    }
  },

  mounted(){
    //轮播
    new Swiper ('.swiper-container', {
      loop: true,
      autoplay:true,
      speed:500
    });

    /*
    //show
    let self=this;
    // let url = 'https://m.maizuo.com/v4/api/film/now-playing?__t=1528697205922&page=1&count=5'
    let url ='http://localhost:4000/getList';
    //ajax请求数据
    this.$http.get(url).then(function(data){
      //axios  data.data   //后台返回数据
      // console.log(data.data.data.films);
      self.showItems = [...data.data.data.films];
    }).catch(function(err){
      console.log('error');
    })
*/

    //配置完webpack服务，将上述代码整理到store下的index.js中，创建相应的函数，然后在这边触发函数
    this.$store.dispatch('getFilms').then(function(data){
      console.log(data);
    })

  },
  data () {
    return {
      logo:'猫眼电影',
      location:'北京',
      shouye:'首页',
      yingpian:'影片',
      yingyuan:'影院',
      my:'我的',
      items:[
        {
          title: 'img1',
          imgSrc: 'https://pic.maizuo.com/usr/movie/e4b9cf3f0356d169cd1b3b9c5565f533.jpg'
        },
        {
          title: 'img2',
          imgSrc: 'https://pic.maizuo.com/usr/movie/627c9b9ec0e73ea821aed381baff8c0e.jpg'
        },
        {
          title: 'img3',
          imgSrc: 'https://pic.maizuo.com/usr/movie/93d058d789cbbff087c822693f93b473.jpg'
        }
      ]
      // showItems:[]
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

  /*轮播*/
  .swImg{
    width: 100%;
    height: 250px;
  }
  .showUl{
    padding: 18px 18px 0;
    margin-bottom: 60px;
  }
  .showLi{
    width: 100%;
    margin-bottom: 18px;
  }

/*更多影片  */
  .more{
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 0 auto 70px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
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
