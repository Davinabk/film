import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    showItems: [],
    isShow: true,
    onHotItems: [],
    onHotPage: 0,
    willHotItems: [],
    willHotPage: 0,
    cinemaItems: []
  },
  actions:{
   /*
//以下代码是从Home.vue中提取过来的，意思是在这里发送ajax，进行数据请求。但是在这里需要进行修改，才能使用。
    getFilms(){
      let self=this;
      // let url = 'https://m.maizuo.com/v4/api/film/now-playing?__t=1528697205922&page=1&count=5'
      let url ='http://localhost:4000/getList';
      //ajax请求数据
      this.$http.get(url).then(function(data){
        //axios  data.data   //后台返回数据
        // console.log(data.data.data.films);
        self.showItems = [...data.data.data.films];
        // self.$store.commit('changeShow');
      }).catch(function(err){
        console.log('error');
      })
    }
  */

    // 首页show的数据
     getFilms({commit,state}){
        return new Promise((res,rej)=>{
           //发送ajax请求
          // let url = 'https://m.maizuo.com/v4/api/film/now-playing?__t=1528697205922&page=1&count=5';
          let url = '/hellobk/v4/api/film/now-playing?__t=1528681719807&page=1&count=5';
          axios.get(url).then(function (data) {
            console.log(data);
            commit('changeShow',data.data.data.films);
          }).catch(function (err) {
            console.log('error')
          });
        })
     },

    // 正在热映的数据
    getOnHot({commit,state},page){
      state.onHotPage ++;
      //https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
      let url = '/hellobk/v4/api/film/now-playing?page='+state.onHotPage+'&count=7';
      axios.get(url).then(function (data) {
        console.log(data);
        state.onHotItems = state.onHotItems.concat(data.data.data.films);
      });
    },


    //即将上映
    getwillHot({commit,state},page){
      state.willHot ++;
      //https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
      let url = '/hellobk/v4/api/film/coming-soon?page='+state.willHot+'&count=7';
      axios.get(url).then(function (data) {
        console.log(data);
        state.willHotItems = state.willHotItems.concat(data.data.data.films);
      });
    },


    //获取影院地址
    getCinema({commit,state}){
      return new Promise((res,rej)=>{
        // https://m.maizuo.com/v4/api/cinema?__t=1528870572623
        let temp = new Date().getTime();
        let url = '/hellobk/v4/api/cinema?__t='+temp;
        axios.get(url).then(function (data) {
          // console.log(data);
          state.cinemaItems = [...data.data.data.cinemas];
          // console.log( state.cinemaItems);
          res(state.cinemaItems);
        }).catch(function (err) {
          console.log(err)
        });
      })
    },

    //获取验证码
    getCode({commit,state},tel){
      // https://m.maizuo.com/v4/api/code?__t=1528873416832
      //{mobile: "13121177622", type: "2"}
      let temp = new Date().getTime();
      let url = '/hellobk/v4/api/code?__t='+temp;
      axios.post(url,{
        mobile: tel,
        type: "2"
      }).then(function (data) {
        console.log(data);
      }).catch(function (err) {
        console.log(err)
      });
    }



  },
  mutations:{
    changeShow(state,data){
      state.showItems = [...data];
      // state.isShow = !state.isShow;
    }


  }
});


//action里面进行赋值是在页面未加载时发送ajax请求
//mutations里面进行赋值是在页面加载完成后发送ajax请求
