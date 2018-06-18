import axios from 'axios'

//全局配置
axios.defaults.timeout = '60000';   //  timeout  请求的时间
axios.defaults.withCredentials = true;
//默认 axios不会带过去token和cookie，设置为true时就可以带过去
// axios.defaults.baseURL = '地址'


// axios.get( '/getList').then();

//json
// axios.get('../../../static/axios.json').then((response) => {
//   // 响应成功回调
//   baseHost = response.data.baseUrl;
// }, (response) => {
//   // 响应错误回调
//   alert('配置文件请求失败！');
// });

export default {
  get(url,params,cb){
    //$.ajax（{}）
    axios({
      method:'post',
      url:'/user/12345',
      data:{
        firstName:'Fred',
        lastName:'Flintstone'
      }
    });
  } ,
  post(url,params){
    //$.ajax（{}）
    axios({
      method:'post',
      url:url,
      data:params
    });
  }
}
