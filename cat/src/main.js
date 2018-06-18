// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import axios from 'axios'
// import hsHttp from './api/http'

import '../node_modules/swiper/dist/css/swiper.min.css'
// import '../node_modules/swiper/dist/js/swiper.min.js'  在这里引js不合适
import '../static/css/reset.css'



Vue.config.productionTip = false;

Vue.filter('timeFilter',function (value) {
  // console.log(value);
 var date=new Date(value);
   let M = (date.getMonth()+1 < 10 ?date.getMonth()+1 : date.getMonth()+1);
   let D = date.getDate() + ' ';
  let ontime=M+'月'+D+'日';
  return ontime ;
});
Vue.filter('actorFilter',function (value) {
  // console.log(value);
  let str = '';
  value.forEach(function (v) {
    str += v.name +'  '+'|'+'  '
  });
  return str;
});




Vue.prototype.$http = axios;
// Vue.prototype.$http = hsHttp;


// this.$http.get(url.params).then()



//APP是根组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
